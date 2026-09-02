import { MessageCircle } from "lucide-react";
import { waLink } from "@/data/site";

export function WhatsAppFab() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Hubungi pemasaran via WhatsApp"
      className="group fixed bottom-6 right-6 z-40 inline-flex items-center gap-0 overflow-hidden rounded-full bg-brand py-3.5 pl-4 pr-4 text-brand-foreground shadow-[var(--shadow-lift)] transition-all duration-500 hover:pr-5 animate-pulse-ring"
      style={{ transitionTimingFunction: "var(--ease-out-soft)" }}
    >
      <MessageCircle className="h-5 w-5 shrink-0" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-500 group-hover:ml-2.5 group-hover:max-w-[10rem]">
        Tanya Pemasaran
      </span>
    </a>
  );
}
