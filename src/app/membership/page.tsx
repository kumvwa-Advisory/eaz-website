import Link from "next/link";
import type { Metadata } from "next";
import { MembershipForm } from "@/components/site/membership-form";
import { PageHeader } from "@/components/site/page-header";
import { BENEFITS, MEMBERSHIP_CLASSES, ORG } from "@/data/site";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Classes of membership, benefits and the membership application of the Economics Association of Zambia.",
};

const STEPS = [
  {
    n: "01",
    title: "Register on the website",
    detail: "Create a website account with your name, email address and a short professional biography.",
  },
  {
    n: "02",
    title: "Complete the application",
    detail: "Choose the class of membership that suits your qualifications and provide your details.",
  },
  {
    n: "03",
    title: "Approval by the Association",
    detail: "The application is considered by the Association and you are notified by email.",
  },
  {
    n: "04",
    title: "Pay your subscription",
    detail: "On approval you will be advised of the subscription payable for your class of membership.",
  },
];

export default function MembershipPage() {
  return (
    <>
      <PageHeader
        title="Membership"
        lead="The following are the classes of membership of the Association. You can apply for membership after registering on the website."
      />

      {/* ── Classes of membership ── */}
      <section className="bg-white py-14 lg:py-16">
        <div className="container-page">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-[#eaeaea] pb-4">
            <div>
              <p className="font-sans text-[12px] font-medium uppercase tracking-[2px] text-gold-ink">
                Who can join
              </p>
              <div className="mt-2 h-[3px] w-8 bg-brand" />
              <h2 className="mt-4 text-[26px] font-semibold leading-[1.2] text-ink sm:text-[28.8px]">
                Classes of Membership
              </h2>
            </div>
            <Link
              href="/members/register"
              className="inline-flex items-center gap-1.5 rounded-[5px] border border-[#cad4e5] bg-white px-3.5 py-1.5 text-[13px] font-bold text-brand transition-colors hover:border-brand hover:bg-brand hover:text-white"
            >
              Register now <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <caption className="sr-only">Classes of membership and who may apply</caption>
              <thead>
                <tr className="border-b border-[#eaeaea]">
                  <th scope="col" className="w-[200px] py-3 pr-6 text-[11px] font-bold uppercase tracking-[0.12em] text-[#6c757d]">Class</th>
                  <th scope="col" className="py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#6c757d]">Who may apply</th>
                </tr>
              </thead>
              <tbody>
                {MEMBERSHIP_CLASSES.map((item) => (
                  <tr key={item.name} className="border-b border-[#eaeaea] align-top">
                    <th scope="row" className="py-4 pr-6 text-left text-[15px] font-semibold text-ink">{item.name}</th>
                    <td className="py-4 text-[15px] leading-relaxed text-[#6c757d]">{item.eligibility}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="bg-paper py-14 lg:py-16">
        <div className="container-page">
          <div className="mb-8 border-b border-[#eaeaea] pb-4">
            <p className="font-sans text-[12px] font-medium uppercase tracking-[2px] text-gold-ink">
              Why join EAZ
            </p>
            <div className="mt-2 h-[3px] w-8 bg-brand" />
            <h2 className="mt-4 text-[26px] font-semibold leading-[1.2] text-ink sm:text-[28.8px]">
              Benefits of Membership
            </h2>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((benefit, i) => (
              <li key={benefit} className="flex gap-4 rounded-[4px] border border-[#eaeaea] bg-white p-5">
                <span className="mt-0.5 font-sans text-[13px] font-bold text-gold-ink">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[15px] leading-relaxed text-[#6c757d]">{benefit}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── How to apply ── */}
      <section className="bg-white py-14 lg:py-16">
        <div className="container-page">
          <div className="mb-10 border-b border-[#eaeaea] pb-4">
            <p className="font-sans text-[12px] font-medium uppercase tracking-[2px] text-gold-ink">
              Getting started
            </p>
            <div className="mt-2 h-[3px] w-8 bg-brand" />
            <h2 className="mt-4 text-[26px] font-semibold leading-[1.2] text-ink sm:text-[28.8px]">
              How to Apply
            </h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-16">
            {/* Steps */}
            <div className="space-y-6">
              {STEPS.map((step) => (
                <div key={step.n} className="flex gap-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[4px] border border-[#eaeaea] bg-paper font-sans text-[13px] font-bold text-gold-ink">
                    {step.n}
                  </span>
                  <div className="pt-1">
                    <p className="text-[15px] font-semibold text-ink">{step.title}</p>
                    <p className="mt-1 text-[14px] leading-relaxed text-[#6c757d]">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA card */}
            <div className="space-y-5">
              <div className="rounded-[4px] border border-[#eaeaea]  p-6">
                <p className="font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-gold-ink">New applicants</p>
                <p className="mt-2 text-[14px] leading-relaxed text-[#6c757d]">
                  Register on the website first, then complete the membership application form below.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <Link href="/members/register" className="block rounded-[4px] bg-brand px-4 py-2.5 text-center text-[14px] font-bold text-white">
                    Register on the website
                  </Link>
                  <Link href="/members/login" className="block rounded-[4px] border border-[#eaeaea] bg-white px-4 py-2.5 text-center text-[14px] font-medium text-ink">
                    Member login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Application form ── */}
      <section className="bg-paper py-14 lg:py-16">
        <div className="container-page">
          <div className="mb-8 border-b border-[#eaeaea] pb-4">
            <p className="font-sans text-[12px] font-medium uppercase tracking-[2px] text-gold-ink">
              Apply now
            </p>
            <div className="mt-2 h-[3px] w-8 bg-brand" />
            <h2 id="apply" className="mt-4 scroll-mt-28 text-[26px] font-semibold leading-[1.2] text-ink sm:text-[28.8px]">
              Membership Application
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[#6c757d]">
              You may apply after registering on the website.{" "}
              <Link href="/members/register" className="font-semibold text-brand hover:underline">
                Create an account
              </Link>{" "}
              first if you have not yet done so.
            </p>
          </div>
          <MembershipForm />
        </div>
      </section>
    </>
  );
}
