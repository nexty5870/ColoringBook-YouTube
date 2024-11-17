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
      setImage(data.output[0]);
      
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
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Generate Coloring Book</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your prompt here..."
            className="w-full p-2 border rounded-md"
            rows={4}
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </span>
            ) : (
              "Generate Image"
            )}
          </button>
        </form>

        {image && (
          <div className="relative aspect-square w-full">
            <Image
              src={image}
              alt="Generated coloring book image"
              fill
              className="object-contain"
            />
            <button
              onClick={handleDownload}
              className="absolute bottom-4 right-4 bg-white text-black px-4 py-2 rounded-md shadow-md hover:bg-gray-100"
            >
              Download
            </button>
          </div>
        )}
      </div>
    </Card>
  );
}
