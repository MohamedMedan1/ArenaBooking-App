import { getField } from "@/app/_services/apiFields";
import { Label } from "@/app/_components/Label";
import Container from "../../_components/Container";
import BackBtn from "../../_components/BackBtn";
import Image from "next/image";
import {
  HiStar,
  HiOutlineUsers,
  HiAdjustmentsHorizontal,
  HiMiniUserGroup,
  HiMiniLightBulb,
} from "react-icons/hi2";
import DetailsCard from "@/app/_components/DetailsCard";
import BookingCard from "@/app/_components/BookingCard";

export default async function Page({
  params,
}: {
  params: Promise<{ fieldId?: string }>;
}) {
  const { fieldId } = await params;
  const field = await getField(fieldId!);
  const { name, image, category, capacity, rating } = field!;

  const details = [
    {
      title: "Sport",
      value: category.name,
      icon: <HiAdjustmentsHorizontal className="text-chart-2" size={30} />,
    },
    {
      title: "Capacity",
      value: capacity,
      icon: <HiMiniUserGroup className="text-chart-2" size={30} />,
    },
    {
      title: "Lighting",
      value: "Available",
      icon: <HiMiniLightBulb className="text-chart-4" size={30} />,
    },
  ];

  console.log(field);

  return (
    <div className="mt-21 min-h-lvh grid grid-rows-2">
      <div className="w-full h-full relative after:absolute after:h-full after:w-full after:top-0 after:left-0 after:bg-black/40">
        <Image
          src={image}
          alt="field-image"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        
        <BackBtn />
        <div className="absolute bottom-8 left-8 md:left-14 flex flex-col gap-5 z-20">
          <Label styles="!bg-chart-2 !w-28 !py-1.5">
            <p className="font-medium text-white text-sm">{category.name}</p>
          </Label>
          <p className="text-4xl text-white font-bold tracking-wide">{name}</p>
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2">
              <HiStar size={30} className="text-chart-4" />
              <span className="text-white text-xl font-medium">{rating}</span>
            </div>
            <div className="flex items-center gap-2">
              <HiOutlineUsers size={25} className="text-white" />
              <span className="text-white text-lg">{capacity} players</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10 pb-20">
        <Container>
          <div className="grid md:grid-cols-[2.5fr_1fr] gap-10">
            <div>
              <div className="w-fit">
                <p className="text-3xl font-bold">Field Details</p>
                <div className="mt-2 w-1/2 h-1 bg-chart-2 rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-7 mt-10">
                {details?.map((cur) => (
                  <DetailsCard key={cur.title} details={cur} />
                ))}
              </div>
            </div>
            <BookingCard field={field} />
          </div>
        </Container>
      </div>
    </div>
  );
}
