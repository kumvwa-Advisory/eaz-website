import type { Leader } from "@/data/history";

/**
 * Leadership organogram: President at the apex, the Vice President below,
 * the three finance/secretarial officers beneath that, and the three committee
 * members at the base. Connector lines are plain hairlines so the chart stays
 * crisp at any width; below `lg` it collapses to an indented tree.
 */

function Node({ leader, accent = false }: { leader: Leader; accent?: boolean }) {
  const pending = !leader.name;
  return (
    <div
      className={`w-full max-w-[320px] overflow-hidden text-center shadow-[0_2px_10px_rgba(0,0,0,0.08)] ring-1 ring-black/5 ${
        accent ? "bg-brand" : "bg-white"
      }`}
    >
      <div
        aria-hidden
        className={accent ? "h-1.5 w-full bg-brand-bright" : "h-1.5 w-full bg-gradient-to-r from-brand to-brand-bright"}
      />
      <div className="px-4 py-4">
        <p
          className={`text-[12px] font-bold uppercase tracking-[0.12em] ${
            accent ? "text-white/85" : "text-brand"
          }`}
        >
          {leader.role}
        </p>
        <p
          className={`mt-1.5 text-[17px] font-bold leading-snug ${
            accent ? "text-white" : pending ? "italic text-muted" : "text-ink"
          }`}
        >
          {leader.name ?? "To be confirmed"}
        </p>
      </div>
    </div>
  );
}

function Stub({ className = "" }: { className?: string }) {
  return <span aria-hidden className={`h-8 w-px bg-brand/30 ${className}`} />;
}

/** A row of nodes hanging off a shared horizontal bus. */
function Tier({ children }: { children: React.ReactNode[] }) {
  const inset = `${100 / (children.length * 2)}%`;
  return (
    <div className="relative pt-8">
      <span aria-hidden className="absolute top-0 h-px bg-brand/30" style={{ left: inset, right: inset }} />
      <div
        className="grid gap-5"
        style={{ gridTemplateColumns: `repeat(${children.length}, minmax(0, 1fr))` }}
      >
        {children.map((child, index) => (
          <div key={index} className="relative flex justify-center">
            <span aria-hidden className="absolute -top-8 left-1/2 h-8 w-px bg-brand/30" />
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Organogram({ leaders, label }: { leaders: Leader[]; label: string }) {
  const find = (role: string) => leaders.find((leader) => leader.role === role);
  const president = find("President");
  const vice = find("Vice President");
  const officers = ["Treasurer", "Deputy Treasurer", "Deputy National Secretary"]
    .map(find)
    .filter((leader): leader is Leader => Boolean(leader));
  const committee = leaders.filter((leader) => leader.role === "Committee Member");

  return (
    <figure className="mt-10">
      <figcaption className="sr-only">
        Organogram of the EAZ National Executive Committee, {label}
      </figcaption>

      {/* Desktop tree */}
      <div className="hidden lg:block">
        {president ? (
          <div className="flex justify-center">
            <Node leader={president} accent />
          </div>
        ) : null}
        {vice ? (
          <>
            <div className="flex justify-center">
              <Stub />
            </div>
            <div className="flex justify-center">
              <Node leader={vice} />
            </div>
          </>
        ) : null}
        {officers.length ? (
          <>
            <div className="flex justify-center">
              <Stub />
            </div>
            <Tier>
              {officers.map((leader) => (
                <Node key={leader.role} leader={leader} />
              ))}
            </Tier>
          </>
        ) : null}
        {committee.length ? (
          <>
            <div className="flex justify-center">
              <Stub />
            </div>
            <Tier>
              {committee.map((leader, index) => (
                <Node key={`${leader.role}-${index}`} leader={leader} />
              ))}
            </Tier>
          </>
        ) : null}
      </div>

      {/* Mobile / tablet: indented tree */}
      <div className="lg:hidden">
        {president ? <Node leader={president} accent /> : null}
        <div className="ml-4 border-l-2 border-brand/20 pl-5">
          {vice ? <div className="pt-5"><Node leader={vice} /></div> : null}
          {officers.length ? (
            <div className="ml-4 border-l-2 border-brand/20 pl-5 pt-5 space-y-4">
              {officers.map((leader) => (
                <Node key={leader.role} leader={leader} />
              ))}
            </div>
          ) : null}
          {committee.length ? (
            <div className="ml-4 border-l-2 border-brand/20 pl-5 space-y-4 pt-5">
              {committee.map((leader, index) => (
                <Node key={`${leader.role}-${index}`} leader={leader} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </figure>
  );
}
