export default function NavigationMenu({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <nav className="flex flex-row gap-10 justify-center items-center text-xl h-full">
      {children}
    </nav>
  );
}
