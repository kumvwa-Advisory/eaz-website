"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const isCurrent = (href: string) =>
    pathname === href || (href !== "/" && pathname?.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-t border-brand-deep bg-white">
      <div className="mx-auto w-full max-w-[1320px] px-4">

        {/* ── Mobile bar ── */}
        <div className="flex h-[68px] items-center justify-between lg:hidden">
          <Link href="/" aria-label="Economics Association of Zambia — home" className="flex items-center">
            <Image src="/eaz-logo.png" alt="" width={190} height={56} className="h-12 w-auto object-contain" priority />
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="/members/register"
              aria-label="Register"
              className="grid h-9 w-9 place-items-center rounded-[3px] border border-brand-deep text-brand-deep"
            >
              <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor" aria-hidden>
                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2 2a5 5 0 0 0-5 5h10a5 5 0 0 0-5-5Zm5-4.5a.5.5 0 0 1 .5.5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 .5-.5Z" />
              </svg>
            </Link>
            <Link
              href="/members/login"
              aria-label="Member login"
              className="grid h-9 w-9 place-items-center rounded-[3px] bg-brand-deep text-white"
            >
              <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor" aria-hidden>
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5 6a5 5 0 0 1 10 0H3Z" />
              </svg>
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Open menu"
              className="grid h-9 w-9 place-items-center border border-rule text-ink"
            >
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                <path d="M3 5.5h14M3 10h14M3 14.5h14" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── Desktop bar: logo left, utility row + menu row right ── */}
        <div className="hidden items-stretch lg:flex px-15">
          <Link
            href="/"
            aria-label="Economics Association of Zambia — home"
            className="flex shrink-0 items-center py-3 pr-8"
          >
            <Image
              src="/eaz-logo.png"
              alt="Economics Association of Zambia"
              width={210}
              height={68}
              priority
              className={`w-auto object-contain transition-[height] duration-300 ${
                scrolled ? "h-[46px]" : "h-[68px]"
              }`}
            />
          </Link>

          <div className="ml-auto flex flex-col items-end">
            {/* Utility row */}
            <div
              className={`flex items-center gap-4 overflow-hidden transition-all duration-300 ${
                scrolled ? "h-0 opacity-0" : "h-[32px] opacity-100"
              }`}
            >
              <Link
                href="/contact-us"
                className="text-[13px] text-[#6c757d] transition-colors hover:text-brand"
              >
                Contact Us
              </Link>
              <div className="h-3.5 w-px bg-[#e0e0e0]" />
              <Link
                href="/members/register"
                className="flex items-center gap-1.5 rounded-[4px] border border-[#cad4e5] px-3.5 py-1 text-[13px] font-medium text-ink transition-colors hover:border-brand hover:text-brand"
              >
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
                  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2 2a5 5 0 0 0-5 5h10a5 5 0 0 0-5-5Zm5-4.5a.5.5 0 0 1 .5.5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 .5-.5Z" />
                </svg>
                Register
              </Link>
              <Link
                href="/members/login"
                className="flex items-center gap-1.5 rounded-[4px] bg-brand px-3.5 py-1 text-[13px] font-medium text-white"
              >
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5 6a5 5 0 0 1 10 0H3Z" />
                </svg>
                Login
              </Link>
            </div>

            {/* Menu row */}
            <nav
              aria-label="Primary"
              className={`flex items-stretch transition-[height] duration-300 ${
                scrolled ? "h-[56px]" : "h-[61px]"
              }`}
            >
              {NAV.map((item) => {
                const current = isCurrent(item.href);

                return (
                  <div
                    key={item.href}
                    className="group relative flex"
                    onMouseEnter={() => item.children && setOpenMenu(item.href)}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    <Link
                      href={item.href}
                      aria-current={current ? "page" : undefined}
                      className={`flex items-center gap-1 font-medium whitespace-nowrap px-[13px] text-[15px] transition-colors ${
                        current ? "text-brand" : "text-ink hover:text-brand"
                      }`}
                    >
                      {item.label}
                      {item.children && (
                        <svg
                          viewBox="0 0 10 6"
                          className={`h-[7px] w-[10px] opacity-50 transition-transform duration-200 group-hover:rotate-180`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          aria-hidden
                        >
                          <path d="M1 1l4 4 4-4" />
                        </svg>
                      )}
                    </Link>

                    {item.children && openMenu === item.href && (
                      <div className="absolute right-0 top-full z-20 w-[240px] overflow-hidden rounded-[4px] bg-white shadow-[0_12px_40px_-8px_rgba(0,0,0,0.18),0_2px_8px_-2px_rgba(0,0,0,0.08)]">
                        <ul>
                          {item.children.map((child) => (
                            <li key={child.href} className="border-b border-[#f0f0f0] last:border-0">
                              <Link
                                href={child.href}
                                className="block px-5 py-3 text-[14px] text-[#444] transition-colors hover:bg-[#f7f8f6] hover:text-brand"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-[86%] max-w-[340px] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-[68px] shrink-0 items-center justify-between border-b border-rule px-4">
            <Image src="/eaz-logo.png" alt="" width={170} height={50} className="h-11 w-auto object-contain" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid h-9 w-9 place-items-center border border-rule text-ink"
            >
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                <path d="M4 4l12 12M16 4L4 16" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-4" aria-label="Mobile">
            {NAV.map((item) => (
              <details key={item.href} className="group border-b border-rule">
                <summary className="flex list-none items-center justify-between py-3.5 [&::-webkit-details-marker]:hidden">
                  <Link
                    href={item.href}
                    onClick={() => !item.children && setOpen(false)}
                    className={`flex-1 text-[17px] font-semibold ${
                      isCurrent(item.href) ? "text-brand" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <svg
                      viewBox="0 0 10 6"
                      className="h-2 w-3 text-muted transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden
                    >
                      <path d="M1 1l4 4 4-4" />
                    </svg>
                  )}
                </summary>
                {item.children && (
                  <ul className="pb-3 pl-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block border-l border-gold/40 py-2 pl-3 text-[15px] font-medium text-ink-soft hover:text-brand"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </details>
            ))}
          </nav>

          <div className="shrink-0 border-t border-rule p-4 flex flex-col gap-2">
            <Link
              href="/members/register"
              onClick={() => setOpen(false)}
              className="flex h-11 items-center justify-center gap-2 rounded-[3px] border border-brand-deep text-[13px] font-bold uppercase tracking-[0.06em] text-brand-deep"
            >
              <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor" aria-hidden>
                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2 2a5 5 0 0 0-5 5h10a5 5 0 0 0-5-5Zm5-4.5a.5.5 0 0 1 .5.5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 .5-.5Z" />
              </svg>
              Register
            </Link>
            <Link
              href="/members/login"
              onClick={() => setOpen(false)}
              className="flex h-11 items-center justify-center gap-2 rounded-[3px] bg-brand-deep text-[13px] font-bold uppercase tracking-[0.06em] text-white"
            >
              <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor" aria-hidden>
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5 6a5 5 0 0 1 10 0H3Z" />
              </svg>
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
