"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Filter, Search, Grid, List as ListIcon, Calendar } from "lucide-react";
import { BookingCard, BookingData } from "./BookingCard";
import { EmptyBookings } from "./EmptyBookings";
import { BookingSkeleton } from "./BookingSkeleton";

export const MyBookingsPage = ({ initialBookings = [] }: { initialBookings?: BookingData[] }) => {
  const [isLoading, setIsLoading] = useState(false); // Can be initially false since data is from server
  const [bookings, setBookings] = useState<BookingData[]>(initialBookings);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setBookings(initialBookings);
  }, [initialBookings]);

  const filteredBookings = bookings.filter(b => 
    filter === "all" ? true : b.status === filter
  );

  return (
    <div className="min-h-screen bg-background pt-11 md:pt-32 pb-24 px-6 md:px-10">
      {/* Background Ambience */}
      <div className="fixed inset-0 bg-mesh opacity-20 pointer-events-none" />
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container max-w-5xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-block px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-4 italic"
            >
              Player Dashboard
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-extrabold italic uppercase tracking-tighter leading-[0.9]"
            >
              My <span className="gradient-text">Bookings</span>
            </motion.h1>
          </div>

          <div className="flex items-center gap-4">
             <div className="hidden md:flex bg-foreground/5 border border-border-alpha rounded-xl p-1">
                <button className="p-2 text-primary bg-foreground/10 rounded-lg"><Grid className="w-4 h-4" /></button>
                <button className="p-2 text-foreground/50 hover:text-foreground transition-colors"><ListIcon className="w-4 h-4" /></button>
             </div>
             <button className="glass-card px-6 py-3 rounded-xl flex items-center gap-2 border-border-alpha hover:border-primary/30 transition-all text-foreground">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-xs font-black uppercase tracking-widest italic">Schedule</span>
             </button>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="flex bg-foreground/5 border border-border-alpha rounded-2xl p-1.5 w-full md:w-auto">
             {["all", "confirmed", "cancelled", "completed"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`flex-1 md:flex-none px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                    filter === f ? "bg-primary text-primary-foreground shadow-lg" : "text-foreground/50 hover:text-foreground/70"
                  }`}
                >
                  {f}
                </button>
             ))}
          </div>

          <div className="relative w-full md:w-80">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/50" />
             <input 
              type="text" 
              placeholder="SEARCH BOOKINGS..." 
              className="w-full bg-foreground/5 border border-border-alpha rounded-2xl py-3 pl-12 pr-6 text-[10px] font-black uppercase tracking-widest focus:outline-none focus:border-primary/50 placeholder:text-foreground/40 transition-all text-foreground"
             />
             <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <Filter className="w-4 h-4 text-foreground/50" />
             </div>
          </div>
        </div>

        {/* Main Content Area */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <BookingSkeleton />
            </motion.div>
          ) : filteredBookings.length > 0 ? (
            <motion.div
              key="list"
              className="grid grid-cols-1 gap-8"
              initial="hidden"
              animate="show"
              variants={{
                show: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {filteredBookings.map((booking, idx) => (
                <BookingCard key={booking.id} booking={booking} index={idx} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <EmptyBookings />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pagination / Footer Placeholder */}
        {!isLoading && filteredBookings.length > 0 && (
          <div className="mt-20 text-center">
             <p className="text-foreground/40 text-[10px] font-black uppercase tracking-[0.3em] italic mb-6">End of Bookings History</p>
             <div className="w-px h-12 bg-gradient-to-b from-primary/30 to-transparent mx-auto" />
          </div>
        )}
      </div>
    </div>
  );
};
