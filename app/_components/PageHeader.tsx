import BackBtn from "./BackBtn";
import Container from "./Container";

export default function PageHeader({ title }: { title: string }) {
  return (
    <div className="bg-background border-b border-border-alpha py-12 relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-[-50px] left-1/4 w-[300px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
      
      <Container>
        <div className="flex items-center gap-7 relative z-10">
          <BackBtn fixed={true} />
          <div>
            <h1 className="text-foreground text-4xl md:text-5xl font-black italic tracking-tighter uppercase">
              {title}
            </h1>
          </div>
        </div>
      </Container>
    </div>
  );
}
