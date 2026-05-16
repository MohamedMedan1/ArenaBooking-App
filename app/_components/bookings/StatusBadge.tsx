import { motion } from "motion/react";

export type BookingStatus = "confirmed" | "pending" | "cancelled" | "completed";

interface StatusBadgeProps {
  status: BookingStatus;
}

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  const styles = {
    confirmed: {
      bg: "bg-primary/10",
      text: "text-primary",
      border: "border-primary/20",
      dot: "bg-primary",
      label: "Confirmed",
    },
    pending: {
      bg: "bg-foreground/5",
      text: "text-foreground/70",
      border: "border-border-alpha",
      dot: "bg-foreground/50",
      label: "Pending",
    },
    cancelled: {
      bg: "bg-red-500/10",
      text: "text-red-400",
      border: "border-red-500/20",
      dot: "bg-red-500",
      label: "Cancelled",
    },
    completed: {
      bg: "bg-accent/10",
      text: "text-accent",
      border: "border-accent/20",
      dot: "bg-accent",
      label: "Completed",
    },
  };

  const current = styles[status];

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${current.bg} ${current.border} ${current.text} backdrop-blur-md`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${current.dot}`} />
      <span className="text-[10px] font-black uppercase tracking-widest italic">{current.label}</span>
    </motion.div>
  );
};
