export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full flex justify-center mt-20">{children}</div>;
}
