import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rizal Center",
  description: "Filipino community center located in Chicago, IL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

// Custom fonts done as such:

// import { Geist, Geist_Mono } from "next/font/google";

// const geistSans = Geist({
// 	variable: "--font-geist-sans",
// 	subsets: ["latin"],
// });