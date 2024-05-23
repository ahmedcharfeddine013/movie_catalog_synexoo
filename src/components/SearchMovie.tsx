"use client";
import React, { FormEvent, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

export default function SearchMovie() {
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center "
    >
      <Input
        placeholder="Search..."
        className="w-48 rounded-none"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <Button type="submit" className="rounded-none bg-transparent hover:bg-transparent group">
        <Search className="group-hover:text-primary duration-100 transition-all ease-in" />
      </Button>
    </form>
  );
}
