import Image from "next/image";
import BookingCardFooter from "./BookingCardFooter";
import StatusLabel from "./StatusLabel";
import BookingCardDetails from "./BookingCardDetails";

export default function BookingCard({ booking }: { booking: any }) {
  const { field, bookingDate, startTime, endTime, totalPrice, status } =
    booking!;
  const { image, name } = field;

  return (
    <div className="space-y-5 bg-white shadow rounded-2xl divide-y divide-gray-300">
      <div className="flex flex-col gap-5 md:gap-0 md:flex-row justify-between p-7">
        <div className="flex flex-col md:flex-row gap-5">
          <Image
            src={image}
            alt="field-Booking-image"
            width={200}
            height={100}
            quality={90}
            className="rounded-2xl w-full md:w-fit object-cover"
          />

          <BookingCardDetails
            name={name}
            bookingDate={bookingDate}
            startTime={startTime}
            endTime={endTime}
          />
        </div>
        <StatusLabel label={status} />
      </div>
      <BookingCardFooter
        totalPrice={totalPrice}
        fieldId={field._id}
        bookingStatus={status}
      />
    </div>
  );
}
