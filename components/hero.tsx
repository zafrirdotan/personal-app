"use client";

import { Button } from "@/components/ui/button";
import { Typewriter } from "@/components/typewriter";
import { GlitchImage } from "@/components/glitch-image";
import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { Download } from "lucide-react";

// Image configuration
const profileImage = "/profile.jpeg";
const borgImage = "/locutus.png";

// Scroll configuration
const scrollConfig = {
  textChangeThreshold: 50,
  fadeStart: 0,
  fadeEnd: 400,
};

// Animation configuration
const animationConfig = {
  name: {
    text: "Zafrir Dotan",
    startTime: 0,
    speed: 60,
    hideCursorAfter: 1000,
  },
  subtitle: {
    text: "Senior Full-Stack and MLOps Engineer | AI Integration",
    startTime: 0, // Will be calculated
    speed: 40,
    hideCursorAfter: 1000,
  },
  borgText: {
    text: "You will be assimilated, Resistance is futile...",
    startTime: 0,
    speed: 50,
    pauseAfterCharacter: 24, // Pause after "You will be assimilated"
    pauseDuration: 700,
    hideCursorAfter: 2500,
  },
  justKidding: {
    text: "Naaa... just kidding, I'm not a robot, but I do work with them 🤖",
    startTime: 0,
    speed: 50,
    pauseAfterCharacter: 39, // Pause after "Naaa... just kidding, I'm not a robot"
    pauseDuration: 700,
    hideCursorAfter: 500,
  },
  glitch: {
    startTime: 0,
    duration: 1000,
  },
  borgDisplay: {
    duration: 4500,
  },
  justKiddingDisplay: {
    startDelay: 500,
  },
  buttons: {
    startDelay: 2000,
  },
};

// Calculate animation timeline
const nameTypingDuration =
  animationConfig.name.text.length * animationConfig.name.speed +
  animationConfig.name.hideCursorAfter;
animationConfig.subtitle.startTime = nameTypingDuration;

const subtitleTypingDuration =
  animationConfig.subtitle.text.length * animationConfig.subtitle.speed +
  animationConfig.subtitle.hideCursorAfter;
const glitchStartTime =
  animationConfig.subtitle.startTime + subtitleTypingDuration + 500; // 500ms pause after subtitle

const justKiddingTypingDuration =
  animationConfig.justKidding.text.length * animationConfig.justKidding.speed +
  animationConfig.justKidding.pauseDuration +
  animationConfig.justKidding.hideCursorAfter;

const showBorgTime = glitchStartTime + animationConfig.glitch.duration;
const hideBorgTextTime = showBorgTime + animationConfig.borgDisplay.duration;
const showJustKiddingTime =
  hideBorgTextTime + animationConfig.justKiddingDisplay.startDelay;
const backToRegularImageTime = showJustKiddingTime + justKiddingTypingDuration;
const showButtonsTime =
  backToRegularImageTime + animationConfig.buttons.startDelay;

