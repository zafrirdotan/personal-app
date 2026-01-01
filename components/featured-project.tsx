"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function FeaturedProject() {
  return (
    <section className="py-12 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI-Assisted ETL Pipeline Generator
            </h2>
            <p className="text-lg font-semibold text-primary mb-3">
              From raw data to analytics-ready storage
            </p>
            <p className="text-muted-foreground mb-4">
              An AI-assisted system that creates, validates, and executes ETL
              pipelines from CSV, JSON, and PostgreSQL sources into PostgreSQL,
              SQLite, CSV, and Parquet outputs. Pipelines are generated with
              transformations and validations, executed in Dockerized runners,
              and scheduled for repeatable daily runs.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "Python",
                "FastAPI",
                "Airflow",
                "Docker",
                "PostgreSQL",
                "MinIO",
                "LLM",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-primary/10 text-primary px-3 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Button asChild>
              <a
                href="https://github.com/zafrirdotan/Dataops-Assistant"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                View Project
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
          <div className="flex-1 order-1 md:order-2">
            <video
              className="w-full rounded-lg shadow-lg"
              controls
              preload="metadata"
              ref={(el) => {
                if (el) el.playbackRate = 1.5;
              }}
            >
              <source src="/data-ops-1.mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
