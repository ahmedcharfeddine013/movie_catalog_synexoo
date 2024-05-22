import Loading from "@/components/Loading";
import { Movie } from "@/types";
import Image from "next/image";
import { useState } from "react";

interface Props {
  netflixOriginals: Movie[];
  trendingNow: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  romanceMovies: Movie[];
  documentaries: Movie[];
}

export default function Home({
  netflixOriginals,
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  romanceMovies,
  topRated,
  trendingNow,
}: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Loading />
    </main>
  );
}
