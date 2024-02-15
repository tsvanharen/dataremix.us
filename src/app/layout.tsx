import type { Metadata } from "next";
import "@/styles/global.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { baseFont } from "@/styles/fonts";

export const metadata: Metadata = {
  title: "Data/Remix",
  description: "Data-driven insights into the modern human experience.",
};

export default function LayoutRoot({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${baseFont.className} flex flex-col items-center`}>
        <Header />
        <div className="mx-auto max-w-5xl w-full">
          <main>
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
