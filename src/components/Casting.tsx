import { fetchCasting } from "@/lib/actions/movies/fetchMovies";
import { CastMember } from "@/types";
import React, { useEffect, useRef, useState } from "react";
import CastCard from "./CastCard";
import Loading from "./Loading";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const Casting = ({ id }: { id: string }) => {
  const [cast, setCast] = useState<CastMember[]>([]);
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(true);

  useEffect(() => {
    fetchCasting(id).then((data) => setCast(data.slice(0, 10)));
  }, [id]);

  const handleClick = (direction: string) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  if (!cast)
    return (
      <div className="flex items-center justify-center w-full">
        <Loading />
      </div>
    );

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      className=" space-y-0.5 md:space-y-2 py-5 pl-3"
    >
      <h1 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        Top Billed Cast
      </h1>
      <div className="relative group md:-md-2">
        <ArrowLeft
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
            !isMoved && "hidden"
          }`}
          onClick={() => handleClick("left")}
        />
        {!cast ? (
          <div className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2">
            <Loading />
          </div>
        ) : (
          <div
            ref={rowRef}
            className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2"
          >
            {cast.map((c) => (
              <CastCard key={c.id} cast={c} />
            ))}
          </div>
        )}
        <Link href={`/movie/${id}/casting`} className="hover:underline px-4 ">
          View all
        </Link>
        <ArrowRight
          className={`absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100`}
          onClick={() => handleClick("right")}
        />
      </div>
    </motion.div>
  );
};

export default Casting;
