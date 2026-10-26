import type { Metadata } from "next";
import { MemberLoginForm } from "@/components/site/member-login-form";
import { PageHeader } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
import { ORG } from "@/data/site";

export const metadata: Metadata = {
  title: "Member login",
  description: "Sign in to the members' area of the Economics Association of Zambia.",
};

const ACCESS = [
  {
    title: "Membership application",
    detail: "Apply for the class of membership that suits your qualifications and track the application.",
  },
  {
    title: "Notices and newsletters",
    detail: "Circulars from the Secretariat and the quarterly newsletter, available to download.",
  },
  {
    title: "Reports and research papers",
    detail: "Publications of the Association, including summit proceedings.",
  },
  {
    title: "Subscription and renewal",
    detail: "Renew your membership and keep your contact details up to date.",
  },
];

export default function MemberLoginPage() {
  return (
    <>
      <PageHeader
        title="Member login"
        parents={[{ label: "Membership", href: "/membership" }]}
        lead="Sign in to apply for membership, renew your subscription and access member content."
      />

      <section className="bg-white py-12 lg:py-16">
        <div className="container-page grid gap-12 lg:grid-cols-[480px_1fr] lg:gap-16">

          {/* ── Form ── */}
          <div>
            <div className="mb-8">
              <h2 className="text-[28px] font-bold text-[#0f3d25]">
                Sign in
              </h2>
              <div className="mt-3 h-[3px] w-40 bg-gradient-to-r from-brand to-brand-bright" />
              <p className="mt-4 text-[16px] text-[#5c6b77]">
                Use the username or email address registered with the Association.
              </p>
            </div>
            <MemberLoginForm />
           
          </div>

          {/* ── Right panel ── */}
          <div>
            <SectionHeading title="What you can access" />

            <ul className="mt-10 flex flex-col gap-4">
              {ACCESS.map((item) => (
                <li key={item.title} className="flex gap-4 bg-white p-5 shadow-[0_2px_10px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
                  <span className="mt-1.5 h-3.5 w-3.5 shrink-0 border-2 border-brand-bright" aria-hidden />
                  <div>
                    <p className="text-[17px] font-bold text-ink">{item.title}</p>
                    <p className="mt-1 text-[15px] leading-[1.65] text-[#5c6b77]">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>

        

            <p className="mt-6 text-[15px] leading-relaxed text-[#7a7a7a]">
              Trouble signing in? Contact the Secretariat on{" "}
              <a href={`tel:${ORG.phoneHref}`} className="font-bold text-[#5c6b77] hover:text-brand">{ORG.phone}</a>
              {" "}or{" "}
              <a href={`mailto:${ORG.membershipEmail}`} className="font-bold text-[#5c6b77] hover:text-brand">{ORG.membershipEmail}</a>.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
