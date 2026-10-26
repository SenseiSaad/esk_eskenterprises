"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { lahore } from "@/lib/images";

export default function LahoreBand() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      id="lahore"
      ref={sectionRef}
      className="grid gap-10 px-gutter py-section lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch"
    >
      <div
        data-reveal
        className="relative min-h-90 overflow-hidden rounded-sm lg:min-h-130"
      >
        <Image
          src={lahore.badshahi.src}
          alt={lahore.badshahi.alt}
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-7 md:p-10">
          <p className="text-xs uppercase tracking-wide2 text-gold">The city we know best</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl text-ivory md:text-5xl">
            Lahore, from the old city to the new townships
          </h2>
        </div>
      </div>

      <div className="flex flex-col gap-8" data-reveal>
        <p className="text-stone">
          Lahore keeps growing: new housing schemes on every main road, established
          neighbourhoods in the heart of the city, and commercial hubs along its boulevards.
          ESK Properties helps you find the right fit, whether you want to live, invest or
          rent.
        </p>
        <div className="relative min-h-72 flex-1 overflow-hidden rounded-sm">
          <Image
            src={lahore.arfa.src}
            alt={lahore.arfa.alt}
            fill
            sizes="(min-width: 1024px) 35vw, 100vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
