"use client";

import { useState } from "react";
import { Container, Section, Heading, Text } from "@/components/ui";
import { useAppSelector } from "@/redux/hooks";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";

const PAGE_SIZE = 6;

export function PortfolioSection() {
  const { projects } = useAppSelector((state) => state.portfolio);
  const [page, setPage] = useState(0);

  const totalPages = Math.max(1, Math.ceil(projects.length / PAGE_SIZE));
  const visibleProjects = projects.slice(
    page * PAGE_SIZE,
    page * PAGE_SIZE + PAGE_SIZE,
  );

  return (
    <Section size="lg" className="relative" id="portfolio">
      <Container size="xl">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <Text
              size="sm"
              weight="semibold"
              className="uppercase tracking-widest text-primary mb-4"
            >
              Case Studies
            </Text>
            <Heading level={2} className="text-foreground">
              Selected Projects
            </Heading>
          </div>

          {totalPages > 0 && (
            <div className="hidden sm:flex items-center gap-3">
              <button
                type="button"
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                className="flex items-center justify-center w-11 h-11 rounded-full border-2 border-foreground text-foreground hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                aria-label="Previous projects"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={page === totalPages - 1}
                className="flex items-center justify-center w-11 h-11 rounded-full border-2 border-foreground text-foreground hover:bg-muted disabled:opacity-80 disabled:cursor-not-allowed transition-colors"
                aria-label="Next projects"
              >
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <a
              key={project.id}
              href={project.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              aria-label={`View ${project.title} project`}
            >
              <article className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden bg-muted" role="img" aria-label={`${project.title} project preview`}>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center px-6 text-center bg-gradient-to-br from-primary/10 to-secondary/10">
                      <Heading level={4} className="text-base text-foreground">
                        {project.title}
                      </Heading>
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <Text
                    size="xs"
                    weight="semibold"
                    className="uppercase tracking-wider text-primary mb-2"
                  >
                    {project.category}
                  </Text>
                  <Heading level={3} className="text-xl text-foreground mb-3">
                    {project.title}
                  </Heading>
                  <div className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                    View Project
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            </a>
          ))}
        </div>

        {/* Empty State */}
        {visibleProjects.length === 0 && (
          <div className="text-center py-12">
            <Text color="muted">No projects to show yet.</Text>
          </div>
        )}
      </Container>
    </Section>
  );
}
