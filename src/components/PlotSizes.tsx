"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { PLOT_SIZES, sqft } from "@/data/sizes";
import { waLink } from "@/lib/site";

export default function PlotSizes() {
  const sectionRef = useScrollReveal<HTMLElement>({ stagger: 0.06 });

  return (
    <section
      id="sizes"
      ref={sectionRef}
      className="border-y border-white/10 bg-charcoal px-gutter py-section"
    >
      <div className="mb-14 flex flex-col gap-4 md:max-w-3xl" data-reveal>
        <p className="text-xs uppercase tracking-wide2 text-gold">Marla &amp; Kanal</p>
        <h2 className="font-display text-4xl md:text-6xl">Plots and homes in every size</h2>
        <p className="text-stone">
          From 2.5 Marla to 5 Kanal. Pick a size to ask for available options on WhatsApp.
        </p>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PLOT_SIZES.map((size) => (
          <li key={size.label} data-reveal>
            <a
              href={waLink(
                `Hello ESK Properties, I am looking for a ${size.label} property in Lahore. Please share the available options.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col gap-3 rounded-sm border border-white/10 bg-surface/60 p-6 transition-colors duration-500 hover:border-gold/60 hover:bg-surface"
            >
              <span className="flex items-baseline justify-between gap-4">
                <span className="font-display text-3xl text-ivory md:text-4xl">
                  {size.label}
                </span>
                <span className="text-xs uppercase tracking-wide2 text-stone">
                  ≈ {sqft(size.marla)} sq ft
                </span>
              </span>
              <span className="text-sm text-stone">{size.note}</span>
              <span className="mt-auto pt-2 text-xs font-medium uppercase tracking-wide2 text-gold transition-transform duration-500 group-hover:translate-x-1">
                Ask on WhatsApp &rarr;
              </span>
            </a>
          </li>
        ))}
      </ul>

      <p data-reveal className="mt-8 max-w-3xl text-xs text-stone">
        Sizes shown use the standard measure (1 Marla = 272.25 sq ft, 1 Kanal = 20 Marla).
        Some societies use a smaller Marla, so we always confirm the exact covered and plot
        area of every property before you visit.
      </p>
    </section>
  );
}
