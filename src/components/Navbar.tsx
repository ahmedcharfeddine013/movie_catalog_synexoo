"use client";

import React, { Suspense, useEffect, useState } from "react";
import Logo from "./Logo";
import { motion } from "framer-motion";
import SearchMovie from "./SearchMovie";
import Loading from "./Loading";

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

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`grid grid-cols-2 md:grid-cols-3 w-full place-items-center py-5 fixed z-[999] ${
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
    </motion.nav>
  );
}
