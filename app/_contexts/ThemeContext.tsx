"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Theme = "light" | "dark";

type ThemeProvideType = {
  children: ReactNode;
};

interface ThemeContextType {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: ThemeProvideType) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved === "light" || saved === "dark") {
        return saved;
      }
    }
    return "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) throw new Error("useTheme must be used within a ThemeProvider");

  return context;
}
