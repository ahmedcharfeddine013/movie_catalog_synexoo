import { Card } from "@/components/ui/card";
import { unkown_picture } from "@/constants/movie";
import { CastMember } from "@/types";
import Image from "next/image";
import React from "react";

const CastSmallCard = ({ cast }: { cast: CastMember }) => {
  return (
    <Card className="flex flex-row justify-start items-start overflow-hidden">
      <div className="w-24 h-24 justify-center items-center flex overflow-hidden">
        <Image
          src={
            `https://image.tmdb.org/t/p/original/${cast.profile_path}` ||
            unkown_picture
          }
          alt={cast.name}
          width={200}
          height={200}
        />
      </div>
      <div className="px-4">
        <p className="font-bold text-lg">{cast.name}</p>
        <p>{cast.character}</p>
      </div>
    </Card>
  );
};

export default CastSmallCard;
