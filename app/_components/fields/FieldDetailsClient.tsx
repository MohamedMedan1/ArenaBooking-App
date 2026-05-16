"use client";

import { motion } from 'motion/react';
import { 
  Star, 
  MapPin, 
  Trophy, 
  Zap,
  Calendar,
  Shield,
  ArrowRight
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import BackBtn from '../BackBtn';

export default function FieldDetailsClient({ field }: { field: any }) {
  const router = useRouter();

  const FIELD_DATA = {
    id: field._id,
    name: field.name,
    subtitle: 'ARENA',
    location: field.location || 'Arena Sports Complex',
    image: field.image,
    rating: field.rating || 5.0,
    reviewsCount: 128,
    capacity: field.capacity,
    category: field.category?.name || 'Sport',
    price: field.pricePerHour,
    surface: 'Pro Hybrid Turf',
    lighting: '2500 LUX UHD',
    zone: field.location || 'Zone 04 Sector'
  };

  return (
    <div className="bg-[#020202] text-white font-sans flex flex-col relative selection:bg-[#ccff00] selection:text-black">
      {/* Background Ambient Glows */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#3b82f6]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#ccff00]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Layout Container */}
      <div className="flex flex-col xl:flex-row w-full p-6 md:p-8 gap-8 relative z-10 max-w-[1440px] mx-auto mt-24">
        
        {/* LEFT COLUMN: Immersive Content */}
        <div className="flex-1 flex flex-col gap-8 min-w-0">
          
          <div className="mb-[-1rem] relative z-30">
            <BackBtn fixed={true} />
          </div>

          {/* Cinematic Banner Area */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative min-h-[500px] flex-1 rounded-[40px] overflow-hidden border border-white/10 group shadow-2xl"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-[#0f172a] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
              style={{ backgroundImage: `linear-gradient(to bottom, rgba(2,2,2,0.1), rgba(2,2,2,0.9)), url('${FIELD_DATA.image}')` }}
            />
            
            {/* Category & Rating Badges */}
            <div className="absolute top-8 left-8 flex flex-wrap gap-3">
              <motion.span 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="px-5 py-2 bg-[#ccff00] text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-[0_0_20px_rgba(204,255,0,0.3)]"
              >
                Premium Arena
              </motion.span>
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="px-5 py-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-2"
              >
                <div className="flex items-center text-[#3b82f6]">
                   <Star size={12} fill="currentColor" />
                </div>
                <span className="text-[11px] font-bold">{FIELD_DATA.rating} <span className="opacity-40 font-normal">({FIELD_DATA.reviewsCount} Reviews)</span></span>
              </motion.div>
            </div>

            {/* Field Title & Info Overlay */}
            <div className="absolute bottom-10 left-10 right-10">
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col gap-2"
              >
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none italic uppercase">
                  {FIELD_DATA.name} <br/>
                  <span className="text-[#ccff00] not-italic">{FIELD_DATA.subtitle}</span>
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 mt-6">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-8 bg-[#3b82f6]" />
                    <div>
                      <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold">Sport Category</p>
                      <p className="text-sm font-bold">{FIELD_DATA.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-8 bg-white/20" />
                    <div>
                      <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold">Capacity</p>
                      <p className="text-sm font-bold">{FIELD_DATA.capacity} Players Max</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Detail Grid Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              whileHover={{ y: -5, borderColor: "rgba(59, 130, 246, 0.4)" }}
              className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[32px] p-6 flex flex-col justify-between h-[180px] transition-all group"
            >
              <div className="w-10 h-10 rounded-2xl bg-[#0f172a] flex items-center justify-center border border-white/5 group-hover:bg-[#3b82f6]/20 transition-colors">
                <Trophy size={20} className="text-[#3b82f6]" />
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest opacity-40 font-bold mb-1">Surface</h3>
                <p className="text-lg font-bold">{FIELD_DATA.surface}</p>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5, borderColor: "rgba(204, 255, 0, 0.4)" }}
              className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[32px] p-6 flex flex-col justify-between h-[180px] transition-all group"
            >
              <div className="w-10 h-10 rounded-2xl bg-[#0f172a] flex items-center justify-center border border-white/5 group-hover:bg-[#ccff00]/20 transition-colors">
                <Zap size={20} className="text-[#ccff00]" />
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest opacity-40 font-bold mb-1">Lighting</h3>
                <p className="text-lg font-bold">{FIELD_DATA.lighting}</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5, borderColor: "rgba(255, 255, 255, 0.4)" }}
              className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[32px] p-6 flex flex-col justify-between h-[180px] transition-all group"
            >
              <div className="w-10 h-10 rounded-2xl bg-[#0f172a] flex items-center justify-center border border-white/5 group-hover:bg-white/20 transition-colors">
                <MapPin size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest opacity-40 font-bold mb-1">Location</h3>
                <p className="text-lg font-bold">{FIELD_DATA.zone}</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* RIGHT COLUMN: Booking Sidebar */}
        <div className="w-full xl:w-[400px] flex flex-col gap-6 shrink-0">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 flex flex-col relative overflow-hidden shadow-2xl"
          >
            {/* Subtle texture overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
            
            <div className="relative z-10 flex flex-col h-full">
              <p className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-2 font-bold">Session Booking</p>
              <h2 className="text-3xl font-black mb-8 italic uppercase tracking-tighter">RESERVE THE <span className="text-[#3b82f6]">PITCH</span></h2>

              <div className="space-y-6 flex-1">
                <div 
                  className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group"
                  onClick={() => router.push(`/fields/${field._id}/slots`)}
                >
                  <p className="text-[10px] uppercase tracking-widest opacity-40 mb-2 font-bold">Select Date & Time</p>
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-[#3b82f6]" />
                      <span className="font-bold">Check Availability</span>
                    </div>
                    <span className="text-[#ccff00] text-xs font-bold underline opacity-60 group-hover:opacity-100 transition-opacity uppercase tracking-tighter">View Slots</span>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10 mt-auto">
                  <div className="flex justify-between items-end mb-8">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1 font-bold">Hourly Rate</p>
                      <p className="text-5xl font-black tracking-tighter">${FIELD_DATA.price}.00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 relative z-10">
                <motion.button 
                  onClick={() => router.push(`/fields/${field._id}/slots`)}
                  whileHover={{ scale: 1.02, shadow: "0 20px 40px rgba(204,255,0,0.25)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#ccff00] text-black h-20 rounded-3xl font-black text-xl uppercase tracking-tighter flex items-center justify-center gap-3 transition-all shadow-[0_20px_40px_rgba(204,255,0,0.15)] group/btn"
                >
                  Book Now
                  <ArrowRight size={20} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <p className="text-center text-[10px] opacity-40 mt-6 uppercase tracking-widest font-bold">
                  Instant confirmation • 24h cancel policy
                </p>
              </div>
            </div>
          </motion.div>

          {/* Member Perk Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="h-[140px] bg-[#3b82f6] rounded-[40px] p-6 flex flex-col justify-center relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <p className="text-black font-black italic text-xl leading-tight uppercase tracking-tighter relative z-10">
              UNLIMITED <br/>
              <span className="text-white">ARENA ACCESS</span>
            </p>
            <p className="text-black/60 text-[10px] font-black mt-2 uppercase tracking-[0.2em] relative z-10">Unlock Member Perks</p>
          </motion.div>

          {/* Trust Indicators */}
          <div className="px-8 flex justify-between opacity-30 items-center">
            <Shield size={16} />
            <div className="h-px bg-white/20 flex-1 mx-4" />
            <span className="text-[10px] font-black uppercase tracking-widest">Secured By ArenaPrime</span>
          </div>
        </div>

      </div>
    </div>
  );
}
