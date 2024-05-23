"use client";

import React, { useEffect, useState } from "react";
import { Movie } from "@/types";
import Loading from "./Loading";
import { fetchMovie } from "@/lib/actions/movies/fetchMovies";
import Image from "next/image";

import { Outfit } from "next/font/google";
import { Button } from "./ui/button";
const outfit = Outfit({ weight: "400", subsets: ["latin"] });
import { Play } from "lucide-react";
import MovieKeywords from "./MovieKeywords";

export default function Banner() {
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    fetchMovie("693134").then((data) => setMovie(data));
  });

  if (!movie)
    return (
      <div className="flex w-full h-screen items-center justify-center">
        <Loading />
      </div>
    );
  return (
    <div
      className={`${outfit.className} relative flex w-full h-screen items-center justify-center`}
    >
      <div className="absolute z-[-50] top-0 left-0 w-full h-full">
        <Image
          src={`https://image.tmdb.org/t/p/original${
            movie.backdrop_path || movie.poster_path
          }`}
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute bottom-0 bg-black/50 z-[-40] to-transparent h-full w-full"></div>
      <div className="absolute bottom-0 bg-gradient-to-t z-[-30] from-background to-transparent h-[50%] w-full"></div>
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="flex flex-col items-center justify-center gap-6">
          <h1 className="text-[8rem]">{movie.name || movie.title}</h1>
          <h3 className="text-2xl">{movie.release_date}</h3>
          <div className="w-[80%]">
            <MovieKeywords id={movie.id.toString()} />
          </div>
        </div>
        <div>
          <Button className="rounded-none group bg-transparent border-primary border-2 text-xl p-6 flex gap-2">
            <Play className="group-hover:text-white duration-100 ease-in transition-all text-primary" />{" "}
            Watch Trailer
          </Button>
        </div>
      </div>
    </div>
  );
}
