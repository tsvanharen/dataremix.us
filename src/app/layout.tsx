import type { Metadata } from "next";
import { Playfair_Display, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Footer from "@/components/Footer";

const baseFont = Playfair_Display({ subsets: ["latin"] });
const logoFont = Roboto_Slab({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Data|Remix",
  description: "Data-driven insights into the modern human experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${baseFont.className} flex flex-col items-center`}>
        <Header logoClassName={logoFont.className} />
        <div className="mx-auto max-w-5xl w-full flex">
          <SideBar />
          <main>
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
