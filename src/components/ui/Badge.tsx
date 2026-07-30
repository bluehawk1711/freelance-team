import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "accent" | "outline";
  size?: "sm" | "md";
}

export function Badge({
  className,
  variant = "default",
  size = "md",
  children,
  ...props
}: BadgeProps) {
  const variantClasses = {
    default: "bg-primary/20 text-primary border border-primary/30",
    secondary: "bg-secondary/20 text-secondary border border-secondary/30",
    accent: "bg-accent/20 text-accent border border-accent/30",
    outline: "bg-transparent border border-border text-foreground",
  };

  const sizeClasses = {
    sm: "px-2.5 py-1 text-xs font-medium rounded-full",
    md: "px-3.5 py-1.5 text-sm font-medium rounded-full",
  };

  return (
    <div
      className={cn(variantClasses[variant], sizeClasses[size], className)}
      {...props}
    >
      {children}
    </div>
  );
}
