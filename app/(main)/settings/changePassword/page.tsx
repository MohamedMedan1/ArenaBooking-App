import ChangePasswordForm from "@/app/_components/ChangePasswordForm";
import Container from "@/app/_components/Container";
import PageHeader from "@/app/_components/PageHeader";
import { Metadata } from "next";
import { HiLockClosed } from "react-icons/hi2";

export const metadata: Metadata = {
  title: "Change Password",
  description: "Update your security credentials.",
};

export default async function Page() {
  return (
    <div className="min-h-lvh mt-21 bg-foreground">
      <PageHeader title="Change Password"/>
      <Container>
        <div className="w-full md:w-1/2 mx-auto mt-10 mb-20 space-y-5 bg-background p-7 rounded-2xl">
          <div className="flex items-center gap-3 border-b border-b-gray-200 pb-5">
            <div className="bg-brand-green-card p-3 rounded-xl">
              <HiLockClosed className="text-brand-green" size={25}/>
            </div>
            <p className="text-lg font-semibold text-primary">Change Password</p>
          </div>
          <ChangePasswordForm />
        </div>
      </Container>
    </div>
  );
}
