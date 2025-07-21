// app/layout.tsx
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { personal } from "@/data";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${personal.name} – Portfolio`,
  description: personal.bio,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jetbrainsMono.className} bg-slate-50 text-slate-900`}>
        <Nav />
        <main className="w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
