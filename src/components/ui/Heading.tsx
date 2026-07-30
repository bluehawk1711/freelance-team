import { HTMLAttributes, createElement } from "react";
import { cn } from "@/lib/utils";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  gradient?: boolean;
}

export function Heading({
  level = 1,
  gradient = false,
  className,
  children,
  ...props
}: HeadingProps) {
  const headingLevels = {
    1: "text-4xl sm:text-5xl lg:text-6xl font-bold",
    2: "text-3xl sm:text-4xl lg:text-5xl font-bold",
    3: "text-2xl sm:text-3xl lg:text-4xl font-bold",
    4: "text-xl sm:text-2xl lg:text-3xl font-semibold",
    5: "text-lg sm:text-xl lg:text-2xl font-semibold",
    6: "text-base sm:text-lg lg:text-xl font-semibold",
  };

  const Tag = `h${level}` as const;

  return createElement(
    Tag,
    {
      className: cn(
        headingLevels[level],
        gradient && "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent",
        "text-balance",
        className
      ),
      ...props,
    },
    children
  );
}

export function SectionHeading({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("text-center mb-12 space-y-4", className)} {...props}>
      {children}
    </div>
  );
}
