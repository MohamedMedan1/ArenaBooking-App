"use client"
import { useRouter } from "next/navigation";
import { HiArrowLeft } from "react-icons/hi2";

export default function BackBtn({ fixed = false }: { fixed?: boolean }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className={`${
        fixed ? "" : "absolute top-10 left-10 z-20 "
      } cursor-pointer bg-white/90 hover:bg-white transition rounded-xl w-12 h-12 flex items-center justify-center border-none`}
    >
      <HiArrowLeft size={25} />
    </button>
  );
}