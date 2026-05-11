import Link from "next/link";
import { ReactNode } from "react";

export default function SettingsCard({ icon,title,linkURL }: { icon: ReactNode,title:string,linkURL?:string }) {
  return (
    <Link href={linkURL?linkURL:""} className="hover:bg-foreground flex items-center gap-5 bg-background p-7 nth-[1]:rounded-t-2xl last:rounded-b-2xl">
      <div className="bg-card p-3 rounded-xl">{icon}</div>
      <p className="font-semibold text-lg text-primary">{title}</p>
    </Link>
  );
}
