"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Typewriter } from "@/components/typewriter";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isGlitching, setIsGlitching] = useState(false);
  const [showBorg, setShowBorg] = useState(false);
  const [showBorgText, setShowBorgText] = useState(false);
  const [showJustKidding, setShowJustKidding] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    // Borg animation sequence
    // 0-6600ms: Zafrir Dotan + Senior Full-Stack text typing
    // 6600ms: Start glitch
    setTimeout(() => {
      setIsGlitching(true);
    }, 6600);

    // 7600ms: Show Locutus image and text, end glitch
    setTimeout(() => {
      setShowBorg(true);
      setShowBorgText(true);
      setIsGlitching(false);
    }, 7600);

    // 13600ms: Hide Borg text, start glitch back
    setTimeout(() => {
      setShowBorgText(false);
      setIsGlitching(true);
    }, 13600);

    // 14600ms: Back to regular image and show "Just kidding..."
    setTimeout(() => {
      setIsGlitching(false);
      setShowBorg(false);
      setShowJustKidding(true);
    }, 14600);

    // 19000ms: Show buttons (2 seconds after "Just kidding" finishes typing)
    // "Just kidding..." = 59 chars * 80ms = 4720ms, starts at 14600ms = finishes ~19320ms
    setTimeout(() => {
      setShowButtons(true);
    }, 19000);

    // Scroll fade effect and text change detection
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeStart = 0;
      const fadeEnd = 400;

      // Change text after scrolling down
      if (scrollY > 50 && !hasScrolled) {
        setHasScrolled(true);
      } else if (scrollY <= 50 && hasScrolled) {
        setHasScrolled(false);
      }

      if (scrollY <= fadeStart) {
        setOpacity(1);
      } else if (scrollY >= fadeEnd) {
        setOpacity(0);
      } else {
        const fadeProgress = (scrollY - fadeStart) / (fadeEnd - fadeStart);
        setOpacity(1 - fadeProgress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="pt-32 pb-20 px-4 transition-opacity duration-100"
      style={{ opacity }}
    >
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 h-[500px] md:h-[400px]">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary shadow-xl flex-shrink-0 bg-black tv-static">
            <Image
              src="/profile.jpeg"
              alt="Zafrir Dotan"
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
                  src="/locutus.png"
                  alt="Locutus of Borg"
                  fill
                  className={`object-cover ${
                    isGlitching ? "glitch-effect" : "borg-eye-open"
                  }`}
                />
              </div>
            )}
          </div>

          <div className="flex-1 text-center md:text-left ">
            <div className="h-[3.5rem] md:h-[5rem] lg:h-[5rem] mb-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <Typewriter
                  text="Zafrir Dotan"
                  delay={800}
                  speed={80}
                  className="text-primary whitespace-nowrap"
                />
              </h1>
            </div>
            <div className="h-[4rem] md:h-[2.25rem] mb-3">
              <p className="text-xl md:text-2xl text-foreground/90">
                <Typewriter
                  text="Senior Full-Stack and MLOps Engineer | AI Integration"
                  delay={1800}
                  speed={80}
                />
              </p>
            </div>
            <div className="h-[2rem] mb-6">
              <p className="text-base md:text-lg italic text-foreground/90 flex items-center justify-center md:justify-start gap-2">
                {showBorgText && (
                  <Typewriter
                    text="You will be assimilated, Resistance is futile..."
                    delay={0}
                    speed={80}
                  />
                )}
                {showJustKidding &&
                  (hasScrolled ? (
                    <span>
                      I&apos;m not a robot, but I do work with them 🤖
                    </span>
                  ) : (
                    <Typewriter
                      text="Just kidding, I'm not a robot, but I do work with them 🤖"
                      delay={0}
                      speed={80}
                    />
                  ))}
              </p>
            </div>
            <div
              className={`flex gap-4 justify-center md:justify-start transition-opacity duration-1000 ${
                showButtons ? "opacity-100" : "opacity-0"
              }`}
            >
              <Button size="lg" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#about">View Resume</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
