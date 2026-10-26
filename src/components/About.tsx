"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SITE, waLink } from "@/lib/site";
import Button from "./Button";
import WhatsAppIcon from "./WhatsAppIcon";

function initials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function About() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      id="about"
      ref={sectionRef}
      className="border-y border-white/10 bg-charcoal px-gutter py-section"
    >
      <div className="grid gap-14 md:grid-cols-[0.8fr_1.2fr] md:items-center">
        <div
          data-reveal
          className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-sm border border-gold/30 bg-surface"
        >
          {SITE.agentPhoto ? (
            <Image
              src={SITE.agentPhoto}
              alt={`${SITE.agent}, ${SITE.agentRole} at ${SITE.name}`}
              fill
              sizes="(min-width: 768px) 30vw, 90vw"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3">
              <span className="font-display text-8xl text-gold">{initials(SITE.agent)}</span>
              <span className="text-xs uppercase tracking-wide2 text-stone">{SITE.name}</span>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-6" data-reveal>
          <p className="text-xs uppercase tracking-wide2 text-gold">Meet your dealer</p>
          <h2 className="font-display text-4xl md:text-6xl">{SITE.agent}</h2>
          <p className="text-sm uppercase tracking-wide2 text-stone">{SITE.agentRole}</p>
          <p className="max-w-xl text-stone">
            {SITE.agent} is the face of {SITE.name} and your direct point of contact. Tell him
            what you are looking for, or send details of the property you want to sell or rent
            out, and he will guide you through the available options, the viewings and the next
            steps.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              href={waLink(`Hello ${SITE.agent}, I would like to talk about a property in Lahore.`)}
              variant="solid"
              external
            >
              <WhatsAppIcon className="h-4 w-4" />
              Message {SITE.agent.split(" ")[0]}
            </Button>
            <Button href={`tel:${SITE.phoneTel}`} variant="outline" external>
              {SITE.phoneDisplay}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
