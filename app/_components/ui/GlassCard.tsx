import { motion } from "motion/react";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  key?: string | number;
}

export const GlassCard = ({ children, className = "", delay = 0 }: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className={`glass-card p-6 rounded-2xl relative group overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
