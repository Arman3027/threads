import Provider from "@/lib/ThemeProvider";
import "@/styles/globals.css";
import { ReduxProvider } from "@/lib/ReduxProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-poppins bg-[#f5f5f5] dark:bg-black font-normal">
        <Provider>
          <ReduxProvider>{children}</ReduxProvider>
        </Provider>
      </body>
    </html>
  );
}
