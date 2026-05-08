import Container from "./Container";
import MainTitle from "./MainTitle";
import { HiMiniCalendar, HiOutlineStar } from "react-icons/hi2";
import { LuTrophy } from "react-icons/lu";
import { MdOutlineShield } from "react-icons/md";

export default function WhySection() {
  const whyContents = [
    {
      icon: <HiMiniCalendar size={35} />,
      title: "Easy Booking",
      content:
        "Book your field in just a few clicks with our streamlined process",
    },
    {
      icon: <LuTrophy size={35} />,
      title: "Multiple Field Options",
      content:
        "Choose from football, tennis, basketball, and more sports venues",
    },
    {
      icon: <MdOutlineShield size={35} />,
      title: "Secure Process",
      content: "All bookings are verified and protected for your peace of mind",
    },
    {
      icon: <HiOutlineStar size={35} />,
      title: "Premium Quality",
      content: "All venues are maintained to the highest standards",
    },
  ];

  return (
    <div className="my-30" id="features">
      <MainTitle
        title="Why Choose Arena Match?"
        description="We make sports field booking simple, secure, and hassle-free"
      />
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyContents?.map((cur) => (
            <div
              key={cur.title}
              className="text-center bg-gray-100/50 rounded-2xl p-8 flex flex-col items-center gap-5"
            >
              <div className="text-chart-2 bg-chart-2/10 p-4 rounded-xl">{cur.icon}</div>
              <p className="font-bold text-xl">{cur.title}</p>
              <span className="text-gray-700">{cur.content}</span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
