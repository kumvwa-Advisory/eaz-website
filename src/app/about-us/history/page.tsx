import type { Metadata } from "next";
import { HistorySection } from "@/components/site/history-section";
import { PageHeader } from "@/components/site/page-header";
import { ArrowWedgeButton } from "@/components/site/button-wedge";
import { SectionHeading } from "@/components/site/section-heading";
import { ORG } from "@/data/site";

export const metadata: Metadata = {
  title: "History",
  description:
    "The history of the Economics Association of Zambia — from the Lusaka Economics Club of the 1960s to the current National Executive Committee.",
};

export default function HistoryPage() {
  return (
    <>
      <PageHeader
        title="History"
        parents={[{ label: "About Us", href: "/about-us" }]}
        lead="From the Lusaka Economics Club of the 1960s to a national professional association, and the leadership teams that have carried it."
      />

      {/* ── Origins ── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
          <div>
            <SectionHeading title="How the Association began" />
            <div className="mt-6 space-y-5 text-[17px] leading-[1.85] text-[#5c6b77]">
              <p>
                The Association was originally established in the 1960s as the{" "}
                <strong className="font-bold text-ink">Lusaka Economics Club</strong>, bringing
                together economists and allied professionals for regular discussion of economic
                questions facing the country.
              </p>
              <p>
                In 1985 the Association was registered as a non-governmental organisation under the
                Societies Act, Cap. 105, and has since served as a forum for the articulation of
                economic and other developmental issues. Its membership includes experts in
                economics, business administration, finance and allied fields.
              </p>
              <p>
                Today the Association runs monthly meetings, commissions research, convenes
                workshops and an annual national economic summit, and works with Government, the
                private sector, academia and development partners on evidence-based policy.
              </p>
            </div>
            <div className="mt-8">
              <ArrowWedgeButton href="/about-us">About the Association</ArrowWedgeButton>
            </div>
          </div>

          <aside>
            <div className="border-2 border-brand-bright bg-white p-6">
              <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-brand">
                Milestones
              </p>
              <dl className="mt-4 space-y-5">
                {[
                  { dt: "1960s", dd: "Founded as the Lusaka Economics Club" },
                  { dt: "1985", dd: "Registered under the Societies Act, Cap. 105" },
                  { dt: "Today", dd: "A national association with chapters outside Lusaka" },
                ].map((item) => (
                  <div key={item.dt}>
                    <dt className="text-[20px] font-bold leading-none text-[#0f3d25]">
                      {item.dt}
                    </dt>
                    <dd className="mt-1 text-[16px] leading-snug text-[#5c6b77]">{item.dd}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 border-t border-[#e8ebe8] pt-4 text-[14px] leading-relaxed text-muted">
                {ORG.registered}
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* ── Leadership terms ── */}
      <HistorySection />
    </>
  );
}
