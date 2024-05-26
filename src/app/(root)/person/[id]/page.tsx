"use client";

import Loading from "@/components/Loading";
import { fetchPerson } from "@/lib/actions/movies/fetchMovies";
import { PersonDetails } from "@/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const PersonPage = ({ params: { id } }: { params: { id: string } }) => {
  const [person, setPerson] = useState<PersonDetails>();

  useEffect(() => {
    fetchPerson(id).then((data) => setPerson(data));
  }, [id]);

  if (!person)
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <Loading />
      </div>
    );
  return (
    <div className="px-20 py-20">
      <div>
        <div className="grid grid-cols-3 gap-10">
          <div className="flex items-start justify-start flex-col space-y-5">
            <div className="flex items-center justify-center overflow-hidden">
              <Image
                src={`https://image.tmdb.org/t/p/original/${person.profile_path}`}
                alt={person.name}
                height={300}
                width={300}
              />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-bold">Personal Info</h1>
              <div>
                <h3 className="text-primary text-lg">Known for: </h3>
                <p>{person.known_for_department}</p>
              </div>
              <div>
                <h3 className="text-primary text-lg">Known credits: </h3>
                <p>{person.popularity.toFixed()}</p>
              </div>
              <div>
                <h3 className="text-primary text-lg">Birthday: </h3>
                <p>{person.birthday}</p>
              </div>
              {person.deathday && (
                <div>
                  <h3 className="text-primary text-lg">Deathday: </h3>
                  <p>{person.deathday}</p>
                </div>
              )}
              <div>
                <h3 className="text-primary text-lg">Place of birth: </h3>
                <p>{person.place_of_birth}</p>
              </div>
              <div>
                <h3 className="text-primary text-lg">Also known as: </h3>
                <div className="space-y-2">
                  {person.also_known_as.map((e) => (
                    <p key={e}>{e}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="py-3 col-span-2 space-y-4">
            <h1 className="text-3xl font-bold">{person.name}</h1>
            <div>
              <h3 className="text-primary text-lg">Biography: </h3>
              <p className="text-sm font-semibold">{person.biography}</p>
            </div>
            <div>
              <h3 className="text-primary text-lg">Known for: </h3>
              ...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonPage;
