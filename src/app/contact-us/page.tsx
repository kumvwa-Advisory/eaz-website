import { ArrowWedgeButton } from "@/components/site/button-wedge";
import { ContactForm } from "@/components/site/contact-form";
import { PageHeader } from "@/components/site/page-header";
import { CARD, CardHeading, GREEN_BAR, SectionHeading } from "@/components/site/section-heading";
import { ORG } from "@/data/site";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact the Economics Association of Zambia: address, telephone, email and enquiry form.",
};

function IconWhatsApp() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

function SocialIcon({ label }: { label: string }) {
  if (label === "Facebook")
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    );
  if (label === "Twitter")
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  if (label === "YouTube")
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    );
  return null;
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        lead="The Secretariat is based in Lusaka. Enquiries may be made by telephone, email or using the form below."
      />

      <section className="waves-bg relative isolate overflow-hidden py-16 lg:py-20">
        <div aria-hidden className="eaz-mark pointer-events-none absolute inset-0 z-0" />

        <div className="container-page relative grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">

          {/* ── Form ── */}
          <div>
            <SectionHeading
              title="Send an enquiry"
              note="Please give as much detail as you can so that your message reaches the right desk. Fields marked with an asterisk are required."
            />
            <div className={`${CARD} p-6 sm:p-8`}>
              <ContactForm />
            </div>
          </div>

          {/* ── Sidebar ── */}
          <aside className="space-y-6">

            {/* Address */}
            <div className={CARD}>
              <div className="p-6">
                <CardHeading eyebrow="Location" title="Secretariat" />
                <address className="mt-4 space-y-1 not-italic text-[16px] text-[#5c6b77]">
                  <p className="font-bold text-ink">{ORG.name}</p>
                  {ORG.address.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </address>
              </div>
              <div className={GREEN_BAR} />
            </div>

            {/* Telephone */}
            <div className={CARD}>
              <div className="p-6">
                <CardHeading eyebrow="Call us" title="Telephone" />
                <div className="mt-4 space-y-2 text-[16px]">
                  <a href={`tel:${ORG.phoneHref}`} className="flex items-center gap-2 font-bold text-ink hover:text-brand">
                    <IconWhatsApp />
                    <span>{ORG.phone}</span>
                  </a>
                  {ORG.alternatePhones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                      className="tabular block text-[#5c6b77] hover:text-brand"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
              <div className={GREEN_BAR} />
            </div>

            {/* Email */}
            <div className={CARD}>
              <div className="p-6">
                <CardHeading eyebrow="Write to us" title="Email" />
                <ul className="mt-4 space-y-4">
                  {[
                    { label: "Secretariat", email: ORG.email },
                    { label: "Membership matters", email: ORG.membershipEmail },
                    { label: "General information", email: ORG.infoEmail },
                  ].map((item) => (
                    <li key={item.email}>
                      <span className="block text-[12px] font-bold uppercase tracking-[0.1em] text-[#5c6b77]">
                        {item.label}
                      </span>
                      <a
                        href={`mailto:${item.email}`}
                        className="mt-0.5 block break-words text-[16px] font-bold text-ink hover:text-brand"
                      >
                        {item.email}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={GREEN_BAR} />
            </div>

            {/* Membership callout */}
            <div className="rounded-[2px] border-2 border-brand-bright bg-white p-6">
              <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#0f3d25]">Membership</p>
              <p className="mt-2 text-[19px] font-bold text-ink">Apply for membership</p>
              <p className="mt-2 text-[16px] leading-[1.6] text-[#5c6b77]">
                Register on the website before applying for membership. Applications made through
                the website reach the Membership desk directly.
              </p>
              <div className="mt-5 space-y-3">
                <ArrowWedgeButton href="/members/register">Register on the website</ArrowWedgeButton>
                <Link href="/membership#apply"
                  className="block border border-[#0f3d25] px-6 py-3 text-center text-[16px] font-bold text-[#0f3d25] transition-colors hover:bg-[#0f3d25] hover:text-white">
                  Membership application
                </Link>
              </div>
            </div>

            {/* Social */}
            <div className={CARD}>
              <div className="p-6">
                <CardHeading eyebrow="Social media" title="Follow the Association" />
                <div className="mt-4 flex gap-3">
                  {ORG.social.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                      className="grid h-11 w-11 place-items-center border border-[#e8ebe8] text-ink transition-colors hover:border-brand hover:bg-brand hover:text-white"
                    >
                      <SocialIcon label={item.label} />
                    </a>
                  ))}
                </div>
              </div>
              <div className={GREEN_BAR} />
            </div>

          </aside>
        </div>
      </section>
    </>
  );
}
