import { CastMember } from "@/types";
import React from "react";
import { Card, CardTitle } from "./ui/card";
import Image from "next/image";

const CastCard = ({ cast }: { cast: CastMember }) => {
  return (
    <Card className="flex items-center justify-center flex-col w-fit">
      <div className="w-48 h-48 overflow-hidden flex items-center justify-center">
        <Image
          alt={cast.name}
          src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
          width={200}
          height={200}
          objectFit="cover"
        />
      </div>
      <p>{cast.name}</p>
    </Card>
  );
};

export default CastCard;
