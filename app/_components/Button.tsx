import Link from "next/link";
import { ReactNode } from "react";

export default function Button({title,icon,type,additionalStyles,href}:{title:string,icon?:ReactNode,type:string,additionalStyles?:string,href?:string}) {
  const types: {[key: string]: string} = {
    primary: "bg-brand-yellow min-w-36 text-gray-800 flex items-center gap-2 rounded-2xl hover:bg-chart-5",
    main: "bg-brand-green w-40 text-white flex items-center gap-2 rounded-xl hover:bg-brand-green/80",
    bordered: "border border-brand-green text-brand-green rounded-xl flex justify-center hover:bg-brand-green hover:text-white",
    secondary:"rounded-2xl bg-white/10 text-white border border-white/50 w-32 hover:bg-white/30 hover:text-black",
  }
  
  const btnType = types[type];

  return (
    <Link href={`/${href}`}>
      <button className={`cursor-pointer px-3 py-4 text-lg font-medium transition ${btnType} ${additionalStyles}`}>
      {title}
      {icon}
    </button>
    </Link>
  );
}