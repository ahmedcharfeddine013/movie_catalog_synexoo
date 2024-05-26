import { CastMember } from "@/types";
import React from "react";
import { Card, CardTitle } from "./ui/card";
import Image from "next/image";
import { unkown_picture } from "@/constants/movie";

const CastCard = ({ cast }: { cast: CastMember }) => {
  return (
    <Card className="flex items-start justify-center flex-col w-fit">
      <div className="w-48 h-48 overflow-hidden flex items-center justify-center">
        <Image
          alt={cast.name}
          // to do : add unkown profile picture
          src={
            `https://image.tmdb.org/t/p/original/${cast.profile_path}` ||
            unkown_picture
          }
          width={200}
          height={200}
          objectFit="cover"
        />
      </div>
      <div className="px-3 py-2">
        <p className="font-bold">{cast.name}</p>
        <p>{cast.character}</p>
      </div>
    </Card>
  );
};

export default CastCard;
