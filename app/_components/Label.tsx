import { ReactNode } from "react";

export function Label({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white/20 w-36 py-2 rounded-full flex items-center justify-center gap-2">
      {children}
    </div>
  );
}
