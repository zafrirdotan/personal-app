"use client";

import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Zafrir Dotan
          </Link>
          <div className="flex gap-6">
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
          </div>
        </div>
      </div>
    </nav>
  );
}
