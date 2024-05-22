import { Movie } from "@/types";
import Image from "next/image";
import React from "react";

export default function Thumbnail({ movie }: { movie: Movie }) {
  return (
    <div
      className="relative h-28 min-w-[180px] cursor-pointer transition duration-100 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
      onClick={() => {
        // setCurrentMovie(movie)
        // setShowModal(true)
      }}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
        alt=""
      />
    </div>
  );
}
