"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { photos } from "@/lib/images";

const REASONS = [
  {
    title: "Local Lahore knowledge",
    text: "We know the societies, phases, blocks and streets, and what each area is really like to live in or invest in.",
  },
  {
    title: "Buyers, sellers and tenants",
    text: "One dealer for every side of the deal: buying, selling, renting and renting out.",
  },
  {
    title: "Clear, honest guidance",
    text: "Straight answers on size, location and options, so you can decide with confidence.",
  },
  {
    title: "Quick WhatsApp replies",
    text: "Send your requirement or photos of your property and get a direct answer from a real person.",
  },
];

export default function WhyESK() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!imageRef.current) return;
      gsap.fromTo(
        imageRef.current,
        { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 1.4,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 75%",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="why"
      ref={sectionRef}
      className="grid gap-16 px-gutter py-section md:grid-cols-2 md:items-center"
    >
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4" data-reveal>
          <p className="text-xs uppercase tracking-wide2 text-gold">Why ESK Properties</p>
          <h2 className="max-w-lg font-display text-4xl md:text-5xl">
            A dealer who knows the city street by street
          </h2>
        </div>
        <dl className="grid gap-8 sm:grid-cols-2">
          {REASONS.map((reason) => (
            <div
              key={reason.title}
              data-reveal
              className="flex flex-col gap-2 border-t border-white/10 pt-4"
            >
              <dt className="font-display text-lg text-ivory">{reason.title}</dt>
              <dd className="text-sm text-stone">{reason.text}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div
        ref={imageRef}
        className="relative h-[60vh] min-h-105 w-full overflow-hidden rounded-sm"
      >
        <Image
          src={photos.houseWhite.src}
          alt={photos.houseWhite.alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
