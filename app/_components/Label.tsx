import { ReactNode } from "react";

export function Label({ children,styles}: { children: ReactNode,styles?:string }) {
  return (
    <div className={`bg-white/20 w-36 py-2 rounded-full flex items-center justify-center gap-2 ${styles}`}>
      {children}
    </div>
  );
}
