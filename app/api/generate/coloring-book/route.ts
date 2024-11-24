import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function POST(request: Request) {
  try {
    const supabase = createRouteHandlerClient({ cookies });
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { prompt } = await request.json();

    if (!prompt) {
      return new NextResponse("Prompt is required", { status: 400 });
    }

    // Get user's credits and total generations
    const { data: user, error: creditsError } = await supabase
      .from('users')
      .select('credits, total_generations')
      .eq('id', session.user.id)
      .single();

    console.log("User data:", { user, creditsError, userId: session.user.id });

    if (creditsError) {
      console.error("Error fetching user data:", creditsError);
      return new NextResponse("Error fetching user data", { status: 500 });
    }

    if (!user) {
      console.log("No user record found");
      return new NextResponse("No user found", { status: 402 });
    }

    console.log("Current credits:", user.credits);

    if (user.credits < 1) {
      console.log("Insufficient credits:", user.credits);
      return new NextResponse("Insufficient credits", { status: 402 });
    }

    // Create the prediction using the model's prediction API
    const prediction = await replicate.predictions.create({
      version: "cbaf592788a0513ff5ca3beecdc0d9280fb44908771656f2adef630a263d9ebe",
      input: {
        width: 1024,
        height: 1024,
        prompt: `${prompt}. Coloring book vintage minimal lines easy to color`,
        refine: "no_refiner",
        scheduler: "K_EULER",
        lora_scale: 0.6,
        num_outputs: 1,
        guidance_scale: 7.5,
        apply_watermark: true,
        high_noise_frac: 0.8,
        negative_prompt: "complex, realistic, color, gradient",
        prompt_strength: 0.8,
        num_inference_steps: 50
      }
    });

    console.log("Prediction created:", prediction);

    // Wait for the prediction to complete
    let imageUrl: string | undefined;
    while (!imageUrl) {
      const currentPrediction = await replicate.predictions.get(prediction.id);
      
      if (currentPrediction.status === 'succeeded') {
        imageUrl = currentPrediction.output?.[0];
        break;
      } else if (currentPrediction.status === 'failed') {
        throw new Error(typeof currentPrediction.error === 'string' ? currentPrediction.error : 'Image generation failed');
      }
      
      // Wait a bit before checking again
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    if (!imageUrl) {
      throw new Error("Failed to generate image");
    }

    console.log("Generated image URL:", imageUrl);

    // Update user's credits and total_generations
    const currentTotalGenerations = user.total_generations || 0;
    const { error: updateError } = await supabase
      .from('users')
      .update({ 
        credits: user.credits - 1,
        total_generations: currentTotalGenerations + 1
      })
      .eq('id', session.user.id);

    if (updateError) {
      console.error("Error updating user data:", updateError);
      return new NextResponse("Error updating user data", { status: 500 });
    }

    // Store the generation in history with status 'completed'
    const { error: historyError } = await supabase.from("generations").insert({
      user_id: session.user.id,
      prompt: prompt,
      image_url: imageUrl,
      status: 'completed'  // Add this status field
    });

    if (historyError) {
      console.error("Error storing generation:", historyError);
      // Don't return error here, as the image was already generated
    }

    return NextResponse.json({ imageUrl });
  } catch (error: any) {
    console.error("[COLORING_BOOK_ERROR]", error);
    return new NextResponse(error.message || "Internal Error", { status: 500 });
  }
}
