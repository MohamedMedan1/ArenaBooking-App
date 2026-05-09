import Link from "next/link";
import Button from "./Button";

interface NavbarProps {
  closeNav: () => void;
}

export default function MobileNav({ closeNav }: NavbarProps) {
  return (
    <div className="absolute left-0 top-20 w-full h-lvh bg-gray-100 py-10">
      <ul className="flex flex-col items-center gap-5 text-md">
        <Link onClick={closeNav} href="#features" className="border-b border-b-gray-300 w-full text-center pb-5">
          <li className="font-semibold text-lg text-gray-600 cursor-pointer hover:text-chart-2">
            Features
          </li>
        </Link>
        <Link onClick={closeNav} href="#howItWorks" className="border-b border-b-gray-300 w-full text-center pb-5">
          <li className="font-semibold text-lg text-gray-600 cursor-pointer hover:text-chart-2">
            How It Works
          </li>
        </Link>
        <Link onClick={closeNav} href="#fields" className="border-b border-b-gray-300 w-full text-center pb-5">
          <li className="font-semibold text-lg text-gray-600 cursor-pointer hover:text-chart-2">
            Fields
          </li>
        </Link>
        <Link href="#about" className="border-b border-b-gray-300 w-full text-center pb-5">
          <li className="font-semibold text-lg text-gray-600 cursor-pointer hover:text-chart-2">
            About
          </li>
        </Link>
      </ul>
      <div className="flex flex-col items-center gap-10 mt-10">
        <Button
          type="bordered"
          title="Sign In"
          additionalStyles="w-1/2 !p-2"
        />
        <Button
          type="main"
          title="Sign Up"
          additionalStyles="border-none bg-chart-2 text-white !w-1/2 !p-2 !justify-center"
        />
      </div>
    </div>
  );
}
