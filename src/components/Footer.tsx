import React from "react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <div className="flex items-center justify-center p-20 border-t-2 border-t-primary">
      <div>
        <Logo />
        <p>
          Threepo uses the TMDB Api and is not released under the MIT license.
        </p>
      </div>
    </div>
  );
}
