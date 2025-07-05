import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href={"/"} className="font-bold text-2xl hover:scale-110 duration-100 ease-in">
      Movie<span className="text-primary">POO</span>
    </Link>
  );
}
