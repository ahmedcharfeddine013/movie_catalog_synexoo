"use client";

import { Movie } from "@/types";
import React, { useEffect, useRef, useState } from "react";
import { fetchActionMovies } from "@/lib/actions/movies/fetchMovies";
import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import Thumbnail from "./Thumbnail";
import Loading from "./Loading";

interface Props {
  title: string;
  movies: Movie[];
}

export default function Row({
  title,
  fetcher,
}: {
  title: string;
  fetcher: () => Promise<Movie[]>;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetcher().then((movies) => setMovies(movies));
  }, [fetcher, movies]);

  const handleClick = (direction: string) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  if (!movies) return <Loading />;

  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h1 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        {title}
      </h1>
      <div className="relative group md:-md-2">
        <ArrowLeft
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
            !isMoved && "hidden"
          }`}
          onClick={() => handleClick("left")}
        />
        <div
          ref={rowRef}
          className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2"
        >
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>
        <ArrowRight
          className={`absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100`}
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
