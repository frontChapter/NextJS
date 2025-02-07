import * as React from "react";

import { cn } from "@/lib/utils";

const Section = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <section
    ref={ref}
    className={cn(
      "bg-background px-4 md:py-8 py-12 text-foreground",
      className,
    )}
    {...props}
  />
));
Section.displayName = "Section";

export { Section };
