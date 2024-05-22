"use client";

import React from "react";
import Logo from "./Logo";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex items-center justify-center w-full py-5 fixed"
    >
      <Logo />
    </motion.nav>
  );
}
