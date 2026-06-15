import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RR Athleisure — Premium Sports Apparel",
  description:
    "Discover RR Athleisure's premium sports collection for men and women. Performance sportswear crafted for champions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#0d0d0d] text-white">
        {children}
      </body>
    </html>
  );
}
