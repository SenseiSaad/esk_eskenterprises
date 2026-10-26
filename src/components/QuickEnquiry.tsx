"use client";

import { useMemo, useState } from "react";
import { ALL_SOCIETIES } from "@/data/societies";
import { PLOT_SIZES } from "@/data/sizes";
import { SITE, waLink } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

const INTENTS = ["Buy", "Rent", "Sell"] as const;
const TYPES = ["Any type", "House", "Plot", "Apartment", "Commercial"] as const;

const fieldClass =
  "w-full border-b border-white/20 bg-transparent py-2.5 text-sm text-ivory placeholder:text-stone focus:border-gold focus:outline-none";

export default function QuickEnquiry() {
  const [intent, setIntent] = useState<(typeof INTENTS)[number]>("Buy");
  const [type, setType] = useState<(typeof TYPES)[number]>("Any type");
  const [size, setSize] = useState("");
  const [area, setArea] = useState("");

  const href = useMemo(() => {
    const what = type === "Any type" ? "a property" : `a ${type.toLowerCase()}`;
    const verb =
      intent === "Sell" ? `I want to sell ${what}` : `I want to ${intent.toLowerCase()} ${what}`;
    const parts = [`Hello ${SITE.name}, ${verb}`];
    if (size) parts.push(`of ${size}`);
    parts.push(area ? `in ${area}, Lahore.` : "in Lahore.");
    const closing =
      intent === "Sell"
        ? " Please contact me to discuss selling it."
        : " Please share the available options.";
    return waLink(parts.join(" ").replace(" .", ".") + closing);
  }, [intent, type, size, area]);

  return (
    <div
      data-quick-enquiry
      className="w-full max-w-4xl rounded-sm border border-white/10 bg-ink/70 p-5 backdrop-blur-md md:p-6"
    >
      <div role="tablist" aria-label="I want to" className="mb-5 flex gap-2">
        {INTENTS.map((item) => (
          <button
            key={item}
            type="button"
            role="tab"
            aria-selected={intent === item}
            onClick={() => setIntent(item)}
            className={`rounded-full border px-5 py-2 text-xs font-medium uppercase tracking-wide2 transition-colors duration-300 ${
              intent === item
                ? "border-gold bg-gold text-ink"
                : "border-white/15 text-stone hover:border-gold/60 hover:text-ivory"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_auto] lg:items-end">
        <label className="flex flex-col gap-1 text-[0.65rem] uppercase tracking-wide2 text-gold">
          Society / area
          <input
            list="esk-societies"
            value={area}
            onChange={(event) => setArea(event.target.value)}
            placeholder="e.g. DHA Defence, Manawan"
            className={fieldClass}
            autoComplete="off"
          />
          <datalist id="esk-societies">
            {ALL_SOCIETIES.map((name) => (
              <option key={name} value={name} />
            ))}
          </datalist>
        </label>

        <label className="flex flex-col gap-1 text-[0.65rem] uppercase tracking-wide2 text-gold">
          Property type
          <select
            value={type}
            onChange={(event) => setType(event.target.value as (typeof TYPES)[number])}
            className={`${fieldClass} bg-ink`}
          >
            {TYPES.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1 text-[0.65rem] uppercase tracking-wide2 text-gold">
          Size
          <select
            value={size}
            onChange={(event) => setSize(event.target.value)}
            className={`${fieldClass} bg-ink`}
          >
            <option value="">Any size</option>
            {PLOT_SIZES.map((item) => (
              <option key={item.label} value={item.label}>
                {item.label}
              </option>
            ))}
          </select>
        </label>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-xs font-medium uppercase tracking-wide2 text-white transition-transform duration-300 hover:scale-105"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Send enquiry
        </a>
      </div>
    </div>
  );
}
