import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const FloatingInput = forwardRef<HTMLInputElement, FloatingInputProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          ref={ref}
          className={cn(
            "peer w-full px-4 py-3 border rounded-lg bg-transparent outline-none",
            "border-border focus:border-primary transition-colors",
            "disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          placeholder=" "
          {...props}
        />
        <label
          className={cn(
            "absolute left-4 top-3 text-muted-foreground",
            "transition-all duration-200 pointer-events-none",
            "peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs",
            "peer-focus:bg-background peer-focus:px-1 peer-focus:text-primary",
            "peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3",
            "peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-background",
            "peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:text-primary"
          )}
        >
          {label}
        </label>
      </div>
    );
  }
);

FloatingInput.displayName = "FloatingInput";
