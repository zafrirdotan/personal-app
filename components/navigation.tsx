"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [imageOpacity, setImageOpacity] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeStart = 0;
      const fadeEnd = 400; // Same as hero fade duration

      // Calculate image opacity to match hero fade
      if (scrollY <= fadeStart) {
        setImageOpacity(0);
      } else if (scrollY >= fadeEnd) {
        setImageOpacity(1);
      } else {
        const fadeProgress = (scrollY - fadeStart) / (fadeEnd - fadeStart);
        setImageOpacity(fadeProgress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-3 relative"
            onClick={closeMenu}
          >
            <img
              src="/profile.jpeg"
              alt="Zafrir Dotan"
              className="w-10 h-10 rounded-full object-cover transition-all duration-300"
              style={{
                opacity: imageOpacity,
                transform:
                  imageOpacity > 0 ? "translateX(0)" : "translateX(-40px)",
              }}
            />
            <span
              className="text-xl font-bold transition-transform duration-300"
              style={{
                transform:
                  imageOpacity > 0 ? "translateX(0)" : "translateX(-52px)",
              }}
            >
              Zafrir Dotan
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#experience"
              className="hover:text-primary transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#contact"
              className="hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-accent rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t pt-4">
            <Link
              href="#about"
              className="hover:text-primary transition-colors px-2 py-1"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              href="#projects"
              className="hover:text-primary transition-colors px-2 py-1"
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link
              href="#experience"
              className="hover:text-primary transition-colors px-2 py-1"
              onClick={closeMenu}
            >
              Experience
            </Link>
            <Link
              href="#contact"
              className="hover:text-primary transition-colors px-2 py-1"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
