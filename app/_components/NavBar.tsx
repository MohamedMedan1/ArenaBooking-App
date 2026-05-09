import Link from 'next/link';
import Button from "./Button";

export default function NavBar() {
  return (
    <nav className="hidden md:flex items-center gap-6 lg:gap-12">
      <ul className="flex items-center gap-5 lg:gap-10">
        <Link href="#features"><li className="font-medium text-gray-600 cursor-pointer hover:text-chart-2">Features</li></Link>
        <Link href="#howItWorks"><li className="font-medium text-gray-600 cursor-pointer hover:text-chart-2">How It Works</li></Link>
        <Link href="#fields"><li className="font-medium text-gray-600 cursor-pointer hover:text-chart-2">Fields</li></Link>
        <Link href="#about"><li className="font-medium text-gray-600 cursor-pointer hover:text-chart-2">About</li></Link>
        
      </ul>
      <div className="flex items-center gap-4 lg:gap-8">
        <Button
          type="bordered"
          title="Sign In"
          additionalStyles="w-28 !p-1.5"
        />
        <Button
          type="main"
          title="Sign Up"
          additionalStyles="border-none bg-chart-2 text-white !w-28 !p-1.5 !justify-center"
        />
      </div>
    </nav>
  );
}
