import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/site/page-header";
import { ORG } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Background, functions, vision, mission, values and objectives of the Economics Association of Zambia.",
};

const RULE = "border-[#eaeaea]";
const CHIP =
  "inline-flex items-center gap-1.5 rounded-[5px] border border-[#cad4e5] bg-white px-3.5 py-1.5 text-[13px] font-bold text-brand transition-colors hover:border-brand hover:bg-brand hover:text-white";

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className={`mb-8 border-b pb-4 ${RULE}`}>
      <p className="font-sans text-[12px] font-medium uppercase tracking-[2px] text-gold-ink">{eyebrow}</p>
      <div className="mt-2 h-[3px] w-8 bg-brand" />
      <h2 className="mt-4 text-[26px] font-semibold leading-[1.2] text-ink sm:text-[28.8px]">{title}</h2>
    </div>
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
      <section className="bg-white py-14 lg:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_300px] lg:gap-12">

          <div>
            <SectionHead eyebrow="Who we are" title="Background and introduction" />

            <div className="space-y-4 text-[15px] leading-[1.8] text-[#6c757d]">
              <p>
                Originally established in the 1960s as the Lusaka Economics Club, the{" "}
                <strong className="font-semibold text-ink">Economics Association of Zambia (EAZ)</strong> is
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
            <ol className="mt-6 space-y-3 text-[15px] leading-[1.75] text-[#6c757d]">
              {[
                "To promote and sustain research interest in the discipline of economics, business administration, applied statistics and other related disciplines;",
                "To promote high standards of professional conduct in these disciplines;",
                "To provide a forum for regular professional discussion on theoretical and practical issues relating to these disciplines through conferences, workshops and seminars;",
                "To publish and disseminate economic and other related literature;",
                "To participate in the development of sound national, regional and international economic and other related policies;",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="shrink-0 font-semibold text-ink">{String.fromCharCode(97 + i)})</span>
                  <span>{item}</span>
                </li>
              ))}
              <li className="flex gap-3">
                <span className="shrink-0 font-semibold text-ink">f)</span>
                <div>
                  <span>
                    To contribute to the socio-economic development of Zambia and the world at large through
                  </span>
                  <ol className="mt-2 space-y-2 pl-4">
                    <li className="flex gap-3">
                      <span className="shrink-0 font-semibold text-ink">(i)</span>
                      <span>the establishment of active and strong networks among similar professional associations and individuals;</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="shrink-0 font-semibold text-ink">(ii)</span>
                      <span>regular exchange of experiences, ideas and research results in order to promote coordinated solutions of national, regional and international problems; and,</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="shrink-0 font-semibold text-ink">(iii)</span>
                      <span>convening of regular conferences and seminars on emerging issues and challenges.</span>
                    </li>
                  </ol>
                </div>
              </li>
              {[
                "To undertake consultancy work to ensure the financial sustainability of the Association;",
                "To invest in viable instruments as well as undertake fund-raising activities from local and international sources;",
                "To initiate and arrange training programmes in techniques of economic policy formulation, economic diplomacy, development of business plans, environmental auditing and impact assessment as and when demand for these services arises; and",
                "To do all such acts as are necessary to foster socio-economic development in Zambia and the world at large.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="shrink-0 font-semibold text-ink">{String.fromCharCode(103 + i)})</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>

            <div className="mt-8 space-y-4 text-[15px] leading-[1.8] text-[#6c757d]">
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
            <div className="relative aspect-[4/3] overflow-hidden rounded-[6px]">
              <Image
                src="/images/members-forum.jpg"
                alt="Members at an Association forum"
                fill
                sizes="(max-width: 1024px) 100vw, 300px"
                className="object-cover"
              />
            </div>

            <div className={`rounded-[6px] border ${RULE} bg-white p-5`}>
              <div className={`border-b pb-3 ${RULE}`}>
                <p className="font-sans text-[12px] font-medium uppercase tracking-[2px] text-gold-ink">At a glance</p>
                <h2 className="mt-1 text-[18px] font-semibold text-ink">The Association</h2>
              </div>
              <dl className="mt-4 space-y-4 text-[14px]">
                <div>
                  <dt className="text-[10.5px] font-bold uppercase tracking-[0.1em] text-[#6c757d]">Established</dt>
                  <dd className="mt-0.5 font-medium text-ink">{ORG.founded}</dd>
                </div>
                <div>
                  <dt className="text-[10.5px] font-bold uppercase tracking-[0.1em] text-[#6c757d]">Legal status</dt>
                  <dd className="mt-0.5 font-medium text-ink">{ORG.registered}</dd>
                </div>
                <div>
                  <dt className="text-[10.5px] font-bold uppercase tracking-[0.1em] text-[#6c757d]">Membership</dt>
                  <dd className="mt-0.5 font-medium text-ink">Economists, allied professionals, students, corporate and international organisations</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-[6px]  bg-brand-tint p-5">
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-gold-ink">Join us</p>
              <p className="mt-1 text-[15px] font-semibold text-ink">Become a member</p>
              <p className="mt-2 text-[14px] leading-relaxed text-[#6c757d]">
                Register on the website, then apply for the class of membership that suits your qualifications.
              </p>
              <Link href="/membership" className={`mt-4 ${CHIP}`}>
                View membership <span aria-hidden>→</span>
              </Link>
            </div>

            <div id="secretariat" className={`scroll-mt-28 rounded-[6px] border ${RULE} bg-white p-5`}>
              <div className={`border-b pb-3 ${RULE}`}>
                <p className="font-sans text-[12px] font-medium uppercase tracking-[2px] text-gold-ink">Administration</p>
                <h2 className="mt-1 text-[18px] font-semibold text-ink">Secretariat</h2>
              </div>
              <address className="mt-4 space-y-1 text-[14px] not-italic">
                {ORG.address.map((line) => (
                  <span key={line} className="block text-[#6c757d]">{line}</span>
                ))}
                <a href={`tel:${ORG.phoneHref}`} className="block pt-2 font-medium text-ink hover:text-brand">{ORG.phone}</a>
                <a href={`mailto:${ORG.email}`} className="block font-medium text-ink hover:text-brand">{ORG.email}</a>
              </address>
            </div>
          </aside>
        </div>
      </section>

      {/* ── Vision / Mission / Goal / Values ── */}
      <section className="bg-paper py-14 lg:py-16">
        <div className="container-page">
          <SectionHead eyebrow="Strategic direction" title="Vision, Mission, Goal & Values" />

          <p className="mb-8 max-w-2xl text-[15px] leading-relaxed text-[#6c757d]">
            To fulfil its mandate, the EAZ has set the following strategic direction through the Vision,
            Mission, Goal and Values which are stated below:
          </p>

          {/* VMG cards */}
          <div className="grid gap-5 sm:grid-cols-3">
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
              <div key={item.label} className={`rounded-[4px] border-t-[3px] border-brand bg-white p-6 border ${RULE}`}>
                <p className="font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-gold-ink">{item.label}</p>
                <p className="mt-3 text-[15px] leading-relaxed text-ink">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Values */}
          <p className="mt-10 mb-6 max-w-2xl text-[15px] leading-relaxed text-[#6c757d]">
            The Association recognizes the need for upholding professional standards and ethical conduct in
            the implementation of this Strategic Plan. In this regard, the EAZ shall be guided by the
            following five core values:
          </p>
          <ul className={`divide-y ${RULE} border ${RULE} rounded-[6px] bg-white overflow-hidden`}>
            {[
              { name: "Transparency", detail: "performing official duties in an open and honest manner;" },
              { name: "Accountability", detail: "being accountable to all members, staff, stakeholders and members of the public in all its activities;" },
              { name: "Professionalism", detail: "providing service with skill, objectivity and diligence to all stakeholders in a professionally ethical manner;" },
              { name: "Integrity", detail: "exhibiting the highest standards of personal probity and behaviour;" },
              { name: "Impartiality", detail: "provide service in an impartial manner free of political, personal or other bias;" },
            ].map((value) => (
              <li key={value.name} className="flex gap-4 px-5 py-4">
                <span className="mt-0.5 shrink-0 font-sans text-[13px] font-bold text-gold-ink">—</span>
                <p className="text-[15px] leading-relaxed text-[#6c757d]">
                  <strong className="font-semibold text-ink">{value.name}</strong> &ndash; {value.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Objectives ── */}
      <section className="bg-white py-14 lg:py-16">
        <div className="container-page">
          <SectionHead eyebrow="Strategic plan" title="Objectives" />

          <p className="mb-6 max-w-2xl text-[15px] leading-relaxed text-[#6c757d]">
            The Association has elaborated five main objectives for the period 2022 – 2023:
          </p>
          <ol className={`divide-y ${RULE} border ${RULE} rounded-[6px] bg-white overflow-hidden mb-10`}>
            {[
              "To provide effective input into public policy for decision-making;",
              "To mobilise evidence-based policy research in economics and related disciplines;",
              "To strengthen public information and outreach on economic and related issues;",
              "To mobilise and improve professional capacity for consultancy and advisory services to both the private and public sector; and",
              "To strengthen the EAZ secretariat to carry out the above four objectives.",
            ].map((item, i) => (
              <li key={i} className="flex gap-4 px-5 py-4">
                <span className="mt-0.5 shrink-0 font-sans text-[13px] font-bold text-gold-ink">
                  {i + 1}.
                </span>
                <p className="text-[15px] leading-relaxed text-[#6c757d]">{item}</p>
              </li>
            ))}
          </ol>

          <p className="mb-6 max-w-2xl text-[15px] leading-relaxed text-[#6c757d]">
            Other objectives of a longer-term nature will also be pursued to the extent possible, but will
            not be the main priority through the end of 2025. These are:
          </p>
          <ol className={`divide-y ${RULE} border ${RULE} rounded-[6px] bg-white overflow-hidden`} start={6}>
            {[
              "To build strategic partnerships for the formulation and implementation of economic policies",
              "To establish and maintain high professional ethics and standards in economic research, consultancy, publications, and advisory services",
              "To build effective national, regional, and international networks with professional associations and other institutions.",
            ].map((item, i) => (
              <li key={i} className="flex gap-4 px-5 py-4">
                <span className="mt-0.5 shrink-0 font-sans text-[13px] font-bold text-gold-ink">
                  {i + 6}.
                </span>
                <p className="text-[15px] leading-relaxed text-[#6c757d]">{item}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/membership" className="inline-flex items-center gap-2 rounded-[5px] bg-brand-deep px-5 py-2.5 text-[15px] font-bold text-white transition-colors hover:bg-brand">
              Join EAZ Today
            </Link>
            <Link href="/contact-us" className={CHIP}>
              Contact us <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
