import { SITE, waLink, DEFAULT_WA_MESSAGE } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink(DEFAULT_WA_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${SITE.name} on WhatsApp`}
      className="group fixed bottom-5 right-5 z-60 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)] transition-transform duration-300 hover:scale-105 md:bottom-8 md:right-8"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40 [animation-duration:2.6s]" />
      <WhatsAppIcon className="h-6 w-6" />
      <span className="hidden text-sm font-medium sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
