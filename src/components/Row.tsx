"use client";

import { Movie } from "@/types";
import React, { useEffect, useRef, useState } from "react";
import { fetchActionMovies } from "@/lib/actions/movies/fetchMovies";
import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import Thumbnail from "./Thumbnail";

interface Props {
  title: string;
  movies: Movie[];
}

export default function Row() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetchActionMovies().then((movies) => setMovies(movies));
  });

  if (!movies) return <p>loading...</p>;

  return (
    <div>
      {movies.map((movie) => (
        <Thumbnail key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
