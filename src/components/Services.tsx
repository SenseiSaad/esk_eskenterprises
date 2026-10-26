"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIsMobile } from "@/hooks/useIsMobile";
import { photos } from "@/lib/images";
import { waLink } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

const CATEGORIES = [
  {
    image: photos.villaBrick,
    kicker: "Residential",
    name: "Houses & Villas",
    text: "Ready-to-move homes and new constructions, from 2.5 Marla family houses to 5 Kanal estates.",
    tags: ["Buy", "Sell", "Rent"],
    message: "Hello ESK Properties, I am interested in a house or villa in Lahore.",
  },
  {
    image: photos.apartments,
    kicker: "Apartments",
    name: "Apartments & Flats",
    text: "Apartments to buy or to rent, and help for owners who want to rent out their apartment.",
    tags: ["Buy", "Rent", "Rent out"],
    message: "Hello ESK Properties, I am interested in an apartment in Lahore.",
  },
  {
    image: photos.commercial,
    kicker: "Land & business",
    name: "Plots & Commercial",
    text: "Residential and commercial plots, files, shops, offices and plazas in the main societies of Lahore.",
    tags: ["Plots", "Files", "Shops", "Offices"],
    message: "Hello ESK Properties, I am interested in a plot or commercial property in Lahore.",
  },
];

const SERVICES = [
  {
    title: "Buying",
    text: "Tell us your budget, area and size. We shortlist options and arrange the visits.",
  },
  {
    title: "Selling",
    text: "We market your property to active buyers and handle enquiries, calls and viewings.",
  },
  {
    title: "Renting",
    text: "Houses, portions, apartments and offices for tenants, with suitable options for every budget.",
  },
  {
    title: "Renting out",
    text: "Owners: we find reliable tenants for your house, apartment or commercial property.",
  },
];

export default function Services() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const isMobile = useIsMobile();
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useGSAP(
    () => {
      if (isMobile) return;
      cardRefs.current.forEach((card) => {
        if (!card) return;
        const image = card.querySelector<HTMLElement>("[data-zoom-image]");
        if (!image) return;

        gsap.fromTo(
          image,
          { scale: 1.35 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    },
    { dependencies: [isMobile], scope: sectionRef }
  );

  return (
    <section id="services" ref={sectionRef} className="px-gutter py-section">
      <div className="mb-16 flex flex-col gap-4" data-reveal>
        <p className="text-xs uppercase tracking-wide2 text-gold">What we deal in</p>
        <h2 className="max-w-3xl font-display text-4xl md:text-6xl">
          Every kind of property, one trusted dealer
        </h2>
        <p className="max-w-2xl text-stone">
          Whether you are buying your first home, selling a plot, or renting out an
          apartment, ESK Properties handles it from the first call to the final handover.
        </p>
      </div>

      <div className="flex flex-col gap-20 md:gap-24">
        {CATEGORIES.map((category, index) => (
          <div
            key={category.name}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            data-reveal
            className="group relative h-[68vh] min-h-110 w-full overflow-hidden rounded-sm"
          >
            <div data-zoom-image className="absolute inset-0 h-full w-full">
              <Image
                src={category.image.src}
                alt={category.image.alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-7 md:p-12">
              <span className="text-xs uppercase tracking-wide2 text-gold">
                {category.kicker}
              </span>
              <h3 className="font-display text-3xl text-ivory md:text-5xl">{category.name}</h3>
              <p className="max-w-xl text-stone">{category.text}</p>
              <div className="flex flex-wrap items-center gap-3">
                {category.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/20 px-4 py-1.5 text-[0.7rem] uppercase tracking-wide2 text-ivory"
                  >
                    {tag}
                  </span>
                ))}
                <a
                  href={waLink(category.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-0 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wide2 text-gold transition-colors hover:text-ivory md:ml-4"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <dl className="mt-24 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service, index) => (
          <div
            key={service.title}
            data-reveal
            className="flex flex-col gap-3 border-t border-white/10 pt-5"
          >
            <span className="font-display text-sm text-gold/70">
              {String(index + 1).padStart(2, "0")}
            </span>
            <dt className="font-display text-2xl text-ivory">{service.title}</dt>
            <dd className="text-sm text-stone">{service.text}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
