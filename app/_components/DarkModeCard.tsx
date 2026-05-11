"use client"

import {HiOutlineMoon , HiOutlineSun } from "react-icons/hi2";
import { useTheme } from "../_contexts/ThemeContext";
import Toggler from "./Toggler";

export default function DarkModeCard() {
  const { theme, setTheme } = useTheme();
  
  const toogleTheme = () => setTheme(cur => cur === "light" ? "dark" : "light");
  const isDark = theme === "dark";

  return (
    <div className="flex justify-between items-center bg-background p-7 rounded-2xl">
      <div className="flex items-center gap-4">
        <div className="bg-brand-green-card p-3 rounded-xl">
          {isDark?<HiOutlineMoon className="text-brand-green" size={30}/>:<HiOutlineSun className="text-brand-green" size={32}/>}
        </div>
        <div className="space-y-1">
          <p className="font-semibold text-xl text-primary">Dark Mode</p>
          <span className="text-secondary">{theme === "dark" ? "Enabled":"Disabled"}</span>
        </div>
      </div>
      <Toggler isActive={theme === "dark"} setTheme={toogleTheme} />
    </div>
  );
}
