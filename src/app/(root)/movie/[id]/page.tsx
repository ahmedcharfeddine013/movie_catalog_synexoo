"use client";

import Loading from "@/components/Loading";
import { fetchMovie } from "@/lib/actions/movies/fetchMovies";
import { Movie } from "@/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Play, Star } from "lucide-react";
import RecommandedMovies from "../../../../components/RecommandedMovies";
import MovieReviews from "../../../../components/MovieReviews";
import MovieKeywords from "@/components/MovieKeywords";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function MoviePage({
  params: { id },
}: {
  params: { id: string };
}) {
  const [movie, setMovie] = useState<Movie | null>(null);
  useEffect(() => {
    fetchMovie(id).then((movies) => setMovie(movies));
  }, [id]);

  useGSAP(() => {
    gsap.to("#movie-img", {
      opacity: 1,
      scale: 1,
    });
    gsap.to("#movie-poster", {
      opacity: 1,
      scale: 1,
    });
    gsap.to("#movie-title", {
      opacity: 1,
    });
    gsap.to("#movie-overview", {
      opacity: 1,
    });
  }, [movie]);

  if (!movie)
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <Loading />
      </div>
    );
  return (
    <div className="max-w-screen h-full">
      <section className="relative flex h-full pt-20 md:h-screen items-center justify-center ">
        <div
          id="movie-img"
          className="w-full max-w-screen h-full absolute left-0 opacity-0 scale-150 top-0 z-[-50]"
        >
          <Image
            src={`https://image.tmdb.org/t/p/original${
              movie.backdrop_path || movie.poster_path
            }`}
            alt=""
            fill
            objectFit="cover"
          />
        </div>
        <div className="absolute bottom-0 bg-black/50 z-[-40] to-transparent h-full w-full"></div>
        <div className="absolute bottom-0 bg-gradient-to-t z-[-30] from-background to-transparent h-[50%] w-full"></div>
        <div className="flex flex-col md:grid md:grid-cols-3 px-[200px] gap-6 md:gap-20 ">
          <div id="movie-poster" className="opacity-0 scale-50">
            <Image
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt=""
              height={400}
              width={400}
              className="flex aspect-square h-[400px] w-[300px] object-cover"
            />
          </div>
          <div className="flex flex-col w-full items-center justify-center md:justify-start md:items-start col-span-2 gap-4">
            <h1
              id="movie-title"
              className="text-xl md:text-2xl font-bold opacity-0"
            >
              {movie.name || movie.title}
            </h1>
            <p id="movie-overview" className="text-14px md:text-sm opacity-0">
              {movie.overview}
            </p>
            <p className="flex  gap-2">
              {" "}
              <Star className="text-yellow-500" />{" "}
              {movie.vote_average ? movie.vote_average.toFixed() : ""}{" "}
            </p>
            <p>{movie.release_date}</p>
            <div className="w-full flex  justify-start">
              <MovieKeywords id={movie.id.toString()} />
            </div>
            <Button className="rounded-none group bg-transparent border-primary border-2 w-fit text-xl p-6 flex gap-2">
              <Play className="group-hover:text-white duration-100 ease-in transition-all text-primary" />{" "}
              Watch Trailer
            </Button>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-4 items-center justify-center py-5 ">
        <h1 className="font-bold text-2xl">Similar Movies</h1>
        <RecommandedMovies id={movie.id.toString()} />
      </section>
      <section className="flex flex-col gap-4 items-center justify-center py-5 ">
        <h1 className="font-bold text-2xl">Reviews</h1>
        <MovieReviews id={movie.id.toString()} />
      </section>
    </div>
  );
}
