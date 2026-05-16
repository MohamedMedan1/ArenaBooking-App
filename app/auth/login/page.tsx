import Link from "next/link";
import CircleIcon from "@/app/_components/CircleIcon";
import MainTitle from "@/app/_components/MainTitle";
import LoginForm from "@/app/_components/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Log in to your account to manage your bookings.",
};

export default function Page() {
  return <LoginForm />;
}
