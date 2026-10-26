import { ArrowWedgeButton } from "@/components/site/button-wedge";
import { MembershipForm } from "@/components/site/membership-form";
import { PageHeader } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
import { BENEFITS, MEMBERSHIP_CLASSES } from "@/data/site";
import type { Metadata } from "next";
import Link from "next/link";

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
      <section className="bg-white py-16 lg:py-20">
        <div className="container-page">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <SectionHeading title="Classes of Membership" />
            <div className="mb-2">
              <ArrowWedgeButton href="/members/register">
                Register now
              </ArrowWedgeButton>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MEMBERSHIP_CLASSES.map((item) => (
              <div key={item.name}
                className="flex flex-col bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-[20px] font-bold leading-snug text-ink">{item.name}</h3>
                  <p className="mt-3 text-[16px] leading-[1.65] text-[#5c6b77]">{item.eligibility}</p>
                </div>
                <div className="h-[6px] w-full bg-gradient-to-r from-brand to-brand-bright" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits — wavy watermark background ── */}
      <section className="waves-bg relative isolate overflow-hidden py-16 lg:py-20">
        <div aria-hidden className="eaz-mark pointer-events-none absolute inset-0 z-0" />

        <div className="container-page relative">
          <SectionHeading title="Benefits of Membership" />

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((benefit) => (
              <li key={benefit} className="flex gap-4 bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
                <span className="mt-1.5 h-3.5 w-3.5 shrink-0 border-2 border-brand-bright" aria-hidden />
                <p className="text-[17px] leading-[1.6] text-[#4b4f58]">{benefit}</p>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <ArrowWedgeButton href="/members/register">Join EAZ Today</ArrowWedgeButton>
          </div>
        </div>
      </section>

      {/* ── How to apply ── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading title="How to Apply" />

          <div className="grid gap-12 lg:grid-cols-[1fr_420px] lg:gap-16">
            {/* Steps */}
            <div className="space-y-8">
              {STEPS.map((step) => (
                <div key={step.n} className="flex gap-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center bg-brand text-[16px] font-black text-white">
                    {step.n}
                  </span>
                  <div className="pt-1">
                    <p className="text-[18px] font-bold text-ink">{step.title}</p>
                    <p className="mt-1.5 text-[16px] leading-relaxed text-[#5c6b77]">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA card */}
            <div className="self-start rounded-[2px] border-2 border-brand-bright bg-white p-8">
              <p className="text-[17px] font-bold uppercase tracking-[0.08em] text-[#0f3d25]">New applicants</p>
              <p className="mt-3 text-[16px] leading-[1.7] text-[#4b4f58]">
                Register on the website first, then complete the membership application form below.
              </p>
              <div className="mt-6 space-y-4">
                <ArrowWedgeButton href="/members/register" className="w-full sm:w-full [&>span:first-child]:flex-1">
                  Register on the website
                </ArrowWedgeButton>
                <Link href="/members/login"
                  className="block border border-[#0f3d25] px-6 py-3.5 text-center text-[16px] font-bold text-[#0f3d25] transition-colors hover:bg-[#0f3d25] hover:text-white">
                  Member login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Application form — wavy watermark background ── */}
      <section className="waves-bg relative isolate overflow-hidden py-16 lg:py-20">
        <div aria-hidden className="eaz-mark pointer-events-none absolute inset-0 z-0" />

        <div className="container-page relative">
          <SectionHeading
            id="apply"
            title="Membership Application"
            note={
              <>
                You may apply after registering on the website.{" "}
                <Link href="/members/register" className="font-bold text-brand hover:text-brand-dark">
                  Create an account
                </Link>{" "}
                first if you have not yet done so.
              </>
            }
          />
          <div className="bg-white p-6 shadow-[0_4px_16px_rgba(0,0,0,0.08)] ring-1 ring-black/5 sm:p-10">
            <MembershipForm />
          </div>
        </div>
      </section>
    </>
  );
}
