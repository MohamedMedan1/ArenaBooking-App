import { motion } from "motion/react";

export const BookingSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="glass-card rounded-[2rem] p-1 overflow-hidden border border-border-alpha h-[240px] relative">
          <div className="absolute inset-0 bg-foreground/[0.02] animate-pulse" />
          <div className="grid grid-cols-1 md:grid-cols-12 h-full gap-6">
            <div className="md:col-span-4 bg-foreground/5 relative overflow-hidden">
               <div className="absolute inset-0 shimmer opacity-20" />
            </div>
            <div className="md:col-span-8 p-6 flex flex-col justify-between">
              <div>
                <div className="h-8 w-1/3 bg-foreground/5 rounded-lg mb-4 shimmer opacity-20" />
                <div className="h-4 w-1/4 bg-foreground/5 rounded-lg shimmer opacity-20" />
              </div>
              <div className="flex justify-between items-end">
                <div className="space-y-2">
                   <div className="h-4 w-32 bg-foreground/5 rounded-lg shimmer opacity-20" />
                   <div className="h-4 w-24 bg-foreground/5 rounded-lg shimmer opacity-20" />
                </div>
                <div className="h-10 w-24 bg-foreground/5 rounded-xl shimmer opacity-20" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
