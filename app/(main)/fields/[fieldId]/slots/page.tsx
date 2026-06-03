import { getTimeSlots } from "@/app/_services/apiFields";
import { Metadata } from "next";
import BookingSlotsClient from "@/app/_components/BookingSlotsClient";

export const metadata: Metadata = {
  title: "Available Slots",
  description: "Check availability and pick the best time for your match.",
};

export default async function Page({
  params,
}: {
  params: Promise<{ fieldId?: string }>;
}) {
  const { fieldId } = await params;
  const field = await getTimeSlots(fieldId!);
  if (!field) {
    return <div className="min-h-screen bg-background flex items-center justify-center text-foreground font-sans text-xl tracking-widest font-black uppercase">Field not found</div>;
  }

  return <BookingSlotsClient field={field} />;
}
