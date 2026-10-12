"use client";

import { useMemo, useState } from "react";
import { display, body } from "./fonts";
import { SiteHeader, SiteFooter } from "./components/SiteChrome";
import { BRAND } from "./site-data";


/* ---------- EDIT THESE ---------- */
const FILTERS = ["All", "Honeymoon", "Family", "Group", "Custom", "Holiday", "Office", "Student", "Onam", "Vishu", "New Year"];

type Pkg = { cat: string; title: string; href: string; length: string; route: string; blurb: string; tone: number };

// Sample content: replace durations, routes and wording with your real itineraries.
const PACKAGES: Pkg[] = [
  { cat: "Honeymoon", title: "Honeymoon Package", href: "/honeymoon-package", length: "5 nights, 6 days", route: "Port Blair, Havelock, Neil", blurb: "Private beach time at Radhanagar, candlelight dinners and unhurried days for two.", tone: 0 },
  { cat: "Family", title: "Family Packages", href: "/family-packages", length: "6 nights, 7 days", route: "Port Blair, Havelock, Neil", blurb: "Easy pacing, short transfers and stays that suit children and grandparents alike.", tone: 1 },
  { cat: "Group", title: "Group Packages", href: "/group-packages", length: "5 to 7 days", route: "Fixed departures", blurb: "Join a scheduled group with a tour manager, or book a private group of friends.", tone: 2 },
  { cat: "Custom", title: "Custom Packages", href: "/custom-packages", length: "You decide", route: "Any island, any pace", blurb: "Tell us the dates, budget and interests. We build the itinerary around you.", tone: 3 },
  { cat: "Holiday", title: "Holiday Packages", href: "/holiday-packages", length: "4 to 8 days", route: "Port Blair, Havelock, Neil", blurb: "Ready-made island holidays with hotels, ferries and sightseeing already sorted.", tone: 4 },
  { cat: "Office", title: "Office Tour", href: "/office-tour", length: "4 to 6 days", route: "Port Blair, Havelock", blurb: "Team outings with meeting-friendly venues, group activities and one invoice.", tone: 5 },
  { cat: "Student", title: "Student Tour", href: "/speciality-tours/student", length: "4 to 6 days", route: "Port Blair, Ross, Baratang", blurb: "Educational trips covering history, mangroves and marine life, with teacher-friendly pricing.", tone: 1 },
  { cat: "Onam", title: "Onam Tour", href: "/speciality-tours/onam", length: "5 days", route: "Port Blair, Havelock", blurb: "Spend the Onam holidays on the islands with a sadya-style festive lunch.", tone: 2 },
  { cat: "Vishu", title: "Vishu Tour", href: "/speciality-tours/vishu", length: "5 days", route: "Port Blair, Havelock", blurb: "Mark Vishu by the sea with a family-friendly programme and festive meals.", tone: 0 },
  { cat: "New Year", title: "New Year Tour", href: "/speciality-tours/new-year", length: "5 to 6 days", route: "Havelock, Neil", blurb: "Welcome the year on a quiet beach. Book early, hotels fill up fast.", tone: 3 },
];

const PLACES = [
  { name: "Port Blair", note: "Cellular Jail, museums and the arrival point for most trips." },
  { name: "Havelock (Swaraj Dweep)", note: "Radhanagar Beach, scuba diving and snorkelling." },
  { name: "Neil (Shaheed Dweep)", note: "Bharatpur Beach, Natural Bridge and slow island cycling." },
  { name: "Ross and North Bay", note: "Colonial ruins and coral-lined shores, a short boat ride away." },
  { name: "Baratang", note: "Limestone caves and a mangrove creek by boat." },
  { name: "Diglipur", note: "Saddle Peak, turtle beaches and a quieter north." },
];

// Sample reviews: swap for real customer feedback before going live.
const REVIEWS = [
  { name: "Guest name", trip: "Honeymoon Package", text: "Replace this with a real review from a honeymoon guest." },
  { name: "Guest name", trip: "Family Packages", text: "Replace this with a real review from a family traveller." },
  { name: "Guest name", trip: "Onam Tour", text: "Replace this with a real review from a festival group." },
];
/* -------------------------------- */

function HeroArt() {
  return (
    <svg className="yf-hero-art" viewBox="0 0 640 420" role="img" aria-label="A yellowfin fin cutting through the sea">
      <circle cx="470" cy="110" r="64" fill="#F5B700" opacity="0.95" />
      <path d="M0 250 C90 225 150 270 240 250 S400 225 480 250 S600 270 640 245 V420 H0Z" fill="#136B78" />
      <path d="M0 290 C80 270 160 310 250 290 S410 268 490 292 S600 310 640 288 V420 H0Z" fill="#0E525E" />
      <path d="M0 335 C100 318 170 352 270 335 S420 316 510 338 S600 350 640 334 V420 H0Z" fill="#0A3A44" />
      {/* yellowfin dorsal fin */}
      <path d="M268 262 C282 214 318 176 372 150 C362 186 352 224 352 262Z" fill="#F5B700" />
      <path d="M352 262 C356 244 372 232 396 228 C386 240 380 252 380 262Z" fill="#E0A400" />
      <path d="M236 270 C280 258 340 258 420 270" stroke="#CFEDEA" strokeWidth="3" fill="none" opacity="0.7" />
    </svg>
  );
}

