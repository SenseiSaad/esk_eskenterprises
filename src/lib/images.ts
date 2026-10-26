export interface PlaceholderImage {
  src: string;
  alt: string;
}

const esk = (name: string) => `/assets/images/esk/${name}.jpg`;

/** Free-licence housing photos (Unsplash). They illustrate property types; they are not ESK listings. */
export const photos = {
  hero: { src: esk("hero"), alt: "Modern luxury villa with a private pool" },
  houseModern: { src: esk("house-modern"), alt: "Modern white family house with lawn" },
  houseWhite: { src: esk("house-white"), alt: "Contemporary white house with garden" },
  villaPool: { src: esk("villa-pool"), alt: "Villa with swimming pool and terrace" },
  villaBrick: { src: esk("villa-brick"), alt: "Modern villa with brick and glass facade" },
  houseGlass: { src: esk("house-glass"), alt: "Glass-fronted modern house at dusk" },
  houseWood: { src: esk("house-wood"), alt: "Contemporary house with timber cladding" },
  apartments: { src: esk("apartments"), alt: "Modern apartment building" },
  aptLiving: { src: esk("apt-living"), alt: "Bright apartment living room" },
  aptKitchen: { src: esk("apt-kitchen"), alt: "Furnished apartment with open kitchen" },
  interiorLux: { src: esk("interior-lux"), alt: "Luxury open-plan home interior" },
  interiorWarm: { src: esk("interior-warm"), alt: "Warm modern living room" },
  commercial: { src: esk("commercial"), alt: "Commercial towers and office buildings" },
  keys: { src: esk("keys"), alt: "House keys with a small model home" },
} as const satisfies Record<string, PlaceholderImage>;

/** Lahore photos from Wikimedia Commons (CC BY-SA 4.0). Credited in the footer. */
export const lahore = {
  badshahi: {
    src: "/assets/images/lahore/lahore-badshahi.jpg",
    alt: "Evening traffic on a Lahore road with the Badshahi Mosque in the distance",
    credit: "Fassifarooq",
    title: "Badshahi Mosque, Lahore VII",
    page: "https://commons.wikimedia.org/wiki/File:Badshahi_Mosque,_Lahore_VII.jpg",
  },
  arfa: {
    src: "/assets/images/lahore/lahore-arfa.jpg",
    alt: "Arfa Karim Tower on Ferozepur Road, Lahore",
    credit: "Jugni",
    title: "Arfa Karim Tower Lahore",
    page: "https://commons.wikimedia.org/wiki/File:Arfa_Karim_Tower_Lahore.jpg",
  },
} as const;
