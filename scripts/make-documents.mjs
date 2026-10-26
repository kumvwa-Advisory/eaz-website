import { mkdirSync, writeFileSync } from "node:fs";

/* A tiny PDF writer: one or more A4 pages of Helvetica text, no dependencies. */
function escapeText(value) {
  return value.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function wrap(text, width = 92) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = "";
  for (const word of words) {
    if ((line + " " + word).trim().length > width) {
      lines.push(line.trim());
      line = word;
    } else {
      line = `${line} ${word}`;
    }
  }
  if (line.trim()) lines.push(line.trim());
  return lines;
}

function makePdf({ title, subtitle, meta, sections }) {
  // Build the content stream page by page.
  const pages = [];
  let ops = [];
  let y = 790;

  const text = (font, size, x, yy, value) =>
    ops.push(`BT /${font} ${size} Tf ${x} ${yy} Td (${escapeText(value)}) Tj ET`);

  const rule = (yy) => ops.push(`0.7 w 50 ${yy} m 545 ${yy} l S`);

  text("F2", 19, 50, y, title);
  y -= 24;
  if (subtitle) {
    text("F1", 10.5, 50, y, subtitle);
    y -= 14;
  }
  if (meta) {
    text("F1", 8.5, 50, y, meta);
    y -= 8;
  }
  rule(y);
  y -= 26;

  for (const section of sections) {
    if (y < 90) {
      pages.push(ops.join("\n"));
      ops = [];
      y = 790;
    }
    if (section.heading) {
      text("F2", 11.5, 50, y, section.heading);
      y -= 17;
    }
    for (const paragraph of section.body ?? []) {
      for (const line of wrap(paragraph)) {
        if (y < 80) {
          pages.push(ops.join("\n"));
          ops = [];
          y = 790;
        }
        text("F1", 9.5, 50, y, line);
        y -= 13.5;
      }
      y -= 5;
    }
    if (section.rows) {
      for (const row of section.rows) {
        const [left, right] = row;
        text("F1", 9.5, 50, y, left);
        text("F1", 9.5, 420, y, right);
        y -= 14;
      }
      y -= 6;
    }
    y -= 8;
  }

  // Footer on each page.
  ops.push(`BT /F1 8 Tf 50 40 Td (Economics Association of Zambia \\267 2374 Kabelenga Road, Lusaka \\267 secretariat@eaz.org.zm) Tj ET`);
  pages.push(ops.join("\n"));

  const objects = [];
  const pageIds = pages.map((_, index) => 4 + index * 2);
  objects[1] = "<< /Type /Catalog /Pages 2 0 R >>";
  objects[2] = `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${pages.length} >>`;
  objects[3] =
    "<< /Font << /F1 100 0 R /F2 101 0 R >> >>";

  pages.forEach((content, index) => {
    const pageId = pageIds[index];
    objects[pageId] =
      `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources 3 0 R /Contents ${pageId + 1} 0 R >>`;
    objects[pageId + 1] = `<< /Length ${Buffer.byteLength(content)} >>\nstream\n${content}\nendstream`;
  });

  objects[100] = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>";
  objects[101] = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>";

  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  for (let id = 1; id < objects.length; id += 1) {
    if (!objects[id]) continue;
    offsets[id] = Buffer.byteLength(pdf);
    pdf += `${id} 0 obj\n${objects[id]}\nendobj\n`;
  }
  const xref = Buffer.byteLength(pdf);
  const maxId = objects.length - 1;
  pdf += `xref\n0 ${maxId + 1}\n0000000000 65535 f \n`;
  for (let id = 1; id <= maxId; id += 1) {
    pdf += `${String(offsets[id] ?? 0).padStart(10, "0")} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${maxId + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
  return Buffer.from(pdf, "latin1");
}

const DOCS = [
  {
    file: "membership-application-form.pdf",
    title: "Membership Application Form",
    subtitle: "Economics Association of Zambia — applications for the 2027 membership year",
    meta: "Form EAZ/MEM/01 · revised October 2026",
    sections: [
      {
        heading: "1. Class of membership applied for",
        body: [
          "Economist (ZMW 750)   Associate (ZMW 500)   Student (ZMW 150)   Junior (ZMW 250)",
          "Senior (ZMW 1,500)   Corporate (ZMW 10,000)   International organisation (USD 500)",
        ],
      },
      {
        heading: "2. Applicant details",
        rows: [
          ["Full name:", ""],
          ["Postal address:", ""],
          ["Telephone:", ""],
          ["Email address:", ""],
          ["Employer / institution:", ""],
          ["Position held:", ""],
        ],
      },
      {
        heading: "3. Qualifications",
        rows: [
          ["Highest qualification:", ""],
          ["Institution and year awarded:", ""],
          ["Professional body memberships:", ""],
        ],
      },
      {
        heading: "4. Referee",
        body: [
          "Name, membership number (if a member) and contact details of the person supporting this application.",
        ],
        rows: [
          ["Referee name:", ""],
          ["Contact:", ""],
        ],
      },
      {
        heading: "5. Declaration",
        body: [
          "I declare that the information given above is true and complete. I undertake to abide by the constitution, regulations and code of conduct of the Association, and I consent to the Secretariat holding these details for membership administration.",
          "Signature: _______________________________________     Date: ____________________",
        ],
      },
      {
        heading: "For office use",
        rows: [
          ["Received on:", ""],
          ["Committee decision:", ""],
          ["Membership number:", ""],
          ["Invoice number:", ""],
        ],
      },
    ],
  },
  {
    file: "nomination-form-2026.pdf",
    title: "Nomination Form — 2026 Extra-Ordinary General Meeting",
    subtitle: "Elections to be held on Friday, 27 November 2026 at the Mulungushi International Conference Centre, Lusaka",
    meta: "Form EAZ/EGM/2026 · nominations close 17:00, Thursday 12 November 2026",
    sections: [
      {
        heading: "Position contested",
        body: ["President   Vice-President   Honorary Secretary   Honorary Treasurer   Council member (four seats)"],
      },
      {
        heading: "Nominee",
        rows: [
          ["Full name:", ""],
          ["Membership number:", ""],
          ["Subscription status for 2026:", ""],
          ["Telephone:", ""],
          ["Email address:", ""],
        ],
      },
      {
        heading: "Nominators",
        body: ["A nomination must be supported by two members in good standing."],
        rows: [
          ["First nominator and membership number:", ""],
          ["Second nominator and membership number:", ""],
          ["Signatures:", ""],
        ],
      },
      {
        heading: "Declaration by the nominee",
        body: [
          "I accept nomination for the position indicated above. I confirm that I am a member in good standing, that my 2026 subscription is fully paid, and that I have read the constitution and the code of conduct of the Association.",
          "Signature: _______________________________________     Date: ____________________",
        ],
      },
      {
        heading: "Documents to attach",
        body: [
          "A curriculum vitae of no more than two pages, a recent passport photograph, and a short statement of no more than 300 words setting out what the nominee would contribute to the Council.",
        ],
      },
    ],
  },
  {
    file: "annual-report-2025.pdf",
    title: "Annual Report and Audited Accounts 2025",
    subtitle: "Economics Association of Zambia — for the year ended 31 December 2025",
    meta: "Presented to the Annual General Meeting, 2026",
    sections: [
      {
        heading: "Report of the Council",
        body: [
          "The Council presents its report for the year ended 31 December 2025. Membership stood at 612 at year end, against 548 in 2024, an increase of 11.7 per cent. The Association admitted 96 new members and reinstated 22 lapsed members.",
          "The National Economic Summit returned a small surplus for the first time in four years, and the Annual Economic Gala Dinner recovered its costs. The brown bag series ran nine sessions, four of them hybrid.",
        ],
      },
      {
        heading: "Financial highlights (ZMW)",
        rows: [
          ["Subscriptions and admissions", "1,284,500"],
          ["Conference and event income", "1,942,000"],
          ["Publications and advertising", "186,400"],
          ["Total income", "3,412,900"],
          ["Programme and event costs", "2,118,600"],
          ["Secretariat and administration", "1,022,300"],
          ["Surplus for the year", "272,000"],
        ],
      },
      {
        heading: "Auditor's opinion",
        body: [
          "The financial statements were audited by Kaluba & Associates and received an unqualified opinion. A copy of the audited statements may be inspected at the Secretariat by any member on request.",
        ],
      },
      {
        heading: "Governance",
        body: [
          "The Council met six times during the year. The Economic Policy, Membership, Programmes and Finance and Audit committees met a combined twenty-three times. Three Council seats fall due for election at the 2026 Extra-Ordinary General Meeting.",
        ],
      },
    ],
  },
  {
    file: "newsletter-q1-2026.pdf",
    title: "EAZ Newsletter — First Quarter 2026",
    subtitle: "Exchange rates, inflation, fuel prices and the Association's programme for the year",
    meta: "Issue 01/2026 · circulated to members",
    sections: [
      {
        heading: "The quarter in review",
        body: [
          "The kwacha traded in a narrower band through the first quarter, supported by improved copper receipts and a slower pace of import demand. Inflation remained inside the target band, though food prices continued to diverge from the headline series.",
          "Fuel prices were adjusted twice during the quarter. The Association's submission to the Parliamentary Committee on Estimates argued for a published pricing formula and a clearer stabilisation mechanism.",
        ],
      },
      {
        heading: "Programme for 2026",
        body: [
          "The National Economic Summit takes place on 18 and 19 March. The brown bag series resumes in February, with sessions on agricultural productivity, trade facilitation and urban water provision. The Annual Economic Gala Dinner is scheduled for 24 April 2027.",
        ],
      },
      {
        heading: "Membership",
        body: [
          "Membership stood at 641 at the end of the quarter. Members are reminded that subscriptions fall due on 1 January and that the early settlement discount closes on 31 March.",
        ],
      },
    ],
  },
  {
    file: "code-of-conduct.pdf",
    title: "Code of Conduct for Members",
    subtitle: "Adopted by the Council of the Economics Association of Zambia",
    meta: "Effective 1 January 2025",
    sections: [
      {
        heading: "1. Purpose",
        body: [
          "This code sets the standard of conduct expected of members in their professional work and in their capacity as representatives of the Association.",
        ],
      },
      {
        heading: "2. Integrity and independence",
        body: [
          "Members shall not present the views of the Association on any matter without authority from the Council. Members shall disclose any interest that could reasonably be seen to compromise their professional judgement.",
        ],
      },
      {
        heading: "3. Competence",
        body: [
          "Members shall undertake work only where they have the competence to do so, and shall acknowledge the limits of the evidence on which their advice rests.",
        ],
      },
      {
        heading: "4. Confidentiality",
        body: [
          "Members shall not disclose confidential information obtained in the course of professional work without the consent of the party concerned, or unless required by law.",
        ],
      },
      {
        heading: "5. Public comment",
        body: [
          "Members commenting in public speak in their own capacity unless expressly authorised. They shall make clear when a view is their own and not that of the Association.",
        ],
      },
      {
        heading: "6. Complaints",
        body: [
          "Complaints concerning the conduct of a member shall be addressed in writing to the Executive Secretary and shall be considered by the Membership Committee.",
        ],
      },
    ],
  },
  {
    file: "summit-2027-call-for-papers.pdf",
    title: "Call for Papers — National Economic Summit 2027",
    subtitle: "Industrial policy in a country with an electricity constraint · Lusaka, 18–19 March 2027",
    meta: "Abstracts close 15 January 2027",
    sections: [
      {
        heading: "Scope",
        body: [
          "The Association invites papers on the economics of industrial policy where electricity supply is a binding constraint. Contributions may be theoretical, empirical or policy-oriented.",
        ],
      },
      {
        heading: "Suggested topics",
        body: [
          "Costing and financing new generation capacity; tariff design and cost-reflectivity; the effect of power interruptions on manufacturing unit costs; the performance of special economic zones; industrial incentives conditional on performance; comparative experience in the region.",
        ],
      },
      {
        heading: "Submission",
        body: [
          "Abstracts of no more than 500 words should be sent to programmes@eaz.org.zm by 15 January 2027. Authors of accepted papers will be notified by 5 February 2027. Full papers of between 6,000 and 9,000 words are due by 6 March 2027.",
        ],
      },
      {
        heading: "Conditions",
        body: [
          "Presenting authors receive a waiver of the delegate fee. A limited number of travel bursaries are available for members based outside Lusaka. Papers presented at the Summit will be published in the proceedings.",
        ],
      },
    ],
  },
];

mkdirSync("public/documents", { recursive: true });
for (const doc of DOCS) {
  const pdf = makePdf(doc);
  writeFileSync(`public/documents/${doc.file}`, pdf);
  console.log(`${doc.file} — ${(pdf.length / 1024).toFixed(1)} KB`);
}
