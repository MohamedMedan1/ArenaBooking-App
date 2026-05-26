"use client"
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

export default function BackBtn({ fixed = false }: { fixed?: boolean }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className={`${
        fixed ? "" : "absolute top-10 left-10 z-20 "
      } inline-flex items-center justify-center w-12 h-12 rounded-xl bg-foreground/5 border border-border-alpha text-foreground/60 hover:text-primary hover:bg-foreground/10 hover:border-primary/30 transition-all duration-300`}
    >
      <ChevronLeft className="w-6 h-6" />
    </button>
  );
}