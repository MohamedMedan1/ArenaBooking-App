import Link from "next/link";
import MainTitle from "@/app/_components/MainTitle";
import CircleIcon from "@/app/_components/CircleIcon";
import RegisterForm from "@/app/_components/RegisterForm";

export default function Page() {
  return (
    <div className="space-y-10">

      <div className="text-center">
        <CircleIcon/>
        <MainTitle title="Create Account" description="Join us and start booking" type="auth"/>
      </div>

      <RegisterForm/>

      <p className="text-center text-lg text-secondary">
        Don&apos;t have an account?{" "}
        <Link href="signUp" className="font-semibold text-brand-green">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
