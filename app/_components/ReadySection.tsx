import { LuTrophy } from "react-icons/lu";
import Button from "./Button";
import { HiArrowRight } from "react-icons/hi2";

export default function ReadySection() {
  return (
    <div className="bg-linear-to-br from-[#10B981] to-[#1E3A8A] py-20 flex flex-col gap-7 items-center">
      <LuTrophy className="text-brand-yellow" size={70} />

      <div className="text-center text-white">
        <h3 className="text-5xl font-bold mb-7">Ready to play?</h3>
        <p className="text-xl/7">
          Join thousands of players who book their favorite sports venues with
          Arena Match. <br /> Start your journey today!
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <Button
          title="Get Started Now"
          type="primary"
          icon={<HiArrowRight />}
          additionalStyles="w-50 justify-between"
        />
        <Button
          title="Browse Fields"
          type="secondary"
          additionalStyles="w-48 text-center"
        />
      </div>
    </div>
  );
}
