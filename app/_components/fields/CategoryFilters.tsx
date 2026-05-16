import { motion } from 'motion/react';

interface CategoryFiltersProps {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
}

export default function CategoryFilters({
  categories,
  selectedCategory,
  onSelect,
}: CategoryFiltersProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category, index) => (
        <motion.button
          key={category}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05 }}
          onClick={() => onSelect(category)}
          className={`relative px-6 py-2.5 rounded-full text-[10px] sm:text-xs uppercase tracking-widest font-bold transition-all duration-300 border ${
            selectedCategory === (category === 'All' ? 'All' : category)
              ? 'bg-primary text-primary-foreground border-primary font-extrabold'
              : 'glass-surface text-foreground/60 border-border-alpha hover:border-primary/40 hover:text-foreground'
          }`}
        >
          {category === 'All' ? 'All Fields' : category}
          {selectedCategory === category && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 rounded-full bg-primary -z-10"
              transition={{ type: 'spring', bounce: 0.1, duration: 0.5 }}
            />
          )}
        </motion.button>
      ))}
    </div>
  );
}
