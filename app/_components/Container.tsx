export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="w-[90%] mx-auto">{children}</div>;
}
