import BookingConfirmationCard from "../_components/BookingConfirmationCard";
import MainTitle from "../_components/MainTitle";
import { HiMiniCheckCircle } from "react-icons/hi2";
import { getBooking } from "../_services/apiBookings";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Booking Confirmed",
  description: "Your booking has been successfully placed. See you on the field!",
};

export default async function Page({ searchParams }: { searchParams: Promise<{ orderId: string }>; }) {
  const { orderId } = await searchParams;
  const booking = await getBooking(orderId);

  if (!booking) {
    return <div>Booking not found or still processing...</div>;
  }

  return (
    <div className="min-h-lvh py-10 bg-background">
      <div className="w-full md:w-1/2 mx-auto">
        <div className="space-y-5 flex flex-col items-center">
          <HiMiniCheckCircle
            size={120}
            className="text-brand-green text-center"
          />
          <MainTitle
            title="Booking Confirmed!"
            description="Your field has been successfully booked"
          />
        </div>
        <BookingConfirmationCard booking={booking} />
      </div>
    </div>
  );
}
