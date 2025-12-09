"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Typewriter } from "@/components/typewriter";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isGlitching, setIsGlitching] = useState(false);
  const [showBorg, setShowBorg] = useState(false);
  const [showBorgTitle, setShowBorgTitle] = useState(false);

  useEffect(() => {
    // 0-3500ms: Hi I'm Zafrir Dotan + Full Stack Developer (regular image)
    // 3500ms: Start glitch
    setTimeout(() => {
      setIsGlitching(true);
    }, 3500);

    // 4500ms: Show Locutus image, end glitch
    setTimeout(() => {
      setShowBorg(true);
      setIsGlitching(false);
    }, 4500);

    // 5000ms: Show Borg title text
    setTimeout(() => {
      setShowBorgTitle(true);
    }, 5000);

    // 8000ms: Back to regular (stay 3 seconds: 5000-8000ms)
    setTimeout(() => {
      setShowBorg(false);
      setShowBorgTitle(false);
    }, 8000);
  }, []);

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 h-[500px] md:h-[400px]">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary shadow-xl flex-shrink-0 bg-black tv-static">
            <Image
              src="/profile.jpeg"
              alt="Zafrir Dotan"
              fill
              className={`object-cover transition-opacity duration-200 ${
                isGlitching ? "glitch-effect" : ""
              } ${showBorg ? "opacity-0" : "opacity-100"}`}
              priority
            />
            {showBorg && (
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Image
                  src="/locutus.png"
                  alt="Locutus of Borg"
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>

          <div className="flex-1 text-center md:text-left ">
            <div className="h-[4.5rem] md:h-[5rem] lg:h-[5rem] mb-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <Typewriter
                  text="Zafrir Dotan"
                  delay={800}
                  speed={80}
                  className="text-primary whitespace-nowrap"
                />
              </h1>
            </div>
            <div className="h-[2rem] md:h-[2.25rem] mb-3">
              <p className="text-xl md:text-2xl text-muted-foreground">
                <Typewriter
                  text="Full Stack Developer"
                  delay={1800}
                  speed={80}
                />
              </p>
            </div>
            <div className="h-[2rem] mb-6">
              <p className="text-base md:text-lg italic text-muted-foreground/80 flex items-center justify-center md:justify-start gap-2">
                {!showBorgTitle ? (
                  <Typewriter
                    text="✅ I'm not a robot, but I do work with them"
                    delay={5000}
                    speed={80}
                  />
                ) : (
                  <Typewriter
                    text="You will be assimilated, Resistance is futile"
                    delay={3500}
                    speed={80}
                  />
                )}
              </p>
            </div>
            <div className="flex gap-4 justify-center md:justify-start">
              <Button size="lg">Get In Touch</Button>
              <Button variant="outline" size="lg">
                View Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
