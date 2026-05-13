import BookingCard from "@/app/_components/BookingCard";
import Container from "@/app/_components/Container";
import PageHeader from "@/app/_components/PageHeader";
import { getAllBookings } from "@/app/_services/apiBookings";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Bookings",
  description: "View and manage your upcoming and past field reservations.",
};

export default async function Page() {
  const bookings = await getAllBookings();
  const filteredBookings = bookings?.filter((cur: any) => cur.field !== null);
  
  return (
    <div className="min-h-lvh mt-21 bg-foreground">
      <PageHeader title="My Bookings" />
      <Container>
        <div className="space-y-7 pt-10 pb-20">
          {filteredBookings.map((cur: any) => (
            <BookingCard key={cur._id} booking={cur} />
          ))}
        </div>
      </Container>
    </div>
  );
}
