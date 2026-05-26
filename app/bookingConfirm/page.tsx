import BookingConfirmationCard from "../_components/BookingConfirmationCard";
import MainTitle from "../_components/MainTitle";
import { HiMiniCheckCircle } from "react-icons/hi2";
import { getBooking } from "../_services/apiBookings";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Booking Confirmed",
  description:
    "Your booking has been successfully placed. See you on the field!",
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ order: string }>;
}) {
  const { order } = await searchParams;
  const booking = await getBooking(order);

  if (!booking) {
    return <div>Booking not found or still processing...</div>;
  }

  return (
    <div className="min-h-lvh py-10 px-6 md:px-8 bg-background">
      <div className="w-full md:w-1/2 mx-auto">
        <div className="space-y-5 flex flex-col items-center">
          <HiMiniCheckCircle
            size={120}
            className="text-brand-green  text-center"
          />
          <MainTitle
            title="Booking Confirmed!"
            description="Your field has been successfully booked"
          />
        </div>
        <BookingConfirmationCard booking={booking} />
        <div className="mt-8 flex justify-center">
          <Link 
            href="/bookings"
            className="px-8 py-3 bg-primary text-primary-foreground text-sm font-bold uppercase tracking-widest rounded-xl hover:brightness-110 transition-all shadow-xl hover:scale-105 active:scale-95 block text-center"
          >
            View My Bookings
          </Link>
        </div>
      </div>
    </div>
  );
}
