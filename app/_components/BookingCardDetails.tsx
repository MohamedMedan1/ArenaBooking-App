import { HiMiniCalendar, HiOutlineClock } from "react-icons/hi2";
import { formatDate } from "../_utils/formatDate";
import { formatTime } from "../_utils/formatTime";

export default function BookingCardDetails({
  name,
  bookingDate,
  startTime,
  endTime,
}: {
  name: string;
  bookingDate: string;
  startTime: string;
  endTime: string;
}) {
  const formatedDate = formatDate(bookingDate);
  const formatedTime = formatTime(startTime, endTime);
  return (
    <div className="space-y-4">
      <p className="text-xl font-bold">{name}</p>
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-gray-500 ">
          <HiMiniCalendar size={20} />
          <span>{formatedDate}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500 ">
          <HiOutlineClock size={20} />
          <span>{formatedTime}</span>
        </div>
      </div>
    </div>
  );
}
