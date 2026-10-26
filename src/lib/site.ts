export const SITE = {
  name: "ESK Properties",
  shortName: "ESK",
  tagline: "Property dealers in Lahore",
  city: "Lahore",
  country: "Pakistan",
  agent: "Waseem Asghar",
  agentRole: "Property Dealer & Spokesperson",
  /** Put a portrait in /public/assets/images/team/ and set the path here (e.g. "/assets/images/team/waseem.jpg"). */
  agentPhoto: null as string | null,
  phoneDisplay: "+92 320 6913965",
  phoneTel: "+923206913965",
  whatsappNumber: "923206913965",
  email: "waseempoll@gmail.com",
} as const;

export function waLink(message?: string): string {
  const base = `https://wa.me/${SITE.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const DEFAULT_WA_MESSAGE =
  "Hello ESK Properties, I would like to know more about your properties in Lahore.";
