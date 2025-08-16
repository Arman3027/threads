import { Sidebar } from "@/components/ui/Sidebar";

export default function WithLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative w-screen h-screen flex justify-center items-center">
      <div>{children}</div>
      <Sidebar />
    </div>
  );
}
