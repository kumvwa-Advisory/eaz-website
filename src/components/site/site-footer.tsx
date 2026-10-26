import Link from "next/link";
import { ORG } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="bg-[#111111]">
      <div className="container-page flex flex-wrap items-center justify-between gap-3 py-4 text-[13px]">
        <p className="text-white/75">
          &copy; {new Date().getFullYear()}. {ORG.name}.
        </p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <Link href="/privacy" className="text-white/65 transition-colors hover:text-white">Privacy Policy</Link>
          <Link href="/contact-us" className="text-white/65 transition-colors hover:text-white">Contact Us</Link>
          <Link href="/about-us" className="text-white/65 transition-colors hover:text-white">About Us</Link>
          <Link href="/membership" className="text-white/65 transition-colors hover:text-white">Membership</Link>
        </div>
      </div>
    </footer>
  );
}
