import { Review } from "@/types/reviews";
import Image from "next/image";
import React from "react";
import avatar from "../../public/avatar.png";
import { Star } from "lucide-react";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="flex flex-col items-center gap-5 w-[80%] justify-center bg-gray-800/80 p-5 rounded-md ">
      <div className="flex items-center justify-start w-full gap-3">
        <div className="h-12 w-12 rounded-full overflow-hidden">
          <Image
            src={
              review.author_details.avatar_path
                ? `https://image.tmdb.org/t/p/original${review.author_details.avatar_path}`
                : avatar
            }
            alt=""
            height={50}
            width={50}
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-[14px]">{review.author_details.name}</p>
          <p className="text-[12px] text-gray-100">{review.updated_at}</p>
        </div>
      </div>
      <div className="space-y-3">
        <h1 className="flex flex-row gap-1 ">
          <Star className="text-yellow-500" /> {review.author_details.rating}
        </h1>
        <h1 className="text-sm">{review.content}</h1>
      </div>
    </div>
  );
}
