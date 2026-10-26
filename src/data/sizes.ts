export interface PlotSize {
  label: string;
  marla: number;
  note: string;
}

// Standard Lahore measure: 1 Marla = 272.25 sq ft, 1 Kanal = 20 Marla.
export const SQFT_PER_MARLA = 272.25;

export const PLOT_SIZES: PlotSize[] = [
  { label: "2.5 Marla", marla: 2.5, note: "Compact starter homes" },
  { label: "3 Marla", marla: 3, note: "Affordable family homes" },
  { label: "4 Marla", marla: 4, note: "Homes and small commercial" },
  { label: "5 Marla", marla: 5, note: "The classic family home" },
  { label: "7 Marla", marla: 7, note: "Extra room and parking" },
  { label: "10 Marla", marla: 10, note: "Spacious family living" },
  { label: "1 Kanal", marla: 20, note: "Large villas" },
  { label: "2 Kanal", marla: 40, note: "Luxury estates" },
  { label: "5 Kanal", marla: 100, note: "Grand estates and farmhouses" },
];

export function sqft(marla: number): string {
  return Math.round(marla * SQFT_PER_MARLA).toLocaleString("en-US");
}
