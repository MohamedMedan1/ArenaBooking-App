import { FC, useState } from "react";
import { motion } from "motion/react";
import { Calendar, Clock, MapPin, MoreHorizontal, MessageSquare, Trash2 } from "lucide-react";
import { StatusBadge, BookingStatus } from "./StatusBadge";
import toast from "react-hot-toast";
import { cancelBookingAction } from "../../_services/actions";
import Link from "next/link";

export interface BookingData {
  id: string;
  fieldName: string;
  image: string;
  date: string;
  startTime: string;
  endTime: string;
  price: number;
  status: BookingStatus;
  location: string;
  fieldId: string;
}

interface BookingCardProps {
  booking: BookingData;
  index: number;
}

export const BookingCard: FC<BookingCardProps> = ({ booking, index }) => {
  const [isPending, setIsPending] = useState<boolean>(false);
  const isConfirmed = booking.status === "confirmed"; 

  async function handleCancelation() {
    const toastId = toast.loading("Canceling your booking...");
    try {
      setIsPending(true);
      await cancelBookingAction(booking.id);
      toast.success("Booking canceled successfully!", { id: toastId });
    } catch (err: any) {
      toast.error(err.message || "Failed to cancel booking", { id: toastId });
    } finally {
      setIsPending(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative glass-card rounded-[2.5rem] p-1 overflow-hidden border border-border-alpha shadow-2xl transition-all duration-500 hover:border-primary/20 hover:glow-lime"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[220px]">
        {/* Immersive Image Side */}
        <div className="md:col-span-4 relative overflow-hidden h-[200px] md:h-auto rounded-[2rem] m-1">
          <img 
            src={booking.image} 
            alt={booking.fieldName} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r" />
          
          <div className="absolute top-6 left-6 z-10">
            <StatusBadge status={booking.status} />
          </div>

          <div className="absolute bottom-6 left-6 z-10 md:hidden">
            <h3 className="text-2xl font-black italic uppercase tracking-tighter text-white">{booking.fieldName}</h3>
          </div>
        </div>

        {/* Content Side */}
        <div className="md:col-span-8 p-8 flex flex-col justify-between relative">
          <div className="flex justify-between items-start mb-6">
            <div className="hidden md:block">
              <span className="text-[10px] uppercase font-black tracking-[0.3em] text-primary mb-2 block italic">Elite Ground Booking</span>
              <h3 className="text-3xl font-black italic uppercase tracking-tighter gradient-text">{booking.fieldName}</h3>
            </div>
            <button className="w-10 h-10 rounded-xl glass-card border-border-alpha flex items-center justify-center hover:bg-primary transition-colors hover:text-primary-foreground">
              <MoreHorizontal className="w-5 h-5 text-foreground" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-foreground/60 text-[10px] font-bold uppercase tracking-widest">
                <Calendar className="w-3 h-3" /> Date
              </div>
              <p className="font-bold tracking-tight text-foreground">{booking.date}</p>
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-foreground/60 text-[10px] font-bold uppercase tracking-widest">
                <Clock className="w-3 h-3" /> Time
              </div>
              <p className="font-bold tracking-tight text-foreground">{booking.startTime} - {booking.endTime}</p>
            </div>

            <div className="space-y-1 hidden md:block">
              <div className="flex items-center gap-2 text-foreground/60 text-[10px] font-bold uppercase tracking-widest">
                <MapPin className="w-3 h-3" /> Venue
              </div>
              <p className="font-bold tracking-tight text-foreground truncate max-w-[150px]">{booking.location}</p>
            </div>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-border-alpha">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase text-foreground/60 tracking-[0.2em] mb-1">Total Fee</span>
              <span className="text-2xl font-black tracking-tighter text-foreground">${booking.price}<span className="text-xs text-foreground/60 font-medium tracking-normal">.00</span></span>
            </div>

            <div className="flex items-center gap-3">
               {isConfirmed && (
                 <button 
                   disabled={isPending}
                   onClick={handleCancelation}
                   className="w-10 h-10 rounded-xl border border-red-500/20 flex items-center justify-center text-red-400 hover:text-red-500 hover:bg-red-500/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                   title="Cancel Booking"
                 >
                    <Trash2 className="w-4 h-4" />
                 </button>
               )}
               <button className="w-10 h-10 rounded-xl border border-border-alpha flex items-center justify-center text-foreground/70 hover:text-accent hover:border-accent/30 transition-all">
                  <MessageSquare className="w-4 h-4" />
               </button>
               <Link 
                  href={`/fields/${booking.fieldId}`}
                  className="px-6 py-2.5 bg-foreground text-background text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-primary transition-all shadow-xl hover:scale-105 active:scale-95 block text-center hover:text-primary-foreground"
               >
                  View Details
               </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle Background Glow Animation */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};
