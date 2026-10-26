import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page py-24">
      <p className="text-[14px] font-bold uppercase tracking-[0.14em] text-brand">Error 404</p>
      <h1 className="mt-3 max-w-xl text-[38px] font-bold leading-tight text-[#0f3d25]">
        The page you asked for is not here
      </h1>
      <div className="mt-4 h-[3px] w-56 bg-gradient-to-r from-brand to-brand-bright" />
      <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-[#5c6b77]">
        The address may have changed. The links below cover the sections most often requested.
      </p>
      <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-[16px] font-medium">
        {[
          ["Home", "/"],
          ["About us", "/about-us"],
          ["Membership", "/membership"],
          ["Conferences", "/conferences"],
          ["News", "/news"],
          ["Articles", "/articles"],
          ["Notices", "/notices"],
          ["Contact us", "/contact-us"],
        ].map(([label, href]) => (
          <li key={href}>
            <Link
              href={href}
              className="text-ink underline decoration-brand/30 underline-offset-4 hover:decoration-brand"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
