import Link from "next/link";
import CircleIcon from "@/app/_components/CircleIcon";
import MainTitle from "@/app/_components/MainTitle";
import LoginForm from "@/app/_components/LoginForm";

export default function Page() {
  return (
    <div className="space-y-10">
      <div className="text-center space-y-7">
        <CircleIcon />
        <MainTitle
          title="Welcome Back"
          description="Sign in to continue booking"
          type="auth"
        />
      </div>
      <div className="w-full md:w-md md:mx-auto ">
        <LoginForm />
      </div>
      <p className="text-center text-lg text-secondary">
        Don&apos;t have an account?{" "}
        <Link href="signUp" className="font-semibold text-brand-green">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
