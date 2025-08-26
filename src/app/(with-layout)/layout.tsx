import MainWithLayout from "@/components/ui/mainWithLayout";

export default function WithLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MainWithLayout>{children}</MainWithLayout>;
}