export default function Hero() {
  const [isGlitching, setIsGlitching] = useState(false);
  const [showBorg, setShowBorg] = useState(false);
  const [showBorgText, setShowBorgText] = useState(false);
  const [showJustKidding, setShowJustKidding] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [allowManualGlitch, setAllowManualGlitch] = useState(false);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  // Scroll fade effect and text change detection
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;

    // Change text after scrolling down
    if (scrollY > scrollConfig.textChangeThreshold && !hasScrolled) {
      setHasScrolled(true);
    }

    if (scrollY <= scrollConfig.fadeStart) {
      setOpacity(1);
    } else if (scrollY >= scrollConfig.fadeEnd) {
      setOpacity(0);
    } else {
      const fadeProgress =
        (scrollY - scrollConfig.fadeStart) /
        (scrollConfig.fadeEnd - scrollConfig.fadeStart);
      setOpacity(1 - fadeProgress);
    }
  }, [hasScrolled]);

  useEffect(() => {
    // Animation sequence (runs once on mount)
    timeoutsRef.current.push(
      setTimeout(() => {
        setIsGlitching(true);
      }, glitchStartTime)
    );

    timeoutsRef.current.push(
      setTimeout(() => {
        setShowBorg(true);
        setShowBorgText(true);
      }, glitchStartTime + 500)
    );

    timeoutsRef.current.push(
      setTimeout(() => {
        setIsGlitching(false);
      }, showBorgTime)
    );

    timeoutsRef.current.push(
      setTimeout(() => {
        setShowBorgText(false);
      }, hideBorgTextTime)
    );

    timeoutsRef.current.push(
      setTimeout(() => {
        setShowJustKidding(true);
      }, showJustKiddingTime)
    );

    timeoutsRef.current.push(
      setTimeout(() => {
        setIsGlitching(true);
      }, backToRegularImageTime)
    );

    timeoutsRef.current.push(
      setTimeout(() => {
        setShowBorg(false);
      }, backToRegularImageTime + 500)
    );

    timeoutsRef.current.push(
      setTimeout(() => {
        setIsGlitching(false);
      }, backToRegularImageTime + 1500)
    );

    timeoutsRef.current.push(
      setTimeout(() => {
        setShowButtons(true);
        setAllowManualGlitch(true);
      }, showButtonsTime)
    );

    return () => {
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const sectionStyle = useMemo(() => ({ opacity }), [opacity]);

  const toggleBorgTransition = () => {
    // Start glitch effect
    setIsGlitching(true);

    // After glitch, change image
    setTimeout(() => {
      setShowBorg(!showBorg);
    }, 500);

    // End glitch effect
    setTimeout(() => {
      setIsGlitching(false);
    }, 1500);
  };

  return (
    <section
      className="pt-32 pb-20 px-4 transition-opacity duration-100"
      style={sectionStyle}
    >
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 min-h-[600px] md:h-[400px]">
          <GlitchImage
            showBorg={showBorg}
            isGlitching={isGlitching}
            profileSrc={profileImage}
            borgSrc={borgImage}
            onClick={allowManualGlitch ? toggleBorgTransition : undefined}
          />

          <div className="flex-1 text-center md:text-left ">
            <div className="h-[3.5rem] md:h-[5rem] lg:h-[5rem] mb-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <Typewriter
                  text={animationConfig.name.text}
                  delay={animationConfig.name.startTime}
                  speed={animationConfig.name.speed}
                  hideCursorAfter={animationConfig.name.hideCursorAfter}
                  className="text-primary whitespace-nowrap"
                />
              </h1>
            </div>
            <div className="h-[4rem] md:h-[2.25rem] mb-3">
              <p className="text-xl md:text-2xl text-foreground/90">
                <Typewriter
                  text={animationConfig.subtitle.text}
                  delay={animationConfig.subtitle.startTime}
                  speed={animationConfig.subtitle.speed}
                  hideCursorAfter={animationConfig.subtitle.hideCursorAfter}
                />
              </p>
            </div>
            <div className="h-[4rem] mb-6">
              <p className="text-base md:text-lg italic text-foreground/90 flex items-center justify-center md:justify-start gap-2">
                {showBorgText && (
                  <Typewriter
                    text={animationConfig.borgText.text}
                    delay={animationConfig.borgText.startTime}
                    speed={animationConfig.borgText.speed}
                    pauseAfterCharacter={
                      animationConfig.borgText.pauseAfterCharacter
                    }
                    pauseDuration={animationConfig.borgText.pauseDuration}
                    hideCursorAfter={animationConfig.borgText.hideCursorAfter}
                  />
                )}
                {showJustKidding &&
                  (hasScrolled ? (
                    <span>
                      I&apos;m not a robot, but I do work with them 🤖
                    </span>
                  ) : (
                    <Typewriter
                      text={animationConfig.justKidding.text}
                      delay={animationConfig.justKidding.startTime}
                      speed={animationConfig.justKidding.speed}
                      pauseAfterCharacter={
                        animationConfig.justKidding.pauseAfterCharacter
                      }
                      pauseDuration={animationConfig.justKidding.pauseDuration}
                      hideCursorAfter={
                        animationConfig.justKidding.hideCursorAfter
                      }
                    />
                  ))}
              </p>
            </div>
            <div
              className={`flex flex-wrap gap-4 justify-center md:justify-start transition-opacity duration-1000 mt-20 md:mt-0 ${
                showButtons ? "opacity-100" : "opacity-0"
              }`}
            >
              <Button size="lg" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#about">View Resume</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="/Zafrir_Dotan_Resume.pdf"
                  download="Zafrir_Dotan_Resume.pdf"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
