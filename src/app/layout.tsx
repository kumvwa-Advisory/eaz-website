import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

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
        <SiteHeader />
        <main id="main" className="flex-1 pt-[121px]">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
