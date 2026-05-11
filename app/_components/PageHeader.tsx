import BackBtn from "./BackBtn";
import Container from "./Container";

export default function PageHeader({ title }: { title: string }) {
  return (
    <div className="bg-linear-to-br from-[#10B981] to-[#1E3A8A] py-15">
      <Container>
        <div className="flex items-center gap-7">
          <BackBtn fixed={true} />
          <div>
            <p className="text-white text-3xl md:text-4xl font-bold mb-2">
              {title}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
