"use client";

import Loading from "@/components/Loading";
import { fetchPersonMovies } from "@/lib/actions/movies/fetchMovies";
import { PersonMovie } from "@/types";
import React, { useEffect, useState } from "react";
import MovieCardPerPerson from "./MovieCardPerPerson";

const PersonMovies = ({ id }: { id: string }) => {
  const [movies, setMovies] = useState<PersonMovie[]>([]);

  useEffect(() => {
    fetchPersonMovies(id).then((data) => setMovies(data));
  });

  if (!movies)
    return (
      <div className="flex items-center justify-center w-full">
        <Loading />
      </div>
    );
  return (
    <div className="grid grid-cols-2 gap-3">
      {movies.map((movie) => (
        <MovieCardPerPerson movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default PersonMovies;
