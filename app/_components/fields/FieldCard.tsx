import React, { useState } from 'react';
import { Star, Users, MapPin, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';

interface FieldCardProps {
  field: any;
}

const FieldCard: React.FC<FieldCardProps> = ({ field }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/fields/${field._id}`} className="block">
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="group relative glass-surface rounded-[32px] p-4 card-hover flex flex-col h-full"
      >
      {/* Image Section */}
      <div className="relative h-64 w-full rounded-[24px] overflow-hidden mb-6">
        <motion.img
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.6 }}
          src={field.image}
          alt={field.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020202]/80 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-primary text-primary-foreground text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-tighter shadow-xl">
            {field.category?.name || 'Sport'} • Elite
          </span>
        </div>

        {/* Rating Badge */}
        <div className="absolute bottom-4 right-4 z-10">
          <div className="glass-surface rounded-xl px-3 py-2 flex items-center gap-2 border-white/20">
            <span className="text-primary font-bold">{field.rating}</span>
            <div className="w-px h-3 bg-white/20" />
            <span className="text-[10px] text-white/60 font-bold uppercase tracking-widest">Rating</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-2 space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-sans font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
              {field.name}
            </h3>
            <p className="text-foreground/40 text-xs mt-1 font-medium">{field.location || 'Arena Sports Complex'} • 0.8km away</p>
          </div>
          
          <div className="text-right">
            <span className="text-2xl font-extrabold text-accent tracking-tight">${field.pricePerHour}</span>
            <span className="text-[10px] text-foreground/40 block font-bold uppercase tracking-widest">/ hour</span>
          </div>
        </div>

        <div className="flex items-center space-x-6 pt-2">
          <div className="flex items-center space-x-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary primary-glow" />
            <span className="text-[11px] text-foreground/70 font-bold uppercase tracking-widest leading-none">{field.capacity} Players</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(59,130,246,0.3)]" />
            <span className="text-[11px] text-foreground/70 font-bold uppercase tracking-widest leading-none">Indoor</span>
          </div>
        </div>
      </div>
      </motion.div>
    </Link>
  );
};

export default FieldCard;
