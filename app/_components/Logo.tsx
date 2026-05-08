import { LuTrophy } from "react-icons/lu";

export default function Logo() {
  return (
    <div className="flex items-center gap-4">
      <div className="text-white flex items-center justify-center bg-linear-to-br from-[#10B981] to-[#1E3A8A] rounded-full p-2">
        <LuTrophy size={25} />
      </div>
      <h1 className="text-xl font-bold text-primary">Arena Match</h1>
    </div>
  );
}
