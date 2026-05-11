import Container from "@/app/_components/Container";
import EditProfileForm from "@/app/_components/EditProfileForm";
import PageHeader from "@/app/_components/PageHeader";
import { HiOutlineUserCircle } from "react-icons/hi2";

export default async function Page() {
  // const me = await getMe();
  return (
    <div className="bg-background min-h-lvh mt-21">
      <PageHeader title="Edit Profile"/>
      <Container>
        <div className="w-1/2 mx-auto mt-10 mb-20 space-y-5 bg-foreground p-7 rounded-2xl">
          <div className="flex items-center gap-5 border-b border-b-gray-200 pb-5">
            <div className="bg-brand-green-card p-3 rounded-xl">
              <HiOutlineUserCircle className="text-brand-green" size={30}/>
            </div>
            <div>
              <p className="text-lg font-semibold text-primary">Profile Information</p>
              <span className="text-secondary text-sm">Update Your Personal Information</span>
            </div>
          </div>
          <EditProfileForm />
        </div>
      </Container>
    </div>
  );
}
