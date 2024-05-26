import { Movie } from "@/types";
import { atom } from "recoil";

export const modalState = atom({
  key: "modalState",
  default: false,
});

export const movieState = atom<Movie | null>({
  key: "movieState",
  default: null,
});
