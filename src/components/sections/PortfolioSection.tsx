"use client";

import { Container, Section, Heading, Text, Button } from "@/components/ui";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { setSelectedCategory } from "@/redux/slices/portfolioSlice";
import { ArrowUpRight } from "lucide-react";

const categories = ["all", "fintech", "mobile app", "e-commerce", "ai / saas", "healthtech", "architecture"];

export function PortfolioSection() {
  const dispatch = useAppDispatch();
  const { projects, selectedCategory } = useAppSelector((state) => state.portfolio);
  const activeCategory = selectedCategory || "all";

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <Section size="lg" className="relative bg-muted/30" id="portfolio">
      <Container size="xl">
        {/* Section Header */}
        <div className="mb-12">
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

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() =>
                dispatch(setSelectedCategory(category === "all" ? null : category))
              }
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <a
              key={project.id}
              href={project.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="bg-card rounded-2xl overflow-hidden border border-border transition-all duration-300 hover:shadow-lg">
                {/* Project Image Placeholder */}
                <div className="relative h-52 bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                    <Heading level={4} className="text-base text-foreground">
                      {project.title}
                    </Heading>
                  </div>
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
                  <Heading level={3} className="text-lg text-foreground mb-3">
                    {project.title}
                  </Heading>
                  <div className="inline-flex items-center gap-1 text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    View Project
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <Text color="muted">No projects found in this category.</Text>
          </div>
        )}
      </Container>
    </Section>
  );
}
