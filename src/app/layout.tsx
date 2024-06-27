import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import SideNav from "@/components/ui/nav/SideNav";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Footer from "@/components/ui/Footer";

// Prevent Font Awesome from adding its CSS since we did it manually above
config.autoAddCss = false;

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Ahmed Lukman | Portfolio",
  description:
    "Ahmed Lukman's portfolio showcasing his tech projects and skills",
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
            <div className="basis-10/12 min-h-screen flex flex-col justify-between overflow-y-auto z-10">
              <main className=" relative rounded-tl-lg">{children}</main>
              <Footer />
            </div>
            <BackgroundBeams className="opacity-60" />
          </div>
        </Providers>
      </body>
    </html>
  );
}
