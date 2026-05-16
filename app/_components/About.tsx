// import Image from "next/image";
// import Container from "./Container";
// import { LuTrophy } from "react-icons/lu";

// export default function About() {
//   return (
//     <div className="bg-background py-20" id="about">
//       <Container>
//         <div className="flex flex-col md:flex-row items-center gap-10">
//           <div className="flex flex-col gap-7">
//             <p className="text-4xl lg:text-5xl font-bold text-primary">
//               About Arena Match
//             </p>
//             <span className="text-lg text-secondary">
//               Arena Match is your trusted platform for discovering and booking
//               premium sports venues across Tanta, Egypt. We &apos;re passionate
//               about making sports accessible to everyone.
//             </span>
//             <span className="text-lg text-secondary">
//               Our mission is to connect players with the best sports facilities,
//               making it easier than ever to find, book, and enjoy your favorite
//               sports. With a carefully curated selection of verified venues, we
//               ensure every booking meets our high standards.
//             </span>
//             <div className="max-w-[90%] lg:max-w-[60%] flex justify-between items-center">
//               <div>
//                 <p className="font-bold text-3xl text-brand-green mb-2">2024</p>
//                 <span className="text-secondary">Founded</span>
//               </div>
//               <div>
//                 <p className="font-bold text-3xl text-brand-green mb-2">99%</p>
//                 <span className="text-secondary">Satisfaction Rate</span>
//               </div>
//             </div>
//           </div>
//           <div className="w-full h-full relative">
//             <Image
//               className="rounded-3xl"
//               src={"/about-image.jfif"}
//               alt="stadium-image"
//               width={550}
//               height={500}
//               quality={100}
//             />
//             <div className="flex items-center gap-5 rounded-xl bg-brand-green text-white p-5 absolute -right-3 -bottom-3  lg:-right-10 lg:-bottom-10 ">
//               <LuTrophy size={30} />
//               <div>
//                 <p className="font-bold text-xl">Premium</p>
//                 <span className="text-sm">Quality Guaranteed</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// }
"use client";

import { motion } from "motion/react";
import { CheckCircle2, Award, Play } from "lucide-react";
import Container from "./Container";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 md:px-10 relative overflow-hidden bg-secondary/50 dark:bg-background"
    >
      <div className="absolute top-1/2 left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <Container>
        <div className="container max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Visual Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] border border-border-alpha shadow-3xl">
                <img
                  src="https://picsum.photos/seed/about/1200/1500"
                  alt="Storytelling"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-transparent opacity-40" />

                {/* Play Button Overlay */}
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform group shadow-2xl">
                  <Play className="w-8 h-8 text-primary-foreground fill-primary-foreground ml-1 group-hover:text-primary-foreground group-hover:fill-primary-foreground transition-colors" />
                  <div className="absolute inset-0 rounded-full border-2 border-border-alpha animate-ping" />
                </button>
              </div>

              {/* Achievement Badge */}
              <motion.div
                animate={{ rotate: [0, 5, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-10 -right-10 glass-card p-6 rounded-3xl border border-border-alpha shadow-3xl flex items-center gap-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="text-3xl font-black gradient-text">#1</p>
                  <p className="text-xs font-bold text-foreground/50 uppercase tracking-widest">
                    Sport Booking Platform
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-primary font-bold uppercase tracking-[0.2em] text-[10px] mb-4 italic">
                Our Mission
              </p>
              <h2 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter italic uppercase leading-[0.9]">
                Powering <span className="gradient-text">Victory</span> On Every
                Field
              </h2>
              <p className="text-lg text-foreground/70 mb-10 leading-relaxed font-medium max-w-xl">
                We built a platform that removes friction, connects enthusiasts,
                and brings the stadium experience to your doorstep with
                cutting-edge technology.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-12">
                {[
                  "FIFA Grade Fields",
                  "Built-in ELO Matchmaker",
                  "Instant Payments",
                  "Pro Stats Tracking",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-start gap-3 border-l-2 border-primary/30 pl-4 py-1"
                  >
                    <span className="text-xs font-black text-foreground uppercase tracking-wider">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              <button className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl glow-lime hover:scale-105 transition-transform text-sm uppercase tracking-widest">
                Read Full Story
              </button>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
