import { formatDate } from "../_utils/formatDate";
import { formatTime } from "../_utils/formatTime";

export default function BookingConfirmationCard({ booking }: { booking: any }) {
  const { bookingNumber, field, bookingDate, startTime, endTime} = booking;
  const formatedData = formatDate(bookingDate);
  const formatedTime = formatTime(startTime,endTime);
  
  return (
    <div className="bg-foreground w-full p-7 rounded-2xl divide-y divide-brand-border space-y-7">
      <div className="space-y-2 text-center pb-5">
        <p className="text-secondary">Booking Number</p>
        <p className="text-brand-green font-bold text-2xl">{bookingNumber}</p>
      </div>

      {/* Start Card Body */}
      <div className="space-y-7">
        <div className="flex items-center gap-5">
          <div className="w-30 h-30 rounded-2xl bg-brand-green"></div>
          <div>
            <p className="text-primary font-bold text-xl">{field.name}</p>
            <span className="text-secondary">{field.category?.name}</span>
          </div>
        </div>
        <ul className="space-y-4">
          <li>
            <span className="text-secondary text-sm">Date</span>
            <p className="font-medium text-primary">{formatedData}</p>
          </li>
          <li>
            <span className="text-secondary text-sm">Time</span>
            <p className="font-medium text-primary">{formatedTime}</p>
          </li>
          <li>
            <span className="text-secondary text-sm">Price</span>
            <p className="font-medium text-brand-green">${field.pricePerHour}/hour</p>
          </li>
        </ul>
      </div>
      {/* End Card Body */}
    </div>
  );
}
