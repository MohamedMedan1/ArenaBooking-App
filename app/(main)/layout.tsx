import { Header } from "../_components/Header";
import { getToken } from "../_utils/getToken";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = await getToken();
  const isAuth = !!token;

  return (
    <div className="grid grid-rows-[auto_1fr_auto] pt-7 min-h-screen">
      <Header isAuth={isAuth} />
      <main className="relative">{children}</main>
    </div>
  );
}
