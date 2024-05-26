import { Movie } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MoviePosterHeader = ({ movie }: { movie: Movie }) => {
  return (
    <div className="w-full py-16 gap-5 flex items-start justify-start ">
      <div className="overflow-hidden flex items-center justify-center">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.poster_path || movie.backdrop_path
          }`}
          alt={movie.name || movie.title}
          objectFit="cover"
          width={150}
          height={150}
        />
      </div>
      <div className="flex items-start flex-col">
        <p>
          Casting for{" "}
          <span className="text-lg font-bold text-primary">
            {movie.title || movie.name}
          </span>
        </p>
        <Link href={`/movie/${movie.id}`} className="hover:underline">
          Back to Movie overview
        </Link>
      </div>
    </div>
  );
};

export default MoviePosterHeader;
