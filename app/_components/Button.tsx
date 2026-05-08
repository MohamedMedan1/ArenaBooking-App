import { ReactNode } from "react";

export default function Button({title,icon,type,additionalStyles}:{title:string,icon?:ReactNode,type:string,additionalStyles?:string}) {
  const types: {[key: string]: string} = {
    primary: "bg-chart-4 w-36 text-chart-3 flex items-center gap-2 rounded-2xl hover:bg-chart-5",
    main: "bg-chart-2 w-40 text-white flex items-center gap-2 rounded-xl hover:bg-chart-2/80",
    bordered: "border border-chart-2 text-chart-2 rounded-xl flex justify-center hover:bg-chart-2 hover:text-white",
    secondary:"rounded-2xl bg-white/10 text-white border border-white/50 w-32 hover:bg-white/30 hover:text-black",
  }
  
  const btnType = types[type];

  return (
    <button className={`cursor-pointer px-3 py-4 text-lg font-medium transition ${btnType} ${additionalStyles}`}>
      {title}
      {icon}
    </button>
  );
}