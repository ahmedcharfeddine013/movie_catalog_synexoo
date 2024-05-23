import { Movie } from "@/types";
import Image from "next/image";
import React from "react";
import { Card, CardContent } from "./ui/card";
import { truncateString } from "@/lib/formatters";
import Link from "next/link";

export default function Thumbnail({ movie }: { movie: Movie }) {
  return (
    <Card
      className="relative group h-48 min-w-[240px] overflow-hidden cursor-pointer transition duration-100 ease-out  md:min-w-[300px] md:hover:scale-105"
      onClick={() => {}}
    >
      <Link href={`/movie/${movie.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${
            movie.backdrop_path || movie.poster_path
          }`}
          className="rounded-sm object-cover md:rounded"
          layout="fill"
          objectFit="conver"
          alt=""
        />
        <CardContent className="absolute -bottom-20 transition-all duration-100 ease-in group-hover:bottom-0 bg-black/70 w-full h-[40%] ">
          <div>
            <h2 className="flex items-start font-bold mt-3">
              {truncateString(movie.name) || truncateString(movie.title)}
            </h2>
            <p className="text-sm text-gray-200">
              {movie.vote_average.toFixed()}/10 rating
            </p>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}

export function MovieCardSkeleton() {
  return <Card></Card>;
}
