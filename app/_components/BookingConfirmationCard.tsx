// import { formatDate } from "../_utils/formatDate";
// import { formatTime } from "../_utils/formatTime";

// export default function BookingConfirmationCard({ booking }: { booking: any }) {
//   const { bookingNumber, field, bookingDate, startTime, endTime } = booking;
//   const formatedData = formatDate(bookingDate);
//   const formatedTime = formatTime(startTime, endTime);

//   return (
//     <div className="bg-foreground w-full p-7 rounded-2xl divide-y divide-brand-border space-y-7">
//       <div className="space-y-2 text-center pb-5">
//         <p className="text-secondary">Booking Number</p>
//         <p className="text-brand-green font-bold text-2xl">{bookingNumber}</p>
//       </div>

//       {/* Start Card Body */}
//       <div className="space-y-7">
//         <div className="flex items-center gap-5">
//           <div className="w-30 h-30 rounded-2xl bg-brand-green"></div>
//           <div>
//             <p className="text-primary font-bold text-xl">{field.name}</p>
//             <span className="text-secondary">{field.category?.name}</span>
//           </div>
//         </div>
//         <ul className="space-y-4">
//           <li>
//             <span className="text-secondary text-sm">Date</span>
//             <p className="font-medium text-primary">{formatedData}</p>
//           </li>
//           <li>
//             <span className="text-secondary text-sm">Time</span>
//             <p className="font-medium text-primary">{formatedTime}</p>
//           </li>
//           <li>
//             <span className="text-secondary text-sm">Price</span>
//             <p className="font-medium text-brand-green">
//               ${field.pricePerHour}/hour
//             </p>
//           </li>
//         </ul>
//       </div>
//       {/* End Card Body */}
//     </div>
//   );
// }
import { formatDate } from "../_utils/formatDate";
import { formatTime } from "../_utils/formatTime";

export default function BookingConfirmationCard({ booking }: { booking: any }) {
  const { bookingNumber, field, bookingDate, startTime, endTime } = booking;
  const formatedData = formatDate(bookingDate);
  const formatedTime = formatTime(startTime, endTime);

  return (
    <div className="w-full mt-8 rounded-[28px] border border-white/10 bg-white dark:bg-white/5 p-7 divide-y divide-white/10 space-y-6 shadow-sm">
      {/* Booking Number */}
      <div className="space-y-1 text-center pb-5">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
          Booking Number
        </p>
        <p className="text-brand-green font-extrabold text-2xl tracking-tight">
          {bookingNumber}
        </p>
      </div>

      {/* Card Body */}
      <div className="space-y-6 pt-6">
        {/* Field Info */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-brand-green/20 border border-brand-green/30 flex items-center justify-center shrink-0">
            <span className="text-brand-green font-black text-xl">
              {field.name?.[0]}
            </span>
          </div>
          <div>
            <p className="text-gray-900 dark:text-white font-bold text-lg leading-tight">
              {field.name}
            </p>
            <span className="text-gray-500 dark:text-gray-400 text-sm">
              {field.category?.name}
            </span>
          </div>
        </div>

        {/* Details */}
        <ul className="space-y-4">
          <li>
            <span className="text-gray-400 dark:text-gray-500 text-xs font-bold uppercase tracking-widest">
              Date
            </span>
            <p className="font-semibold text-gray-900 dark:text-white mt-0.5">
              {formatedData}
            </p>
          </li>
          <li>
            <span className="text-gray-400 dark:text-gray-500 text-xs font-bold uppercase tracking-widest">
              Time
            </span>
            <p className="font-semibold text-gray-900 dark:text-white mt-0.5">
              {formatedTime}
            </p>
          </li>
          <li>
            <span className="text-gray-400 dark:text-gray-500 text-xs font-bold uppercase tracking-widest">
              Price
            </span>
            <p className="mt-0.5">
              <span className="text-brand-green font-extrabold text-xl">
                ${field.pricePerHour}
              </span>
              <span className="text-gray-400 dark:text-gray-500 text-xs font-bold ml-1">
                / hour
              </span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
