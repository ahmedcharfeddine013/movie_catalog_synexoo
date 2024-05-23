import React from "react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <div className="flex items-center justify-between p-20 border-t-2 border-t-primary">
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
