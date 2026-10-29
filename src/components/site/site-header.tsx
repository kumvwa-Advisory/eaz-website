"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 80) { setVisible(true); }
      else if (y > lastY) { setVisible(false); }
      else { setVisible(true); }
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isCurrent = (href: string) => {
    if (href === "/") return pathname === "/";
    // only highlight the deepest matching nav item
    const navHrefs = NAV.flatMap((n) => [
      n.href,
      ...(n.children?.map((c) => c.href) ?? []),
    ]);
    const best = navHrefs
      .filter((h) => h !== "/" && pathname?.startsWith(h))
      .sort((a, b) => b.length - a.length)[0];
    return href === best;
  };
  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-transform duration-300 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}>
      {/* ── Row 1: Logo + utility links ── */}
      <div className="border-b border-[#e8e8e8]">
        <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link href="/" aria-label="Economics Association of Zambia — home" className="flex items-center">
            <Image src="/eaz-logo.png" alt="Economics Association of Zambia" width={200} height={60}
              className="h-[52px] w-auto object-contain" priority />
          </Link>

          {/* Desktop utility links */}
          <div className="hidden items-center gap-1 lg:flex">
            <Link href="/membership"
              className="px-4 py-2 text-[15px] font-medium text-ink transition-colors hover:text-brand">
              Become a Member
            </Link>
            <div className="h-4 w-px bg-[#d0d0d0]" />
            <Link href="/members/login"
              className="flex items-center gap-1.5 px-4 py-2 text-[15px] font-medium text-ink transition-colors hover:text-brand">
              <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor" aria-hidden>
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5 6a5 5 0 0 1 10 0H3Z" />
              </svg>
              Log In
            </Link>
            <div className="h-4 w-px bg-[#d0d0d0]" />
            <Link href="/contact-us"
              className="flex items-center gap-1.5 px-4 py-2 text-[15px] font-medium text-ink transition-colors hover:text-brand">
              <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor" aria-hidden>
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.099zm-5.242 1.656a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z" />
              </svg>
              Search
            </Link>
            <div className="h-4 w-px bg-[#d0d0d0]" />
            <Link href="/members/register"
              className="flex items-center gap-1.5 px-4 py-2 text-[15px] font-medium text-ink transition-colors hover:text-brand">
              <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor" aria-hidden>
                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2 2a5 5 0 0 0-5 5h10a5 5 0 0 0-5-5Zm5-4.5a.5.5 0 0 1 .5.5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 .5-.5Z" />
              </svg>
              Register
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button type="button" onClick={() => setOpen(true)} aria-expanded={open}
            aria-controls="mobile-menu" aria-label="Open menu"
            className="grid h-10 w-10 place-items-center lg:hidden">
            <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              <path d="M3 5.5h14M3 10h14M3 14.5h14" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── Row 2: Full-width nav ── */}
      <nav aria-label="Primary" className="hidden border-b border-[#e8e8e8] lg:block">
        <div className="mx-auto flex w-full max-w-[1320px] items-stretch px-6">
          {NAV.map((item) => {
            const current = isCurrent(item.href);
            return (
              <div key={item.href} className="group relative flex">
                <Link href={item.href} aria-current={current ? "page" : undefined}
                  className={`flex items-center gap-1 px-6 py-4 text-[16px] font-semibold whitespace-nowrap transition-colors ${
                    current ? "text-brand border-b-2 border-brand" : "text-brand-deep hover:text-brand"
                  }`}>
                  {item.label}
                  {item.children && (
                    <svg viewBox="0 0 10 6" className="h-[7px] w-[10px] opacity-60 transition-transform duration-200 group-hover:rotate-180"
                      fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                      <path d="M1 1l4 4 4-4" />
                    </svg>
                  )}
                </Link>

                {item.children && (
                  <div
                    className="dropdown-card absolute left-0 top-full z-30 w-[260px]"
                    aria-hidden
                  >
                    <ul className="overflow-hidden bg-white shadow-[0_16px_40px_-8px_rgba(0,0,0,0.2)] ring-1 ring-black/5">
                      {item.children.map((child) => (
                        <li key={child.href} className="border-b border-[#f0f0f0] last:border-0">
                          <Link href={child.href}
                            className="block px-5 py-3.5 text-[15px] font-medium text-[#444] transition-colors hover:bg-[#f2f8ee] hover:text-brand">
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="h-[5px] w-full bg-gradient-to-r from-brand to-brand-bright" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>

    </header>

      {/* ── Mobile drawer — rendered outside <header> to avoid z-index clipping ── */}
      {open && (
        <div id="mobile-menu" className="fixed inset-0 z-[200] lg:hidden" aria-modal role="dialog">
          <div onClick={() => setOpen(false)} className="absolute inset-0 bg-black/50" />
          <div className="absolute right-0 top-0 flex h-full w-[85%] max-w-[340px] flex-col bg-white shadow-2xl">
            <div className="flex h-[64px] shrink-0 items-center justify-between border-b border-[#eaeaea] px-4">
              <Image src="/eaz-logo.png" alt="" width={160} height={48} className="h-10 w-auto object-contain" />
              <button type="button" onClick={() => setOpen(false)} aria-label="Close menu"
                className="grid h-9 w-9 place-items-center border border-[#eaeaea] text-ink">
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                  <path d="M4 4l12 12M16 4L4 16" />
                </svg>
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-4" aria-label="Mobile">
              {NAV.map((item) => (
                <details key={item.href} className="group border-b border-[#eaeaea]">
                  <summary className="flex list-none items-center justify-between py-4 [&::-webkit-details-marker]:hidden">
                    <Link href={item.href} onClick={() => !item.children && setOpen(false)}
                      className={`flex-1 text-[17px] font-semibold ${isCurrent(item.href) ? "text-brand" : "text-ink"}`}>
                      {item.label}
                    </Link>
                    {item.children && (
                      <svg viewBox="0 0 10 6" className="h-2 w-3 text-muted transition-transform group-open:rotate-180"
                        fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                        <path d="M1 1l4 4 4-4" />
                      </svg>
                    )}
                  </summary>
                  {item.children && (
                    <ul className="pb-3 pl-3">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link href={child.href} onClick={() => setOpen(false)}
                            className="block border-l border-brand/30 py-2.5 pl-3 text-[15px] font-medium text-ink-soft hover:text-brand">
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </details>
              ))}
            </nav>

            <div className="shrink-0 border-t border-[#eaeaea] p-4 flex flex-col gap-2">
              <Link href="/members/register" onClick={() => setOpen(false)}
                className="flex h-11 items-center justify-center border border-brand-deep text-[13px] font-bold uppercase tracking-[0.06em] text-brand-deep">
                Register
              </Link>
              <Link href="/members/login" onClick={() => setOpen(false)}
                className="flex h-11 items-center justify-center bg-brand text-[13px] font-bold uppercase tracking-[0.06em] text-white">
                Log In
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
