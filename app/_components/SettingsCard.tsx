import Link from "next/link";
import { ReactNode } from "react";

export default function SettingsCard({ icon,title,linkURL }: { icon: ReactNode,title:string,linkURL?:string }) {
  return (
    <Link href={linkURL?linkURL:""} className="hover:bg-card-alpha transition-all flex items-center gap-5 bg-card-alpha backdrop-blur-xl border-x border-b border-border-alpha p-6 group first:rounded-t-[32px] first:border-t last:rounded-b-[32px]">
      <div className="bg-secondary-dark border border-border-alpha p-3 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors text-foreground group-hover:text-primary">{icon}</div>
      <p className="font-bold tracking-tight text-xl text-foreground group-hover:text-primary transition-colors">{title}</p>
    </Link>
  );
}
