"use client";

import { getRecommanded } from "@/lib/actions/movies/fetchMovies";
import { Movie } from "@/types";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Thumbnail from "./Thumbnail";

export default function RecommandedMovies({ id }: { id: string }) {
  const [movies, setMovies] = useState<Movie[]>();
  const [recMovies, setRecMovies] = useState<Movie[]>();
  useEffect(() => {
    getRecommanded(id)
      .then((data) => setMovies(data))
      .then(() => setRecMovies(movies?.slice(0, 3)));
  });
  if (!movies || !recMovies) return <Loading />;
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {recMovies.map((movie) => (
        <Thumbnail key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
