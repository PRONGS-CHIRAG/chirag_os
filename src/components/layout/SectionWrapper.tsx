import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  background?: "primary" | "secondary" | "tertiary";
}

const bgClasses = {
  primary: "bg-background-primary",
  secondary: "bg-background-secondary",
  tertiary: "bg-background-tertiary",
};

export function SectionWrapper({
  id,
  children,
  className,
  background = "primary",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-28", bgClasses[background], className)}
    >
      {children}
    </section>
  );
}
