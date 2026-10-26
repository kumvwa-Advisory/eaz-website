import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page py-20">
      <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-brand">Error 404</p>
      <h1 className="mt-3 max-w-xl text-[28px] font-bold leading-tight text-ink">
        The page you asked for is not here
      </h1>
      <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-ink-soft">
        The address may have changed. The links below cover the sections most often requested.
      </p>
      <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[14px]">
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
