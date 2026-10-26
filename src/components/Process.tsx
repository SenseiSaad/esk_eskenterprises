"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { photos } from "@/lib/images";
import { SITE, waLink } from "@/lib/site";

const STEPS = [
  {
    title: "Tell us what you need",
    text: "Message or call with your requirement: buy, sell, rent or rent out, plus area, size and budget.",
  },
  {
    title: "We shortlist options",
    text: "We come back with suitable properties or tenants and answer your questions.",
  },
  {
    title: "Visit and compare",
    text: "We arrange viewings so you can see the properties and compare them in person.",
  },
  {
    title: "Finalise the deal",
    text: "We guide you through the next steps until the deal is complete.",
  },
];

const FAQ = [
  {
    q: "Which areas do you deal in?",
    a: "All major societies and localities of Lahore, including DHA, Bahria Town, Gulberg, Johar Town, Wapda Town and Manawan, plus schemes along Raiwind, Bedian and Ferozepur Road. See the full list above, or message us your area.",
  },
  {
    q: "Do you handle rentals as well as sales?",
    a: "Yes. We help with buying, selling and renting: houses, portions, apartments, offices and shops. If you own a property, we also find tenants to rent it out.",
  },
  {
    q: "Which plot and house sizes do you offer?",
    a: "We deal in 2.5, 3, 4, 5, 7 and 10 Marla, and 1, 2 and 5 Kanal properties. Tell us the size and society you want and we will share what is available.",
  },
  {
    q: "How do I list my property for sale or rent?",
    a: "Send the location, size, a few photos and your expected price or rent on WhatsApp. We will take it from there.",
  },
  {
    q: "I do not live in Lahore. Can you still help?",
    a: "Yes. Share your requirement on WhatsApp first and we will send details and photos. We arrange visits when you are ready.",
  },
];

export default function Process() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative overflow-hidden px-gutter py-section"
    >
      <div className="absolute inset-0 -z-10 opacity-20">
        <Image
          src={photos.interiorWarm.src}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="mb-16 flex flex-col gap-4" data-reveal>
        <p className="text-xs uppercase tracking-wide2 text-gold">How it works</p>
        <h2 className="max-w-3xl font-display text-4xl text-ivory md:text-6xl">
          Four simple steps from first message to keys
        </h2>
      </div>

      <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, index) => (
          <li
            key={step.title}
            data-reveal
            className="flex flex-col gap-4 rounded-sm border border-white/10 bg-surface/60 p-7 backdrop-blur-sm"
          >
            <span className="font-display text-4xl text-gold">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display text-xl text-ivory">{step.title}</h3>
            <p className="text-sm text-stone">{step.text}</p>
          </li>
        ))}
      </ol>

      <div id="faq" className="mt-24 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div data-reveal className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-wide2 text-gold">Questions</p>
          <h2 className="font-display text-4xl md:text-5xl">Frequently asked</h2>
          <p className="text-stone">
            Something else on your mind?{" "}
            <a
              href={waLink(`Hello ${SITE.name}, I have a question.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold underline underline-offset-4"
            >
              Ask on WhatsApp
            </a>
            .
          </p>
        </div>

        <div data-reveal className="flex flex-col divide-y divide-white/10 border-y border-white/10">
          {FAQ.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg text-ivory [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="text-2xl text-gold transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm text-stone">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
