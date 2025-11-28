"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { href: "/", label: "Strona główna" },
  { href: "/o-fundacji", label: "O fundacji" },
  { href: "/strategia", label: "Strategia" },
  { href: "/projekty", label: "Projekty" },
  { href: "/aktualnosci", label: "Aktualności" },
  { href: "/kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-30 border-b border-primary/10 bg-sand/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-accent/15 ring-2 ring-accent/40" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Fundacja Przyjaźń bez Granic
            </p>
            <p className="text-sm text-primary/70">
              Pomorski Hub współpracy międzynarodowej
            </p>
          </div>
        </div>
        <nav className="hidden items-center gap-3 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "bg-accent text-white shadow-md shadow-accent/25"
                  : "text-primary hover:bg-primary/5"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/10 bg-white text-primary shadow-sm md:hidden"
          aria-label="Menu"
        >
          {open ? "×" : "≡"}
        </button>
      </div>
      {/* Prosty panel mobilny — nie rozbudowujemy go, żeby zachować przejrzystość. */}
      {open && (
        <div className="border-t border-primary/10 bg-white/90 px-4 pb-4 pt-2 shadow-lg md:hidden">
          <nav className="flex flex-col gap-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-full px-3 py-2 text-sm font-semibold ${
                  isActive(item.href)
                    ? "bg-accent text-white"
                    : "text-primary hover:bg-primary/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
