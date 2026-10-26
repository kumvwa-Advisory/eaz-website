export type PostType = "news" | "article" | "notice";

export type Post = {
  slug: string;
  type: PostType;
  date: string;
  dateISO: string;
  title: string;
  excerpt: string;
  author: string;
  role: string;
  image?: string;
  imageAlt?: string;
  attachment?: { label: string; meta: string; file: string };
  body: string[];
};

export const SECTION: Record<PostType, { label: string; href: string }> = {
  news: { label: "News", href: "/news" },
  article: { label: "Articles", href: "/articles" },
  notice: { label: "Notices", href: "/notices" },
};

export const postHref = (post: Pick<Post, "type" | "slug">) =>
  `${SECTION[post.type].href}/${post.slug}`;

export const POSTS: Post[] = [
  {
    slug: "student-spotlight",
    type: "notice",
    date: "21 October 2026",
    dateISO: "2026-10-21",
    title: "EAZ Student Spotlight: Celebrating Zambia's Future Economists",
    excerpt:
      "A new segment celebrating the achievements, success stories and bright ideas of students across our universities and colleges.",
    author: "Tendai Posiana",
    role: "Communications, Economics Association of Zambia",
    image: "/images/student-spotlight.png",
    imageAlt: "EAZ Student Spotlight poster",
    body: [
      "The Economics Association of Zambia (EAZ) is pleased to introduce the EAZ Student Spotlight, a new segment celebrating the achievements, success stories and bright ideas of students across our universities and colleges.",
      "The segment was approved by the EAZ Executive Committee and will be featured on the official EAZ website and our social media platforms. Each featured student will be showcased with their story and tagged on our pages, giving them recognition and inspiring fellow students to pursue excellence in economics and related fields.",
      "Who can take part",
      "To be featured, a student must be:",
      "• A student member of EAZ; and",
      "• A member of their university club.",
      "How to be featured",
      "Eligible students are invited to submit the following to the EAZ Secretariat:",
      "• Details of their story",
      "• University or college name",
      "• A clear picture",
      "• Social media handles, so they can be tagged",
      "Club leaders are encouraged to share this information with members and support them in submitting their stories.",
      "Not yet a member? Join EAZ today and be part of Zambia's future economists.",
    ],
  },
  {
    slug: "2026-nomination-application-form",
    type: "notice",
    date: "1 August 2026",
    dateISO: "2026-08-01",
    title: "2026 EAZ Nomination Application Form",
    excerpt:
      "The Association has opened the nomination process for eligible members wishing to contest in the 2026 EAZ Extra-Ordinary Elective Annual General Meeting.",
    author: "Tendai Posiana",
    role: "Communications, Economics Association of Zambia",
    attachment: {
      label: "Approved EAZ Elections Nomination Form",
      meta: "PDF · 307 KB",
      file: "/documents/nomination-form-2026.pdf",
    },
    body: [
      "The Economics Association of Zambia (EAZ) has opened the nomination process for eligible members wishing to contest in the 2026 EAZ Extra-Ordinary Elective Annual General Meeting.",
      "Members intending to contest for an elective position are required to complete the official EAZ Nomination Application Form and submit it together with the required supporting documentation and proof of payment of the applicable nomination fee.",
      "Candidates are encouraged to carefully read and complete all sections of the nomination form and ensure that the information provided is accurate and complete before submission.",
      "Nomination requirements",
      "Applicants are required to:",
      "• Be eligible to contest in accordance with the EAZ Constitution and applicable electoral guidelines.",
      "• Complete the official EAZ Nomination Application Form in full.",
      "• Provide all required information and supporting documentation.",
      "• Pay the applicable nomination fee within the stipulated nomination period.",
      "• Submit the completed nomination application together with proof of payment of the nomination fee to the EAZ Secretariat and Returning Officer through the designated submission channels.",
      "Nomination deadline",
      "All nomination applications must be completed and submitted by Friday, 7th August 2026. The applicable nomination fee must also be paid within the stipulated nomination period.",
      "Members are encouraged to submit their applications and make the required payment before the deadline to allow sufficient time for verification and processing. Late applications and/or payments may not be considered.",
      "Submission and enquiries",
      "Completed nomination forms, proof of payment and any required supporting documentation should be submitted through the designated channels provided by the EAZ Secretariat and Returning Officer.",
      "For further information or clarification regarding the nomination process, please contact the EAZ Secretariat on +260 979 697 853 or +260 978 631 868.",
    ],
  },
  {
    slug: "2026-egm-call-for-nominations",
    type: "notice",
    date: "27 July 2026",
    dateISO: "2026-07-27",
    title: "Call for nominations now open — 2026 EAZ Elective Extra-Ordinary General Meeting",
    excerpt:
      "Nominations are open for members wishing to contest elective positions at the 2026 Extra-Ordinary General Meeting, to be held at Avani Victoria Falls Resort, Livingstone.",
    author: "Tendai Posiana",
    role: "Communications, Economics Association of Zambia",
    attachment: {
      label: "EAZ 2026 AGM Nomination Notice",
      meta: "PDF · 249 KB",
      file: "/documents/nomination-notice-2026.pdf",
    },
    body: [
      "The Economics Association of Zambia (EAZ) wishes to inform all members that nominations are now open for members wishing to contest elective positions in the 2026 EAZ Elective Extra-Ordinary General Meeting (EGM) scheduled to be held on Friday, 4th September 2026 at Avani Victoria Falls Resort, Livingstone.",
      "The elections will be conducted in accordance with the provisions of the EAZ Constitution and will be overseen by the duly appointed EAZ Electoral Committee, with support from an Independent Returning Officer, to ensure that the electoral process is conducted in a transparent, credible, free and fair manner.",
      "Positions open for nominations",
      "• President — K5,000",
      "• Vice President — K3,500",
      "• National Secretary — K2,500",
      "• National Treasurer — K2,500",
      "• Committee Members — K1,500",
      "Eligibility requirements",
      "Members wishing to contest for elective positions must:",
      "• Be fully paid-up members of EAZ for at least three (3) consecutive years;",
      "• Possess valid EAZ membership credentials;",
      "• Meet all requirements provided for under the EAZ Constitution and approved electoral guidelines;",
      "• Submit a completed nomination application form together with all required supporting documents; and",
      "• Pay the applicable nomination fee.",
      "Nomination period",
      "Nomination forms are available from the EAZ Secretariat. Completed nomination applications, together with the required supporting documents, should be submitted electronically to the Secretariat and to the Independent Returning Officer. The nomination period runs from 29th July 2026 to 7th August 2026.",
      "Required submission documents",
      "• Completed and signed Nomination Application Form;",
      "• Brief biography or profile (not exceeding one page);",
      "• Recent high-resolution passport-size photograph;",
      "• Curriculum Vitae (CV); and",
      "• Proof of payment of the nomination fee.",
      "Members are encouraged to actively participate in this important governance process as the Association prepares to elect its next leadership. For further information and enquiries, please contact the EAZ Secretariat on +260 979 697 853 or +260 978 631 868.",
    ],
  },
  {
    slug: "notice-2026-agm",
    type: "notice",
    date: "2 July 2026",
    dateISO: "2026-07-02",
    title: "Notice of the 2026 Annual General Meeting",
    excerpt:
      "The 2026 Annual General Meeting will be held from 3rd to 4th September 2026 at Avani Victoria Falls Resort, Livingstone, commencing at 08:30.",
    author: "Tendai Posiana",
    role: "Communications, Economics Association of Zambia",
    attachment: {
      label: "EAZ 2026 AGM Notice",
      meta: "PDF · 152 KB",
      file: "/documents/agm-notice-2026.pdf",
    },
    body: [
      "The Economics Association of Zambia is pleased to notify its members that the 2026 Annual General Meeting (AGM) will be held as follows:",
      "• Dates: 3rd – 4th September 2026",
      "• Venue: Avani Victoria Falls Resort, Livingstone",
      "• Time: 08:30 hours",
      "The Annual General Meeting is the Association's supreme governance forum and provides members with the opportunity to exercise their constitutional rights and responsibilities. The meeting will consider key governance matters, receive statutory reports, conduct elections for the National Executive Committee, and deliberate on issues that will shape the strategic direction of the Association.",
      "Your Association. Your Voice. Your Future.",
      "The continued growth, credibility and influence of the Association depend on the active participation and commitment of its members. We therefore encourage all members to attend and contribute to the governance and development of the Association.",
      "Members are kindly reminded to ensure that their 2026 membership subscriptions are fully paid in order to participate in the Annual General Meeting, including exercising their voting rights, in accordance with the provisions of the EAZ Constitution.",
      "Members intending to contest for elective positions on the National Executive Committee are further reminded that they must have maintained fully paid-up membership for three (3) consecutive years preceding the elections and satisfy all other constitutional eligibility requirements.",
      "Strong Membership. Strong Association. Stronger Economic Leadership.",
      "Additional information regarding registration, nominations, participation arrangements, accommodation and the detailed AGM programme will be communicated in due course. Should you require any clarification regarding your membership status or the upcoming Annual General Meeting, please contact the EAZ Secretariat on +260 979 697 853 or +260 978 631 868.",
    ],
  },
  {
    slug: "annual-economic-gala-dinner",
    type: "notice",
    date: "29 October 2025",
    dateISO: "2025-10-29",
    title: "Annual Economic Gala Dinner",
    excerpt:
      "The Association's Annual Economic Gala Dinner, honouring outstanding corporate members and individual economists, was announced for Friday, 19th December 2025 at the Taj Pamodzi Hotel.",
    author: "Tendai Posiana",
    role: "Communications, Economics Association of Zambia",
    image: "/images/gala-dinner-2025.jpg",
    imageAlt: "Guests at the EAZ Annual Economic Gala Dinner",
    body: [
      "The Economics Association of Zambia (EAZ) proudly presents its Annual Economic Gala Dinner: an evening of celebration, networking and recognition honouring outstanding corporate members and individual economists who have made remarkable contributions in 2025.",
      "• Date: Friday, 19th December 2025",
      "• Time: 18:00 hours",
      "• Venue: Taj Pamodzi Hotel",
      "Her Honour the Vice President, Mrs. Mutale Nalumango, was expected to officiate at the gala dinner.",
      "Tickets",
      "• Ordinary: K1,500",
      "• VIP: K2,000",
      "• Corporate table for 10: K13,500",
      "Sponsorship opportunities are available for organisations wishing to position their brand at the Association's premier economic event of the year. For bookings and sponsorship, contact Idah on +260 97 863 1868 or +260 97 969 7853.",
    ],
  },
  {
    slug: "virtual-brown-bag-discussion-2025",
    type: "news",
    date: "29 October 2025",
    dateISO: "2025-10-29",
    title: "Virtual Brown Bag Discussion",
    excerpt:
      "The Association presented another edition of the Brown Bag Meeting, a safe space for open, informed and evidence-based dialogue on national development.",
    author: "Tendai Posiana",
    role: "Communications, Economics Association of Zambia",
    image: "/images/brown-bag.jpg",
    imageAlt: "A presenter addressing an EAZ brown bag discussion",
    body: [
      "Join Our Virtual Brown Bag Discussion! The Economics Association of Zambia (EAZ) presents another insightful edition of the Brown Bag Meeting, a safe space for open, informed and evidence-based dialogue on national development.",
      "• Date: 31st October 2025",
      "• Time: 12:00 – 14:00",
      "• Theme: 2026 National Budget — An In-depth Reflection and Analysis",
      "• Host: Paul Shingongo",
      "The discussion unpacked the 2026 National Budget and its implications for Zambia's economy, and was held live via Zoom and online.",
    ],
  },
  {
    slug: "welcoming-southern-province-ps",
    type: "news",
    date: "29 October 2025",
    dateISO: "2025-10-29",
    title: "Welcoming Southern Province PS",
    excerpt:
      "The Permanent Secretary for Southern Province welcomed the Association to the province during the national economic summit.",
    author: "Tendai Posiana",
    role: "Communications, Economics Association of Zambia",
    image: "/images/summit-2025-ps.jpg",
    imageAlt: "The Association is welcomed to Southern Province at the national economic summit",
    body: [
      "Welcoming the Association into the province as per culture was the Permanent Secretary for Southern Province, who was represented by the Assistant Secretary from the Southern Province Administration, Mr. Bestone Mboozi.",
    ],
  },
  {
    slug: "speech-by-finance-minister",
    type: "news",
    date: "29 October 2025",
    dateISO: "2025-10-29",
    title: "Speech by Situmbeko Musokotwane, Finance Minister",
    excerpt:
      "The Guest of Honour, Hon. Dr. Situmbeko Musokotwane, MP, Minister of Finance and National Planning, delivered the keynote address at the summit.",
    author: "Tendai Posiana",
    role: "Communications, Economics Association of Zambia",
    image: "/images/summit-2025-keynote.jpg",
    imageAlt: "The keynote address at the EAZ national economic summit",
    body: [
      "Guest of Honour, Hon. Dr. Situmbeko Musokotwane, MP, Minister of Finance and National Planning, was represented by the Bank of Zambia Deputy Governor, Dr. Francis Chipimo, who delivered the keynote speech.",
    ],
  },
  {
    slug: "mou-between-eaz-and-arbitration-centre",
    type: "news",
    date: "29 October 2025",
    dateISO: "2025-10-29",
    title: "MOU between EAZ and Arbitration Centre",
    excerpt:
      "A Memorandum of Understanding between the Association and the Lusaka International Arbitration Centre was signed at the national economic summit.",
    author: "Tendai Posiana",
    role: "Communications, Economics Association of Zambia",
    image: "/images/summit-2025-mou.jpg",
    imageAlt: "Signing of the Memorandum of Understanding with the Lusaka International Arbitration Centre",
    body: [
      "A Memorandum of Understanding was signed between the Economics Association of Zambia and the Lusaka International Arbitration Centre.",
      "Beyond the presentations and panel discussions, significant business deals were being finalised. A notable highlight was the signing by Board Chairperson Dr. Chabuka Kawesha. The MoU paves the way for enhanced collaboration and strategic partnerships, marking a new era of cooperation between EAZ and LIAC.",
    ],
  },
  {
    slug: "issuing-of-membership-certificates",
    type: "news",
    date: "13 August 2024",
    dateISO: "2024-08-13",
    title: "Issuing of Membership Certificates",
    excerpt:
      "Notice to members on the issuing of membership certificates. The notice is available to download.",
    author: "Bwalya Malama",
    role: "Economics Association of Zambia",
    attachment: {
      label: "Notice to members — August 2024",
      meta: "PDF · 552 KB",
      file: "/documents/notice-aug-2024.pdf",
    },
    body: [
      "The Association issued a notice to members on the issuing of membership certificates.",
      "The notice is reproduced in the document below and may be downloaded for reference.",
    ],
  },
  {
    slug: "courtesy-call-bankers-association",
    type: "news",
    date: "13 June 2024",
    dateISO: "2024-06-13",
    title: "Courtesy Call Meeting between EAZ and the Bankers Association of Zambia",
    excerpt:
      "The Association, led by President Dr. Oswald Mungule, met with Bankers Association of Zambia CEO Mr. Leonard Mwanza on the National Economic Summit and future collaboration.",
    author: "Tendai Posiana",
    role: "Communications, Economics Association of Zambia",
    image: "/images/bankers-association.jpg",
    imageAlt: "EAZ and Bankers Association of Zambia at a courtesy call meeting",
    body: [
      "Today, the Economics Association of Zambia (EAZ), led by President Dr. Oswald Mungule, met with Bankers Association of Zambia (BAZ) CEO Mr. Leonard Mwanza. The meeting focused on the upcoming National Economic Summit and future collaborations between the two associations.",
      "Key points of discussion",
      "• National Economic Summit collaboration: Dr. Mungule highlighted the summit's theme and BAZ's potential roles in discussions on sustainable financing and economic policy. Mr. Mwanza expressed BAZ's interest in participating actively in the summit.",
      "• Joint research initiatives: collaboration on research projects addressing issues such as financial inclusion and digital banking.",
      "• Policy advocacy: joint efforts to shape policies for economic stability and growth.",
      "• Capacity building: joint workshops and training programmes to enhance member capacity in areas such as financial literacy and risk management.",
      "• Data sharing and analysis: collaborative data analysis for better decision-making.",
      "• Event partnerships: co-hosting future conferences and seminars.",
      "• Community outreach: joint initiatives to promote financial literacy and economic awareness.",
      "Next steps",
      "• Formalising collaboration through a Memorandum of Understanding outlining specific areas of cooperation.",
      "• Establishing a schedule of regular meetings to ensure ongoing communication and coordination.",
      "The meeting concluded with optimism about impactful collaboration between EAZ and BAZ in support of Zambia's economic development and sustainability goals.",
    ],
  },
  {
    slug: "media-briefing-national-economic-affairs",
    type: "news",
    date: "11 June 2024",
    dateISO: "2024-06-11",
    title: "EAZ hosts media briefing on the state of national economic affairs",
    excerpt:
      "The Association held a media briefing at Zamcom Lodge, Lusaka, on Zambia's economic landscape, its challenges and the opportunities for sustainable growth.",
    author: "Tendai Posiana",
    role: "Communications, Economics Association of Zambia",
    image: "/images/media-briefing.jpg",
    imageAlt: "The EAZ media briefing on the state of national economic affairs",
    attachment: {
      label: "Insights from the Economics Association of Zambia",
      meta: "PDF · 2.1 MB",
      file: "/documents/media-briefing-insights.pdf",
    },
    body: [
      "The Economics Association of Zambia (EAZ) held a media briefing on the state of national economic affairs at Zamcom Lodge in Lusaka. The event featured discussions on Zambia's current economic landscape, its challenges and the opportunities for sustainable growth.",
      "The Vice President of EAZ, Mr. Mbanji Milambo, opened the session with welcoming remarks, followed by a keynote address from the President, Dr. Oswald Mungule. The briefing concluded with a question and answer session, allowing media representatives to engage directly with EAZ leadership.",
      "A detailed summary of the insights shared during the briefing is attached for members. These insights cover critical areas of economic policy, sustainable development strategies and financing mechanisms that are essential for Zambia's economic resilience.",
      "EAZ reaffirms its commitment to playing an advisory role to the government and to sharing actionable sector interventions. Our goal is to provide evidence-based recommendations that support sound economic policies and foster sustainable growth.",
    ],
  },
  {
    slug: "courtesy-call-national-assembly",
    type: "news",
    date: "10 June 2024",
    dateISO: "2024-06-10",
    title: "EAZ pays a courtesy call on the Speaker of the National Assembly",
    excerpt:
      "The Association met the Speaker of the National Assembly, Rt. Hon. Nelly Butete Kashumba Mutti, on budget committees, legislative review and the National Economic Summit.",
    author: "Tendai Posiana",
    role: "Communications, Economics Association of Zambia",
    image: "/images/national-assembly.jpg",
    imageAlt: "The EAZ courtesy call on the Speaker of the National Assembly",
    body: [
      "Today, the Economics Association of Zambia (EAZ) had the privilege of paying a courtesy call on the Speaker of the National Assembly, Rt. Hon. Nelly Butete Kashumba Mutti. The discussions were highly productive and underscored the significant role EAZ plays in the national economic agenda and governance participation.",
      "The National Assembly expressed profound appreciation for the Association's contributions to economic governance and highlighted the importance of its involvement in policy discussions and decision-making processes.",
      "Key highlights",
      "• Sector budget committees: the National Assembly is rolling out support to sector budget committees and has invited EAZ to participate actively, providing detailed analyses and recommendations to enhance the effectiveness and efficiency of budget allocations.",
      "• Legislative review and proposals: EAZ has been requested to review certain existing laws and propose amendments where necessary, so that the legislative framework supports robust economic growth and addresses contemporary economic challenges.",
      "• National Economic Summit: the National Assembly agreed to participate in the National Economic Summit 2024, fostering dialogue between policymakers and economic stakeholders.",
      "• Research and contributions: the Speaker acknowledged EAZ's contributions to addressing the nation's economic challenges and emphasised the need to enhance research capabilities, particularly in economic policy, governance and budgeting.",
      "This meeting reinforced the strong partnership between EAZ and the National Assembly. The Association remains committed to strengthening its research efforts, participating in budget committees and contributing to legislative reform.",
    ],
  },
  {
    slug: "eaz-quarter-1-2026-newsletter",
    type: "news",
    date: "22 April 2026",
    dateISO: "2026-04-22",
    title: "EAZ Quarter 1 2026 Newsletter",
    excerpt:
      "Insights on exchange rates, inflation, fuel price movements and other matters in the first quarter of 2026.",
    author: "EAZ Admin",
    role: "Economics Association of Zambia",
    attachment: {
      label: "EAZ Quarter 1 2026 Newsletter",
      meta: "PDF · 451 KB",
      file: "/documents/newsletter-q1-2026.pdf",
    },
    body: [
      "Read the latest newsletter for the first quarter of 2026 to get insights on exchange rates, inflation, fuel price movements and other matters.",
      "The newsletter may be read or downloaded below.",
    ],
  },
  {
    slug: "virtual-brown-bag-discussion-10-october-2025",
    type: "article",
    date: "29 October 2025",
    dateISO: "2025-10-29",
    title: "Join Our Virtual Brown Bag Discussion 10 October 2025",
    excerpt:
      "The Economics Association of Zambia presents another edition of the Brown Bag Meeting, a safe space for open, informed and evidence-based dialogue on national development.",
    author: "Tendai Posiana",
    role: "Communications, Economics Association of Zambia",
    image: "/images/brown-bag-speaker.jpg",
    imageAlt: "A presenter at an EAZ brown bag discussion",
    body: [
      "The Economics Association of Zambia (EAZ) presents another insightful edition of the Brown Bag Meeting, a safe space for open, informed and evidence-based dialogue on national development.",
      "• Date: 31st October 2025",
      "• Time: 12:00 – 14:00",
      "• Theme: 2026 National Budget — An In-depth Reflection and Analysis",
      "• Host: Paul Shingongo",
      "Do not miss this interactive discussion as we unpack the 2026 National Budget and its implications for Zambia's economy. Join us live via Zoom or tune in online.",
    ],
  },
  {
    slug: "happy-independence-day-zambia",
    type: "article",
    date: "29 October 2025",
    dateISO: "2025-10-29",
    title: "Happy Independence Day, Zambia",
    excerpt: "The Association marks Zambia's Independence Day.",
    author: "Tendai Posiana",
    role: "Communications, Economics Association of Zambia",
    image: "/images/independence-day.jpg",
    imageAlt: "Independence Day greeting from the Economics Association of Zambia",
    body: ["Happy Independence Day, Zambia."],
  },
  {
    slug: "eaz-to-host-national-economic-summit-july",
    type: "article",
    date: "8 May 2024",
    dateISO: "2024-05-08",
    title: "EAZ to host a National Economic Summit in July",
    excerpt:
      "EAZ drives economic change: uniting leaders for impactful solutions.",
    author: "Tendai Posiana",
    role: "Communications, Economics Association of Zambia",
    image: "/images/summit-2024.jpg",
    imageAlt: "Announcement of the EAZ National Economic Summit",
    body: [
      "EAZ drives economic change: uniting leaders for impactful solutions.",
    ],
  },
  {
    slug: "brown-bag-imf-selected-issued-paper",
    type: "article",
    date: "27 July 2023",
    dateISO: "2023-07-27",
    title: "The Brown Bag Discussion: “IMF Selected Issued Paper”",
    excerpt:
      "The Association hosted a brown bag discussion on the IMF's selected issued papers, presented by IMF Country Representative Preya Sharma.",
    author: "Tendai Posiana",
    role: "Communications, Economics Association of Zambia",
    image: "/images/imf-paper.jpg",
    imageAlt: "The brown bag discussion on the IMF selected issued paper",
    attachment: {
      label: "Zambia AIV and SIPs Overview — Outreach, July 2023",
      meta: "PDF · 355 KB",
      file: "/documents/imf-selected-issues-paper.pdf",
    },
    body: [
      "EAZ hosted a brown bag discussion on Thursday 27th July 2023 via Zoom. The EAZ brown bags are held with a view to creating a platform where economists and members of the public engage in informed economic discourse. Participation is virtual, through the Zoom platform.",
      "The topic was “IMF Selected Issued Paper”, presented by the IMF Country Representative, Preya Sharma. The presentation focused on the following areas:",
      "• Boosting sustainable growth",
      "• Macro-financial linkages and financial stability in Zambia",
      "• Boosting productivity in Zambia's agriculture sector",
      "• Zambia AIV and SIPs overview — outreach, July 2023",
    ],
  },
  {
    slug: "how-to-avoid-future-debt-traps",
    type: "article",
    date: "13 July 2023",
    dateISO: "2023-07-13",
    title: "How to Avoid Future Debt Traps: Only Borrow for Viable Projects",
    excerpt:
      "Zambia's default had a third cause that is rarely discussed: borrowing for projects that were economically unviable.",
    author: "Alan Whitworth",
    role: "EAZ member, ZIPAR 2010–2012",
    image: "/images/debt-traps.jpg",
    imageAlt: "Borrowing and the financing of infrastructure projects",
    body: [
      "There is widespread public understanding that Zambia's debt default was a result of the previous government both spending too much, far more than the tax it raised, causing fiscal deficits, and borrowing too much — undertaking too many projects. However, few Zambians recognise that there was a third cause: borrowing for the wrong things. Many infrastructure projects were economically unviable.",
      "If a project is economically viable — that is, the rate of return exceeds the interest rate on the loan that finances it — it may be able to service the debt from its own revenues and benefits. It also adds more to GDP than to the debt stock, reducing the debt-to-GDP ratio. On the other hand, if a project is uneconomic it adds to the debt stock and debt service but not to GDP, increasing debt-to-GDP.",
      "Most borrowing was for transport projects, particularly roads. However, few non-urban roads had enough traffic to justify upgrading. In the early 2000s the Road Sector Investment Programme (RoadSIP) looked at the entire road network and prioritised roads for repair or upgrading based on traffic forecasts and cost. By 2011 most of the viable road projects had already been completed; only marginal and unviable non-urban roads remained.",
      "Despite this, over $5 billion was borrowed to pave roads. If RoadSIP was correct, much of this was wasted. Another unviable project was the $360 million borrowed for the KK International Airport terminal. Though basic, the old terminal was quite adequate. While the new one may look impressive, it is unlikely to generate much extra traffic and, at $360 million, is clearly a white elephant.",
      "It is not possible to assess loans, or how much debt a government can afford to contract, without knowing what projects the loans will be used to finance and how viable they are. In theory, if all projects had high enough rates of return a government could borrow almost without limit. Where projects are uneconomic, this reduces the sustainable level of borrowing.",
      "By increasing debt without generating the revenues needed to service the loans, unviable projects were a major cause of Zambia's default. Yet neither Parliament nor civil society raised objections to the projects at the time. Decisions were made by the President and Ministers without economic advice.",
      "If Zambia is to avoid defaulting on its debt for a third time, it is vital that from now on it only borrows for projects which are economically viable. There are encouraging signs that this is recognised, with the recent publication of guidelines for appraising projects as required by the National Planning and Budgeting Act.",
      "As well as monitoring the existing debt stock, public scrutiny of new government borrowing should always include assessment of the projects for which new loans are to be contracted. Parliament and civil society need to be more critical of infrastructure loans than previously and take closer interest in project details; they should satisfy themselves that a project is viable before examining loan details.",
      "Alan Whitworth, London, July 2023.",
    ],
  },
  {
    slug: "impact-of-fintech-on-the-banking-industry",
    type: "article",
    date: "19 April 2023",
    dateISO: "2023-04-19",
    title: "The Impact of Fintech on the Banking Industry",
    excerpt:
      "Fintech has simplified, expedited and widened access to financial transactions. Its effect on Zambian banking is already considerable.",
    author: "Anish Balasubramanian",
    role: "Contributor, Economics Association of Zambia",
    image: "/images/fintech.jpg",
    imageAlt: "Mobile financial services and the banking industry",
    body: [
      "Fintech is the convergence of technology and money and has been expanding quickly in recent years. It has simplified, expedited and increased the accessibility of financial transactions. Many factors have contributed to the expansion of fintech, such as the increasing demand for digital services, the need for financial inclusion and the shifting regulatory environment.",
      "Fintech has already had a tremendous impact on the financial industry, providing consumers and businesses with benefits such as making financial services more accessible, cost-effective and efficient. The digitisation of financial services has increased access from anywhere in the world and at any time.",
      "Mobile payment platforms such as MTN Money, Airtel Money and Zoona have revolutionised the way people send and receive money in Zambia. This has increased demand for digital financial services, especially among younger generations who are more familiar with the technology. The regulatory framework has also contributed to the development of fintech.",
      "Financial inclusion has played a crucial role in the development of fintech. According to the World Bank, around 1.7 billion adults worldwide do not have access to financial services. Fintech has also made financial services more cost-effective and efficient and has contributed to the security of financial transactions, with technologies such as biometric authentication and blockchain reducing the danger of fraud and theft. Governments across the globe have recognised the potential of fintech to foster economic growth and financial inclusion, and Zambia is among them.",
      "Fintech has revolutionised the banking sector, but its prospects are far more promising. It is projected to have a significant impact on open banking, artificial intelligence, digital currencies and open payment systems. Open banking refers to the secure exchange of financial data between financial institutions and third-party service providers. AI has the potential to revolutionise several aspects of financial services, including fraud detection and customer care.",
      "Fintech could provide financial services to millions of individuals who were previously excluded from the traditional banking system. Stanbic Bank, Absa Zambia and many others offer digital banking services that enable customers to access their accounts at any time using their phones or computers. Fintech companies such as WorldRemit, Mukuru and Sendwave offer digital remittance services that allow Zambians living abroad to send money home.",
    ],
  },
  {
    slug: "qa-with-kristalina-georgieva",
    type: "article",
    date: "4 March 2023",
    dateISO: "2023-03-04",
    title: "Q&A with Kristalina Georgieva, IMF's Managing Director",
    excerpt:
      "The IMF Managing Director spoke at the University of Zambia on governance, a more diversified economy and social spending, and took questions from the audience.",
    author: "Tendai Posiana",
    role: "Communications, Economics Association of Zambia",
    image: "/images/qa-georgieva.jpg",
    imageAlt: "Kristalina Georgieva, Managing Director of the International Monetary Fund",
    body: [
      "Zambia is making progress in its initiatives to create a sustainable future, invest in its youth, fight corruption and attract investment, with the support of the International Monetary Fund (IMF). The IMF Managing Director, Kristalina Georgieva, spoke at the University of Zambia on 24 January 2023 about the IMF's role in helping Zambia create a more inclusive and resilient future. She outlined three areas of focus: governance, support for a more dynamic and diversified economy, and social spending.",
      "During a question and answer session, Georgieva highlighted the need for a more comprehensive definition of resilience that includes strong social protection, an inclusive economy, gender equality and a resilient planet. She also noted that Zambia has potential for generating income from other minerals and tourism sites, in addition to copper mining. The event was organised by the University of Zambia's Department of Economics, the Economics Association of Zambia and the Economic Association of University of Zambia Students, with Tervin “Smart” Mukemu as moderator.",
      "Georgieva said that she spent 14 years teaching in her native Bulgaria, in the Political Economy Department, making her the first person from an emerging market nation to lead the IMF. She expressed her appreciation for the organisation's leadership among economists. She added that the IMF has 190 members and is a burgeoning cooperative. During COVID-19, when Honduras joined the group, the organisation expanded.",
      "The global economy has seen the rise of COVID-19, which brought it to a standstill. The invasion of Ukraine caused food and energy prices to rise dramatically. These two factors combined led to inflation, which meant that central banks needed to intervene by increasing interest rates. Economies with a stronger understanding of the fundamentals withstand these shocks better than those that are weaker.",
      "Traditionally, the IMF would think of the narrow concept that applies to fiscal, monetary and financial parameters. Having a strong banking sector or a strong fiscal position is not enough. We have to think of resilience in a more comprehensive manner. Educated people with good health and good social protection can withstand the heat. A resilient society — not just with a strong economy, but also an inclusive one, in which the social fabric is strong — means more equality.",
      "Any country that does not allow all its people to participate and contribute will have slow economic growth. A more resilient planet is needed. In 2022 there were climate shocks across the world and in Zambia, where the nation is experiencing an energy crisis partly anchored in the fact that climate variability affects hydropower production.",
      "The IMF is working and seeking to help Zambia in three areas. First, governance: a government which is more resilient and inclusive to its people is better, so that more people are well informed and involved with what the government is doing. This also includes fighting corruption. Second, provide support that will produce more dynamic growth and lead to a more diversified economy, creating more jobs and supporting internal revenue. Third, social spending: a big recommendation to the government of Zambia is to remove public money from where it is being wasted to where it is more useful, including eliminating subsidies that mostly benefit wealthier households and spending more on education and social activities.",
      "With IMF support, social spending was expected to more than double between 2020 and 2025, from 0.7 per cent of GDP to 1.6 per cent. The programme was also expected to deliver much needed macroeconomic stability.",
      "How do you see Zambia developing, having been much dependent on copper mining?",
      "Zambia is known as a good producer of copper, of course, but it has many other minerals which it can produce and create jobs from, and which can generate external income as well. Zambia also has many tourism sites, including the national parks. If the government puts more effort into maintaining and investing in them, they can be very good at generating income and creating employment.",
      "How does the IMF plan on partnering with Zambia on the ongoing programme to ensure that the grassroots benefit?",
      "The IMF is a small organisation, with 4,000 people working for 190 members. It is mandated to listen to the pulse of all its members on a regular basis. We have representatives in all our member countries; through them we engage civil society and small business enterprises. We want to be better informed not just from above but also from below, so that we have the necessary information and hear the problems our members are facing. We work with other specialists and experts in order to provide policy analysis and instruments which include financial and technical support.",
      "How do you plan to help African nations with mental health, since it is one of the key drivers of development?",
      "One of the projects the IMF is working on is in the line of mental health. We have programmes coming which are targeted at helping and improving mental health. We believe that for any nation to attain development, people must be in good health.",
      "Zambia was the African country to default on Eurobond payments. Does this bring complications for the debt restructuring process?",
      "Today the lenders are a much more diverse group than they were 20 years ago. When HIPC was designed it was fairly straightforward: there was a majority of countries, the members of the Paris Club, and it was easier to achieve debt reduction and forgiveness. Today it is not like that anymore. The fact that Zambia defaulted on the Eurobonds and other bilateral and commercial obligations makes discussions for Zambia much more complicated. Current creditors being a much more diverse group makes it more difficult to reach a common position and affects the length of negotiations.",
      "On the G20 framework, must we contend with the fact that China will merely extend our maturities and not reduce what we owe, and what must we do?",
      "The Common Framework is relatively new; it was put in place in 2020. It is about bilateral and private sector creditors forming a committee and coming to an agreement at a country level. Historically, most credit institutions took time to reach maturity: the Brady Bonds eight years, HIPC ten years, and the Paris Club took 40 years from initiation to maturity. Unfortunately we cannot expect the framework to step into action from day one with full clarity on how decisions are made. We at the IMF are arguing strongly that there have to be three improvements to the framework: predictability on the process of reaching a conclusion from the moment the creditor committee is formed; resolution of technical issues, such as the line that separates debts that can be restructured from those that cannot; and inclusion of middle-income nations such as Sri Lanka, Lebanon and Pakistan where necessary.",
      "China is a very significant creditor for Zambia and a newcomer in restructuring negotiations on a multilateral basis. China is still working out internally how best to make decisions among the many parties that participate in lending — commercial banks, the China Development Bank, private companies and state-owned enterprises — and that is an ongoing process. We need to recognise that China, as a newcomer, still has to build up its own institutional capacity to participate. We have negotiated with the authorities in China, more especially on Zambia, and technical issues will be resolved.",
    ],
  },
];

