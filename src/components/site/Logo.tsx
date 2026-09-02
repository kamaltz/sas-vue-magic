import { cn } from "@/lib/utils";

export function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl text-[0.8rem] font-bold tracking-tight",
          tone === "light"
            ? "bg-brand-foreground/15 text-brand-foreground ring-1 ring-brand-foreground/30"
            : "bg-brand text-brand-foreground",
        )}
      >
        SAS
      </span>
      <span className="leading-tight">
        <span
          className={cn(
            "block font-display text-[0.98rem] font-semibold tracking-tight",
            tone === "light" ? "text-brand-foreground" : "text-foreground",
          )}
        >
          SAS Residence
        </span>
        <span
          className={cn(
            "block text-[0.62rem] font-medium uppercase tracking-[0.16em]",
            tone === "light" ? "text-brand-foreground/70" : "text-muted-foreground",
          )}
        >
          Sindangpalay Garut
        </span>
      </span>
    </span>
  );
}
