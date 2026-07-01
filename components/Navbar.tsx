import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CALENDLY_URL, NAV_LINKS, SITE } from "@/lib/constants";

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-ink/10 bg-paper/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5 md:px-10">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-md bg-ink">
            <Image
              src="/logo.png"
              alt=""
              width={36}
              height={36}
              className="h-full w-full object-cover"
              priority
            />
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-ink">
            {SITE.name}
          </span>
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Button
          href={CALENDLY_URL}
          external
          className="px-4 py-2 text-sm md:px-5 md:py-2.5"
        >
          Book call
        </Button>
      </nav>
    </header>
  );
}
