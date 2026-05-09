import { ReactNode } from "react";

export default function DetailsCard({
  details,
}: {
  details: { title: string; value: any; icon: ReactNode };
}) {
  const { title, value, icon } = details;
  return (
    <div
      className="bg-gray-100 shadow-md rounded-xl px-7 py-5 flex flex-col gap-3"
    >
      {icon}
      <p className="text-gray-500 text-sm font-semibold">{title}</p>
      <span className="font-bold text-xl">{value} Players</span>
    </div>
  );
}
