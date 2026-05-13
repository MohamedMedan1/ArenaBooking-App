import Link from 'next/link';
import Button from "./Button";
import { getToken } from '../_utils/getToken';

export default async function NavBar() {
  const token = await getToken();
  const isLogin = token;

  return (
    <nav className="hidden md:flex items-center gap-6 lg:gap-12">
      <ul className="flex items-center gap-5 lg:gap-10">
        <Link href="#features"><li className="font-medium text-secondary cursor-pointer hover:text-brand-green">Features</li></Link>
        <Link href="#howItWorks"><li className="font-medium text-secondary cursor-pointer hover:text-brand-green">How It Works</li></Link>
        <Link href="#fields"><li className="font-medium text-secondary cursor-pointer hover:text-brand-green">Fields</li></Link>
        <Link href="#about"><li className="font-medium text-secondary cursor-pointer hover:text-brand-green">About</li></Link>
        {isLogin && <Link href="/settings"><li className="font-medium text-secondary cursor-pointer hover:text-brand-green">Settings</li></Link>}
        
      </ul>
      {!isLogin && <div className="flex items-center gap-4 lg:gap-8">
        <Button
          type="bordered"
          title="Sign In"
          additionalStyles="w-28 !p-1.5"
        />
        <Button
          type="main"
          title="Sign Up"
          additionalStyles="border-none bg-brand-green text-primary !w-28 !p-1.5 !justify-center"
        />
      </div>
}
    </nav>
  );
}
