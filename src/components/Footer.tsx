import React from "react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <div className="flex items-center flex-col md:flex-row gap-5 justify-between p-20 border-t-2">
      <div>
        <Logo />
        <p>
          Threepo uses the TMDB Api and is not released under the MIT license.
        </p>
      </div>
      <div>© Designed and developed by Ahmed Charfeddine</div>
    </div>
  );
}
