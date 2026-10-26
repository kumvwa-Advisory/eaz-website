import type { Metadata } from "next";
import { MemberRegisterForm } from "@/components/site/member-register-form";
import { PageHeader } from "@/components/site/page-header";

export const metadata: Metadata = {
  title: "Create a member account",
  description:
    "Register for a website account with the Economics Association of Zambia to apply for membership and access member resources.",
};

export default function MemberRegisterPage() {
  return (
    <>
      <PageHeader
        title="Create a member account"
        parents={[
          { label: "Membership", href: "/membership" },
          { label: "Member login", href: "/members/login" },
        ]}
        lead="Register on the EAZ website to access the members' area, submit your membership application and download member content."
      />

      <section className="bg-white py-12 lg:py-16">
        <div className="container-page">
          <div className="mb-6 border-b border-[#eaeaea] pb-5">
            <h2 className="text-[18.5px] font-bold text-ink" style={{ textTransform: "none" }}>Your Details</h2>
            <p className="mt-1 text-[13px] text-[#475467]">
              Fields marked <span className="font-bold text-[#dc2626]">*</span> are required. You can apply for membership immediately after registering.
            </p>
          </div>
          <MemberRegisterForm />
        </div>
      </section>
    </>
  );
}
