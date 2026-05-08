import Image from "next/image";
import Container from "./Container";
import Button from "./Button";
import { LuMapPin } from "react-icons/lu";
import { Label } from "./Label";
import { HiArrowRight } from "react-icons/hi2";

export function LandingSection() {
  return (
          <div className="bg-linear-to-br from-[#10B981] to-[#1E3A8A] pb-20 pt-32">
            <Container>
              <div className="flex flex-col lg:flex-row items-center gap-10">
                <div className="flex flex-col gap-7">              
                  <Label>
                    <LuMapPin size={18} className="text-chart-4" />
                    <p className="text-chart-4 font-semibold ">
                      Tanta, Egypt
                    </p>
                  </Label>
                  <h3 className="text-white text-5xl/15 lg:text-7xl/22 font-bold">
                    Find and book your <span className="text-chart-4">perfect field</span> in seconds 
                  </h3>
                  <span className="text-white text-xl tracking-wide">
                    The easiest way to discover and book premium sports venues. From
                    football to tennis, find the perfect field for your game
                    anytime, anywhere.
                  </span>
                  <div className="flex items-center gap-5">
                    <Button
                      title="Book Now"
                      icon={<HiArrowRight/>}
                      type="primary"
                    />
                    <Button
                      title="Explore Fields"
                      type="secondary"
                      additionalStyles="w-52"
                    />
                  </div>
                  <div className=" max-w-[90%] lg:max-w-3/4 flex items-center justify-between">
                    <div className="text-white flex-col gap-2">
                      <p className="font-bold text-3xl">50+</p>
                      <span className="text-white/70 text-sm">Premium Fields</span>
                    </div>
                    <div className="text-white flex-col gap-2">
                      <p className="font-bold text-3xl">10k+</p>
                      <span className="text-white/70 text-sm">Happy Players</span>
                    </div>
                    <div className="text-white flex-col gap-2">
                      <p className="font-bold text-3xl">6</p>
                      <span className="text-white/70 text-sm">Sports Types</span>
                    </div>
    
                  </div>
                </div>
                <Image
                  className="rounded-3xl"
                  src={"/main.jfif"}
                  alt="stadium-image"
                  width={600}
                  height={600}
                  quality={100}
                />
              </div>
            </Container>
          </div>
  );
}