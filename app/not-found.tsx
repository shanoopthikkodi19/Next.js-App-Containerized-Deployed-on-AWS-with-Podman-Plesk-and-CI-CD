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
        <div className="yf-soon-art" role="img" aria-label="A quiet Andaman beach" />

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