import Image from "next/image";
import SubmitButton from "./SubmitButton";
import { formatTime } from "../_utils/formatTime";
import { formatDate } from "../_utils/formatDate";

export default function BookingSummaryCard({ field,date,time }: { field: any,date:string,time?:any }) {
  const { image, name, pricePerHour, category } = field;
  const { startTime, endTime } = time;
  const formatedDate = formatDate(date);
  let formatedTime;
  const isDisabled = !startTime || !endTime; 
  
  if (startTime && endTime) {
    formatedTime = formatTime(startTime, endTime);
  }

  return (
    <div className="w-full p-6 rounded-2xl h-full bg-background space-y-5">

      <div className="border-b border-b-brand-border space-y-4 pb-5">
        <p className="font-bold text-xl text-primary">Booking Summary</p>
        <Image
          src={image}
          alt="field-image"
          width={0}
          height={0}
          sizes="100vw"
          quality={90}
          className="w-full h-40 rounded-2xl"
        />
        <div className="space-y-1">
          <p className="text-secondary font-bold text-xl">{name}</p>
          <span className="text-secondary text-sm">{category.name}</span>
        </div>
      </div>

      <div className="border-b border-b-brand-border space-y-4 pb-5">
        <div className="space-y-1">
          <span className="inline-block text-sm text-secondary">Date</span>
          <p className="font-semibold text-primary">{formatedDate}</p>
        </div>

        {time  && <div className="space-y-1">
          <span className="inline-block text-sm text-secondary">Time</span>
          <p className="font-semibold text-primary">{formatedTime}</p>
        </div>}

        <div className="flex items-center justify-between">
          <span className="text-secondary">Price per hour</span>
          <p className="font-bold text-xl text-brand-green">${pricePerHour}</p>
        </div>
      </div>

      <SubmitButton isDisabled = {isDisabled} title="Confirm Booking" isLoading={false} />
    </div>
  );
}
