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
  const [otherCrew, setOtherCrew] = useState<CastMember[]>([]);

  useEffect(() => {
    fetchMovie(id.toString()).then((data) => setMovie(data));
    fetchCasting(id.toString()).then((data) => setCast(data));
  });

  useEffect(() => {
    if (cast) {
      const filteredCrew = cast.filter(
        (c) => (c.known_for_department = "Acting")
      );
      setCrew(filteredCrew);
    }
  }, [cast]);

  useEffect(() => {
    if (cast) {
      const filterOtherCrew = cast.filter(
        (c) => c.known_for_department != "Acting"
      );
      setOtherCrew(filterOtherCrew);
    }
  }, [cast]);

  if (!cast || !movie)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  return (
    <div>
      <MoviePosterHeader movie={movie} />
      <div className="flex items-start justify-start px-20 gap-10">
        <div className="flex items-start flex-col justify-start gap-4">
          <h1 className="font-bold text-xl">
            Cast <span>{crew.length}</span>
          </h1>
          <div className="flex flex-col gap-4">
            {crew.map((c) => (
              <CastSmallCard cast={c} key={c.id} />
            ))}
          </div>
        </div>
        <div className="flex items-start flex-col justify-start gap-4">
          <h1 className="font-bold text-xl">
            Crew <span>{otherCrew.length}</span>
          </h1>
          <div className="flex flex-col gap-4">
            {otherCrew.map((c) => (
              <CastSmallCard cast={c} key={c.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CastingPage;
