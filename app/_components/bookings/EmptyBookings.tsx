import { motion } from "motion/react";
import { CalendarX, ArrowRight } from "lucide-react";

export const EmptyBookings = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-24 px-6 text-center"
    >
      <div className="relative mb-10">
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
        <div className="relative w-24 h-24 rounded-[2rem] glass-card border-border-alpha flex items-center justify-center rotate-45 group">
           <CalendarX className="w-10 h-10 text-primary -rotate-45" />
        </div>
        <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-foreground/5 border border-border-alpha flex items-center justify-center text-primary font-black italic">!</div>
      </div>
      
      <h3 className="text-3xl md:text-5xl font-extrabold italic uppercase tracking-tighter mb-4">
        No <span className="gradient-text">Ground Claimed</span> Yet
      </h3>
      <p className="text-foreground/70 max-w-sm mb-10 leading-relaxed font-medium">
        Your booking history is currently empty. Ready to dominate the field? Explore our elite arenas.
      </p>
      
      <button className="px-10 py-4 bg-primary text-primary-foreground font-black rounded-xl flex items-center gap-3 glow-lime hover:scale-105 transition-transform text-sm uppercase tracking-widest">
        Find An Arena <ArrowRight className="w-5 h-5" />
      </button>

      {/* Decorative dots matching theme */}
      <div className="flex gap-4 mt-20 opacity-30">
        <div className="w-1 h-1 bg-foreground rounded-full"></div>
        <div className="w-1 h-1 bg-foreground rounded-full"></div>
        <div className="w-1 h-1 bg-primary rounded-full"></div>
      </div>
    </motion.div>
  );
};
