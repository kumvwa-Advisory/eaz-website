import Image from "next/image";
import Link from "next/link";
import { ArrowWedgeButton } from "./button-wedge";
import { CARD, GREEN_BAR, SectionHeading } from "./section-heading";
import { CORPORATE_MEMBERS } from "@/data/history";

/** Corporate member roster, sitting directly beneath "Who We Work With". */
export function CorporateMembers() {
  return (
    <section id="corporate-members" className="relative scroll-mt-28 bg-white py-16 lg:py-20">
      <div className="container-page">
        <SectionHeading
          center
          eyebrow="Our institutional members"
          title="Corporate Members"
          note="Organisations that back the Association's work and give their teams access to Zambia's economic policy conversation."
        />

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CORPORATE_MEMBERS.map((member) => (
            <li key={member.name} className={`${CARD} flex h-full flex-col`}>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex h-16 items-center">
                  {member.logo ? (
                    <Image
                      src={member.logo}
                      alt={member.name}
                      width={180}
                      height={64}
                      className="h-auto max-h-12 w-auto max-w-[170px] object-contain"
                    />
                  ) : (
                    <span className="text-[22px] font-black leading-tight text-[#0f3d25]">
                      {member.name}
                    </span>
                  )}
                </div>
                <div className="mt-5 border-t border-[#e8ebe8] pt-4">
                  <p className="text-[17px] font-bold leading-snug text-ink">{member.name}</p>
                  <p className="mt-1 text-[14px] font-semibold uppercase tracking-[0.1em] text-brand">
                    {member.sector}
                  </p>
                </div>
              </div>
              <div className={GREEN_BAR} />
            </li>
          ))}

          {/* Invite tile */}
          <li className="flex h-full flex-col border-2 border-dashed border-brand-bright bg-brand-tint">
            <div className="flex flex-1 flex-col justify-center p-6">
              <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-brand">
                Corporate class
              </p>
              <p className="mt-2 text-[21px] font-bold leading-snug text-[#0f3d25]">
                Your organisation here
              </p>
              <p className="mt-2 text-[16px] leading-[1.6] text-[#5c6b77]">
                Corporate membership puts your institution in front of the country's economists.
              </p>
              <Link
                href="/membership"
                className="mt-4 inline-flex items-center gap-2 text-[16px] font-bold text-brand transition-colors hover:text-brand-dark"
              >
                Explore corporate membership <span aria-hidden>→</span>
              </Link>
            </div>
          </li>
        </ul>

        <div className="mt-10 flex justify-center">
          <ArrowWedgeButton href="/membership">Become a corporate member</ArrowWedgeButton>
        </div>
      </div>
    </section>
  );
}
