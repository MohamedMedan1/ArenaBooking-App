import Container from "./Container";
import MainTitle from "./MainTitle";
import { HiMiniCalendar } from "react-icons/hi2";
import { LuCircleCheckBig,LuTrophy } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";


export default function HowSection() {
  const howContents = [
    {
      icon: <IoSearch  size={35} />,
      title: "Browse Fields",
      content:
        "Explore our wide selection of premium sports venues",
    },
    {
      icon: <HiMiniCalendar size={35} />,
      title: "Choose Your Slot",
      content:
        "Select your preferred date and time",
    },
    {
      icon: <LuCircleCheckBig size={35} />,
      title: "Confirm Booking",
      content: "Complete your reservation in seconds",
    },
    {
      icon: <LuTrophy size={35} />,
      title: "Play & Enjoy",
      content: "Show up and enjoy your game",
    },
  ];
  return (
    <div className="bg-background py-20" id="howItWorks">
      <MainTitle
        title="How It Works"
        description="Book your perfect field in four simple steps"
      />
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {howContents?.map((cur,i) => (
            <div
              key={cur.title}
              className="text-center bg-foreground rounded-2xl p-10 flex flex-col items-center gap-5"
            >
              <div className="relative text-white bg-linear-to-br from-[#10B981] to-[#1E3A8A] p-5 rounded-full">
                {cur.icon}
                <p className="absolute -top-3 -right-1 w-8 h-8 rounded-full flex justify-center items-center bg-brand-yellow text-primary font-bold">{i + 1}</p>
              </div>
              <p className="font-bold text-xl text-primary">{cur.title}</p>
              <span className="text-secondary">{cur.content}</span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
