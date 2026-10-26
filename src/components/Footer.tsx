"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { lahore } from "@/lib/images";
import { SITE, waLink, DEFAULT_WA_MESSAGE } from "@/lib/site";

const FOOTER_LINKS = {
  Explore: [
    { href: "#services", label: "What we deal in" },
    { href: "#societies", label: "Societies we cover" },
    { href: "#sizes", label: "Marla & Kanal sizes" },
    { href: "#gallery", label: "Gallery" },
  ],
  Company: [
    { href: "#about", label: "About" },
    { href: "#process", label: "How it works" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ],
};

export default function Footer() {
  const footerRef = useScrollReveal<HTMLElement>();

  return (
    <footer
      ref={footerRef}
      className="border-t border-white/10 px-gutter pb-28 pt-section md:pb-10"
    >
      <div className="grid gap-16 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div className="flex flex-col gap-6" data-reveal>
          <span className="font-display text-3xl">
            <span className="text-gold">ESK</span> Properties
          </span>
          <p className="max-w-xs text-stone">
            Property dealers in Lahore. Buying, selling and renting plots, houses, apartments
            and commercial property.
          </p>
        </div>

        {Object.entries(FOOTER_LINKS).map(([title, links]) => (
          <div key={title} data-reveal className="flex flex-col gap-4">
            <h3 className="text-xs uppercase tracking-wide2 text-gold">{title}</h3>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="nav-hover-btn text-sm normal-case tracking-normal"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div data-reveal className="flex flex-col gap-4">
          <h3 className="text-xs uppercase tracking-wide2 text-gold">Get in touch</h3>
          <ul className="flex flex-col gap-3 text-sm text-ivory">
            <li>{SITE.agent}</li>
            <li>
              <a
                href={waLink(DEFAULT_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold"
              >
                WhatsApp {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`tel:${SITE.phoneTel}`} className="transition-colors hover:text-gold">
                Call {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="break-all transition-colors hover:text-gold"
              >
                {SITE.email}
              </a>
            </li>
            <li className="text-stone">Lahore, Pakistan</li>
          </ul>
        </div>
      </div>

      <div
        data-reveal
        className="mt-20 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-stone"
      >
        <p>
          © {new Date().getFullYear()} {SITE.name}. All rights reserved. Property photos are
          for illustration and are not listings.
        </p>
        <p>
          Photo credits: house and interior photos from Unsplash. Lahore photos from
          Wikimedia Commons, licensed CC BY-SA 4.0:{" "}
          <a
            href={lahore.badshahi.page}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-gold"
          >
            &ldquo;{lahore.badshahi.title}&rdquo; by {lahore.badshahi.credit}
          </a>
          ,{" "}
          <a
            href={lahore.arfa.page}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-gold"
          >
            &ldquo;{lahore.arfa.title}&rdquo; by {lahore.arfa.credit}
          </a>
          .{" "}
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-gold"
          >
            CC BY-SA 4.0
          </a>
        </p>
      </div>
    </footer>
  );
}
