// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 dark:bg-black text-white py-12">
//       <div className="container mx-auto px-6 lg:px-12">
//         <div className="grid md:grid-cols-4 gap-8 mb-8">
//           {/* Logo & Description */}
//           <div className="md:col-span-1">
//             <div className="flex items-center gap-3 mb-4">
//               <div className="bg-lienar-to-br from-[#10B981] to-[#1E3A8A] rounded-full p-2">
//                 {/* <Trophy className="w-6 h-6 text-white" /> */}
//               </div>
//               <span className="text-xl font-bold">Arena Match</span>
//             </div>
//             <p className="text-gray-400 mb-4">
//               Your trusted platform for booking premium sports venues
//             </p>
//             <div className="flex gap-3">
//               <a
//                 href="#"
//                 className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors"
//               >
//                 {/* <Facebook className="w-5 h-5" /> */}
//               </a>
//               <a
//                 href="#"
//                 className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors"
//               >
//                 {/* <Twitter className="w-5 h-5" /> */}
//               </a>
//               <a
//                 href="#"
//                 className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors"
//               >
//                 {/* <Instagram className="w-5 h-5" /> */}
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="font-bold mb-4">Quick Links</h3>
//             <ul className="space-y-2 text-gray-400">
//               {/* <li><button onClick={() => navigate('/web')} className="hover:text-white transition-colors">Home</button></li> */}
//               {/* <li><button onClick={() => navigate('/web/fields')} className="hover:text-white transition-colors">Browse Fields</button></li> */}
//               {/* <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About Us</button></li> */}
//               {/* <li><button onClick={() => navigate('/login')} className="hover:text-white transition-colors">Sign In</button></li> */}
//             </ul>
//           </div>

//           {/* Sports */}
//           <div>
//             <h3 className="font-bold mb-4">Sports</h3>
//             <ul className="space-y-2 text-gray-400">
//               {/* {categories.slice(0, 4).map(cat => (
//                   <li key={cat.id}>
//                     <button
//                       onClick={() => navigate(`/web/fields?category=${cat.name}`)}
//                       className="hover:text-white transition-colors"
//                     >
//                       {cat.name}
//                     </button>
//                   </li>
//                 ))} */}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="font-bold mb-4">Contact Us</h3>
//             <ul className="space-y-3 text-gray-400">
//               <li className="flex items-center gap-2">
//                 {/* <MapPin className="w-5 h-5 flex-shrink-0" /> */}
//                 <span>Tanta, Egypt</span>
//               </li>
//               <li className="flex items-center gap-2">
//                 {/* <Phone className="w-5 h-5 flex-shrink-0" /> */}
//                 <span>+20 123 456 7890</span>
//               </li>
//               <li className="flex items-center gap-2">
//                 {/* <Mail className="w-5 h-5 flex-shrink-0" /> */}
//                 <span>info@arenamatch.com</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
//           <p>&copy; 2026 Arena Match. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }
import { Trophy, ArrowRight } from "lucide-react";
import Image from "next/image";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import logoImg from "@/public/logo.png";

export default function Footer() {
  return (
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
              High-performance facilities, instant matching, and elite service.
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
            © 2026 ARENA MATCH. ALL RIGHTS RESERVED.
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
  );
}
