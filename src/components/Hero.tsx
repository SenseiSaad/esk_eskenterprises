"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useSiteReady } from "./SiteReadyContext";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useIsMobile } from "@/hooks/useIsMobile";
import { photos } from "@/lib/images";
import { SITE, waLink, DEFAULT_WA_MESSAGE } from "@/lib/site";
import Button from "./Button";
import HeroScene from "./HeroScene";
import QuickEnquiry from "./QuickEnquiry";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const enquiryRef = useRef<HTMLDivElement>(null);
  const { isReady } = useSiteReady();
  const isMobile = useIsMobile();

  const titleRef = useSplitTextReveal<HTMLHeadingElement>({
    type: "lines",
    stagger: 0.08,
    delay: 0.1,
    trigger: "load",
    enabled: isReady,
  });

  useGSAP(
    () => {
      if (!isReady) return;
      gsap.from([subRef.current, ctaRef.current, enquiryRef.current], {
        y: 24,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        delay: 0.7,
        ease: "power3.out",
      });
    },
    { dependencies: [isReady] },
  );

  useGSAP(
    () => {
      if (isMobile || !imageWrapRef.current || !sectionRef.current) return;
      gsap.to(imageWrapRef.current, {
        yPercent: 18,
        scale: 1.12,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { dependencies: [isMobile] },
  );

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative flex min-h-svh w-full items-end overflow-hidden"
    >
      <div ref={imageWrapRef} className="absolute inset-0 -z-10 scale-[1.06]">
        <Image
          src={photos.hero.src}
          alt={photos.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/55 to-ink/20" />
        <div className="absolute inset-x-0 top-0 h-44 bg-linear-to-b from-ink/75 to-transparent" />
      </div>

      {!isMobile && (
        <div className="pointer-events-none absolute right-[6vw] top-[16vh] hidden h-[34vh] w-[34vh] max-w-md md:block">
          <HeroScene />
        </div>
      )}

      <div className="flex w-full flex-col gap-7 px-gutter pb-16 pt-36 md:pb-20">
        <p className="text-xs uppercase tracking-wide2 text-gold">
          Property dealers in Lahore, Pakistan
        </p>
        <h1
          ref={titleRef}
          className="max-w-4xl font-display text-[clamp(2.6rem,7vw,6.2rem)] leading-[0.98] text-ivory"
        >
          Find your place
          <br />
          in Lahore.
        </h1>
        <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <p ref={subRef} className="max-w-xl text-stone">
            Buy, sell or rent plots, houses, apartments and commercial property across
            Lahore, from DHA, Bahria Town and Gulberg to Johar Town and Manawan. Speak
            directly with {SITE.agent} on WhatsApp.
          </p>
          <div ref={ctaRef} className="flex flex-wrap gap-3">
            <Button href={waLink(DEFAULT_WA_MESSAGE)} variant="solid" external>
              <WhatsAppIcon className="h-4 w-4" />
              Chat on WhatsApp
            </Button>
            <Button href={`tel:${SITE.phoneTel}`} variant="outline" external>
              Call {SITE.phoneDisplay}
            </Button>
          </div>
        </div>
        <div ref={enquiryRef}>
          <QuickEnquiry />
        </div>
      </div>
    </section>
  );
}
