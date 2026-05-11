"use client"

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { formatDate } from "../_utils/formatDate";

export function DateCard({date,isFirstOption = false}: { date: string,isFirstOption?:boolean }) {
  const formatedDate = formatDate(date);
  const [dWeek, dMonth, month] = formatedDate.split(" ");
  
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const formateURLDate = (value:string)=>new Date(value).toISOString().split('T')[0];
  const selectedDate = searchParams.get("date") || null;
  const isSelected = selectedDate ?selectedDate === formateURLDate(date) : isFirstOption;

  const baseStyle = "cursor-pointer transition rounded-xl py-3 px-7 space-y-3 text-center";
  const selectedStyle = `${baseStyle} bg-brand-green text-white`;
  const notSelectedStyle  = `bg-foreground hover:bg-dark-card text-secondary ${baseStyle}`;
  
  function handleSelectDate(value:string) {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("date", formateURLDate(value));
      params.delete("startTime");
      params.delete("endTime");
    } else {
      params.delete("date");
    }
    
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  
  return (
    <div onClick={() => handleSelectDate(date)} className={isSelected ? selectedStyle:notSelectedStyle}>
      <p className="text-sm">{dWeek}</p>
      <p className="font-bold text-lg">{dMonth}</p>
      <p className="text-sm">{month}</p>
    </div>
  );
}