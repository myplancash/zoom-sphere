import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZoomSphere App",
  description: "ZoomSphere isn't just another video conferencing platform; it's a transformative experience that redefines how we communicate and collaborate in the digital age.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark-2`}>{children}</body>
    </html>
  );
}
