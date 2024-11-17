"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface HistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Generation {
  id: string;
  prompt: string;
  image_url: string;
  created_at: string;
  status: string;
}

export function HistoryModal({ isOpen, onClose }: HistoryModalProps) {
  const [generations, setGenerations] = useState<Generation[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClientComponentClient();

  useEffect(() => {
    if (isOpen) {
      setGenerations([]);
      fetchGenerations();
    }
  }, [isOpen]);

  const fetchGenerations = async () => {
    try {
      setLoading(true);
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return;

      const { data, error } = await supabase
        .from('generations')
        .select('*')
        .eq('user_id', session.user.id)
        .eq('status', 'completed')
        .order('created_at', { ascending: false })
        .limit(22);

      if (error) throw error;
      
      // Filter out any generations with invalid image URLs
      const validGenerations = (data || []).filter(gen => {
        const isValidUrl = gen.image_url && 
          typeof gen.image_url === 'string' && 
          (gen.image_url.startsWith('http://') || gen.image_url.startsWith('https://'));
        
        if (!isValidUrl) {
          console.warn('Invalid image URL found:', gen);
        }
        return isValidUrl;
      });

      setGenerations(validGenerations);
    } catch (error) {
      console.error('Error fetching generations:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async (imageUrl: string, prompt: string) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `coloring-book-${prompt.slice(0, 30)}.png`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[900px] max-h-[85vh] overflow-y-auto bg-white">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-2xl font-bold">Recent Generations</DialogTitle>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
              <p className="mt-2 text-gray-600">Loading your generations...</p>
            </div>
          ) : generations.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-lg text-gray-600">No generations found</p>
              <p className="text-sm text-gray-500 mt-2">Start generating some coloring book images!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {generations.map((gen) => (
                <div key={gen.id} className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <div className="relative aspect-square">
                    <Image
                      src={gen.image_url}
                      alt={gen.prompt}
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">{gen.prompt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">
                      {new Date(gen.created_at).toLocaleDateString()}
                    </span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDownload(gen.image_url, gen.prompt)}
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
