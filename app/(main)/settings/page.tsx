import Container from "@/app/_components/Container";
import DarkModeCard from "@/app/_components/DarkModeCard";
import PageHeader from "@/app/_components/PageHeader";
import SettingsCard from "@/app/_components/SettingsCard";
import {
  HiOutlineUser,
  HiMiniLockClosed,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi2";

export default async function Page() {
  const settings: any[] = [
    {
      id: "#11settings12edit21$",
      icon: <HiOutlineUser className="text-secondary" size={25} />,
      title: "Edit Profile",
      linkURL: "/settings/editProfile",
    },
    {
      id: "11#settings12change21$",
      icon: <HiMiniLockClosed className="text-secondary" size={25} />,
      title: "Change Password",
      linkURL: "/settings/changePassword",
    },
    {
      id: "11#settings12help21$",
      icon: <HiOutlineQuestionMarkCircle className="text-secondary" size={25} />,
      title: "Help & Support",
    },
  ];

  return (
    <div className="min-h-lvh mt-21 bg-foreground">
      <PageHeader title="Settings" />
      <Container>
        <div className="pt-10 pb-20 space-y-10">
          {/* DarkMode Box */}
          <DarkModeCard />
          {/* Rist of settings Box */}
          <div className="bg-background rounded-2xl divide-y divide-line">
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
      </Container>
    </div>
  );
}
