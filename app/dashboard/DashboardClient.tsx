"use client";

import dynamic from 'next/dynamic';
import { ComponentType, ReactNode } from 'react';

interface DashboardContentProps {
  fallback?: ReactNode;
}

// Dynamically import ALL interactive components
const DynamicDashboardContent: ComponentType<DashboardContentProps> = dynamic(
  () => import('./DashboardContent'),
  { ssr: false }
);

// Simple loading component
function LoadingSkeleton() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div className="h-8 bg-gray-200 rounded w-1/4 animate-pulse"></div>
        <div className="h-8 w-8 bg-gray-200 rounded animate-pulse"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-40 bg-gray-200 rounded animate-pulse"></div>
        ))}
      </div>
    </div>
  );
}

export default function DashboardClient() {
  return (
    <div suppressHydrationWarning>
      <DynamicDashboardContent fallback={<LoadingSkeleton />} />
    </div>
  );
}
