import { ReactNode } from "react";

export default function DetailsCard({
  details,
}: {
  details: { title: string; value: any; icon: ReactNode };
}) {
  const { title, value, icon } = details;
  return (
    <div
      className="bg-background shadow-md rounded-xl px-7 py-5 flex flex-col gap-3"
    >
      {icon}
      <p className="text-secondary text-sm font-semibold">{title}</p>
      <span className="font-bold text-xl text-primary">{value} Players</span>
    </div>
  );
}
