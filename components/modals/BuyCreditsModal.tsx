"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Coins, CreditCard } from "lucide-react";
import { useCredits } from "@/providers/credits-provider";

interface BuyCreditsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BuyCreditsModal({ isOpen, onClose }: BuyCreditsModalProps) {
  const [creditAmount, setCreditAmount] = useState(10);
  const PRICE_PER_CREDIT = 0.5; // $0.50 per credit
  const { refreshCredits } = useCredits();

  const handlePurchase = async () => {
    // TODO: Implement Stripe integration
    console.log(`Purchasing ${creditAmount} credits for $${(creditAmount * PRICE_PER_CREDIT).toFixed(2)}`);
    // After successful purchase:
    await refreshCredits();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-white p-0 overflow-hidden">
        <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background p-6 pb-8">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-2xl font-bold flex items-center gap-2">
              <Coins className="h-6 w-6 text-primary" />
              Buy Generation Credits
            </DialogTitle>
            <DialogDescription className="text-base text-muted-foreground pt-2">
              Purchase credits to generate more coloring book pages. The more you buy, the more you save!
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-end mb-2">
                <div>
                  <h4 className="font-medium mb-1">Select Amount</h4>
                  <p className="text-sm text-muted-foreground">
                    Move the slider to adjust credit amount
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-primary">
                    {creditAmount}
                  </span>
                  <span className="text-muted-foreground ml-1">credits</span>
                </div>
              </div>

              <Slider
                value={[creditAmount]}
                onValueChange={(value) => setCreditAmount(value[0])}
                max={100}
                min={1}
                step={1}
                className="w-full"
              />

              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span>1 credit</span>
                <span>100 credits</span>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <div className="space-y-1">
                  <h4 className="font-medium">Total Price</h4>
                  <p className="text-sm text-muted-foreground">
                    ${PRICE_PER_CREDIT} per credit
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-bold">
                    ${(creditAmount * PRICE_PER_CREDIT).toFixed(2)}
                  </span>
                </div>
              </div>

              <Button 
                className="w-full h-12 text-base font-medium text-white"
                onClick={handlePurchase}
              >
                <CreditCard className="h-5 w-5 mr-2" />
                Purchase Credits
              </Button>
            </div>

            <div className="text-center text-sm text-muted-foreground">
              <p>Secure payment powered by Stripe</p>
              <p className="mt-1">Credits never expire</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
