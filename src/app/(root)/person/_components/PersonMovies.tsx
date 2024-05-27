"use client";

import Loading from "@/components/Loading";
import { fetchPersonMovies } from "@/lib/actions/movies/fetchMovies";
import { PersonMovie } from "@/types";
import React, { useEffect, useState } from "react";

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
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  );
};

export default PersonMovies;
