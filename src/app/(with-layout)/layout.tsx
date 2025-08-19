import { Button } from "@/components/common/Button";
import { ReportProblem } from "@/components/ui/ReportProblem";
import { Sidebar } from "@/components/ui/Sidebar";

export default function WithLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex justify-center items-center w-full">
      <Button
        className="fixed top-0 right-0 mr-4 mt-4 hidden lg:block"
        href="login"
      >
        Login
      </Button>
      <div className="flex flex-col w-screen lg:w-[unset] z-0">{children}</div>
      <Sidebar />
      <ReportProblem />
    </div>
  );
}
