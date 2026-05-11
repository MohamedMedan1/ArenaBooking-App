import Image from "next/image";
import Container from "./Container";
import { LuTrophy } from "react-icons/lu";

export default function About() {
  return (
    <div className="bg-background py-20" id="about">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex flex-col gap-7">
            <p className="text-4xl lg:text-5xl font-bold text-primary">
              About Arena Match
            </p>
            <span className="text-lg text-secondary">
              Arena Match is your trusted platform for discovering and booking
              premium sports venues across Tanta, Egypt. We &apos;re passionate
              about making sports accessible to everyone.
            </span>
            <span className="text-lg text-secondary">
              Our mission is to connect players with the best sports facilities,
              making it easier than ever to find, book, and enjoy your favorite
              sports. With a carefully curated selection of verified venues, we
              ensure every booking meets our high standards.
            </span>
            <div className="max-w-[90%] lg:max-w-[60%] flex justify-between items-center">
              <div>
                <p className="font-bold text-3xl text-brand-green mb-2">2024</p>
                <span className="text-secondary">Founded</span>
              </div>
              <div>
                <p className="font-bold text-3xl text-brand-green mb-2">99%</p>
                <span className="text-secondary">Satisfaction Rate</span>
              </div>
            </div>
          </div>
          <div className="w-full h-full relative">
            <Image
              className="rounded-3xl"
              src={"/about-image.jfif"}
              alt="stadium-image"
              width={550}
              height={500}
              quality={100}
            />
            <div className="flex items-center gap-5 rounded-xl bg-brand-green text-white p-5 absolute -right-3 -bottom-3  lg:-right-10 lg:-bottom-10 ">
              <LuTrophy size={30} />
              <div>
                <p className="font-bold text-xl">Premium</p>
                <span className="text-sm">Quality Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
