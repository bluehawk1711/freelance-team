import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Heading } from "./Heading";
import { Text } from "./Text";

export interface StatCardProps extends HTMLAttributes<HTMLDivElement> {
  value: string | number;
  label: string;
  suffix?: string;
}

export function StatCard({
  value,
  label,
  suffix,
  className,
  ...props
}: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl p-6 text-center",
        "bg-gradient-to-br from-primary/10 to-secondary/10",
        "border border-primary/20",
        "transition-all duration-300 hover:shadow-lg",
        className
      )}
      {...props}
    >
      <Heading
        level={3}
        gradient
        className="text-3xl sm:text-4xl mb-2"
      >
        {value}
        {suffix && <span className="text-lg">{suffix}</span>}
      </Heading>
      <Text size="sm" color="muted">
        {label}
      </Text>
    </div>
  );
}
