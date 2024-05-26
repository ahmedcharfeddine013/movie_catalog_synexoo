import { Card } from "@/components/ui/card";
import { unkown_picture } from "@/constants/movie";
import { CastMember } from "@/types";
import Image from "next/image";
import React from "react";

const CastSmallCard = ({ cast }: { cast: CastMember }) => {
  return (
    <Card>
      <div>
        <Image
          src={
            `https://image.tmdb.org/t/p/original/${cast.profile_path}` ||
            unkown_picture
          }
          alt={cast.name}
        />
      </div>
      <p className="font-bold text-lg">{cast.name}</p>
      <p>{cast.character}</p>
    </Card>
  );
};

export default CastSmallCard;
