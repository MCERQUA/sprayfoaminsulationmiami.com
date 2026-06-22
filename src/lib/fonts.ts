import { Outfit, DM_Sans } from "next/font/google";

// Body font — DM Sans (friendly, readable, coastal)
export const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Heading font — Outfit (geometric, modern, clean)
export const headingFont = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});
