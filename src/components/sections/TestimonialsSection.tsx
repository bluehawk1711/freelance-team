"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Container,
  Section,
  Heading,
  Text,
} from "@/components/ui";
import { useAppSelector } from "@/redux/hooks";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 mb-5">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const { testimonials } = useAppSelector((state) => state.testimonials);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <Section size="lg" className="relative" id="testimonials">
      <Container size="xl">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <Text
            size="sm"
            weight="semibold"
            className="uppercase tracking-widest text-primary mb-4"
          >
            Testimonials
          </Text>
          <Heading level={2} className="text-foreground">
            What Our Clients Say
          </Heading>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-none w-full md:w-[calc(50%-12px)] min-w-0"
                >
                  <div className="bg-card rounded-2xl p-8 border border-border h-full">
                    <StarRating rating={testimonial.rating} />
                    <blockquote className="mb-8">
                      <Text size="base" className="italic leading-relaxed text-foreground">
                        &quot;{testimonial.content}&quot;
                      </Text>
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-sm font-bold text-primary-foreground shrink-0">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <Text size="base" weight="semibold" className="text-foreground">
                          {testimonial.name}
                        </Text>
                        <Text size="sm" color="muted">
                          {testimonial.role}, {testimonial.company}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={scrollPrev}
              className="p-3 rounded-full border border-border hover:bg-muted transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>

            {/* Dots */}
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? "bg-primary w-8"
                      : "bg-primary/30 w-2 hover:bg-primary/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              className="p-3 rounded-full border border-border hover:bg-muted transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
