import { ArrowWedgeButton } from "@/components/site/button-wedge";
import { PageHeader } from "@/components/site/page-header";
import { CARD, GREEN_BAR, SectionHeading } from "@/components/site/section-heading";
import { ORG } from "@/data/site";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Background, functions, vision, mission, values and objectives of the Economics Association of Zambia.",
};

function MarkerList({ items, start = 0 }: { items: string[]; start?: number }) {
  return (
    <ol className="mt-6 space-y-3.5 text-[16px] leading-[1.75] text-[#5c6b77]">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="shrink-0 font-bold text-[#0f3d25]">{String.fromCharCode(97 + start + i)})</span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

function NumberedList({ items, start }: { items: string[]; start: number }) {
  return (
    <ol className="mt-6 space-y-3.5 text-[16px] leading-[1.75] text-[#5c6b77]">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="shrink-0 font-bold text-[#0f3d25]">{start + i}.</span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        lead="A non-partisan professional association serving as a forum for the articulation of economic and other developmental issues."
      />

      {/* ── Background & Functions ── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">

          <div>
            <SectionHeading title="Background and introduction" />

            <div className="space-y-5 text-[17px] leading-[1.85] text-[#5c6b77]">
              <p>
                Originally established in the 1960s as the Lusaka Economics Club, the{" "}
                <strong className="font-bold text-ink">Economics Association of Zambia (EAZ)</strong> is
                a non-partisan, Professional Association whose membership includes experts in the areas of
                economics, business administration, finance and allied fields. The Association is registered
                under the Societies Act as a Non-Governmental and Not for Profit Organisation. It serves as
                a forum for the articulation of economic and other developmental issues. In 1985, the
                Association was registered as a Non-Governmental Organisation (under the Societies Act,
                Cap. 105) and has since continued to serve as a forum for the articulation of economic and
                other developmental issues.
              </p>
              <p>
                The Association aims to promote the socio-economic development of Zambia and the region by
                undertaking research, training, education, publication and consultancy in the field of
                economics and related disciplines. Specifically, the Association&rsquo;s Constitution
                provides for the following functions:
              </p>
            </div>

            {/* Lettered functions */}
            <MarkerList
              items={[
                "To promote and sustain research interest in the discipline of economics, business administration, applied statistics and other related disciplines;",
                "To promote high standards of professional conduct in these disciplines;",
                "To provide a forum for regular professional discussion on theoretical and practical issues relating to these disciplines through conferences, workshops and seminars;",
                "To publish and disseminate economic and other related literature;",
                "To participate in the development of sound national, regional and international economic and other related policies;",
              ]}
            />
            <ol className="mt-3.5 space-y-3.5 text-[16px] leading-[1.75] text-[#5c6b77]">
              <li className="flex gap-3">
                <span className="shrink-0 font-bold text-[#0f3d25]">f)</span>
                <div>
                  <span>
                    To contribute to the socio-economic development of Zambia and the world at large through
                  </span>
                  <ol className="mt-3 space-y-2.5 pl-1">
                    <li className="flex gap-3">
                      <span className="shrink-0 font-bold text-[#0f3d25]">(i)</span>
                      <span>the establishment of active and strong networks among similar professional associations and individuals;</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="shrink-0 font-bold text-[#0f3d25]">(ii)</span>
                      <span>regular exchange of experiences, ideas and research results in order to promote coordinated solutions of national, regional and international problems; and,</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="shrink-0 font-bold text-[#0f3d25]">(iii)</span>
                      <span>convening of regular conferences and seminars on emerging issues and challenges.</span>
                    </li>
                  </ol>
                </div>
              </li>
            </ol>
            <MarkerList
              start={6}
              items={[
                "To undertake consultancy work to ensure the financial sustainability of the Association;",
                "To invest in viable instruments as well as undertake fund-raising activities from local and international sources;",
                "To initiate and arrange training programmes in techniques of economic policy formulation, economic diplomacy, development of business plans, environmental auditing and impact assessment as and when demand for these services arises; and",
                "To do all such acts as are necessary to foster socio-economic development in Zambia and the world at large.",
              ]}
            />

            <div className="mt-8 space-y-5 text-[17px] leading-[1.85] text-[#5c6b77]">
              <p>
                In the light of the above functions, the Association runs a number of programmes. First,
                there are the EAZ Monthly meetings where experts are invited to address members on different
                pertinent topics. Secondly, the Association has in the past commissioned specialist research
                teams to undertake studies in the various aspects of interest to the Association. Thirdly,
                local and international workshops have also been organised by EAZ. Lastly, the Association
                also engages in networking in order to establish links with relevant organisations that are
                involved in similar activities. The Association&rsquo;s Constitution further allows it to
                establish Chapters in areas outside Lusaka where there are more than twenty ordinary members
                that are willing to form these.
              </p>
              <p>
                The Association has a Secretariat that is headed by an Executive Director (ED) who is
                appointed by the National Executive Committee (Board). The ED implements the decisions of
                the Annual General Meeting and the National Executive Committee and prepares and manages the
                Association&rsquo;s annual programme of work and its budget. The revenues of the Association
                are derived from membership fees, annual subscriptions, research, publications and
                consultancy work as well as endowments from donations and other fund-raising activities.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2px]">
              <Image
                src="/images/members-forum.jpg"
                alt="Members at an Association forum"
                fill
                sizes="(max-width: 1024px) 100vw, 320px"
                className="object-cover"
              />
            </div>

            {/* At a glance */}
            <div className={CARD}>
              <div className="p-6">
                <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-brand">At a glance</p>
                <h2 className="mt-1.5 text-[21px] font-bold text-ink">The Association</h2>
                <dl className="mt-4 space-y-4">
                  {[
                    { dt: "Established", dd: ORG.founded },
                    { dt: "Legal status", dd: ORG.registered },
                    {
                      dt: "Membership",
                      dd: "Economists, allied professionals, students, corporate and international organisations",
                    },
                  ].map((item) => (
                    <div key={item.dt}>
                      <dt className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#5c6b77]">{item.dt}</dt>
                      <dd className="mt-0.5 text-[16px] leading-snug font-medium text-ink">{item.dd}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className={GREEN_BAR} />
            </div>

            {/* Join us */}
            <div className="rounded-[2px] border-2 border-brand-bright bg-white p-6">
              <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#0f3d25]">Join us</p>
              <p className="mt-2 text-[19px] font-bold text-ink">Become a member</p>
              <p className="mt-2 text-[16px] leading-[1.6] text-[#5c6b77]">
                Register on the website, then apply for the class of membership that suits your qualifications.
              </p>
              <div className="mt-5">
                <ArrowWedgeButton href="/membership">View membership</ArrowWedgeButton>
              </div>
            </div>

            {/* Secretariat */}
            <div id="secretariat" className={`${CARD} scroll-mt-28`}>
              <div className="p-6">
                <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-brand">Administration</p>
                <h2 className="mt-1.5 text-[21px] font-bold text-ink">Secretariat</h2>
                <address className="mt-4 space-y-1 not-italic">
                  {ORG.address.map((line) => (
                    <span key={line} className="block text-[16px] text-[#5c6b77]">{line}</span>
                  ))}
                  <a href={`tel:${ORG.phoneHref}`} className="block pt-2 text-[16px] font-bold text-ink hover:text-brand">{ORG.phone}</a>
                  <a href={`mailto:${ORG.email}`} className="block text-[16px] font-bold text-ink hover:text-brand">{ORG.email}</a>
                </address>
              </div>
              <div className={GREEN_BAR} />
            </div>
          </aside>
        </div>
      </section>

      {/* ── Vision / Mission / Goal / Values — wavy watermark background ── */}
      <section className="waves-bg relative isolate overflow-hidden py-16 lg:py-20">
        <div aria-hidden className="eaz-mark pointer-events-none absolute inset-0 z-0" />

        <div className="container-page relative">
          <SectionHeading
            title="Vision, Mission, Goal & Values"
            note="To fulfil its mandate, the EAZ has set the following strategic direction through the Vision, Mission, Goal and Values which are stated below:"
          />

          {/* VMG cards */}
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                label: "Vision",
                text: "To be a centre of excellence for professional and independent economic policy analysis and research.",
              },
              {
                label: "Mission",
                text: "To contribute to economic and social development through the promotion and advocacy of sound economic policies.",
              },
              {
                label: "Goal",
                text: "Develop a culture of proactive thinking and engagement among all stakeholders in the discipline of economics for the growth of the national economy.",
              },
            ].map((item) => (
              <div key={item.label} className={CARD}>
                <div className="h-[6px] w-full bg-gradient-to-r from-brand to-brand-bright" />
                <div className="p-6">
                  <p className="text-[14px] font-bold uppercase tracking-[0.12em] text-brand">{item.label}</p>
                  <p className="mt-3 text-[17px] leading-[1.65] text-ink">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Values */}
          <p className="mt-12 max-w-2xl text-[17px] leading-[1.8] text-[#5c6b77]">
            The Association recognizes the need for upholding professional standards and ethical conduct in
            the implementation of this Strategic Plan. In this regard, the EAZ shall be guided by the
            following five core values:
          </p>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Transparency", detail: "performing official duties in an open and honest manner;" },
              { name: "Accountability", detail: "being accountable to all members, staff, stakeholders and members of the public in all its activities;" },
              { name: "Professionalism", detail: "providing service with skill, objectivity and diligence to all stakeholders in a professionally ethical manner;" },
              { name: "Integrity", detail: "exhibiting the highest standards of personal probity and behaviour;" },
              { name: "Impartiality", detail: "provide service in an impartial manner free of political, personal or other bias;" },
            ].map((value) => (
              <li key={value.name} className="flex gap-4 p-6 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
                <span className="mt-1.5 h-3.5 w-3.5 shrink-0 border-2 border-brand-bright" aria-hidden />
                <p className="text-[17px] leading-[1.6] text-[#4b4f58]">
                  <strong className="font-bold text-ink">{value.name}</strong> &ndash; {value.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Objectives ── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading
            title="Objectives"
            note="The Association has elaborated five main objectives for the period 2022 – 2023:"
          />

          <div className={CARD}>
            <NumberedList
              start={1}
              items={[
                "To provide effective input into public policy for decision-making;",
                "To mobilise evidence-based policy research in economics and related disciplines;",
                "To strengthen public information and outreach on economic and related issues;",
                "To mobilise and improve professional capacity for consultancy and advisory services to both the private and public sector; and",
                "To strengthen the EAZ secretariat to carry out the above four objectives.",
              ]}
            />
            <div className="mt-8 p-0" />
            <div className="h-[6px] w-full bg-gradient-to-r from-brand to-brand-bright" />
          </div>

          <p className="mb-2 mt-10 max-w-2xl text-[17px] leading-[1.8] text-[#5c6b77]">
            Other objectives of a longer-term nature will also be pursued to the extent possible, but will
            not be the main priority through the end of 2025. These are:
          </p>
          <div className={CARD}>
            <NumberedList
              start={6}
              items={[
                "To build strategic partnerships for the formulation and implementation of economic policies",
                "To establish and maintain high professional ethics and standards in economic research, consultancy, publications, and advisory services",
                "To build effective national, regional, and international networks with professional associations and other institutions.",
              ]}
            />
            <div className="h-[6px] w-full bg-gradient-to-r from-brand to-brand-bright" />
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <ArrowWedgeButton href="/membership">Join EAZ Today</ArrowWedgeButton>
            <Link href="/contact-us"
              className="block border border-[#0f3d25] px-6 py-3 text-center text-[16px] font-bold text-[#0f3d25] transition-colors hover:bg-[#0f3d25] hover:text-white">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
