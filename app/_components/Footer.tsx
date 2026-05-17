import { Trophy, ArrowRight } from "lucide-react";
import Image from "next/image";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import logoImg from "@/public/logo.png";
import Container from "./Container";

export default function Footer() {
  return (
    <Container>
      <footer className="bg-background pt-24 pb-12 px-4 border-t border-border-alpha relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-[300px] bg-mesh opacity-20 pointer-events-none" />

        <div className="container max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="space-y-6">
              <a href="/" className="flex items-center gap-2 group">
                {/* <div className="w-8 h-8 bg-primary rounded-sm rotate-45 flex items-center justify-center transition-transform group-hover:rotate-[135deg]">
                <div className="w-4 h-4 border-2 border-black rotate-45"></div>
              </div> */}
                <div className="relative w-11 h-11 rounded-2xl border border-primary/20 bg-black/40 backdrop-blur-xl flex items-center justify-center overflow-hidden group-hover:scale-105 transition-all duration-300">
                  <Image
                    src={logoImg}
                    alt="Arena Match Logo"
                    width={60}
                    height={60}
                    className="object-contain"
                    priority
                  />
                </div>
                <span className="text-xl font-bold tracking-tighter uppercase italic">
                  Mala3bek
                </span>
              </a>
              <p className="text-foreground/70 text-sm leading-relaxed max-w-xs">
                The premium booking experience for global athletes.
                High-performance facilities, instant matching, and elite
                service.
              </p>
              <div className="flex gap-4">
                {[BsTwitter, BsInstagram, BsFacebook].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-xl border border-border-alpha flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-[10px] mb-8 text-foreground italic">
                Platform
              </h4>
              <ul className="space-y-4">
                {[
                  "Find Arenas",
                  "Tournament Board",
                  "Pro Membership",
                  "Team Manager",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-foreground/70 hover:text-primary transition-colors font-medium tracking-tight"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-[10px] mb-8 text-foreground italic">
                Company
              </h4>
              <ul className="space-y-4">
                {["Our Story", "Careers", "Partner Program", "Press Kit"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm text-foreground/70 hover:text-primary transition-colors font-medium tracking-tight"
                      >
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-[10px] mb-8 text-foreground italic">
                Elite Newsletter
              </h4>
              <p className="text-sm text-foreground/70 mb-6 font-medium tracking-tight">
                Join the pro network and get early access.
              </p>
              <div className="relative">
                <input
                  type="email"
                  placeholder="PRO EMAIL"
                  className="w-full bg-foreground/5 border border-border-alpha rounded-lg px-5 py-3 text-xs focus:outline-none focus:border-primary transition-colors uppercase font-bold tracking-widest text-foreground"
                />
                <button className="absolute right-2 top-2 w-8 h-8 rounded-md bg-primary flex items-center justify-center text-primary-foreground shadow-lg">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border-alpha gap-6">
            <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-foreground/30">
              © 2026 MAL3ABEK. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-8">
              <a
                href="#"
                className="text-[10px] uppercase font-bold tracking-[0.3em] text-foreground/30 hover:text-primary transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-[10px] uppercase font-bold tracking-[0.3em] text-foreground/30 hover:text-primary transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-[10px] uppercase font-bold tracking-[0.3em] text-foreground/30 hover:text-primary transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </Container>
  );
}
