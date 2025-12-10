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
import { ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation();
  const projects = [
    {
      title: "DataOps Assistant",
      subtitle: "SQL ETL Co-Pilot",
      description:
        "An intelligent MLOps platform for automating ETL pipelines. Leverages LLM-powered code generation to streamline pipeline creation, testing, and scheduling. Features include automated validation, Docker orchestration, Airflow scheduling, and MinIO storage integration.",
      link: "https://github.com/zafrirdotan/Dataops-Assistant",
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
