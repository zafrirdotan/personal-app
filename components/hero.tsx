"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Typewriter } from "@/components/typewriter";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 h-[500px] md:h-[400px]">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary shadow-xl flex-shrink-0">
            <Image
              src="/profile.jpeg"
              alt="Zafrir Dotan"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex-1 text-center md:text-left ">
            <div className="h-[4.5rem] md:h-[5rem] lg:h-[5rem] mb-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <Typewriter text="Hi, I'm " speed={80} />
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
                  text="Full Stack Developer | Tech Enthusiast"
                  delay={2500}
                  speed={60}
                />
              </p>
            </div>
            <div className="h-[1.75rem] mb-6">
              <p className="text-lg italic text-muted-foreground/80 flex items-center justify-center md:justify-start gap-2">
                <Typewriter
                  text="✅ I'm not a robot, but I do work with them"
                  delay={4500}
                  speed={50}
                ></Typewriter>
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
