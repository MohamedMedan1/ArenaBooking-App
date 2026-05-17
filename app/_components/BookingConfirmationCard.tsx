import { formatDate } from "../_utils/formatDate";
import { formatTime } from "../_utils/formatTime";
import { motion } from "motion/react";
import { CalendarDays, Clock, BadgeDollarSign, Hash } from "lucide-react";

export default function BookingConfirmationCard({ booking }: { booking: any }) {
  const { bookingNumber, field, bookingDate, startTime, endTime } = booking;
  const formatedData = formatDate(bookingDate);
  const formatedTime = formatTime(startTime, endTime);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="glass-surface rounded-[32px] p-6 w-full mt-8 flex flex-col gap-6"
    >
      {/* Booking Number */}
      <div className="flex flex-col items-center gap-1 pb-5 border-b border-white/10">
        <div className="flex items-center gap-2 text-foreground/40">
          <Hash size={13} strokeWidth={2.5} />
          <span className="text-[11px] font-bold uppercase tracking-widest">
            Booking Number
          </span>
        </div>
        <p className="text-primary text-2xl font-extrabold tracking-tight">
          {bookingNumber}
        </p>
      </div>

      {/* Field Info */}
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16 rounded-2xl overflow-hidden shrink-0">
          {field.image ? (
            <img
              src={field.image}
              alt={field.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-primary/20 flex items-center justify-center">
              <span className="text-primary text-2xl font-black">
                {field.name?.[0]}
              </span>
            </div>
          )}
        </div>
        <div>
          <p className="text-foreground font-bold text-lg tracking-tight leading-tight">
            {field.name}
          </p>
          <span className="text-[11px] font-bold uppercase tracking-widest text-foreground/40 mt-0.5 block">
            {field.category?.name || "Sport"} • Elite
          </span>
        </div>
        {/* Category badge */}
        <div className="ml-auto">
          <span className="bg-primary text-primary-foreground text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-tighter shadow-xl">
            Confirmed
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Details Grid */}
      <ul className="grid grid-cols-1 gap-4">
        {/* Date */}
        <li className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <CalendarDays size={18} className="text-primary" strokeWidth={2} />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-foreground/40 block">
              Date
            </span>
            <p className="font-bold text-foreground text-sm mt-0.5">
              {formatedData}
            </p>
          </div>
        </li>

        {/* Time */}
        <li className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <Clock size={18} className="text-primary" strokeWidth={2} />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-foreground/40 block">
              Time
            </span>
            <p className="font-bold text-foreground text-sm mt-0.5">
              {formatedTime}
            </p>
          </div>
        </li>

        {/* Price */}
        <li className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
            <BadgeDollarSign
              size={18}
              className="text-accent"
              strokeWidth={2}
            />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-foreground/40 block">
              Price
            </span>
            <p className="font-bold text-sm mt-0.5">
              <span className="text-2xl font-extrabold text-accent tracking-tight">
                ${field.pricePerHour}
              </span>
              <span className="text-[10px] text-foreground/40 font-bold uppercase tracking-widest ml-1">
                / hour
              </span>
            </p>
          </div>
        </li>
      </ul>
    </motion.div>
  );
}
