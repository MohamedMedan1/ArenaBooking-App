import SlotsBox from "./SlotsBox";
import { HiOutlineClock } from "react-icons/hi2";
import TimeCard from "./TimeCard";

export default function TimeBox({ times }: { times: any[] }) {
  return (
    <SlotsBox
      title="Select Date"
      titleIcon={<HiOutlineClock size={27} className="text-brand-green" />}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {times?.map((cur: any) => (
          <TimeCard
            isDisabled={cur.isBooked}
            key={cur._id}
            startTime={cur.startTime}
            endTime={cur.endTime}
          />
        ))}
      </div>
    </SlotsBox>
  );
}
