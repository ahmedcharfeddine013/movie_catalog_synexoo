"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "../providers/theme-provider";
import Footer from "@/components/Footer";
import { RecoilRoot } from "recoil";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "MouviePoo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider attribute="class" defaultTheme="dark">
        <RecoilRoot>
          <body className={inter.className}>
            <Navbar />
            {children}
            <Footer />
          </body>
        </RecoilRoot>
      </ThemeProvider>
    </html>
  );
}
