"use client";

import Banner from "@/components/Banner";
import Loading from "@/components/Loading";
import { Movie } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import Row from "../../components/Row";
import { fetchTrendingNow } from "@/lib/actions/movies/fetchMovies";

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

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>();
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    fetchTrendingNow().then((movies) => setMovies(movies));
  });
  if (!movies) return <Loading />;
  return (
    <main>
      <section>
        {/* <Banner /> */}
        <Row title="idk" movies={movies} />
      </section>
    </main>
  );
}
