"use client";

import Loading from "@/components/Loading";
import { fetchMovie } from "@/lib/actions/movies/fetchMovies";
import { Movie } from "@/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";

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
    <div>
      <section className="relative">
        {/* <div className="w-screen h-screen absolute left-0 top-0">
          <Image src={movie.poster_path} alt="" fill />
        </div> */}
        <div>{movie.id}</div>
      </section>
    </div>
  );
}
