import type { Metadata } from "next";
import { Lato, Marcellus, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Preloader } from "@/components/preloader";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marcellus",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Heather Moyer Wellness — Grief coaching & retreats in Mt. Shasta",
    template: "%s · Heather Moyer Wellness",
  },
  description:
    "Heather Moyer is a certified grief educator, grief coach, and retreat leader based in Mt. Shasta, California. 1-on-1 coaching, group retreats, and a weekly support tribe for grieving women.",
  openGraph: {
    title: "Heather Moyer Wellness",
    description:
      "Grief coaching, retreats, and a weekly support tribe — based in Mt. Shasta, California.",
    images: ["/images/Heather-Moyer-OG-Image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${marcellus.variable} ${lato.variable} ${playfair.variable}`}>
      <body className="min-h-dvh flex flex-col">
        <Preloader />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
