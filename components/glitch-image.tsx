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
}

export const GlitchImage = memo(function GlitchImage({
  showBorg,
  isGlitching,
  profileSrc = "/profile.jpeg",
  borgSrc = "/locutus.png",
  alt = "Zafrir Dotan",
  borgAlt = "Locutus of Borg",
}: GlitchImageProps) {
  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary shadow-xl flex-shrink-0 bg-black tv-static">
      <Image
        src={profileSrc}
        alt={alt}
        fill
        sizes="(max-width: 768px) 192px, 256px"
        className={`object-cover transition-opacity duration-200 ${
          isGlitching && !showBorg ? "glitch-effect" : ""
        } ${showBorg ? "opacity-0" : "opacity-100"}`}
        priority
      />
      {showBorg && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Image
            src={borgSrc}
            alt={borgAlt}
            fill
            className={`object-cover ${
              isGlitching ? "glitch-effect" : "borg-eye-open"
            }`}
          />
        </div>
      )}
    </div>
  );
});
