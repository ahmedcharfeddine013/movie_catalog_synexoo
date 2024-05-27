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
import { useRecoilState } from "recoil";
import { modalState, movieState } from "@/atoms/modalAtoms";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import TrailerPlayer from "@/app/(root)/movie/_components/TrailerPlayer";

export default function Banner() {
  const [movie, setMovie] = useState<Movie>();
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  useEffect(() => {
    fetchMovie("693134").then((data) => setMovie(data));
  });

  useGSAP(() => {
    gsap.to("#img-banner", {
      opacity: 1,
      delay: 0.5,
      scale: 1,
    });
    gsap.to("#movie-title", {
      opacity: 1,
      delay: 0.3,
      scale: 1,
    });
    gsap.to("#movie-release-date", {
      opacity: 1,
      delay: 0.8,
    });
  }, [movie]);

  if (!movie)
    return (
      <div className="flex w-full h-screen items-center justify-center">
        <Loading />
      </div>
    );

  return (
    <div
      className={`${outfit.className} relative flex w-full h-screen items-center justify-center overflow-hidden`}
    >
      <div
        id="img-banner"
        className="absolute z-[-50] opacity-0 scale-150 top-0 left-0 w-full h-full"
      >
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
          <h1
            className="text-4xl lg:text-[8rem] scale-50 opacity-0 "
            id="movie-title"
          >
            {movie.name || movie.title}
          </h1>
          <h3 className="text-xl lg:text-2xl opacity-0" id="movie-release-date">
            {movie.release_date}
          </h3>
          <div className="w-[80%]">
            <MovieKeywords id={movie.id.toString()} />
          </div>
        </div>
        <div>
         
          <TrailerPlayer movie={movie} />
        </div>
      </div>
    </div>
  );
}
