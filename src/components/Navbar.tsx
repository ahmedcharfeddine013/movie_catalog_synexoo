"use client";

import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { motion, useScroll, useSpring } from "framer-motion";

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
      className={`flex items-center justify-center w-full py-5 fixed z-50 ${
        isScrolled ? "bg-background" : ""
      }`}
    >
      <Logo />
    </motion.nav>
  );
}
