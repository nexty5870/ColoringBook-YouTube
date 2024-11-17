"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useSupabase } from "./supabase-provider";

interface UserCredits {
  credits: number;
  total_generations: number;
}

interface CreditsContextType {
  credits: number | null;
  totalGenerations: number | null;
  refreshCredits: () => Promise<void>;
  loading: boolean;
}

const CreditsContext = createContext<CreditsContextType>({
  credits: null,
  totalGenerations: null,
  refreshCredits: async () => {},
  loading: true,
});

export function CreditsProvider({ children }: { children: React.ReactNode }) {
  const [userCredits, setUserCredits] = useState<UserCredits | null>(null);
  const [loading, setLoading] = useState(true);
  const { supabase } = useSupabase();

  const refreshCredits = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        setUserCredits(null);
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('users')
        .select('credits, total_generations')
        .eq('id', session.user.id)
        .single();

      if (error) {
        console.error('Error fetching credits:', error);
        return;
      }

      setUserCredits(data as UserCredits);
    } catch (error) {
      console.error('Error in refreshCredits:', error);
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch and auth state change handler
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN' || event === 'SIGNED_OUT') {
        refreshCredits();
      }
    });

    refreshCredits();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Set up real-time subscription for credit updates
  useEffect(() => {
    const setupSubscription = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return;

      const channel = supabase
        .channel(`credits_channel_${session.user.id}`)
        .on(
          'postgres_changes',
          {
            event: '*',
            schema: 'public',
            table: 'users',
            filter: `id=eq.${session.user.id}`,
          },
          async (payload) => {
            // Immediately update local state
            if (payload.new) {
              setUserCredits(payload.new as UserCredits);
            }
            // Also refresh to ensure consistency
            await refreshCredits();
          }
        )
        .subscribe();

      return () => {
        supabase.removeChannel(channel);
      };
    };

    setupSubscription();
  }, []);

  return (
    <CreditsContext.Provider
      value={{
        credits: userCredits?.credits ?? null,
        totalGenerations: userCredits?.total_generations ?? null,
        refreshCredits,
        loading,
      }}
    >
      {children}
    </CreditsContext.Provider>
  );
}

export const useCredits = () => {
  const context = useContext(CreditsContext);
  if (!context) {
    throw new Error("useCredits must be used within a CreditsProvider");
  }
  return context;
};
