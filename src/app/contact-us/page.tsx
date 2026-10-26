import Link from "next/link";
import type { Metadata } from "next";
import { ContactForm } from "@/components/site/contact-form";
import { PageHeader } from "@/components/site/page-header";
import { ORG } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact the Economics Association of Zambia: address, telephone, email and enquiry form.",
};

const RULE = "border-[#eaeaea]";
const CHIP =
  "inline-flex items-center gap-1.5 rounded-[5px] border border-[#cad4e5] bg-white px-3.5 py-1.5 text-[13px] font-bold text-brand transition-colors hover:border-brand hover:bg-brand hover:text-white";

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

      <section className="bg-paper py-14 lg:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_300px] lg:gap-12">

          {/* ── Form ── */}
          <div>
            <div className={`mb-8 border-b pb-4 ${RULE}`}>
              <p className="font-sans text-[12px] font-medium uppercase tracking-[2px] text-gold-ink">
                Get in touch
              </p>
              <div className="mt-2 h-[3px] w-8 bg-brand" />
              <h2 className="mt-4 text-[26px] font-semibold leading-[1.2] text-ink sm:text-[28.8px]">
                Send an enquiry
              </h2>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[#6c757d]">
                Please give as much detail as you can so that your message reaches the right desk.
                Fields marked with an asterisk are required.
              </p>
            </div>
            <div className="rounded-[6px] border border-[#eaeaea] bg-white p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>

          {/* ── Sidebar ── */}
          <aside className="space-y-6">

            {/* Address */}
            <div className={`rounded-[6px] border ${RULE} bg-white p-5`}>
              <div className={`border-b pb-3 ${RULE}`}>
                <p className="font-sans text-[12px] font-medium uppercase tracking-[2px] text-gold-ink">
                  Location
                </p>
                <h2 className="mt-1 text-[18px] font-semibold text-ink">Secretariat</h2>
              </div>
              <address className="mt-4 space-y-1 text-[14px] not-italic text-[#6c757d]">
                <p className="font-semibold text-ink">{ORG.name}</p>
                {ORG.address.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </address>
            </div>

            {/* Telephone */}
            <div className={`rounded-[6px] border ${RULE} bg-white p-5`}>
              <div className={`border-b pb-3 ${RULE}`}>
                <p className="font-sans text-[12px] font-medium uppercase tracking-[2px] text-gold-ink">
                  Call us
                </p>
                <h2 className="mt-1 text-[18px] font-semibold text-ink">Telephone</h2>
              </div>
              <div className="mt-4 space-y-2 text-[14px]">
                <a href={`tel:${ORG.phoneHref}`} className="flex items-center gap-2 text-ink hover:text-brand">
                  <IconWhatsApp />
                  <span className="font-medium">{ORG.phone}</span>
                </a>
                {ORG.alternatePhones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                    className="tabular block text-[#6c757d] hover:text-brand"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>

            {/* Email */}
            <div className={`rounded-[6px] border ${RULE} bg-white p-5`}>
              <div className={`border-b pb-3 ${RULE}`}>
                <p className="font-sans text-[12px] font-medium uppercase tracking-[2px] text-gold-ink">
                  Write to us
                </p>
                <h2 className="mt-1 text-[18px] font-semibold text-ink">Email</h2>
              </div>
              <ul className="mt-4 space-y-4">
                {[
                  { label: "Secretariat", email: ORG.email },
                  { label: "Membership matters", email: ORG.membershipEmail },
                  { label: "General information", email: ORG.infoEmail },
                ].map((item) => (
                  <li key={item.email}>
                    <span className="block text-[10.5px] font-bold uppercase tracking-[0.1em] text-[#6c757d]">
                      {item.label}
                    </span>
                    <a
                      href={`mailto:${item.email}`}
                      className="mt-0.5 block break-words text-[14px] font-medium text-ink hover:text-brand"
                    >
                      {item.email}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Membership callout */}
            <div className="rounded-[6px]  bg-brand-tint p-5">
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-gold-ink">
                Membership
              </p>
              <p className="mt-1 text-[15px] font-semibold text-ink">Apply for membership</p>
              <p className="mt-2 text-[14px] leading-relaxed text-[#6c757d]">
                Register on the website before applying for membership. Applications made through
                the website reach the Membership desk directly.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <Link href="/members/register" className={CHIP}>
                  Register on the website <span aria-hidden>→</span>
                </Link>
                <Link href="/membership#apply" className={CHIP}>
                  Membership application <span aria-hidden>→</span>
                </Link>
              </div>
            </div>

            {/* Social */}
            <div className={`rounded-[6px] border ${RULE} bg-white p-5`}>
              <div className={`border-b pb-3 ${RULE}`}>
                <p className="font-sans text-[12px] font-medium uppercase tracking-[2px] text-gold-ink">
                  Social media
                </p>
                <h2 className="mt-1 text-[18px] font-semibold text-ink">Follow the Association</h2>
              </div>
              <div className="mt-4 flex gap-3">
                {ORG.social.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="grid h-10 w-10 place-items-center rounded-[4px] border border-[#eaeaea] text-ink transition-colors hover:border-brand hover:text-brand"
                  >
                    <SocialIcon label={item.label} />
                  </a>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </section>
    </>
  );
}
