import Link from "next/link";

export default function BookingCardFooter({totalPrice,fieldId,bookingStatus}:{totalPrice:number,fieldId:string,bookingStatus?:string}) {
  const isConfirmed = bookingStatus === "confirmed"; 

  return (
    <div className="flex items-center justify-between px-7 pb-5">
      <p className="text-gray-600">
        Total: <span className="text-chart-2 font-bold">${totalPrice}</span>
      </p>

      <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5">
        {isConfirmed && <button className="text-red-100 bg-red-600 font-medium cursor-pointer rounded-lg py-1 px-4 hover:bg-red-700 ">
          Cancel Booking
        </button>}
        <Link href={`fields/${fieldId}`} className="font-bold text-chart-2">
          View Details
        </Link>
      </div>
    </div>
  );
}
