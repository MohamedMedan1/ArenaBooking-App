import { DateCard } from "./DateCard";
import SlotsBox from "./SlotsBox";
import { HiMiniCalendarDays } from "react-icons/hi2";

export default function DateBox({ timeSlots }: { timeSlots: any }) {
  return (
    <SlotsBox
      title="Select Date"
      titleIcon={<HiMiniCalendarDays size={27} className="text-brand-green" />}
    >
      <div className="grid md:grid-cols-5 lg:grid-cols-7 gap-5">
        {timeSlots?.map((cur: any,i:number) => (
          <DateCard key={cur._id} date={cur.date} isFirstOption={i === 0} />
        ))}
      </div>
    </SlotsBox>
  );
}
