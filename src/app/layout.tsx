import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import SideNav from "@/components/ui/nav/SideNav";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

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
      <body className={poppins.className}>
        <Providers>
          <div className="flex h-screen">
            <SideNav />
            <main className="basis-10/12 rounded-tl-lg min-h-screen overflow-y-auto">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
