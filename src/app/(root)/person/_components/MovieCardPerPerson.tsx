import { Card } from "@/components/ui/card";
import { PersonMovie } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MovieCardPerPerson = ({ movie }: { movie: PersonMovie }) => {
  return (
    <Card>
      <Link
        href={`/movie/${movie.id}`}
        className="flex  justify-start gap-4 flex-row"
      >
        <div>
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
            height={80}
            width={80}
          />
        </div>
        <div className="py-2">
          <h1 className="text-xl font-bold">{movie.title}</h1>
          <p>{movie.release_date}</p>
          <h3>{movie.character}</h3>
        </div>
      </Link>
    </Card>
  );
};

export default MovieCardPerPerson;
