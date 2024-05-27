"use client";

import { Movie } from "@/types";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Modal } from "@mui/material";
import { Button } from "@/components/ui/button";
import MuiModal from "@mui/material/Modal";
import { X } from "lucide-react";
import { Play } from "lucide-react";
import { Plus } from "lucide-react";
import { ThumbsUp } from "lucide-react";
import { Volume } from "lucide-react";
import { Volume2 } from "lucide-react";

const TrailerPlayer = ({ movie }: { movie: Movie }) => {
  const [open, setOpen] = useState(false);
  const [muted, setMuted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button
        onClick={handleOpen}
        className="rounded-none group bg-transparent border-primary border-2 text-xl p-6 flex gap-2"
      >
        <Play className="group-hover:text-white duration-100 ease-in transition-all text-primary" />{" "}
        Watch Trailer
      </Button>
      <MuiModal
        open={open}
        onClose={handleClose}
        className="fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll scrollbar-hide "
      >
        <>
          <button
            onClick={handleClose}
            className="flex items-center justify-center rounded-full absolute right-5 top-5 !z-40 h-9 w-9 border-none  hover:bg-[#181818] "
          >
            <X className="h-6 w-6" />
          </button>
          <div className="relative pt-[56.25%]">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=ZjrZWIISlY8&list=RDZjrZWIISlY8&start_radio=1`}
              width="100%"
              height="100%"
              style={{ position: "absolute", top: "0", left: "0" }}
              playing={playing}
              muted={muted}
            />
            <div className="absolute bottom-10 flex w-full items-center justify-between px-10">
              <div className="flex space-x-2">
                <button
                  onClick={() => setPlaying(!playing)}
                  className="flex items-center gap-x-2 rounded bg-white px-8 text-xl font-bold text-black transition hover:bg-[#e6e6e6]"
                >
                  <Play className="h-6 w-6 text-black" /> Play
                </button>
              </div>
              <button onClick={() => setMuted(!muted)} className="modalButton">
                {muted ? (
                  <Volume className="h-6 w-6" />
                ) : (
                  <Volume2 className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </>
      </MuiModal>
    </div>
  );
};

export default TrailerPlayer;
