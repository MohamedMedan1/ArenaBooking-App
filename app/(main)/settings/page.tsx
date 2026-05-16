import Container from "@/app/_components/Container";
import DarkModeCard from "@/app/_components/DarkModeCard";
import PageHeader from "@/app/_components/PageHeader";
import SettingsCard from "@/app/_components/SettingsCard";
import { Metadata } from "next";
import {
  HiOutlineUser,
  HiMiniLockClosed,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi2";

export const metadata: Metadata = {
  title: "Settings",
  description: "Manage your account settings and preferences.",
};

export default async function Page() {
  const settings: any[] = [
    {
      id: "#11settings12edit21$",
      icon: <HiOutlineUser className="text-primary" size={25} />,
      title: "Edit Profile",
      linkURL: "/settings/editProfile",
    },
    {
      id: "11#settings12change21$",
      icon: <HiMiniLockClosed className="text-primary" size={25} />,
      title: "Change Password",
      linkURL: "/settings/changePassword",
    },
    {
      id: "11#settings12help21$",
      icon: <HiOutlineQuestionMarkCircle className="text-primary" size={25} />,
      title: "Help & Support",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <PageHeader title="Settings" />
      <Container>
        <div className="pt-16 pb-32 max-w-4xl mx-auto space-y-2 relative">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            <DarkModeCard />
            <div className="bg-card-alpha rounded-[32px] shadow-2xl relative overflow-hidden backdrop-blur-3xl border border-border-alpha">
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
              <div className="relative z-10">
                {settings.map((cur) => (
                  <SettingsCard
                    key={cur.id}
                    icon={cur.icon}
                    title={cur.title}
                    linkURL={cur.linkURL}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
