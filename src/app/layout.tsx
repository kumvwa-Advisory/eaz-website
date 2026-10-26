import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { ORG } from "@/data/site";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Economics Association of Zambia (EAZ)",
    template: "%s | Economics Association of Zambia",
  },
  description:
    "The Economics Association of Zambia is a non-partisan professional association promoting the socio-economic development of Zambia through research, training, education, publication and consultancy.",
  keywords: [
    "EAZ",
    "Economics Association of Zambia",
    "economists Zambia",
    "economic summit",
    "membership",
    "Lusaka",
  ],
  authors: [{ name: "Economics Association of Zambia" }],
  icons: { icon: "/eaz-logo.png" },
  openGraph: {
    title: "Economics Association of Zambia",
    description:
      "A non-partisan professional association promoting Zambia's socio-economic development through research, training, education, publication and consultancy.",
    siteName: "Economics Association of Zambia",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-ZM" className={roboto.variable}>
      <body className="flex min-h-screen flex-col bg-white antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        {/* ── Top bar ── */}
        <div className="hidden border-b border-brand-deep/20 bg-brand-deep lg:block">
          <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between px-4 py-1.5">
            <div className="flex items-center gap-5 text-[12px] text-white/70">
              <a
                href={`tel:${ORG.phoneHref}`}
                className="flex items-center gap-1.5 transition-colors hover:text-white"
              >
                <svg viewBox="0 0 16 16" className="h-3 w-3 shrink-0" fill="currentColor" aria-hidden>
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58L3.654 1.328z" />
                </svg>
                {ORG.phone}
              </a>
              <a
                href={`mailto:${ORG.email}`}
                className="flex items-center gap-1.5 transition-colors hover:text-white"
              >
                <svg viewBox="0 0 16 16" className="h-3 w-3 shrink-0" fill="currentColor" aria-hidden>
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                </svg>
                {ORG.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              {ORG.social.map((s) => {
                let icon;
                if (s.label === "Facebook")
                  icon = (
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
                      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                    </svg>
                  );
                else if (s.label === "Twitter")
                  icon = (
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  );
                else if (s.label === "YouTube")
                  icon = (
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  );
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="text-white/60 transition-colors hover:text-gold-bright"
                  >
                    {icon}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
