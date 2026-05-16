"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Container from "./Container";
import Link from "next/link";
import { Category } from "../_interfaces/ICategory";

interface Props {
  categories: Category[];
}

export default function CategoriesClient({ categories }: Props) {
  return (
    <Container>
      <section className="py-24 md:py-32 px-6 md:px-10 overflow-hidden">
        <div className="container max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-primary font-bold uppercase tracking-[0.2em] text-[10px] mb-4 italic"
              >
                Sport Types
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-extrabold tracking-tighter uppercase italic"
              >
                Browse <span className="gradient-text">Categories</span>
              </motion.h2>
            </div>
            <Link
              href="/categories"
              className="px-6 py-2 rounded-lg border border-border-alpha hover:border-primary transition-colors text-xs font-bold uppercase tracking-widest flex items-center gap-2 text-foreground"
            >
              View All <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories?.map((category, index) => (
              <motion.div
                key={category._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <Link href={`/`} className="block w-full h-full">
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-card border border-border-alpha transition-all duration-500 group-hover:glow-lime">
                    {/* Background Image */}
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />

                    {/* Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

                    {/* Bottom Info */}
                    <div className="absolute bottom-8 left-8 right-8 z-10">
                      <h3 className="text-4xl font-extrabold mb-1 tracking-tight uppercase italic text-white group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-xs text-foreground/70 font-bold uppercase tracking-widest leading-none">
                          Explore Venues
                        </span>
                        <span className="bg-foreground/10 backdrop-blur-md text-foreground text-[10px] font-black uppercase tracking-widest p-3 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <ArrowUpRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}
