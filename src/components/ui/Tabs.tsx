"use client";

import * as RadixTabs from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

export const Tabs = RadixTabs.Root;

export function TabsList({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <RadixTabs.List
      className={cn(
        "flex gap-1 bg-card-bg border border-card-border rounded-xl p-1",
        className
      )}
    >
      {children}
    </RadixTabs.List>
  );
}

export function TabsTrigger({
  value,
  children,
  className,
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <RadixTabs.Trigger
      value={value}
      className={cn(
        "px-4 py-2 text-sm font-mono text-text-muted rounded-lg transition-all",
        "data-[state=active]:bg-card-bg-strong data-[state=active]:text-text-primary",
        "hover:text-text-secondary",
        className
      )}
    >
      {children}
    </RadixTabs.Trigger>
  );
}

export function TabsContent({
  value,
  children,
  className,
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <RadixTabs.Content value={value} className={cn("mt-6", className)}>
      {children}
    </RadixTabs.Content>
  );
}
