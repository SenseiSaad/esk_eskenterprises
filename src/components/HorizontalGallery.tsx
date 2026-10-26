"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { photos } from "@/lib/images";

const GALLERY = [
  photos.villaPool,
  photos.houseWhite,
  photos.houseWood,
  photos.houseGlass,
  photos.houseModern,
  photos.interiorLux,
];

export default function HorizontalGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const track = trackRef.current;
    const section = sectionRef.current;
    if (!track || !section) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const scrollDistance = track.scrollWidth - window.innerWidth;
      if (scrollDistance <= 0) return;

      gsap.to(track, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${scrollDistance}`,
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="gallery" ref={sectionRef} className="relative overflow-hidden">
      <div className="px-gutter pt-section md:hidden">
        <p className="text-xs uppercase tracking-wide2 text-gold">Gallery</p>
        <h2 className="mt-3 font-display text-4xl">Homes we deal in</h2>
      </div>
      <div className="no-scrollbar flex gap-6 overflow-x-auto px-gutter py-10 md:hidden">
        {GALLERY.map((image) => (
          <div
            key={image.src}
            className="relative h-[50vh] w-[85vw] flex-none overflow-hidden rounded-sm"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="85vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <p className="px-gutter pb-section text-xs text-stone md:hidden">
        Photos are for illustration of the property types we deal in.
      </p>

      <div
        ref={trackRef}
        className="hidden h-screen w-max items-center gap-10 px-gutter md:flex"
      >
        <div className="flex h-full max-w-md flex-none flex-col justify-center gap-6 pr-10">
          <p className="text-xs uppercase tracking-wide2 text-gold">Gallery</p>
          <h2 className="font-display text-5xl">Homes we deal in</h2>
          <p className="text-stone">
            Scroll to see the kind of houses, villas and interiors our clients buy, sell and
            rent across Lahore.
          </p>
          <p className="text-xs text-stone">
            Photos are for illustration of the property types we deal in. Ask us for current
            available listings.
          </p>
        </div>
        {GALLERY.map((image) => (
          <div
            key={image.src}
            className="relative h-[70vh] w-[36vw] min-w-[320px] flex-none overflow-hidden rounded-sm"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="36vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