export const byType = (type: PostType) => POSTS.filter((post) => post.type === type);

export const postBySlug = (slug: string) => POSTS.find((post) => post.slug === slug);

export type EventItem = {
  title: string;
  date: string;
  dates: string;
  venue: string;
  contact: string;
  contactPhone: string;
  summary: string;
  image: string;
  imageAlt: string;
  status: string;
};

export const EVENTS: EventItem[] = [
  {
    title: "EAZ National Economic Summit 2025 & AGM",
    date: "11 – 12 September 2025",
    dates: "11th September 2025 – 12th September 2025",
    venue: "Radisson Blu Hotel, Livingstone, Zambia",
    contact: "Tendai Posiana",
    contactPhone: "+260 979 678 853",
    summary:
      "The Association's national economic summit, followed by the Annual General Meeting, held in Livingstone under the theme of national economic dialogue.",
    image: "/images/summit-2025-keynote.jpg",
    imageAlt: "Delegates at the EAZ National Economic Summit",
    status: "Held",
  },
  {
    title: "EAZ National Economic Summit 2024",
    date: "25 – 26 July 2024",
    dates: "25th July 2024 – 26th July 2024",
    venue: "Ciêla Resort, Lusaka",
    contact: "Bwalya Malama",
    contactPhone: "+260 770 537 400 / +260 977 112 284",
    summary:
      "Two days of presentations and panel discussions bringing together policymakers, the private sector, academia and development partners.",
    image: "/images/boardroom.jpg",
    imageAlt: "Conference room prepared for the EAZ National Economic Summit",
    status: "Held",
  },
];
