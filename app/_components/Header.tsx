
import Container from "./Container";
import Logo from "./Logo";
import NavBar from "./NavBar";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="bg-background h-[85] border-b border-b-foreground w-full flex items-center fixed top-0 z-50">
      <Container>
        <div className="flex items-center justify-between">
          <Logo />
          <MobileNav/>
          <NavBar />
        </div>
      </Container>
    </header>
  );
}
