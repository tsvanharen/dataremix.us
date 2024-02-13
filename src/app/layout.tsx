import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const font = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "dataremix.us",
  description: "Data-driven insights into the modern human experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
