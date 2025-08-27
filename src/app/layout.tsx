import { Provider } from "@/lib/providers";
import "@/styles/globals.css";
import { ReduxProvider } from "@/lib/providers/";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/lib/providers";

export const metadata = {
  title: "threads",
  icons: {
    icon: "/threads-img.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="font-poppins bg-[#f5f5f5] dark:bg-black font-normal"
      >
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
