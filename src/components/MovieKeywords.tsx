"use client";

import { fetchKeywords } from "@/lib/actions/movies/fetchMovies";
import { KeywordsProps } from "@/types";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";

export default function MovieKeywords({ id }: { id: string }) {
  const [keyWords, setKeywords] = useState<KeywordsProps[]>();
  useEffect(() => {
    fetchKeywords(id).then((data) => setKeywords(data.slice(0,5)));
  });
  if (!keyWords) return <Loading />;
  return (
    <div className="flex items-center flex-wrap justify-center gap-4 flex-row">
      {keyWords.map((keyword) => (
        <div
          key={keyword.id}
          className="bg-white text-primary rounded-none  px-3 py-2"
        >
          {keyword.name}
        </div>
      ))}
    </div>
  );
}
