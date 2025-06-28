import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Footer from "../components/ui/Footer";
import BackgroundBeamsWrapper from "../components/wrappers/BackgroundBeamsWrapper";
import SideNav from "../components/ui/side-nav/SideNav";
import { Providers } from "./providers";
import PersonSchema from "../lib/schemas/PersonSchema";
import WebsiteSchema from "../lib/schemas/WebsiteSchema";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Ahmed Lukman | Full Stack Developer",
  description:
    "Modern, experienced full stack developer creating beautiful, high-performance, responsive web applications.",
  authors: [{ name: "Ahmed Lukman", url: "https://ahmedlukman.dev" }],
  creator: "Ahmed Lukman",
};

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

config.autoAddCss = false;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-gradient-to-r from-[#0a0e14] to-[#262c35] antialiased`}
      >
        <PersonSchema />
        <WebsiteSchema />
        <Providers>
          <div className="lg:flex">
            <SideNav />
            <div className="relative z-10 flex h-screen basis-10/12 flex-col justify-between overflow-y-auto">
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </div>
          <BackgroundBeamsWrapper />
        </Providers>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
