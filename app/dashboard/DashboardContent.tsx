"use client";

import { ButtonAccount } from "@/components/landing-components";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BuyCreditsModal } from "@/components/modals/BuyCreditsModal";
import { HistoryModal } from "@/components/modals/HistoryModal";
import { useState, useEffect } from "react";
import { useCredits } from "@/providers/credits-provider";
import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

interface DashboardContentProps {
  fallback?: ReactNode;
}

// Dynamically import the Generator component with no SSR
const ColoringBookGenerator = dynamic(
  () => import('@/components/coloring-book/Generator').then(mod => ({ default: mod.ColoringBookGenerator })),
  { ssr: false }
);

export default function DashboardContent({ fallback }: DashboardContentProps) {
  const [isBuyCreditsOpen, setIsBuyCreditsOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const { credits, loading, totalGenerations } = useCredits();
  const maxCredits = 100;

  const progressValue = credits !== null ? (credits / maxCredits) * 100 : 0;
  const usedCredits = credits !== null ? maxCredits - credits : 0;

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-extrabold md:text-4xl">Dashboard</h1>
        <ButtonAccount />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Credits Card */}
        <Card className="p-6 space-y-4">
          <h3 className="text-xl font-semibold">API Credits</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Available Credits</span>
              <span className="font-medium">
                {loading ? "Loading..." : `${credits || 0}/${maxCredits}`}
              </span>
            </div>
            <Progress value={progressValue} />
          </div>
        </Card>

        {/* Usage Stats Card */}
        <Card className="p-6 space-y-4">
          <h3 className="text-xl font-semibold">Usage Statistics</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span>Total Generations</span>
              <span className="font-medium">
                {loading ? "Loading..." : totalGenerations || 0}
              </span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span>Used Credits</span>
              <span className="font-medium">
                {loading ? "Loading..." : usedCredits}
              </span>
            </div>
          </div>
        </Card>

        {/* Quick Actions Card */}
        <Card className="p-6 space-y-4">
          <h3 className="text-xl font-semibold">Quick Actions</h3>
          <div className="space-y-2">
            <button 
              onClick={() => setIsBuyCreditsOpen(true)}
              className="w-full px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90"
            >
              Buy Credits
            </button>
            <button 
              onClick={() => setIsHistoryOpen(true)}
              className="w-full px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-lg hover:bg-primary/20"
            >
              View History
            </button>
          </div>
        </Card>
      </div>

      {/* Coloring Book Generator Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ColoringBookGenerator />
        <Card className="p-6 space-y-4">
          <h3 className="text-xl font-semibold">Tips for Better Results</h3>
          <ul className="space-y-2 text-sm">
            <li>• Keep descriptions simple and clear</li>
            <li>• Specify if you want minimal or detailed lines</li>
            <li>• Avoid requesting complex textures or gradients</li>
            <li>• Each generation costs 1 credit</li>
          </ul>
        </Card>
      </div>

      <BuyCreditsModal 
        isOpen={isBuyCreditsOpen} 
        onClose={() => setIsBuyCreditsOpen(false)} 
      />
      <HistoryModal 
        isOpen={isHistoryOpen} 
        onClose={() => setIsHistoryOpen(false)} 
      />
    </div>
  );
}
