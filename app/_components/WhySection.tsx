"use client";

import { motion } from "motion/react";
import { Zap, Shield, Trophy, Users, Star, BarChart } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";
import Container from "./Container";

const features = [
  {
    icon: <Zap className="w-6 h-6 text-primary-foreground" />,
    title: "Instant Booking",
    description:
      "Book your favorite field in seconds with our high-speed reservation engine.",
    color: "primary",
  },
  {
    icon: <Shield className="w-6 h-6 text-foreground" />,
    title: "Premium Standards",
    description:
      "Every facility in our network meets strict professional grade criteria.",
    color: "accent",
  },
  {
    icon: <Trophy className="w-6 h-6 text-primary-foreground" />,
    title: "Elite Matches",
    description:
      "Connect with high-level players and join competitive tournaments effortlessly.",
    color: "primary",
  },
  {
    icon: <BarChart className="w-6 h-6 text-foreground" />,
    title: "Live Stats",
    description:
      "Track your matches, goals, and wins with our integrated scoring system.",
    color: "accent",
  },
  {
    icon: <Users className="w-6 h-6 text-primary-foreground" />,
    title: "Team Management",
    description:
      "Easily manage your squads, split payments, and invite friends to matches.",
    color: "primary",
  },
  {
    icon: <Star className="w-6 h-6 text-foreground" />,
    title: "VIP Experience",
    description:
      "Unlock exclusive perks, early bookings, and lounge access as a pro member.",
    color: "accent",
  },
];

export default function WhySection() {
  return (
    <section
      id="features"
      className="py-24 md:py-32 px-6 md:px-10 relative overflow-hidden bg-secondary/50 dark:bg-background"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-mesh opacity-30 pointer-events-none" />
      <Container>
        <div className="container max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-primary font-bold uppercase tracking-[0.2em] text-[10px] mb-4 italic"
            >
              Elite Performance
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tighter italic uppercase"
            >
              Why <span className="gradient-text">Mala3bek</span>?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed"
            >
              We power your progression with the most advanced sports technology
              platform in the world.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-foreground">
            {features.map((feature, index) => (
              <GlassCard
                key={`${feature.title}-${index}`}
                delay={index * 0.1}
                className="h-full border-border-alpha bg-card-alpha"
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-8 rotate-45 border border-border-alpha
                ${feature.color === "primary" ? "bg-primary glow-lime" : "bg-foreground/5"}`}
                >
                  <div className="-rotate-45">{feature.icon}</div>
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
