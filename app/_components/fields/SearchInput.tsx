import { Search } from 'lucide-react';
import { motion } from 'motion/react';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <div className="relative group max-w-sm w-full">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10"
      >
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <Search className="w-4 h-4 text-foreground/40 group-focus-within:text-primary transition-colors duration-300" strokeWidth={2.5} />
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search by name or location..."
          className="w-full h-14 glass-surface pl-12 pr-6 rounded-2xl outline-none border-border-alpha focus:border-primary/50 focus:ring-0 transition-all text-sm tracking-wide text-foreground placeholder:text-foreground/40"
        />
      </motion.div>
    </div>
  );
}
