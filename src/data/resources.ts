export type ResourceGroup = "Governance & elections" | "Publications" | "Member notices";

export type Resource = {
  title: string;
  description: string;
  group: ResourceGroup;
  date: string;
  meta: string;
  file: string;
};

export const RESOURCE_GROUPS: { name: ResourceGroup; note: string }[] = [
  {
    name: "Governance & elections",
    note: "General meeting notices, nomination circulars and the forms required to stand for office.",
  },
  {
    name: "Publications",
    note: "Newsletters, briefings and papers published by the Association and its partners.",
  },
  {
    name: "Member notices",
    note: "Circulars issued to members on membership matters and certificates.",
  },
];

export const RESOURCES: Resource[] = [
  {
    title: "Notice of the 2026 Annual General Meeting",
    description:
      "Formal notice of the 2026 AGM, including dates, venue, participation requirements and subscription reminders.",
    group: "Governance & elections",
    date: "2 July 2026",
    meta: "PDF · 152 KB",
    file: "/documents/agm-notice-2026.pdf",
  },
  {
    title: "Call for nominations — 2026 Elective Extra-Ordinary General Meeting",
    description:
      "Positions open for nomination, eligibility requirements, nomination fees and the submission checklist.",
    group: "Governance & elections",
    date: "27 July 2026",
    meta: "PDF · 249 KB",
    file: "/documents/nomination-notice-2026.pdf",
  },
  {
    title: "2026 Nomination Application Form",
    description:
      "The approved form for members contesting elective positions, to be submitted with supporting documents and proof of payment.",
    group: "Governance & elections",
    date: "1 August 2026",
    meta: "PDF · 307 KB",
    file: "/documents/nomination-form-2026.pdf",
  },
  {
    title: "EAZ Quarter 1 2026 Newsletter",
    description:
      "Insights on exchange rates, inflation, fuel price movements and other matters in the first quarter of 2026.",
    group: "Publications",
    date: "22 April 2026",
    meta: "PDF · 451 KB",
    file: "/documents/newsletter-q1-2026.pdf",
  },
  {
    title: "Insights from the Economics Association of Zambia",
    description:
      "Summary of the Association's media briefing on the state of national economic affairs, policy positions and proposed interventions.",
    group: "Publications",
    date: "11 June 2024",
    meta: "PDF · 2.1 MB",
    file: "/documents/media-briefing-insights.pdf",
  },
  {
    title: "Zambia AIV and SIPs Overview",
    description:
      "Paper presented at the brown bag discussion with the IMF Country Representative on growth, financial stability and productivity.",
    group: "Publications",
    date: "27 July 2023",
    meta: "PDF · 355 KB",
    file: "/documents/imf-selected-issues-paper.pdf",
  },
  {
    title: "Notice to members — August 2024",
    description:
      "Circular on the issuing of membership certificates, with the requirements members need to meet.",
    group: "Member notices",
    date: "13 August 2024",
    meta: "PDF · 552 KB",
    file: "/documents/notice-aug-2024.pdf",
  },
];

export function resourcesByGroup(group: ResourceGroup): Resource[] {
  return RESOURCES.filter((resource) => resource.group === group);
}
