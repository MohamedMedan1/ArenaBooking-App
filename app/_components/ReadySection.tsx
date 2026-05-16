// import { LuTrophy } from "react-icons/lu";
// import Button from "./Button";
// import { HiArrowRight } from "react-icons/hi2";

// export default function ReadySection() {
//   return (
//     <div className="bg-linear-to-br from-[#10B981] to-[#1E3A8A] py-20 flex flex-col gap-7 items-center">
//       <LuTrophy className="text-brand-yellow" size={70} />

//       <div className="text-center text-white">
//         <h3 className="text-5xl font-bold mb-7">Ready to play?</h3>
//         <p className="text-xl/7">
//           Join thousands of players who book their favorite sports venues with
//           Arena Match. <br /> Start your journey today!
//         </p>
//       </div>

//       <div className="flex flex-col md:flex-row gap-4">
//         <Button
//           title="Get Started Now"
//           type="primary"
//           icon={<HiArrowRight />}
//           additionalStyles="w-50 justify-between"
//         />
//         <Button
//           title="Browse Fields"
//           type="secondary"
//           additionalStyles="w-48 text-center"
//         />
//       </div>
//     </div>
//   );
// }
"use client";

import { motion } from "motion/react";
import { ArrowRight, Trophy } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ReadySection() {
  const router = useRouter();
  
  return (
    <section className="py-24 md:py-40 px-6 md:px-10 overflow-hidden relative">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[4rem] overflow-hidden glass-card border border-border-alpha p-1 px-4 text-center"
        >
          {/* Animated Background Particles */}
          <div className="absolute inset-0 bg-mesh opacity-30" />

          <div className="relative z-10 py-24 px-8">
            <h2 className="text-6xl md:text-[6rem] font-black mb-8 tracking-tighter leading-none italic uppercase text-foreground">
              CLAIM YOUR <br />
              <span className="gradient-text">PERFECT FIELD</span>
            </h2>

            <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-12 font-medium">
              Join 50,000+ athletes booking their victory every single day. The
              court is waiting for you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => router.push("/auth/login")}
                className="px-12 py-5 bg-primary text-primary-foreground text-xl font-black rounded-2xl glow-lime w-full sm:w-auto hover:scale-105 transition-transform flex items-center justify-center gap-3"
              >
                Get Started Now <ArrowRight className="w-6 h-6" />
              </button>
              <button 
                onClick={() => router.push("/fields")}
                className="px-12 py-5 glass-card text-xl font-bold rounded-2xl w-full sm:w-auto border-border-alpha hover:bg-foreground/5 transition-colors text-foreground"
              >
                Browse Fields
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
