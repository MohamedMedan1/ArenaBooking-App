import Container from "@/app/_components/Container";
import EditProfileForm from "@/app/_components/EditProfileForm";
import PageHeader from "@/app/_components/PageHeader";
import { getMe } from "@/app/_services/apiClients";
import { Metadata } from "next";
import { HiOutlineUserCircle } from "react-icons/hi2";

export const metadata: Metadata = {
  title: "Edit Profile",
  description: "Update your personal information and profile details.",
};

export default async function Page() {
  const me = await getMe();
  const currentFormInfo = {
    name:me.name,
    email:me.email,
    phone:me.phone,
  }

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-primary-foreground">
      <PageHeader title="Edit Profile"/>
      <Container>
        <div className="pt-16 pb-32 max-w-3xl mx-auto relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="bg-card-alpha backdrop-blur-xl border border-border-alpha p-10 rounded-[32px] shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
            <div className="relative z-10 flex items-center gap-6 border-b border-border-alpha pb-8 mb-8">
              <div className="bg-secondary-dark border border-border-alpha p-4 rounded-2xl">
                <HiOutlineUserCircle className="text-primary" size={36}/>
              </div>
              <div>
                <p className="text-2xl font-bold tracking-tight text-foreground mb-1">Profile Information</p>
                <span className="text-slate-400 text-sm font-medium uppercase tracking-widest">Update Your Personal Information</span>
              </div>
            </div>
            <div className="relative z-10">
              <EditProfileForm curData={currentFormInfo} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
