import { ReactNode } from "react";

export function Label({ children,styles}: { children: ReactNode,styles?:string }) {
  const baseStyle = `bg-white/20 w-36 py-2 rounded-full flex items-center justify-center gap-2 ${styles}`;
  
  return (
    <div className={baseStyle}>
      {children}
    </div>
  );
}
