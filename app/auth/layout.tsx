import { ReactNode } from "react";
import Container from "../_components/Container";

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-foreground">
      <Container>{children}</Container>
    </main>
  );
}
