import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary shadow-xl flex-shrink-0">
            <Image
              src="/profile.jpeg"
              alt="Zafrir Dotan"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I&apos;m{" "}
              <span className="text-primary whitespace-nowrap">
                Zafrir Dotan
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              Full Stack Developer | Tech Enthusiast
            </p>
            <p className="text-lg mb-8 text-muted-foreground">
              Building amazing web experiences with modern technologies
            </p>
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
