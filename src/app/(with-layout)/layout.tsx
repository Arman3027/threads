import { Button } from "@/components/common/Button";
import { ReportProblem } from "@/components/ui";
import { Sidebar } from "@/components/ui";
import MainWithLayout from "@/components/ui/mainWithLayout";

export default function WithLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MainWithLayout>{children}</MainWithLayout>;
}
