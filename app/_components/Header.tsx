import Container from "./Container";
import Logo from "./Logo";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="bg-background h-[85] border-b border-b-border w-full flex items-center fixed top-0 z-50">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Logo />
          </div>
          <NavBar />
        </div>
      </Container>
    </header>
  );
}
