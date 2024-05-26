"use client";

import { fetchKeywords } from "@/lib/actions/movies/fetchMovies";
import { KeywordsProps } from "@/types";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function MovieKeywords({ id }: { id: string }) {
  const [keyWords, setKeywords] = useState<KeywordsProps[]>();
  useEffect(() => {
    fetchKeywords(id).then((data) => setKeywords(data.slice(0, 5)));
  });

  useGSAP(() => {
    gsap.to(".key-words", {
      opacity: 1,
      delay: 0.2,
      x: 0,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, [keyWords]);

  if (!keyWords) return <Loading />;
  return (
    <div className="flex items-center flex-wrap justify-center gap-4 flex-row">
      {keyWords.map((keyword) => (
        <div
          key={keyword.id}
          className="bg-white key-words opacity-0 text-primary rounded-none -translate-x-28  px-3 py-2"
        >
          {keyword.name}
        </div>
      ))}
    </div>
  );
}
