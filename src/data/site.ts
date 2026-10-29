export const ORG = {
  name: "Economics Association of Zambia",
  shortName: "EAZ",
  strap: "Promoting Professionalism, Economic Research and Policy Dialogue",
  description:
    "A non-partisan professional association whose membership includes experts in economics, business administration, finance and allied fields.",
  founded: "Established in the 1960s as the Lusaka Economics Club",
  registered: "Registered under the Societies Act, Cap. 105, in 1985",
  phone: "+260 770 537 400",
  phoneHref: "+260770537400",
  alternatePhones: ["+260 979 697 853", "+260 978 631 868"],
  email: "secretariat@eaz.org.zm",
  membershipEmail: "members@eaz.org.zm",
  infoEmail: "info@eaz.org.zm",
  address: [
    "Flat No. 1, Stand No. 6000",
    "Chitemene Road, Northmead",
    "Lusaka, Zambia",
  ],
  social: [
    { label: "Facebook", href: "https://facebook.com/EAZambia/" },
    { label: "Twitter", href: "https://twitter.com/EAZambia/" },
    { label: "YouTube", href: "https://www.youtube.com/@EAZambia" },
  ],
};

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Members",
    href: "/membership",
    children: [
      { label: "Membership classes & benefits", href: "/membership" },
      { label: "Register on the website", href: "/members/register" },
      { label: "Member login", href: "/members/login" },
    ],
  },
  {
    label: "News & Articles",
    href: "/news",
    children: [
      { label: "News", href: "/news" },
      { label: "Articles", href: "/articles" },
      { label: "Notices", href: "/notices" },
    ],
  },
  { label: "Conferences", href: "/conferences" },
  { label: "Resources", href: "/resources" },
  { label: "History", href: "/about-us/history" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact-us" },
];

export type MemberClass = {
  name: string;
  eligibility: string;
};

export const MEMBERSHIP_CLASSES: MemberClass[] = [
  {
    name: "Economist",
    eligibility:
      "Minimum Bachelor's Degree in Economics and related disciplines (Development Studies, Finance, Statistics, Administration, Political Science, Banking and Mathematics).",
  },
  {
    name: "Associate",
    eligibility:
      "Individuals with interest in the activities of the Association but who have qualifications other than Economics or related disciplines.",
  },
  {
    name: "Corporate",
    eligibility: "Profit-making organisations.",
  },
  {
    name: "International Organisation",
    eligibility: "Foreign entities.",
  },
  {
    name: "Junior",
    eligibility:
      "Any tertiary education undergraduate student who graduated within the previous 12 months. Membership available for a maximum of 2 years after joining.",
  },
  {
    name: "Senior",
    eligibility:
      "An individual with at least ten years of executive level management or leadership.",
  },
  {
    name: "Student",
    eligibility:
      "Individuals currently undertaking undergraduate studies in any field and who are interested in the activities of the Association.",
  },
];

export const BENEFITS = [
  "Networking opportunities with industry professionals",
  "Access to business, job and consultancy opportunities",
  "Access to valuable reports and research papers",
  "Professional development through workshops, seminars and tailor-made training programmes",
  "Platform to exchange development ideas",
  "Avenue to contribute to development practices through boards, technical working groups, etc.",
];
