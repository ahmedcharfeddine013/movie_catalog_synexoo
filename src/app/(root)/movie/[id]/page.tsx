"use client";

import Loading from "@/components/Loading";
import { fetchMovie } from "@/lib/actions/movies/fetchMovies";
import { Movie } from "@/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import RecommandedMovies from "../../../../components/RecommandedMovies";
import MovieReviews from "../../../../components/MovieReviews";

export default function MoviePage({
  params: { id },
}: {
  params: { id: string };
}) {
  const [movie, setMovie] = useState<Movie | null>(null);
  useEffect(() => {
    fetchMovie(id).then((movies) => setMovie(movies));
  }, [id]);
  if (!movie) return <Loading />;
  return (
    <div className="max-w-screen h-full">
      <section className="relative flex h-screen items-center justify-center ">
        <div className="w-full max-w-screen h-full absolute left-0 top-0 z-[-50]">
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
        <div className="grid grid-cols-3 px-[200px] gap-20 ">
          <div>
            <Image
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt=""
              height={400}
              width={400}
              className="flex aspect-square h-[400px] w-[300px] object-cover"
            />
          </div>
          <div className="flex flex-col w-full col-span-2 gap-4">
            <h1 className="text-2xl font-bold">{movie.name || movie.title}</h1>
            <p>{movie.overview}</p>
            <p className="flex  gap-2">
              {" "}
              <Star className="text-yellow-500" />{" "}
              {movie.vote_average ? movie.vote_average.toFixed() : ""}{" "}
            </p>
            <p>{movie.release_date}</p>
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
