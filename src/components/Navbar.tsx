"use client";

import React, { Suspense, useEffect, useState } from "react";
import Logo from "./Logo";
import { motion } from "framer-motion";
import SearchMovie from "./SearchMovie";
import Loading from "./Loading";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#navbar", {
      opacity: 1,
      y: 0,
      delay: 1,
      ease: "power1.in",
    });
  });

  return (
    <nav
      id="navbar"
      className={`grid grid-cols-2 md:grid-cols-3 w-full place-items-center py-5 opacity-0 -translate-y-20 fixed z-[999] ${
        isScrolled ? "bg-background" : ""
      }`}
    >
      <div className="hidden md:block"></div>
      <Logo />
      <Suspense
        fallback={
          <div className="flex items-center justify-center w-full">
            <Loading />
          </div>
        }
      >
        <SearchMovie />
      </Suspense>
    </nav>
  );
}
