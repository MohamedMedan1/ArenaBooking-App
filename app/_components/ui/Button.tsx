import { motion } from "motion/react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "glass";
  className?: string;
  onClick?: () => void;
}

export const Button = ({ children, variant = "primary", className = "", onClick }: ButtonProps) => {
  const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group";
  
  const variants = {
    primary: "bg-primary text-primary-foreground hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border border-border text-foreground hover:bg-white/5",
    glass: "glass text-foreground hover:bg-white/10",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
    </motion.button>
  );
};
