import { cn } from "@/lib/utils";
import * as React from "react";

const Section = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <section
    ref={ref}
    className={cn(
      "bg-background px-4 py-20 text-foreground dark:bg-background-dark dark:text-foreground-dark md:px-8",
      className,
    )}
    {...props}
  />
));
Section.displayName = "Section";

export { Section };
