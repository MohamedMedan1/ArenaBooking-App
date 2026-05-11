import BackBtn from "@/app/_components/BackBtn";
import BookingSummaryCard from "@/app/_components/BookingSummaryCard";
import Container from "@/app/_components/Container";
import DateBox from "@/app/_components/DateBox";
import TimeBox from "@/app/_components/TimeBox";
import { getTimeSlots } from "@/app/_services/apiFields";

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ fieldId?: string }>;
  searchParams: Promise<{
    date?: string;
    startTime?: string;
    endTime?: string;
  }>;
}) {
  const { fieldId } = await params;
  const field = await getTimeSlots(fieldId!);
  const { name, timeSlots } = field!;

  const { date, startTime, endTime } = await searchParams;
  const formatURLDate = (value: string) =>
    new Date(value).toISOString().split("T")[0];
  let dateTimes: any;
  let time;

  if (date) {
    dateTimes = timeSlots.find(
      (cur) => formatURLDate(String(cur.date)) === date,
    )?.times;
  } else {
    dateTimes = timeSlots[0].times;
  }

  if (startTime && endTime) {
    time = {
      startTime: `${startTime.slice(0, 2)}:${startTime.slice(2)}`,
      endTime: `${endTime.slice(0, 2)}:${endTime.slice(2)}`,
    };
  }

  return (
    <div className="min-h-lvh mt-21 bg-foreground">
      <div className="bg-linear-to-br from-[#10B981] to-[#1E3A8A] py-15">
        <Container>
          <div className="flex items-center gap-7">
            <BackBtn fixed={true} />
            <div>
              <p className="text-white text-3xl md:text-4xl font-bold mb-2">
                Book Your Session
              </p>
              <span className="text-gray-100 tracking-wide text-xl">
                {name}
              </span>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="relative pt-10 pb-20 grid md:grid-cols-[3fr_1.5fr] gap-10">
          {/* Data And Time */}
          <div className="space-y-10">
            {/* Select Date */}
            <DateBox timeSlots={timeSlots} />
            {/* Select Time */}
            <TimeBox times={dateTimes} />
          </div>
          {/* Book Card */}
          <BookingSummaryCard
            date={date! || String(timeSlots[0].date)}
            time={time! || ""}
            field={field}
          />
        </div>
      </Container>
    </div>
  );
}
