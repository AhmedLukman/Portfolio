import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import SideNavigation from "@/components/ui/SideNavigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahmed Lukman | Portfolio",
  description:
    "Ahmed Lukman's portfolio showcaing his tech projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex h-screen">
            <SideNavigation />
            <main className="basis-10/12 min-h-screen overflow-y-auto">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