export default function Home() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", month: "", interest: "Honeymoon Package" });

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PACKAGES.filter((p) => (filter === "All" || p.cat === filter) && (!q || `${p.title} ${p.route} ${p.blurb}`.toLowerCase().includes(q)));
  }, [filter, query]);

  const waLink = useMemo(() => {
    const msg = `Hi Yellow Fin Tours, I'm ${form.name || "(name)"}. I'd like to enquire about the ${form.interest}${form.month ? ` for ${form.month}` : ""}. My number is ${form.phone || "(phone)"}.`;
    return `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(msg)}`;
  }, [form]);

  return (
    <div className={`yf-page ${body.className}`} style={{ ["--display" as string]: display.style.fontFamily }}>
      <SiteHeader query={query} onQuery={setQuery} />

      <main>
        {/* ---------- Hero ---------- */}
        <section className="yf-hero">
          <div className="yf-hero-copy">
            <h1 className="yf-display">Island holidays, planned on the islands.</h1>
            <p>
              Yellow Fin Tours and Travels arranges stays, ferries, sightseeing and activities across the
              Andaman and Nicobar Islands, for couples, families, offices, schools and groups.
            </p>
            <div className="yf-hero-actions">
              <a href="#packages" className="yf-btn-primary">See packages</a>
              <a href="#enquire" className="yf-btn-ghost">Plan my trip</a>
            </div>
          </div>
          <HeroArt />
        </section>

        {/* ---------- Packages ---------- */}
        <section id="packages" className="yf-section">
          <div className="yf-section-head">
            <h2 className="yf-display">Choose how you want to travel</h2>
            <p>Pick a type of trip. Every package can be adjusted to your dates and budget.</p>
          </div>

          <div className="yf-chips" role="tablist" aria-label="Package type">
            {FILTERS.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                className={filter === f ? "yf-chip-on" : "yf-chip"}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {shown.length === 0 ? (
            <p className="yf-empty">
              No package matches "{query}". Clear the search, or <a href="#enquire">ask us for a custom plan</a>.
            </p>
          ) : (
            <ul className="yf-grid">
              {shown.map((p) => (
                <li key={p.title} className="yf-card">
                  {/* Replace this block with <Image src="/packages/xyz.jpg" ... /> when you have photos */}
                  <div className={`yf-photo yf-tone${p.tone}`}>
                    <span>{p.cat}</span>
                  </div>
                  <div className="yf-card-body">
                    <h3 className="yf-display">{p.title}</h3>
                    <p className="yf-meta">{p.length} &mdash; {p.route}</p>
                    <p>{p.blurb}</p>
                    <a href={p.href} className="yf-link">View details</a>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* ---------- Places ---------- */}
        <section className={`yf-section yf-places`}>
          <div className="yf-section-head">
            <h2 className="yf-display">Where we take you</h2>
          </div>
          <ul className="yf-place-list">
            {PLACES.map((p) => (
              <li key={p.name}>
                <h3 className="yf-display">{p.name}</h3>
                <p>{p.note}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------- Reviews ---------- */}
        <section className="yf-section">
          <div className="yf-section-head">
            <h2 className="yf-display">What our travellers say</h2>
            <p>Customer satisfaction is our main goal.</p>
          </div>
          <ul className="yf-reviews">
            {REVIEWS.map((r, i) => (
              <li key={i}>
                <p className="yf-stars" aria-label="5 out of 5">★★★★★ <span>5.0</span></p>
                <p>{r.text}</p>
                <p className="yf-who"><strong>{r.name}</strong>, {r.trip}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------- Enquiry ---------- */}
        <section id="enquire" className="yf-enquire">
          <div>
            <h2 className="yf-display">Talk to a trip expert</h2>
            <p>Share a few details and we will reply on WhatsApp with options and a quote.</p>
          </div>
          <div className="yf-form">
            <label>
              Your name
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} autoComplete="name" />
            </label>
            <label>
              Phone number
              <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} inputMode="tel" autoComplete="tel" />
            </label>
            <label>
              Travel month
              <input value={form.month} onChange={(e) => setForm({ ...form, month: e.target.value })} placeholder="e.g. December" />
            </label>
            <label>
              Trip type
              <select value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })}>
                {PACKAGES.map((p) => (
                  <option key={p.title}>{p.title}</option>
                ))}
              </select>
            </label>
            <a className="yf-btn-primary" href={waLink} target="_blank" rel="noopener noreferrer">
              Send on WhatsApp
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}