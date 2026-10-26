"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { photos } from "@/lib/images";
import { SITE, waLink, DEFAULT_WA_MESSAGE } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

const INTERESTS = ["Buy a property", "Sell a property", "Rent a property", "Rent out my property"];

const fieldClass =
  "border-b border-white/20 bg-transparent py-3 text-ivory placeholder:text-stone focus:border-gold focus:outline-none";

export default function Contact() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const [isSent, setIsSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const interest = String(form.get("interest") ?? "").trim();
    const area = String(form.get("area") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const lines = [
      `Hello ${SITE.name}, my name is ${name}.`,
      `I want to: ${interest}.`,
      area ? `Society / area: ${area}.` : "",
      phone ? `My number: ${phone}.` : "",
      message ? `Details: ${message}` : "",
    ].filter(Boolean);

    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setIsSent(true);
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="grid gap-16 px-gutter py-section lg:grid-cols-2"
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4" data-reveal>
          <p className="text-xs uppercase tracking-wide2 text-gold">Contact</p>
          <h2 className="font-display text-4xl md:text-5xl">
            Let&apos;s find your next property
          </h2>
          <p className="text-stone">
            The fastest way to reach {SITE.agent} is WhatsApp. You can also call or email, or
            fill in the form and it will open a ready-made WhatsApp message.
          </p>
        </div>

        <ul className="flex flex-col gap-4" data-reveal>
          <li>
            <a
              href={waLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 rounded-sm border border-white/10 bg-surface/60 p-5 transition-colors duration-500 hover:border-[#25D366]"
            >
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-[#25D366] text-white">
                <WhatsAppIcon className="h-6 w-6" />
              </span>
              <span className="flex flex-col">
                <span className="text-xs uppercase tracking-wide2 text-stone">WhatsApp</span>
                <span className="font-display text-xl text-ivory">{SITE.phoneDisplay}</span>
              </span>
              <span className="ml-auto hidden text-xs uppercase tracking-wide2 text-gold sm:inline">
                Open chat &rarr;
              </span>
            </a>
          </li>
          <li>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="group flex items-center gap-5 rounded-sm border border-white/10 bg-surface/60 p-5 transition-colors duration-500 hover:border-gold"
            >
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full border border-gold/50 text-gold">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="flex flex-col">
                <span className="text-xs uppercase tracking-wide2 text-stone">Call</span>
                <span className="font-display text-xl text-ivory">{SITE.phoneDisplay}</span>
              </span>
            </a>
          </li>
          <li>
            <a
              href={`mailto:${SITE.email}?subject=${encodeURIComponent("Property enquiry: ESK Properties")}`}
              className="group flex items-center gap-5 rounded-sm border border-white/10 bg-surface/60 p-5 transition-colors duration-500 hover:border-gold"
            >
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full border border-gold/50 text-gold">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="flex min-w-0 flex-col">
                <span className="text-xs uppercase tracking-wide2 text-stone">Email</span>
                <span className="break-all font-display text-xl text-ivory">{SITE.email}</span>
              </span>
            </a>
          </li>
          <li className="flex items-center gap-5 rounded-sm border border-white/10 bg-surface/60 p-5">
            <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full border border-gold/50 text-gold">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11z" strokeLinejoin="round" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </span>
            <span className="flex flex-col">
              <span className="text-xs uppercase tracking-wide2 text-stone">Serving</span>
              <span className="font-display text-xl text-ivory">Lahore, Pakistan</span>
            </span>
          </li>
        </ul>

        <div
          data-reveal
          className="relative hidden h-56 overflow-hidden rounded-sm lg:block"
        >
          <Image
            src={photos.keys.src}
            alt={photos.keys.alt}
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6 lg:pt-4">
        {isSent ? (
          <div
            data-reveal
            className="flex flex-col gap-4 rounded-sm border border-gold/30 bg-surface p-8 text-ivory"
          >
            <h3 className="font-display text-2xl">WhatsApp is opening</h3>
            <p className="text-stone">
              Your message is ready in WhatsApp. Press send there and {SITE.agent} will reply as
              soon as possible. If nothing opened,{" "}
              <a
                href={waLink(DEFAULT_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold underline underline-offset-4"
              >
                tap here to open WhatsApp
              </a>
              .
            </p>
            <button
              type="button"
              onClick={() => setIsSent(false)}
              className="w-fit text-xs uppercase tracking-wide2 text-gold underline underline-offset-4"
            >
              Send another enquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} data-reveal className="flex flex-col gap-5">
            <h3 className="font-display text-2xl">Send an enquiry</h3>
            <div className="grid gap-5 sm:grid-cols-2">
              <input required name="name" placeholder="Your name" autoComplete="name" className={fieldClass} />
              <input name="phone" type="tel" placeholder="Your phone (optional)" autoComplete="tel" className={fieldClass} />
            </div>
            <select name="interest" defaultValue={INTERESTS[0]} className={`${fieldClass} bg-ink`}>
              {INTERESTS.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <input name="area" placeholder="Society / area (e.g. DHA, Manawan)" className={fieldClass} />
            <textarea
              name="message"
              rows={4}
              placeholder="Size (Marla / Kanal), budget and any details"
              className={fieldClass}
            />
            <button
              type="submit"
              className="mt-2 inline-flex w-fit items-center gap-3 rounded-full bg-[#25D366] px-7 py-3 text-xs font-medium uppercase tracking-wide2 text-white transition-transform duration-300 hover:scale-105"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Send on WhatsApp
            </button>
            <p className="text-xs text-stone">
              This opens WhatsApp with your message ready to send. Nothing is stored on this
              website.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
