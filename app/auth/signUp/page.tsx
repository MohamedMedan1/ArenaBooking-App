import Link from "next/link";
import MainTitle from "@/app/_components/MainTitle";
import CircleIcon from "@/app/_components/CircleIcon";
import RegisterForm from "@/app/_components/RegisterForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create a new account to start booking sports fields.",
};

export default function Page() {
  return <RegisterForm />;
}
