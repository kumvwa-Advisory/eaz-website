"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ORG } from "@/data/site";

/* Trimmed footer: brand column + one short quick-links column. */

function FooterSocialIcon({ label }: { label: string }) {
  if (label === "Facebook")
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    );
  if (label === "Twitter")
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  if (label === "YouTube")
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    );
  return null;
}

const SOCIAL = [
  { label: "Facebook", href: "https://facebook.com/EAZambia/" },
  { label: "Twitter", href: "https://twitter.com/EAZambia/" },
  { label: "YouTube", href: "https://www.youtube.com/@EAZambia" },
];

const QUICK_LINKS = [
  { label: "Become a Member", href: "/membership" },
  { label: "News & Articles", href: "/news" },
  { label: "Conferences", href: "/conferences" },
  { label: "Contact Us", href: "/contact-us" },
];

function FooterSubscribe() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  if (done)
    return <p className="text-[15px] text-white/70">Thank you for subscribing!</p>;

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        if (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) setDone(true);
      }}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        className="w-full border border-white/30 bg-transparent px-3 py-2.5 text-[16px] text-white placeholder:text-white/40 focus:border-white focus:outline-none"
      />
      <button
        type="submit"
        className="mt-2 flex items-center gap-0 overflow-hidden border border-white/40 text-white transition-colors hover:border-brand"
      >
        <span className="px-5 py-2.5 text-[15px] font-bold">Subscribe</span>
        <span className="flex h-full items-center bg-brand px-3 py-2.5 transition-colors hover:bg-brand-dark">
          <svg viewBox="0 0 10 14" className="h-3 w-2" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
            <path d="M1 1l7 6-7 6" />
          </svg>
        </span>
      </button>
    </form>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#111111]">
      {/* Main footer body */}
      <div className="container-page py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr] lg:gap-20">
          {/* Left: logo + blurb + subscribe */}
          <div>
            <Link href="/" className="inline-flex items-center rounded-[4px] bg-white p-3">
              <Image src="/eaz-logo.png" alt="Economics Association of Zambia" width={140} height={56} className="h-14 w-auto object-contain" />
            </Link>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/65">
              The Economics Association of Zambia — promoting professionalism, economic
              research and policy dialogue since the 1960s.
            </p>
            <Link href="/contact-us" className="mt-4 inline-flex items-center gap-2 text-[15px] font-bold text-white transition-colors hover:text-brand">
              Contact Us <span aria-hidden>→</span>
            </Link>

            <div className="mt-8 max-w-sm">
              <p className="mb-3 text-[15px] font-bold text-white">
                Get the Latest EAZ and Economics News
              </p>
              <FooterSubscribe />
            </div>
          </div>

          {/* Right: quick links */}
          <div>
            <h3 className="mb-4 text-[16px] font-bold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-white/65 transition-colors hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-page flex flex-wrap items-center justify-between gap-4 py-5">
          {/* Social icons */}
          <div className="flex items-center gap-4">
            {SOCIAL.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                className="text-white/55 transition-colors hover:text-brand">
                <FooterSocialIcon label={s.label} />
              </a>
            ))}
          </div>
          {/* Copyright */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-[14px] text-white/50">
            <Link href="/privacy" className="transition-colors hover:text-white">Privacy Policy</Link>
            <span>&copy; Copyright {new Date().getFullYear()} {ORG.shortName}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
