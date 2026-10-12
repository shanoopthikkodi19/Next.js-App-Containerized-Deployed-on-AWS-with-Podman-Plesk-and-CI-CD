import type { Metadata } from "next";
import { display, body } from "./fonts";
import { SiteHeader, SiteFooter } from "./components/SiteChrome";
import { BRAND, tel } from "./site-data";

export const metadata: Metadata = {
  title: "Coming soon | Yellow Fin Tours & Travels",
  description: "This page is on its way. Contact Yellow Fin Tours & Travels for Andaman and Nicobar trip plans.",
};

export default function NotFound() {
  const wa = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
    "Hi Yellow Fin Tours, I was looking for a page on your website and would like to know more about your packages.",
  )}`;

  return (
    <div className={`yf-page ${body.className}`} style={{ ["--display" as string]: display.style.fontFamily }}>
      <SiteHeader />

      <main className="yf-soon">
        <svg className="yf-soon-art" viewBox="0 0 640 220" role="img" aria-label="A yellowfin fin cutting through the sea">
          <circle cx="470" cy="70" r="46" fill="#F5B700" />
          <path d="M0 120 C90 100 150 140 240 120 S400 100 480 122 S600 140 640 118 V220 H0Z" fill="#136B78" />
          <path d="M0 160 C80 142 160 180 250 160 S410 140 490 162 S600 180 640 158 V220 H0Z" fill="#0E525E" />
          <path d="M268 132 C282 92 318 62 372 40 C362 72 352 102 352 132Z" fill="#F5B700" />
          <path d="M352 132 C356 116 372 106 396 102 C386 112 380 122 380 132Z" fill="#E0A400" />
        </svg>

        <div className="yf-soon-copy">
          <p className="yf-soon-tag">Coming soon</p>
          <h1 className="yf-display">This page is still being planned.</h1>
          <p>
            We are adding more trip details every week. In the meantime, our team can share the itinerary and a
            quote for this trip directly.
          </p>
          <div className="yf-hero-actions">
            <a className="yf-btn-primary" href={wa} target="_blank" rel="noopener noreferrer">Ask us on WhatsApp</a>
            <a className="yf-btn-outline" href="/">Back to home</a>
            <a className="yf-btn-outline" href="/group-packages">See group packages</a>
          </div>
          <p className="yf-soon-call">Or call <a href={tel(BRAND.phone)}>{BRAND.phone}</a> / <a href={tel(BRAND.phone2)}>{BRAND.phone2}</a></p>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
