"use client";

import { fetchReviews } from "@/lib/actions/movies/fetchMovies";
import { Review } from "@/types/reviews";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import ReviewCard from "./ReviewCard";

export default function MovieReviews({ id }: { id: string }) {
  const [reviews, setReviews] = useState<Review[]>();

  useEffect(() => {
    fetchReviews(id).then((data) => setReviews(data));
  });
  if (!reviews) return <Loading />;
  return (
    <div className="flex flex-col w-full items-center justify-center gap-6">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
}
