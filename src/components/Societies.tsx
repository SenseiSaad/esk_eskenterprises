"use client";

import { useMemo, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SOCIETY_COUNT, SOCIETY_GROUPS, type SocietyGroupId } from "@/data/societies";
import { waLink } from "@/lib/site";

type Filter = "all" | SocietyGroupId;

const FEATURED = new Set(["Manawan"]);

export default function Societies() {
  const sectionRef = useScrollReveal<HTMLElement>({ targets: "[data-reveal]", stagger: 0.08 });
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SOCIETY_GROUPS.filter((group) => filter === "all" || group.id === filter)
      .map((group) => ({
        ...group,
        items: group.items.filter((name) => !q || name.toLowerCase().includes(q)),
      }))
      .filter((group) => group.items.length > 0);
  }, [filter, query]);

  const visibleCount = groups.reduce((sum, group) => sum + group.items.length, 0);

  return (
    <section id="societies" ref={sectionRef} className="px-gutter py-section">
      <div className="mb-12 flex flex-col gap-4 md:max-w-3xl" data-reveal>
        <p className="text-xs uppercase tracking-wide2 text-gold">Where we deal</p>
        <h2 className="font-display text-4xl md:text-6xl">
          {SOCIETY_COUNT}+ societies &amp; areas across Lahore
        </h2>
        <p className="text-stone">
          From DHA, Bahria Town and Gulberg to everyday family localities, including{" "}
          <span className="text-gold">Manawan</span>. Search your area or tap any name to
          ask us about it on WhatsApp.
        </p>
      </div>

      <div data-reveal className="mb-10 flex flex-col gap-6">
        <label className="flex max-w-md flex-col gap-1 text-[0.65rem] uppercase tracking-wide2 text-gold">
          Search a society or area
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Type e.g. Bahria, Johar, Manawan"
            className="border-b border-white/20 bg-transparent py-3 text-base normal-case tracking-normal text-ivory placeholder:text-stone focus:border-gold focus:outline-none"
          />
        </label>

        <div role="tablist" aria-label="Filter by type" className="flex flex-wrap gap-2">
          {[{ id: "all" as const, label: "All" }, ...SOCIETY_GROUPS].map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={filter === item.id}
              onClick={() => setFilter(item.id)}
              className={`rounded-full border px-4 py-2 text-[0.7rem] font-medium uppercase tracking-wide2 transition-colors duration-300 ${
                filter === item.id
                  ? "border-gold bg-gold text-ink"
                  : "border-white/15 text-stone hover:border-gold/60 hover:text-ivory"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <p className="text-xs text-stone" aria-live="polite">
          Showing {visibleCount} {visibleCount === 1 ? "area" : "areas"}
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {groups.map((group) => (
          <div key={group.id} data-reveal className="flex flex-col gap-5">
            <h3 className="border-b border-white/10 pb-3 font-display text-xl text-ivory md:text-2xl">
              {group.label}
              <span className="ml-3 font-sans text-xs text-stone">{group.items.length}</span>
            </h3>
            <ul className="flex flex-wrap gap-2.5">
              {group.items.map((name) => (
                <li key={name}>
                  <a
                    href={waLink(
                      `Hello ESK Properties, I am interested in properties in ${name}, Lahore.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block rounded-full border px-4 py-2 text-sm transition-colors duration-300 ${
                      FEATURED.has(name)
                        ? "border-gold bg-gold/15 text-gold hover:bg-gold hover:text-ink"
                        : "border-white/15 text-ivory hover:border-gold hover:text-gold"
                    }`}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {groups.length === 0 && (
          <p className="text-stone">
            We could not find that name in the list, but we may still deal there.{" "}
            <a
              href={waLink(`Hello ESK Properties, do you deal in ${query || "my area"}, Lahore?`)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold underline underline-offset-4"
            >
              Ask us on WhatsApp
            </a>
            .
          </p>
        )}
      </div>

      <p data-reveal className="mt-12 text-sm text-stone">
        Not on the list? Lahore has many more societies and phases. Message us your area and
        we will tell you what is available.
      </p>
    </section>
  );
}
