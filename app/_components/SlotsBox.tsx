import { ReactNode } from "react";

interface ISlotsBox {
  title: string;
  titleIcon: ReactNode;
  children: ReactNode;
}

export default function SlotsBox({ title, titleIcon, children }: ISlotsBox) {
  return (
    <div className="bg-background px-7 py-10 w-full rounded-xl space-y-7">
      {/* Title */}
      <div className="flex items-center gap-3">
        {titleIcon}
        <p className="text-2xl font-bold text-primary">{title}</p>
      </div>

      {/* Date Or Time */}
      {children}
    </div>
  );
}
