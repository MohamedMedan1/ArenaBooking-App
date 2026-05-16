"use client";

import { motion } from "motion/react";
import { Star, MapPin, Heart, ArrowUpRight } from "lucide-react";
import Container from "./Container";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Field } from "../_interfaces/IField";

interface Props {
  fields: Field[];
}

export default function FeaturedFieldsClient({ fields }: Props) {
  const router = useRouter();

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
                Curated Arenas
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-extrabold tracking-tighter uppercase italic"
              >
                Featured <span className="gradient-text">Fields</span>
              </motion.h2>
            </div>
            <Link
              href="/fields"
              className="px-6 py-2 rounded-lg border border-white/10 hover:border-primary transition-colors text-xs font-bold uppercase tracking-widest flex items-center gap-2"
            >
              View All <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fields?.map((field, index) => (
              <motion.div
                key={field._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <Link
                  href={`/fields/${field._id}`}
                  className="block w-full h-full"
                >
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-card transition-all duration-500 group-hover:glow-lime">
                    {/* Background Image */}
                    <img
                      src={field.image}
                      alt={field.name}
                      className="w-full h-full object-cover transition-transform duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />

                    {/* Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                    {/* Top Actions */}
                    <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-10">
                      <div className="bg-primary/90 backdrop-blur-md px-3 py-1 rounded-lg flex items-center gap-1">
                        <Star className="w-3 h-3 text-primary-foreground fill-primary-foreground" />
                        <span className="text-xs font-black text-primary-foreground">
                          {field.rating || 5.0}
                        </span>
                      </div>
                      <button className="w-10 h-10 rounded-xl glass-card flex items-center justify-center hover:bg-primary transition-colors group/heart">
                        <Heart className="w-4 h-4 group-hover/heart:fill-primary-foreground group-hover/heart:text-primary-foreground transition-colors" />
                      </button>
                    </div>

                    {/* Bottom Info */}
                    <div className="absolute bottom-8 left-8 right-8 z-10">
                      <span className="text-[10px] uppercase tracking-tighter text-primary font-black mb-2 block italic">
                        {field.category?.name || "Sport"}
                      </span>
                      <h3 className="text-2xl font-bold mb-1 tracking-tight">
                        {field.name}
                      </h3>
                      <div className="flex items-center gap-2 text-foreground/70 mb-6">
                        <MapPin className="w-3 h-3 text-primary" />
                        <span className="text-xs font-bold uppercase tracking-widest truncate">
                          Arena Location
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-xs text-foreground/50 font-bold uppercase tracking-widest leading-none mb-1">
                            Price
                          </span>
                          <span className="text-xl font-bold tracking-tighter text-foreground">
                            ${field.pricePerHour}
                            <span className="text-[10px] text-foreground/50 font-medium tracking-normal">
                              /hr
                            </span>
                          </span>
                        </div>
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            router.push(`/fields/${field._id}`);
                          }}
                          className="bg-foreground text-background text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-lg hover:bg-primary transition-colors"
                        >
                          Book Now
                        </button>
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
