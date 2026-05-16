// import Container from "./Container";
// import Logo from "./Logo";
// import NavBar from "./NavBar";
// import MobileNav from "./MobileNav";

// export default function Header() {
//   return (
//     <header className="bg-background h-[85] border-b border-b-foreground w-full flex items-center fixed top-0 z-50">
//       <Container>
//         <div className="flex items-center justify-between">
//           <Logo />
//           <MobileNav/>
//           <NavBar />
//         </div>
//       </Container>
//     </header>
//   );
// }
"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { Menu, X, Trophy } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { logout } from "../_utils/authActions";
import { Button } from "./ui/Button";
import Container from "./Container";
import Link from "next/link";
import logoImg from "@/public/logo.png";
import Image from "next/image";
export const Header = ({ isAuth }: { isAuth?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    await logout();
    router.push("/");
    router.refresh();
  };

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(5, 5, 5, 0)", "rgba(5, 5, 5, 0.8)"],
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? "border-border-alpha backdrop-blur-xl py-3" : "border-transparent py-6"}`}
    >
      <Container>
        <div className="container max-w-7xl mx-auto px-10 flex items-center justify-between">
          {/* <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary rounded-sm rotate-45 flex items-center justify-center transition-transform group-hover:rotate-[135deg]">
              <div className="w-4 h-4 border-2 border-black rotate-45">
                <Image src={logoImg} alt="" className="w-full" />
              </div>
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase ml-2">
              Arena Match
            </span>
          </Link> */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 flex items-center justify-center">
              <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl group-hover:scale-110 transition-all duration-500" />

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
            </div>

            <span className="text-xl font-black tracking-tight uppercase">
              Mala3bak
            </span>
          </Link>
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {!isAuth ? (
              <>
                {["Arenas", "Features", "Plans", "About"].map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-medium uppercase tracking-widest text-foreground/70 hover:text-primary transition-colors relative group"
                  >
                    {item}
                  </Link>
                ))}
                <div className="flex items-center gap-8">
                  <Link
                    href="/auth/login"
                    className="text-sm font-medium uppercase tracking-widest text-foreground/70 hover:text-primary transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    href="/fields"
                    className="px-5 py-2 rounded-full border border-white/10 hover:border-primary transition-colors text-sm font-medium uppercase tracking-wider"
                  >
                    Book Now
                  </Link>
                </div>
              </>
            ) : (
              <>
                {[
                  { name: "Home", href: "/" },
                  { name: "Bookings", href: "/bookings" },
                  { name: "Fields", href: "/fields" },
                  { name: "Settings", href: "/settings" },
                ].map((item) => {
                  const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-sm font-medium uppercase tracking-widest transition-colors relative group py-1 ${
                        isActive ? "text-primary" : "text-foreground/70 hover:text-primary"
                      }`}
                    >
                      {item.name}
                      {isActive && (
                        <motion.div
                          layoutId="nav-underline"
                          className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary rounded-full"
                        />
                      )}
                    </Link>
                  );
                })}
                <button
                  onClick={handleLogout}
                  className="text-sm font-medium uppercase tracking-widest text-foreground/70 hover:text-primary transition-colors relative group cursor-pointer py-1"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={
          isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        className="lg:hidden overflow-hidden bg-background border-b border-border-alpha"
      >
        <div className="flex flex-col p-6 gap-6">
          {!isAuth ? (
            <>
              {["Arenas", "Features", "Plans", "About"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-bold uppercase tracking-widest"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <div className="flex flex-col gap-3">
                <Link href="/auth/login" className="w-full">
                  <Button className="w-full">Login</Button>
                </Link>
                <Link href="/fields" className="w-full">
                  <button className="w-full px-5 py-3 rounded-xl border border-border-alpha hover:border-primary transition-colors text-sm font-medium uppercase tracking-wider">
                    Book Now
                  </button>
                </Link>
              </div>
            </>
          ) : (
            <>
              <Link
                href="/"
                className="text-lg font-bold uppercase tracking-widest hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/settings"
                className="text-lg font-bold uppercase tracking-widest hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Settings
              </Link>
              <Link
                href="/bookings"
                className="text-lg font-bold uppercase tracking-widest hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Bookings
              </Link>
              <Link
                href="/fields"
                className="text-lg font-bold uppercase tracking-widest hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Fields
              </Link>
              <button
                onClick={() => {
                  setIsOpen(false);
                  handleLogout();
                }}
                className="text-lg font-bold uppercase tracking-widest text-left hover:text-primary transition-colors"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </motion.div>
    </motion.nav>
  );
};
