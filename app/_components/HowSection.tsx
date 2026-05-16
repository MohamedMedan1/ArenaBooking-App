// import Container from "./Container";
// import MainTitle from "./MainTitle";
// import { HiMiniCalendar } from "react-icons/hi2";
// import { LuCircleCheckBig,LuTrophy } from "react-icons/lu";
// import { IoSearch } from "react-icons/io5";

// export default function HowSection() {
//   const howContents = [
//     {
//       icon: <IoSearch  size={35} />,
//       title: "Browse Fields",
//       content:
//         "Explore our wide selection of premium sports venues",
//     },
//     {
//       icon: <HiMiniCalendar size={35} />,
//       title: "Choose Your Slot",
//       content:
//         "Select your preferred date and time",
//     },
//     {
//       icon: <LuCircleCheckBig size={35} />,
//       title: "Confirm Booking",
//       content: "Complete your reservation in seconds",
//     },
//     {
//       icon: <LuTrophy size={35} />,
//       title: "Play & Enjoy",
//       content: "Show up and enjoy your game",
//     },
//   ];
//   return (
//     <div className="bg-background py-20" id="howItWorks">
//       <MainTitle
//         title="How It Works"
//         description="Book your perfect field in four simple steps"
//       />
//       <Container>
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
//           {howContents?.map((cur,i) => (
//             <div
//               key={cur.title}
//               className="text-center bg-foreground rounded-2xl p-10 flex flex-col items-center gap-5"
//             >
//               <div className="relative text-white bg-linear-to-br from-[#10B981] to-[#1E3A8A] p-5 rounded-full">
//                 {cur.icon}
//                 <p className="absolute -top-3 -right-1 w-8 h-8 rounded-full flex justify-center items-center bg-brand-yellow text-primary font-bold">{i + 1}</p>
//               </div>
//               <p className="font-bold text-xl text-primary">{cur.title}</p>
//               <span className="text-secondary">{cur.content}</span>
//             </div>
//           ))}
//         </div>
//       </Container>
//     </div>
//   );
// }
"use client";

import { motion } from "motion/react";
import { Search, CalendarCheck, CreditCard, Play } from "lucide-react";
import Container from "./Container";

const steps = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "Discover",
    text: "Filter by sport, location, and premium amenities.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: <CalendarCheck className="w-8 h-8" />,
    title: "Select Slot",
    text: "Pinpoint your perfect time with real-time availability.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Pay & Confirm",
    text: "Seamless one-tap payment with instant confirmation.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: <Play className="w-8 h-8" />,
    title: "Play Pro",
    text: "Arrive at the arena and start your session instantly.",
    color: "from-blue-500 to-indigo-500",
  },
];

export default function HowSection() {
  return (
    <section id="plans" className="py-24 md:py-32 px-6 md:px-10 bg-card-alpha relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border-alpha to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border-alpha to-transparent" />
      <Container>
        <div className="container max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tighter uppercase italic"
            >
              Streamlined <span className="gradient-text">Booking</span>
            </motion.h2>
            <p className="text-foreground/70 font-medium tracking-tight uppercase text-xs">
              Four steps from the couch to the court
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-border-alpha overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                whileInView={{ x: "100%" }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-1/2 h-full bg-gradient-to-r from-transparent via-primary to-transparent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative group text-center"
                >
                  <div className="relative z-10">
                    <div className="w-24 h-24 mx-auto mb-8 relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-2xl rotate-45 group-hover:rotate-[135deg] transition-transform duration-500" />
                      <div className="absolute inset-1 rounded-2xl glass-card flex items-center justify-center border-border-alpha rotate-45 group-hover:rotate-[135deg] transition-transform duration-500">
                        <div className="-rotate-45 group-hover:-rotate-[135deg] transition-transform duration-500 text-primary">
                          {step.icon}
                        </div>
                      </div>
                    </div>

                    <span className="text-[10px] text-foreground/60 uppercase tracking-widest mb-2 block font-bold">
                      Step 0{index + 1}
                    </span>
                    <h3 className="text-xl font-bold mb-4 tracking-tighter uppercase italic text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed px-4">
                      {step.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
