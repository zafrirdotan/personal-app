"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ExternalLink,
  PlayCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = (maxIndex: number) => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentVideoIndex < maxIndex) {
      setCurrentVideoIndex((prev) => prev + 1);
    }
    if (isRightSwipe && currentVideoIndex > 0) {
      setCurrentVideoIndex((prev) => prev - 1);
    }
  };

  const projects = [
    {
      title: "DataOps Assistant",
      subtitle: "SQL ETL Co-Pilot",
      description:
        "An intelligent MLOps platform for automating ETL pipelines. Leverages LLM-powered code generation to streamline pipeline creation, testing, and scheduling. Features include automated validation, Docker orchestration, Airflow scheduling, and MinIO storage integration.",
      link: "https://github.com/zafrirdotan/Dataops-Assistant",
      videos: ["/data-ops-1.mp4", "/data-ops-2.mp4"],
      tags: [
        "Python",
        "FastAPI",
        "Airflow",
        "Docker",
        "PostgreSQL",
        "MinIO",
        "LLM",
      ],
    },
    {
      title: "AI Application",
      subtitle: "Chat, Supermarket Assistant & Test Creator",
      description:
        "A practice project for testing and exploring AI engineering concepts. Full-stack application featuring an AI-driven chatbot, an intelligent supermarket cart assistant that processes natural language requests, and automated test generation capabilities using OpenAI's GPT model.",
      link: "https://github.com/zafrirdotan/AI-App",
      tags: ["Nest.js", "Angular", "OpenAI", "TypeScript", "AI"],
    },
    {
      title: "Microservice Starter",
      subtitle: "Production-Ready Template",
      description:
        "A comprehensive microservice starter template featuring Docker Compose orchestration, event-driven architecture with Kafka, PostgreSQL database, Redis caching, and complete observability with ELK stack (Elasticsearch, Logstash, Kibana). Includes health checks, API gateway patterns, and production-ready configurations.",
      link: "https://github.com/zafrirdotan/microservice-starter",
      tags: [
        "Node.js",
        "Docker",
        "Kafka",
        "PostgreSQL",
        "Redis",
        "ELK",
        "Microservices",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-12 text-center fade-in-up ${
            isVisible ? "visible" : ""
          }`}
        >
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`flex flex-col scale-in ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                {project.subtitle && (
                  <p className="text-lg font-semibold text-foreground mt-1">
                    {project.subtitle}
                  </p>
                )}
                <CardDescription className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <p className="text-muted-foreground">{project.description}</p>
                {project.videos && project.videos.length > 0 && (
                  <div className="px-6 p-4">
                    <video
                      className="w-full rounded-lg"
                      controls
                      preload="metadata"
                    >
                      <source src={project.videos[0]} />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
                {project.videos && project.videos.length > 1 && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="link"
                        className="mt-3 p-0 h-auto"
                        onClick={() => setCurrentVideoIndex(0)}
                      >
                        <PlayCircle className="w-4 h-4 mr-2" />
                        View More Examples ({project.videos.length - 1} more)
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                      <DialogHeader>
                        <DialogTitle>{project.title} - Examples</DialogTitle>
                      </DialogHeader>
                      <div
                        className="relative mt-4 touch-pan-y"
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={() => onTouchEnd(project.videos.length - 2)}
                      >
                        <video
                          key={currentVideoIndex}
                          className="w-full rounded-lg md:h-[428.203px] h-[240px]"
                          controls
                          preload="metadata"
                        >
                          <source
                            src={project.videos.slice(1)[currentVideoIndex]}
                          />
                          Your browser does not support the video tag.
                        </video>

                        {project.videos.length > 2 && (
                          <>
                            <Button
                              variant="outline"
                              size="icon"
                              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background hidden md:flex"
                              onClick={() =>
                                setCurrentVideoIndex((prev) =>
                                  prev === 0 ? prev : prev - 1
                                )
                              }
                              disabled={currentVideoIndex === 0}
                            >
                              <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="icon"
                              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background hidden md:flex"
                              onClick={() =>
                                setCurrentVideoIndex((prev) =>
                                  prev === project.videos.length - 2
                                    ? prev
                                    : prev + 1
                                )
                              }
                              disabled={
                                currentVideoIndex === project.videos.length - 2
                              }
                            >
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </>
                        )}

                        <div className="flex justify-center items-center gap-2 mt-4">
                          <span className="text-sm text-muted-foreground">
                            Video {currentVideoIndex + 1} of{" "}
                            {project.videos.length - 1}
                          </span>
                          <div className="flex gap-1 ml-2">
                            {project.videos.slice(1).map((_, idx) => (
                              <div
                                key={idx}
                                className={`h-1.5 rounded-full transition-all ${
                                  idx === currentVideoIndex
                                    ? "w-8 bg-primary"
                                    : "w-1.5 bg-primary/30"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
