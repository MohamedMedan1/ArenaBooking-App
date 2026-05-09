import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi2";

export default function BackBtn() {
  return (
    <Link href="/fields" className="absolute top-10 left-10 z-20 cursor-pointer bg-white/90 hover:bg-white transition rounded-xl w-12 h-12 flex items-center justify-center ">
      <p>
        {" "}
        <HiArrowLeft size={25} />
      </p>
    </Link>
  );
}
