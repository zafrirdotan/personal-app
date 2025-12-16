"use client";

import Image from "next/image";
import { memo } from "react";

interface GlitchImageProps {
  showBorg: boolean;
  isGlitching: boolean;
  profileSrc?: string;
  borgSrc?: string;
  alt?: string;
  borgAlt?: string;
  onClick?: () => void;
}

export const GlitchImage = memo(function GlitchImage({
  showBorg,
  isGlitching,
  profileSrc = "/profile.jpeg",
  borgSrc = "/locutus.png",
  alt = "Zafrir Dotan",
  borgAlt = "Locutus of Borg",
  onClick,
}: GlitchImageProps) {
  return (
    <div
      className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary shadow-xl flex-shrink-0 bg-black tv-static"
      onClick={onClick}
    >
      <Image
        src={profileSrc}
        alt={alt}
        fill
        sizes="(max-width: 768px) 192px, 256px"
        className={`object-cover transition-opacity duration-700 ${
          isGlitching && !showBorg ? "glitch-effect" : ""
        } ${showBorg ? "opacity-0" : "opacity-100"}`}
        priority
      />
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700 ${
          showBorg ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src={borgSrc}
          alt={borgAlt}
          fill
          className={`object-cover ${
            isGlitching ? "glitch-effect" : "borg-eye-open"
          }`}
        />
      </div>
    </div>
  );
});
