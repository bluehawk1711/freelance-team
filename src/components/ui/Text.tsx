import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: "xs" | "sm" | "base" | "lg" | "xl";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold";
  color?: "foreground" | "muted" | "accent" | "primary" | "secondary";
}

export function Text({
  size = "base",
  weight = "normal",
  color = "foreground",
  className,
  children,
  ...props
}: TextProps) {
  const sizeClasses = {
    xs: "text-xs leading-5",
    sm: "text-sm leading-6",
    base: "text-base leading-7",
    lg: "text-lg leading-8",
    xl: "text-xl leading-9",
  };

  const weightClasses = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  const colorClasses = {
    foreground: "text-foreground",
    muted: "text-muted-foreground",
    accent: "text-accent",
    primary: "text-primary",
    secondary: "text-secondary",
  };

  return (
    <p
      className={cn(
        sizeClasses[size],
        weightClasses[weight],
        colorClasses[color],
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
