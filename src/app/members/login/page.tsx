import Link from "next/link";
import type { Metadata } from "next";
import { MemberLoginForm } from "@/components/site/member-login-form";
import { PageHeader } from "@/components/site/page-header";
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
            <div className="mb-6 border-b border-[#eaeaea] pb-5">
              <h2 className="text-[18.5px] font-bold text-ink" style={{ textTransform: "none" }}>
                Sign in
              </h2>
              <p className="mt-1 text-[13px] text-[#6c757d]">
                Use the username or email address registered with the Association.
              </p>
            </div>
            <MemberLoginForm />
           
          </div>

          {/* ── Right panel ── */}
          <div>
            <div className="mb-6 border-b border-[#eaeaea] pb-4">
              <p className="font-sans text-[12px] font-medium uppercase tracking-[2px] text-gold-ink">
                Members area
              </p>
              <div className="mt-2 h-[3px] w-8 bg-brand" />
              <h2 className="mt-4 text-[22px] font-semibold text-ink" style={{ textTransform: "none" }}>
                What you can access
              </h2>
            </div>

            <ul className="space-y-3">
              {ACCESS.map((item, i) => (
                <li key={item.title} className="flex gap-4 rounded-[4px] border border-[#eaeaea] bg-paper p-4">
                  <span className="mt-0.5 font-sans text-[12px] font-bold text-gold-ink">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-[14px] font-semibold text-ink">{item.title}</p>
                    <p className="mt-0.5 text-[13.5px] leading-relaxed text-[#6c757d]">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>

        

            <p className="mt-5 text-[13px] leading-relaxed text-[#aaa]">
              Trouble signing in? Contact the Secretariat on{" "}
              <a href={`tel:${ORG.phoneHref}`} className="text-[#6c757d] hover:text-brand">{ORG.phone}</a>
              {" "}or{" "}
              <a href={`mailto:${ORG.membershipEmail}`} className="text-[#6c757d] hover:text-brand">{ORG.membershipEmail}</a>.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
