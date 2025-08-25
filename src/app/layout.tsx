import Provider from "@/lib/ThemeProvider";
import "@/styles/globals.css";
import { ReduxProvider } from "@/lib/ReduxProvider";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/lib/AuthProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="font-poppins bg-[#f5f5f5] dark:bg-black font-normal">
        <Provider>
          <ReduxProvider>
            <AuthProvider>
              <Toaster position="top-center" />
              {children}
            </AuthProvider>
          </ReduxProvider>
        </Provider>
      </body>
    </html>
  );
}
