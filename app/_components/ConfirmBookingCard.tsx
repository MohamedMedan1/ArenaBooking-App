import Button from "./Button";
import { HiStar } from "react-icons/hi2";

export default function ConfirmBookingCard({
  field,
  url,
}: {
  field: any;
  url: string;
}) {
  const { pricePerHour, rating } = field;
  return (
    <div className="flex flex-col gap-5 w-full h-fit bg-background shadow-md p-7 rounded-xl ">
      <div className="space-y-2">
        <p className="font-bold text-3xl text-brand-green">
          ${pricePerHour}{" "}
          <small className="font-normal text-base text-secondary">/hour</small>
        </p>
        <div className="flex items-center gap-3">
          <HiStar size={20} className="text-brand-yellow" />
          <span className="text-secondary">{rating} rating</span>
        </div>
      </div>
      <Button
        title="Book Now"
        type="main"
        additionalStyles="w-full justify-center"
        href={url}
      />
      <p className="text-center text-secondary text-sm">
        Free cancellation up to 24 hours before
      </p>
    </div>
  );
}
