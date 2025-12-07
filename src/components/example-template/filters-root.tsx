import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

export const FiltersRoot = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      className={cn("flex flex-col items-center gap-2", className)}
      {...props}
    />
  );
};
