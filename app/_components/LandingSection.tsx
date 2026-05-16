// import Image from "next/image";
// import Container from "./Container";
// import Button from "./Button";
// import { LuMapPin } from "react-icons/lu";
// import { Label } from "./Label";
// import { HiArrowRight } from "react-icons/hi2";

// export function LandingSection() {
//   return (
//     <div className="bg-linear-to-br from-[#10B981] to-[#1E3A8A] pb-20 pt-32">
//       <Container>
//         <div className="flex flex-col lg:flex-row items-center gap-10">
//           <div className="flex flex-col gap-7">
//             <Label>
//               <LuMapPin size={18} className="text-brand-yellow" />
//               <p className="text-brand-yellow font-semibold ">Tanta, Egypt</p>
//             </Label>
//             <h3 className="text-white text-5xl/15 lg:text-7xl/22 font-bold">
//               Find and book your{" "}
//               <span className="text-brand-yellow">perfect field</span> in
//               seconds
//             </h3>
//             <span className="text-white text-xl tracking-wide">
//               The easiest way to discover and book premium sports venues. From
//               football to tennis, find the perfect field for your game anytime,
//               anywhere.
//             </span>
//             <div className="flex items-center gap-5">
//               <Button title="Explore Fields" href="fields" icon={<HiArrowRight />} type="primary"/>
//               <Button
//                 href="auth/login"
//                 title="Sign In"
//                 type="secondary"
//                 additionalStyles="w-40 md:w-52"
//               />
//             </div>
//             <div className=" max-w-[90%] lg:max-w-3/4 flex items-center justify-between">
//               <div className="text-white flex-col gap-2">
//                 <p className="font-bold text-3xl">50+</p>
//                 <span className="text-white/70 text-sm">Premium Fields</span>
//               </div>
//               <div className="text-white flex-col gap-2">
//                 <p className="font-bold text-3xl">10k+</p>
//                 <span className="text-white/70 text-sm">Happy Players</span>
//               </div>
//               <div className="text-white flex-col gap-2">
//                 <p className="font-bold text-3xl">6</p>
//                 <span className="text-white/70 text-sm">Sports Types</span>
//               </div>
//             </div>
//           </div>
//           <Image
//             className="rounded-3xl"
//             src={"/main.jfif"}
//             alt="stadium-image"
//             width={600}
//             height={600}
//             quality={100}
//           />
//         </div>
//       </Container>
//     </div>
//   );
// }
"use client";

import { motion } from "motion/react";
import { Search, MapPin, Calendar, Clock } from "lucide-react";
import Container from "./Container";

export const LandingSection = () => {
  return (
    <section
      id="Arenas"
      className="relative min-h-screen  flex items-center justify-center pt-32 pb-24 px-6 md:px-10 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-mesh opacity-50 pointer-events-none" />
      <div className="absolute pointer-events-none blob w-[600px] h-[600px] bg-primary -top-40 -left-60 opacity-10" />
      <div className="absolute pointer-events-none blob w-[500px] h-[500px] bg-accent -bottom-40 -right-60 opacity-5" />
      <Container>
        <div className="container   max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12  gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7  lg:pr-12"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-10 italic"
              >
                Next-Gen Sports Booking
              </motion.div>

              <h1 className="text-6xl md:text-[6.5rem] font-extrabold leading-[0.85] tracking-tighter mb-10 italic uppercase">
                Book Your <br />
                <span className="gradient-text">Perfect</span> Field
              </h1>

              <p className="text-lg md:text-xl text-foreground/70 mb-12 max-w-lg leading-relaxed font-medium">
                Experience the future of sports with real-time availability,
                instant glass-card booking, and premium field access.
              </p>

              <div className="flex flex-wrap gap-5">
                <button className="px-10 py-5 bg-primary text-primary-foreground font-black rounded-xl flex items-center gap-3 glow-lime hover:scale-105 transition-transform text-sm uppercase tracking-widest">
                  Explore Fields <span className="text-xl">→</span>
                </button>
                <button className="px-10 py-5 glass-card rounded-xl font-bold flex items-center gap-3 border-border-alpha hover:bg-foreground/5 transition-colors text-sm uppercase tracking-widest text-foreground/80">
                  Play Pro
                </button>
              </div>
            </motion.div>

            {/* Right Hero Visual - Grid style matching theme */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="lg:col-span-5 rounded-2xl bg-black relative"
            >
              <div className="glass rounded-2xl  p-1 relative overflow-hidden aspect-[4/5] shadow-2xl">
                <div className="absolute rounded-2xl  inset-0 bg-[url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center transition-all duration-700"></div>
                <div className="absolute  rounded-2xl inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>

                {/* Overlay Content */}
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-primary font-bold mb-2 block italic">
                        Featured Field
                      </span>
                      <h3 className="text-3xl font-bold tracking-tight text-white">
                        The Neon Arena
                      </h3>
                      <p className="text-sm text-white/80">
                        Downtown London • 5-a-side
                      </p>
                    </div>
                    <div className="bg-primary text-primary-foreground font-bold px-4 py-2 rounded-xl text-sm shadow-xl">
                      $45/hr
                    </div>
                  </div>
                </div>
              </div>

              {/* Geometric Accent Circles */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full border-2 border-primary/20 flex items-center justify-center animate-spin-slow">
                <div className="w-12 h-12 border border-primary/40 rotate-45" />
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};
