/**
 * EAZ leadership terms.
 *
 * Officer names are intentionally left undefined until the Secretariat supplies
 * them; the UI renders "To be confirmed" for any seat without a name, so adding
 * a person is a data-only change here.
 */

export type Leader = {
  role: string;
  name?: string;
};

export type Term = {
  slug: string;
  label: string;
  status: "Current" | "Incoming" | "Past";
  theme: string;
  summary: string;
  leaders: Leader[];
  accomplishments: string[];
};

const SEATS = [
  "President",
  "Vice President",
  "Treasurer",
  "Deputy Treasurer",
  "Deputy National Secretary",
  "Committee Member",
  "Committee Member",
  "Committee Member",
] as const;

/** Builds the eight seats of a term; committee members are passed individually. */
function team(
  officers: Partial<Record<string, string>>,
  committee: (string | undefined)[] = [],
): Leader[] {
  let committeeIndex = 0;
  return SEATS.map((role) =>
    role === "Committee Member"
      ? { role, name: committee[committeeIndex++] }
      : { role, name: officers[role] },
  );
}

export const TERMS: Term[] = [
  {
    slug: "2024-2026",
    label: "2024 – 2026",
    status: "Current",
    theme: "Consolidating professionalism and evidence-based policy dialogue",
    summary:
      "The term that carried the Association through its national summit cycle, expanded member services and deepened engagement with Government, the private sector and academia.",
    leaders: team({}),
    accomplishments: [],
  },
  {
    slug: "2026-2028",
    label: "2026 – 2028",
    status: "Incoming",
    theme: "Building on the Association's research and membership platform",
    summary:
      "The incoming National Executive Committee, elected to take forward the Association's research agenda, member growth and policy advocacy programme.",
    leaders: team({}),
    accomplishments: [],
  },
];

export function termBySlug(slug: string): Term | undefined {
  return TERMS.find((term) => term.slug === slug);
}

export type CorporateMember = {
  name: string;
  sector: string;
  logo?: string;
  href?: string;
};

/**
 * Corporate member roster.
 * Seeded from the organisations already published on the site; replace with the
 * Secretariat's confirmed corporate-member list when it is available.
 */
export const CORPORATE_MEMBERS: CorporateMember[] = [
  { name: "Bank of Zambia", sector: "Central bank", logo: "/partners/boz.png" },
  { name: "Zambia Revenue Authority", sector: "Tax administration", logo: "/partners/zra.png" },
  { name: "Zambia Development Agency", sector: "Investment promotion", logo: "/partners/zda.png" },
  { name: "Zanaco", sector: "Commercial banking", logo: "/partners/zanaco.png" },
  { name: "Solar Panda", sector: "Renewable energy", logo: "/partners/solorpanda.png" },
];
