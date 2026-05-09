"use client";
import { useState } from "react";
import Container from "./Container";
import Logo from "./Logo";
import NavBar from "./NavBar";
import { HiBars3 } from "react-icons/hi2";
import MobileNav from "./MobileNav";

export default function Header() {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <header className="bg-background h-[85] border-b border-b-border w-full flex items-center fixed top-0 z-50">
      <Container>
        <div className="flex items-center justify-between">
          <Logo />
          <HiBars3
            className="md:hidden"
            size={35}
            onClick={() => setOpen((cur) => !cur)}
          />
          {isOpen && <MobileNav closeNav={() => setOpen(false)}/>}
          <NavBar />
        </div>
      </Container>
    </header>
  );
}
