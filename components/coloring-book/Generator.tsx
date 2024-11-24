"use client";

import { useState, useEffect } from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { useSupabase } from "@/providers/supabase-provider";
import { useCredits } from "@/providers/credits-provider";
import { Loader2 } from "lucide-react";

interface UserCredits {
  credits: number;
  total_generations: number;
}

export function ColoringBookGenerator() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { supabase } = useSupabase();
  const { credits, refreshCredits } = useCredits();

  useEffect(() => {
    refreshCredits();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt) {
      toast.error("Please enter a prompt");
      return;
    }

    setLoading(true);
    setImage(null);

    try {
      const response = await fetch("/api/generate/coloring-book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        if (response.status === 402) {
          toast.error("Insufficient credits. Please purchase more credits to continue.");
          return;
        }
        throw new Error(await response.text());
      }

      const data = await response.json();
      setImage(data.imageUrl);
      
      // Add a small delay to allow the database to update
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Refresh credits
      await refreshCredits();
      
      toast.success("Image generated successfully!");
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || "Failed to generate image");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!image) return;

    try {
      const response = await fetch(image);
      if (!response.ok) throw new Error('Failed to fetch image');
      
      const contentType = response.headers.get('content-type');
      if (!contentType?.includes('image')) {
        throw new Error('Invalid image format');
      }

      const blob = await response.blob();
      if (blob.size < 50000) { // Less than 50KB
        throw new Error('Image file too small, likely corrupted');
      }

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `coloring-book-${Date.now()}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error: any) {
      console.error('Download error:', error);
      toast.error(error.message || "Failed to download image");
    }
  };

  return (
    <Card className="p-6 space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="prompt" className="block text-sm font-medium mb-2">
            Enter your prompt
          </label>
          <input
            id="prompt"
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., a magical unicorn in a forest"
            className="w-full p-2 border rounded-md"
            disabled={loading}
          />
        </div>
        <button
          type="submit"
          className="w-full h-10 text-base font-medium text-white bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center rounded-lg"
          disabled={loading || !prompt}
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Generating...
            </>
          ) : (
            "Generate Image"
          )}
        </button>
      </form>

      {image && (
        <div className="space-y-4">
          <div className="relative aspect-square">
            <Image
              src={image}
              alt="Generated coloring book image"
              fill
              className="object-contain"
            />
          </div>
          <button
            onClick={handleDownload}
            className="w-full bg-green-600 text-white h-10 py-2 rounded-lg hover:bg-green-700"
          >
            Download Image
          </button>
        </div>
      )}
    </Card>
  );
}
