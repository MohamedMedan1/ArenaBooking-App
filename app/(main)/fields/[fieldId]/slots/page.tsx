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

  return <BookingSlotsClient field={field} />;
}
