"use client";

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SearchInput from './SearchInput';
import CategoryFilters from './CategoryFilters';
import FieldCard from './FieldCard';

export default function FieldsListing({ fields = [], categoriesData = [] }: { fields: any[], categoriesData: any[] }) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    const cats = categoriesData.map((c) => c.name);
    return ['All', ...cats];
  }, [categoriesData]);

  const filteredFields = useMemo(() => {
    return fields.filter((field) => {
      const location = field.location || 'Arena Location';
      const matchesSearch = field.name.toLowerCase().includes(search.toLowerCase()) ||
                          location.toLowerCase().includes(search.toLowerCase());
      const categoryName = field.category?.name || 'Sport';
      const matchesCategory = selectedCategory === 'All' || categoryName === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory, fields]);

  return (
    <div className="relative min-h-screen">
      <div className="mesh-bg" />
      <section className="py-20 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
            <div className="space-y-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2"
              >
                <span className="text-accent font-sans font-extrabold uppercase tracking-[0.3em] text-[10px]">
                  Elite Listings
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-sans font-extrabold text-foreground tracking-tight"
              >
                DISCOVER <span className="text-primary italic">ARENAS</span>
              </motion.h1>
            </div>

            <SearchInput value={search} onChange={setSearch} />
          </div>

          {/* Filters Section */}
          <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <CategoryFilters
              categories={categories}
              selectedCategory={selectedCategory}
              onSelect={setSelectedCategory}
            />
            
            <div className="flex items-center space-x-2 glass-surface p-1 rounded-xl w-fit">
              <button className="p-1.5 bg-foreground/10 rounded-lg text-foreground">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
              </button>
              <button className="p-1.5 opacity-40 text-foreground">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
              </button>
            </div>
          </div>

        {/* Grid Section */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredFields.map((field: any) => (
              <FieldCard key={field._id} field={field} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        <AnimatePresence>
          {filteredFields.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center justify-center py-24 glass-surface rounded-[2rem]"
            >
              <p className="text-foreground/40 font-sans text-xl">No venues found matching your criteria.</p>
              <button 
                onClick={() => { setSearch(''); setSelectedCategory('All'); }}
                className="mt-6 text-primary font-bold hover:underline underline-offset-8 transition-all"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
      
    <footer className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex items-center justify-between text-[10px] text-foreground/20 uppercase tracking-[0.2em] font-semibold border-t border-border-alpha pt-8 pb-12 mt-12">
        <p>Showing {filteredFields.length} Premium Venues</p>
        <p>© 2026 Elite Arena • System Active</p>
      </footer>
    </div>
  );
}
