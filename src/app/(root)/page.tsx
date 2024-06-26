"use client";

import Banner from "@/components/Banner";
import Loading from "@/components/Loading";
import { Movie } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import Row from "../../components/Row";
import {
  fetchActionMovies,
  fetchComedyMovies,
  fetchDocumantaries,
  fetchRomanceMovies,
  fetchTopRated,
  fetchTrendingNow,
} from "@/lib/actions/movies/fetchMovies";

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
  return (
    <main>
      <div className="flex flex-col gap-5">
        <Banner />
        <section className=" md:space-y-4">
          <Row title="Trending Now" fetcher={fetchTrendingNow} />
          <Row title="Top Rated" fetcher={fetchTopRated} />
          <Row title="Action Thrillers" fetcher={fetchActionMovies} />
          <Row title="Comedy" fetcher={fetchComedyMovies} />
          <Row title="Romance" fetcher={fetchRomanceMovies} />
          <Row title="Documantaries" fetcher={fetchDocumantaries} />
        </section>
      </div>
    </main>
  );
}
