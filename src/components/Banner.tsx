"use client";

import React, { useEffect, useState } from "react";
import { baseUrl } from "@/constants/movie";
import { Movie } from "@/types";
import Image from "next/image";
import { Play } from "lucide-react";
import { fetchTrendingNow } from "@/lib/actions/movies/fetchMovies";
import Loading from "./Loading";

interface Props {
  netflixOriginals: Movie[];
}

export default function Banner() {
  const [movies, setMovies] = useState<Movie[]>();
  const [movie, setMovie] = useState<Movie>();

  //   useEffect(() => {
  //     fetchTrendingNow().then((movies) => setMovies(movies));
  //     //   .then(() => {
  //     //     if (movies) {
  //     //       setMovie(movies[Math.floor(Math.random() * movies.length)]);
  //     //     }
  //     //   });
  //   }, [movies]);

  //   useEffect(() => {
  //     if (movies) {
  //       setMovie(movies[Math.floor(Math.random() * movies.length)]);
  //     }
  //   }, []);

  if (!movie)
    return (
      <div className="flex w-full h-screen items-center justify-center">
        <Loading />
      </div>
    );
  return (
    <div className="flex w-full h-screen items-center justify-center">
      {movie?.name}
    </div>
  );
}
