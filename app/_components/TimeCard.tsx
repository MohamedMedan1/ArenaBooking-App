"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { formatTime } from "../_utils/formatTime";

export default function TimeCard({
  startTime,
  endTime,
  isDisabled = false,
}: {
  startTime: string;
  endTime: string;
  isDisabled?: boolean;
}) {
  const formatedTime = formatTime(startTime, endTime);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const baseStyle =
    "not-disabled:cursor-pointer transition rounded-xl p-3 space-y-3 text-center disabled:bg-card disabled:text-secondary disabled:cursor-not-allowed";
  const selectedStyle = `${baseStyle} bg-brand-green text-white`;
  const notSelectedStyle = `bg-foreground hover:bg-dark-card text-secondary ${baseStyle}`;

  const start = searchParams.get("startTime");
  const end = searchParams.get("endTime");
  const isSelected =
    start === startTime.replace(":", "") && end === endTime.replace(":", "");

  function handleSelectTime() {
    const params = new URLSearchParams(searchParams);

    params.set("startTime", startTime.replace(":", ""));
    params.set("endTime", endTime.replace(":", ""));

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <button
      onClick={handleSelectTime}
      disabled={isDisabled}
      className={isSelected ? selectedStyle : notSelectedStyle}
    >
      <div>
        <p className="text-semibold font-medium">{formatedTime}</p>
      </div>
    </button>
  );
}
