"use client";
import Loading from "@/components/Loading";
import { fetchPerson } from "@/lib/actions/movies/fetchMovies";
import React, { useEffect, useState } from "react";

const PersonPage = ({ params: { id } }: { params: { id: string } }) => {
  const [person, setPerson] = useState<any>();

  useEffect(() => {
    fetchPerson(id).then((data) => setPerson(data));
  }, [id]);

  if (!person)
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <Loading />
      </div>
    );
  return <div></div>;
};

export default PersonPage;
