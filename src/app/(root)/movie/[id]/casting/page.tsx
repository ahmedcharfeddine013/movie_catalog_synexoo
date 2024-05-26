"use client";

import Loading from "@/components/Loading";
import { fetchCasting, fetchMovie } from "@/lib/actions/movies/fetchMovies";
import { CastMember, Movie } from "@/types";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import MoviePosterHeader from "./_components/MoviePosterHeader";
import CastSmallCard from "./_components/CastSmallCard";

const CastingPage = () => {
  const { id } = useParams();
  const [cast, setCast] = useState<CastMember[]>([]);
  const [movie, setMovie] = useState<Movie>();
  const [crew, setCrew] = useState<CastMember[]>([]);

  useEffect(() => {
    fetchMovie(id.toString()).then((data) => setMovie(data));
    fetchCasting(id.toString()).then((data) => setCast(data));
  });

  if (!cast || !movie)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  return (
    <div>
      <MoviePosterHeader movie={movie} />
      <div className="flex items-start justify-center gap-10">
        <div className="flex items-center justify-center gap-4">
          <h1 className="font-bold text-xl">Crew</h1>
          {cast.map((c) => (
            <CastSmallCard cast={c} key={c.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CastingPage;
