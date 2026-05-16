import { getAllBookings } from "@/app/_services/apiBookings";
import { Metadata } from "next";
import { MyBookingsPage } from "@/app/_components/bookings/MyBookingsPage";
import { BookingData } from "@/app/_components/bookings/BookingCard";

export const metadata: Metadata = {
  title: "My Bookings",
  description: "View and manage your upcoming and past field reservations.",
};

export default async function Page() {
  const bookings = await getAllBookings();
  const filteredBookings = bookings?.filter((cur: any) => cur.field !== null) || [];
  
  const formattedBookings: BookingData[] = filteredBookings.map((b: any) => ({
    id: b._id,
    fieldName: b.field?.name || "Unknown Field",
    image: b.field?.image || "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000",
    date: b.bookingDate,
    startTime: b.startTime,
    endTime: b.endTime,
    price: b.totalPrice,
    status: b.status,
    location: b.field?.location || "Arena Facility",
    fieldId: b.field?._id || "",
  }));

  return <MyBookingsPage initialBookings={formattedBookings} />;
}
