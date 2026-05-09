import Header from "../_components/Header";
import Footer from "../_components/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Header />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  );
}