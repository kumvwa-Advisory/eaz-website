import type { Metadata } from "next";
import { PageHeader } from "@/components/site/page-header";
import { ORG } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How the Economics Association of Zambia handles information submitted through its website.",
};

const SECTIONS = [
  {
    heading: "Who we are",
    body: ["Our website address is https://eaz.org.zm."],
  },
  {
    heading: "Registration",
    body: [
      "When you register to be a member of EAZ on this website, all information received is treated in the strictest confidence and is not shared with unauthorised third parties.",
    ],
  },
  {
    heading: "Cookies",
    body: [
      "This website uses cookies to store some forms of data to reduce filling them in again if you opt in.",
    ],
  },
  {
    heading: "Embedded content from other websites",
    body: [
      "Articles on this site may include embedded content such as videos, images or articles. Embedded content from other websites behaves in the same way as if the visitor had visited the other website.",
      "These websites may collect data about you, use cookies, embed additional third-party tracking and monitor your interaction with that embedded content, including tracking your interaction if you have an account and are logged in to that website.",
    ],
  },
  {
    heading: "How long we retain your data",
    body: [
      "If you leave a comment, the comment and its metadata are retained indefinitely, so that follow-up comments can be recognised and approved automatically instead of being held in a moderation queue.",
      "For users who register on the website, the personal information provided is stored in the user profile. Users can see, edit or delete their personal information at any time, except that they cannot change their username. Website administrators can also see and edit that information.",
    ],
  },
  {
    heading: "Where we send your data",
    body: ["Visitor comments may be checked through an automated spam detection service."],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader title="Privacy Policy" />

      <section className="container-page py-10 lg:py-14">
        <div className="max-w-2xl">
          {SECTIONS.map((section) => (
            <div key={section.heading} className="mb-8 last:mb-0">
              <h2 className="border-b-2 border-brand-bright pb-2.5 text-[21px] font-bold text-[#0f3d25]">
                {section.heading}
              </h2>
              {section.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="mt-3 text-[16.5px] leading-[1.8] text-[#4b4f58]">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}

          <p className="mt-9 border-t border-[#e8ebe8] pt-5 text-[15px] leading-relaxed text-[#4b4f58]">
            Enquiries about this policy may be directed to{" "}
            <a href={`mailto:${ORG.email}`} className="font-bold text-brand hover:text-brand-dark">
              {ORG.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
