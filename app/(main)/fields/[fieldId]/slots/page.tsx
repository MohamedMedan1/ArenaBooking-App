import BackBtn from "@/app/_components/BackBtn";
import Container from "@/app/_components/Container";
import { getTimeSlots } from "@/app/_services/apiFields";

export default async function Page({ params }:{params: Promise<{ fieldId?: string }>;
}) {
  const { fieldId } = await params;
  const field = await getTimeSlots(fieldId!);
  const { name,category, timeSlots } = field!;

  console.log(timeSlots);
  
  return (
    <div className="min-h-lvh mt-21">
      <div className="bg-linear-to-br from-[#10B981] to-[#1E3A8A] py-15">
        <Container>
          <div className="flex items-center gap-7">
            <BackBtn fixed={true} />
            <div>
              <p className="text-white text-3xl md:text-4xl font-bold mb-2">
                Book Your Session
              </p>
              <span className="text-gray-100 tracking-wide text-xl">{name}</span>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="pt-10 pb-20 grid md:grid-cols-[3fr_1.5fr] gap-7">
          {/* Data And Time */}
          <div className="space-y-7">
            {/* Select Date */}
            <div className="bg-gray-100 w-full shadow">
              <p>Selected Date</p>
            </div>
            {/* Select Time */}
            <div className="bg-gray-100 w-full shadow">
              <p>Select Time</p>
            </div>
          </div>

          {/* Book Card */}
          <div className="bg-red-400 w-ful h-100"></div>

        </div>

      </Container>
    </div>
  );
}
