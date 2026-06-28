import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CALENDLY_URL, NAV_LINKS, SITE } from "@/lib/constants";

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 md:px-8">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-slate-900"
        >
          {SITE.name}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Button href={CALENDLY_URL} external className="px-4 py-2 text-sm md:px-6 md:py-3">
          Book call
        </Button>
      </nav>
    </header>
  );
}
