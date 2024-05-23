"use client";

import Loading from "@/components/Loading";
import Thumbnail from "@/components/Thumbnail";
import { searchMovies } from "@/lib/actions/movies/fetchMovies";
import { Movie } from "@/types";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";

export default function SearchPage() {
  const [movies, setMovies] = useState<Movie[]>();
  const searchTerm = useSearchParams();
  useEffect(() => {
    searchMovies(searchTerm).then((data) => setMovies(data.results));
  });
  if (!movies)
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <Loading />
      </div>
    );
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center w-full h-screen">
          <Loading />
        </div>
      }
    >
      <div className="px-10 py-20 space-y-5">
        <div>
          <h1 className="text-xl">
            Search results for{" "}
            <span className="text-primary">{searchTerm}</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 place-items-center md:grid-cols-3 lg:grid-cols-4 gap-5">
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </Suspense>
  );
}
