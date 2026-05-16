"use client"

import {HiOutlineMoon , HiOutlineSun } from "react-icons/hi2";
import { useTheme } from "../_contexts/ThemeContext";
import Toggler from "./Toggler";

export default function DarkModeCard() {
  const { theme, setTheme } = useTheme();
  
  const toogleTheme = () => setTheme(cur => cur === "light" ? "dark" : "light");
  const isDark = theme === "dark";

  return (
    <div className="flex justify-between items-center bg-card-alpha backdrop-blur-xl border border-border-alpha p-6 rounded-[32px] mb-8 shadow-2xl relative overflow-hidden group">
      <div className="absolute inset-0 bg-mesh opacity-20 pointer-events-none" />
      <div className="flex items-center gap-5 relative z-10">
        <div className="bg-secondary-dark border border-border-alpha p-3 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
          {isDark?<HiOutlineMoon size={30}/>:<HiOutlineSun size={32}/>}
        </div>
        <div className="space-y-1">
          <p className="font-bold tracking-tight text-xl text-white">Dark Mode</p>
          <span className="text-xs font-bold tracking-widest uppercase text-slate-400">{theme === "dark" ? "Enabled":"Disabled"}</span>
        </div>
      </div>
      <div className="relative z-10">
        <Toggler isActive={theme === "dark"} setTheme={toogleTheme} />
      </div>
    </div>
  );
}
