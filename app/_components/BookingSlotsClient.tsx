"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  ChevronRight, 
  ChevronLeft,
  Timer
} from 'lucide-react';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { createBookingAction } from '../_services/actions';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function BookingSlotsClient({ field }: { field: any }) {
  const router = useRouter();
  const { name, image, pricePerHour, timeSlots, location } = field;

  // Map API dates
  const DATES = timeSlots.map((ts: any) => {
    const d = new Date(ts.date);
    return {
      id: String(ts.date),
      date: d,
      label: d.getDate().toString(),
      day: d.toLocaleString('en-US', { weekday: 'short' }),
      month: d.toLocaleString('en-US', { month: 'short' })
    };
  });

  const [selectedDate, setSelectedDate] = useState<string>(DATES[0]?.id || "");
  const [selectedSlotId, setSelectedSlotId] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);

  const activeDateData = timeSlots.find((ts: any) => String(ts.date) === selectedDate);
  const activeDate = DATES.find((d: any) => d.id === selectedDate);

  const getPeriod = (startTime: string) => {
    const hour = parseInt(startTime.slice(0, 2), 10);
    if (hour < 12) return 'Morning';
    if (hour < 17) return 'Afternoon';
    return 'Evening';
  };

  const formatTimeLabel = (timeStr: string) => {
    const h = parseInt(timeStr.slice(0, 2), 10);
    const m = timeStr.slice(2);
    const ampm = h >= 12 ? 'PM' : 'AM';
    const displayH = h % 12 || 12;
    return `${displayH.toString().padStart(2, '0')}:${m} ${ampm}`;
  };

  const SLOTS = (activeDateData?.times || []).map((t: any) => ({
    id: t._id,
    time: formatTimeLabel(t.startTime),
    price: pricePerHour,
    isAvailable: !t.isBooked,
    type: getPeriod(t.startTime),
    rawStartTime: t.startTime,
    rawEndTime: t.endTime
  }));

  const activeSlot = SLOTS.find((s: any) => s.id === selectedSlotId);

  async function handleBooking() {
    if (!activeSlot || !activeDate) return;
    
    const toastId = toast.loading("Processing your booking...");
    try {
      const reqData = {
        fieldId: field._id,
        bookingData: {
          bookingDate: activeDate.id,
          startTime: activeSlot.rawStartTime,
          endTime: activeSlot.rawEndTime,
        },
      };
      setIsPending(true);
      await createBookingAction(reqData);
      toast.success("Booking confirmed!", { id: toastId });
      router.push(`/fields/${field._id}`);
    } catch (err: any) {
      if (err.message === 'NEXT_REDIRECT') return;
      toast.error(err.message || "Failed to create booking", {
        id: toastId,
      });
    } finally {
      setIsPending(false);
    }
  }

  const handleDateChange = (dateId: string) => {
    setSelectedDate(dateId);
    setSelectedSlotId(null);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8 font-sans selection:bg-primary selection:text-primary-foreground">
      <div className="mb-6 relative z-30">
        <Link 
          href={`/fields/${field._id}`}
          className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-foreground/5 border border-border-alpha text-foreground/60 hover:text-primary hover:bg-foreground/10 hover:border-primary/30 transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </Link>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
        
        {/* Main Content Area */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-10"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="flex justify-between items-end">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 bg-primary rounded-full primary-glow animate-pulse"></span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-foreground/50">Live Availability</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight">
                {name} <span className="text-foreground/30 font-light italic">/ Book Session</span>
              </h1>
            </div>
            <div className="text-right hidden md:block">
              <p className="text-xs text-foreground/40 uppercase tracking-widest mb-1 font-semibold">Location</p>
              <p className="text-sm font-medium">{location || 'Arena Sports Complex'}</p>
            </div>
          </motion.div>

          {/* Date Selection */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/40 flex items-center gap-2">
                <CalendarIcon className="w-4 h-4" />
                Select Date
              </h2>
              <span className="text-xs text-foreground/30">{activeDate?.month} {activeDate?.date.getFullYear()}</span>
            </div>
            
            <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
              {DATES.map((date: any) => (
                <button
                  key={date.id}
                  onClick={() => handleDateChange(date.id)}
                  className={`
                    relative flex-shrink-0 w-24 h-28 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all duration-300 group
                    ${selectedDate === date.id 
                      ? 'bg-primary text-primary-foreground shadow-lg animate-in fade-in zoom-in duration-300' 
                      : 'bg-foreground/5 border border-border-alpha hover:border-border hover:bg-foreground/10 text-foreground/60 hover:text-foreground'
                    }
                  `}
                >
                  <span className={`text-[10px] uppercase font-bold ${selectedDate === date.id ? 'opacity-70' : 'text-foreground/30 group-hover:text-foreground/60'}`}>
                    {date.day}
                  </span>
                  <span className={`text-3xl font-black leading-none tracking-tighter`}>
                    {date.label}
                  </span>
                  <span className={`text-[10px] uppercase font-bold ${selectedDate === date.id ? 'opacity-70' : 'text-foreground/30'}`}>
                    {date.month}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Time Slots */}
          <motion.div variants={itemVariants} className="space-y-8">
            {(['Morning', 'Afternoon', 'Evening'] as const).map((period) => {
              const periodSlots = SLOTS.filter((s: any) => s.type === period);
              if (periodSlots.length === 0) return null;

              return (
                <div key={period} className="space-y-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/30 flex items-center gap-2">
                    {period === 'Morning' && <Clock className="w-4 h-4" />}
                    {period === 'Afternoon' && <MapPin className="w-4 h-4" />}
                    {period === 'Evening' && <Timer className="w-4 h-4" />}
                    {period}
                  </h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {periodSlots.map((slot: any) => (
                      <button
                        key={slot.id}
                        disabled={!slot.isAvailable}
                        onClick={() => setSelectedSlotId(slot.id)}
                        className={`
                          relative p-4 rounded-xl border text-left transition-all duration-300 min-h-[100px] flex flex-col justify-between
                          ${!slot.isAvailable 
                            ? 'bg-foreground/5 border-border-alpha opacity-40 cursor-not-allowed grayscale' 
                            : selectedSlotId === slot.id
                              ? 'bg-foreground/5 border-2 border-primary ring-1 ring-primary/50'
                              : 'bg-foreground/5 border-border-alpha hover:border-accent/50 hover:bg-foreground/10 group'
                          }
                        `}
                      >
                        <div className="flex flex-col gap-0.5">
                          <span className={`text-[10px] font-mono tracking-tighter ${selectedSlotId === slot.id ? 'text-foreground' : 'text-foreground/40'}`}>
                            {slot.time}
                          </span>
                          <span className="font-bold text-sm tracking-tight">
                            {period === 'Morning' ? 'Early Bird' : period === 'Afternoon' ? 'Peak Session' : 'Prime Time'}
                          </span>
                        </div>
                        
                        <div className="mt-2 flex items-center justify-between">
                          <span className={`text-xs font-semibold ${!slot.isAvailable ? 'text-foreground/40' : 'text-primary'}`}>
                            {slot.isAvailable ? `$${slot.price}.00` : 'Reserved'}
                          </span>
                        </div>
                        
                        {selectedSlotId === slot.id && (
                          <motion.div 
                            layoutId="selected-indicator"
                            className="absolute -right-2 -top-2 w-8 h-8 bg-primary rotate-45 flex items-end justify-center pb-0.5 shadow-lg"
                          >
                            <svg className="w-3 h-3 text-primary-foreground -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </motion.div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Booking Summary Sidebar */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-full lg:w-[400px] shrink-0"
        >
          <div className="sticky top-28 glass-surface rounded-3xl p-6 lg:p-8 flex flex-col h-[calc(100vh-8rem)] relative overflow-hidden group">
            {/* Elegant Glow Effect */}
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-accent/20 blur-[60px] rounded-full group-hover:bg-accent/30 transition-colors duration-700"></div>
            
            <div className="relative h-full flex flex-col">
              <h2 className="text-xl font-bold mb-6 tracking-tight">Booking Summary</h2>
              
              <div className="space-y-6 flex-grow overflow-y-auto no-scrollbar">
                
                {/* Field Image - Added as requested */}
                <div className="w-full rounded-2xl overflow-hidden border border-border-alpha relative h-40">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-bold text-lg leading-tight truncate">{name}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-[10px] text-foreground/40 uppercase tracking-widest font-bold">Selected Session</p>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-foreground/5 rounded-xl border border-border-alpha">
                      <CalendarIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">{activeDate ? `${activeDate.month} ${activeDate.label}, ${activeDate.date.getFullYear()}` : 'Select Date'}</p>
                      <p className="text-xs text-foreground/60">{activeSlot ? `${activeSlot.time} - 1.5h` : '--:--'}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                   <p className="text-[10px] text-foreground/40 uppercase tracking-widest font-bold">Service Breakdown</p>
                   <div className="flex justify-between items-center bg-foreground/5 p-3 rounded-lg border border-border-alpha">
                      <span className="text-xs text-foreground/80">Pitch Hire (90m)</span>
                      <span className="font-mono text-xs tracking-tighter">${activeSlot?.price || 0}.00</span>
                   </div>
                   <div className="flex justify-between items-center bg-foreground/5 p-3 rounded-lg border border-border-alpha">
                      <span className="text-xs text-foreground/80">Service Fee</span>
                      <span className="font-mono text-xs tracking-tighter">${activeSlot ? 5 : 0}.00</span>
                   </div>
                </div>

                <div className="h-px bg-border-alpha my-4"></div>

                <div className="flex justify-between items-end mb-2">
                  <p className="text-sm text-foreground/60 font-medium">Total Amount</p>
                  <p className="text-3xl font-black text-primary tracking-tighter">
                    ${activeSlot ? activeSlot.price + 5 : 0}.00
                  </p>
                </div>
              </div>

              <div className="mt-auto pt-6 flex flex-col gap-4">
                <button 
                  disabled={!activeSlot || isPending}
                  onClick={handleBooking}
                  className={`
                    w-full py-4 rounded-2xl font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-500 relative overflow-hidden group/btn
                    ${activeSlot && !isPending
                      ? 'bg-primary text-primary-foreground shadow-[0_10px_30px_rgba(var(--primary),0.2)] hover:scale-[1.02] active:scale-[0.98]' 
                      : 'bg-foreground/5 text-foreground/20 cursor-not-allowed border border-border-alpha'
                    }
                  `}
                >
                  {isPending ? 'Processing...' : 'Confirm Booking'} <ChevronRight className="w-4 h-4" />
                </button>
                <div className="text-[10px] text-center text-foreground/30 px-4 leading-relaxed font-medium">
                  By confirming, you agree to our <span className="underline decoration-border-alpha hover:text-foreground/60 cursor-pointer">Cancellation Policy</span> and Arena rules.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
