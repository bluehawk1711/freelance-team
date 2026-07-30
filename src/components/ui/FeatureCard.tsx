import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Heading } from "./Heading";
import { Text } from "./Text";

export interface FeatureCardProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
  title: string;
  description: string;
  badge?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  badge,
  className,
  ...props
}: FeatureCardProps) {
  return (
    <Card className={cn("flex flex-col p-6 hover:shadow-md transition-shadow", className)} {...props}>
      {icon && (
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
          {icon}
        </div>
      )}
      <div className="flex-1">
        <div className="flex items-start justify-between mb-2">
          <Heading level={4} className="text-xl">
            {title}
          </Heading>
          {badge && (
            <span className="inline-block ml-2 px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary">
              {badge}
            </span>
          )}
        </div>
        <Text size="sm" color="muted">
          {description}
        </Text>
      </div>
    </Card>
  );
}
