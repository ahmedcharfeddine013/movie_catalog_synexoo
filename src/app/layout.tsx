"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "../providers/theme-provider";
import Footer from "@/components/Footer";
import { RecoilRoot } from "recoil";
import { Suspense } from "react";
import Loading from "@/components/Loading";

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
            <Suspense fallback={<Loading />}>
              <Navbar />
              {children}
              <Footer />
            </Suspense>
          </body>
        </RecoilRoot>
      </ThemeProvider>
    </html>
  );
}
