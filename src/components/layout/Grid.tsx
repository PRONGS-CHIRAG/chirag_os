import { cn } from "@/lib/utils";

interface GridProps {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4 | 6;
  gap?: 4 | 6 | 8;
  className?: string;
}

const colsClasses: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
};

const gapClasses: Record<number, string> = {
  4: "gap-4",
  6: "gap-6",
  8: "gap-8",
};

export function Grid({ children, cols = 3, gap = 6, className }: GridProps) {
  return (
    <div className={cn("grid", colsClasses[cols], gapClasses[gap], className)}>
      {children}
    </div>
  );
}
