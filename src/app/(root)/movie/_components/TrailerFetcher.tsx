"use client";
import Loading from "@/components/Loading";
import { fetchMovieTrailer } from "@/lib/actions/movies/fetchMovies";
import { Video } from "@/types";
import React, { useEffect, useState } from "react";

const TrailerFetcher = ({ id }: { id: string }) => {
  const [videos, setVideos] = useState<Video[]>();
  const [trailer, setTrailer] = useState<Video>();

  useEffect(() => {
    fetchMovieTrailer(id).then((data) => setVideos(data));
  }, [id]);

  useEffect(() => {
    if (videos) {
      const tr = videos.find((vid) => vid.type == "Trailer");
      setTrailer(tr);
    }
  }, [videos]);

  if (!trailer)
    return (
          {/* <ReactPlayer
              url={`https://www.youtube.com/watch?v=ZjrZWIISlY8&list=RDZjrZWIISlY8&start_radio=1`}
              width="100%"
              height="100%"
              style={{ position: "absolute", top: "0", left: "0" }}
              playing={playing}
              muted={muted}
            /> */}
    );

  return <div>{trailer.key}</div>;
};

export default TrailerFetcher;
