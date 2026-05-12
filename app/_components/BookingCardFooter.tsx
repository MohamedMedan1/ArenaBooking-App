"use client"
import Link from "next/link";
import SubmitButton from "./SubmitButton";
import { useState } from "react";
import toast from "react-hot-toast";
import { cancelBookingAction } from "../_services/actions";

export default function BookingCardFooter({totalPrice,fieldId,bookingStatus,bookingId}:{totalPrice:number,fieldId:string,bookingStatus?:string,bookingId?:string}) {
  const [isPending, setIsPending] = useState<boolean>(false);
  const isConfirmed = bookingStatus === "confirmed"; 

  async function handleCancelation() {
    const toastId = toast.loading("Canceling your booking...");
    try {
      setIsPending(true);

      await cancelBookingAction(bookingId);
      toast.success("Booking canceled successfully!", { id: toastId });
      
    } catch (err: any) {
      toast.error(err.message || "Failed to cancel booking", { id: toastId });
    } finally {
      setIsPending(false);
    }
  }

  return (
    <div className="flex items-center justify-between px-7 pb-5">
      <p className="text-secondary">
        Total: <span className="text-brand-green font-bold">${totalPrice}</span>
      </p>

      <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5">
        {isConfirmed && <SubmitButton btnType="cancel" title="Cancel Booking" isLoading={isPending} isDisabled={isPending} onClick={handleCancelation} />}
        <Link href={`fields/${fieldId}`} className="font-bold text-brand-green">
          View Details
        </Link>
      </div>
    </div>
  );
}
