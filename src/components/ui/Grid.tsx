import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
  responsive?: boolean;
}

export function Grid({
  className,
  cols = 3,
  gap = "lg",
  responsive = true,
  children,
  ...props
}: GridProps) {
  const colClasses = {
    1: "grid-cols-1",
    2: responsive ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-2",
    3: responsive
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      : "grid-cols-3",
    4: responsive
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      : "grid-cols-4",
    5: responsive
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
      : "grid-cols-5",
    6: responsive
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
      : "grid-cols-6",
  };

  const gapClasses = {
    xs: "gap-2 sm:gap-3",
    sm: "gap-3 sm:gap-4",
    md: "gap-4 sm:gap-6",
    lg: "gap-6 sm:gap-8",
    xl: "gap-8 sm:gap-10",
  };

  return (
    <div
      className={cn("grid", colClasses[cols], gapClasses[gap], className)}
      {...props}
    >
      {children}
    </div>
  );
}
