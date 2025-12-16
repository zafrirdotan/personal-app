"use client";

import { useState, useEffect, ReactNode } from "react";

interface TypewriterProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  children?: ReactNode;
  pauseAfterCharacter?: number;
  pauseDuration?: number;
  hideCursorAfter?: number;
}

export function Typewriter({
  text,
  delay = 0,
  speed = 100,
  className = "",
  children,
  pauseAfterCharacter,
  pauseDuration = 0,
  hideCursorAfter = 500,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!isStarted) return;

    if (currentIndex < text.length) {
      // Check if we should pause at this character
      const shouldPause =
        pauseAfterCharacter !== undefined &&
        currentIndex === pauseAfterCharacter;
      const currentDelay = shouldPause ? pauseDuration : speed;

      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, currentDelay);

      return () => clearTimeout(timeout);
    } else {
      // Text is complete, hide cursor after 500ms
      const hideCursorTimeout = setTimeout(() => {
        setShowCursor(false);
      }, hideCursorAfter);

      return () => clearTimeout(hideCursorTimeout);
    }
  }, [
    currentIndex,
    text,
    speed,
    isStarted,
    pauseAfterCharacter,
    pauseDuration,
    hideCursorAfter,
  ]);

  return (
    <span className={className}>
      {children}
      {displayText}
      {isStarted && showCursor && <span className="animate-blink">|</span>}
    </span>
  );
}
