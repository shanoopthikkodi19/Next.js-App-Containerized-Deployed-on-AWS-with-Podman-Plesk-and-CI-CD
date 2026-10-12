import type { Metadata } from "next";
import { display, body } from "../fonts";
import { SiteHeader, SiteFooter } from "../components/SiteChrome";
import { BRAND, tel } from "../site-data";

export const metadata: Metadata = {
  title: "Group Packages: Andaman 5 Nights 6 Days | Yellow Fin Tours & Travels",
  description:
    "Six-day Andaman group tour covering Port Blair, Swaraj Dweep (Havelock) and Shaheed Dweep (Neil), with AC stay, breakfast, ferry tickets and Cellular Jail entry.",
};

/* ---------- EDIT CONTENT HERE ---------- */
const TRIP = {
  title: "Andaman Group Tour",
  length: "5 nights, 6 days",
  route: "Port Blair, Swaraj Dweep (Havelock), Shaheed Dweep (Neil)",
};

type Day = { day: number; title: string; stops: string[]; note?: string };

const DAYS: Day[] = [
  {
    day: 1,
    title: "Arrive in Port Blair",
    stops: [
      "Airport pick-up",
      "Check in at the hotel",
      "Visit Cellular Jail, Marine Aquarium, Flag Point and Marina Park",
      "Cellular Jail light and sound show",
      "Dinner and back to the room",
    ],
  },
  {
    day: 2,
    title: "Swaraj Dweep (Havelock)",
    stops: [
      "Early morning ferry to Swaraj Dweep",
      "Breakfast on arrival, then check in at the hotel or resort",
      "Speed boat to Elephanta Beach (water activities available there)",
      "Return in the afternoon and have lunch",
      "Radhanagar Beach for swimming, basking and sunset",
      "Back to the room",
    ],
  },
  {
    day: 3,
    title: "Havelock to Shaheed Dweep (Neil)",
    stops: [
      "Early morning sunrise at Kalapathar Beach",
      "Breakfast and check out",
      "Ferry to Neil Island and drop at the hotel or resort",
      "Laxmanpur Beach 2, known for its large natural coral rock formation",
      "Bharatpur Beach (swimming and water activities available there)",
      "Evening sunset at Laxmanpur Beach 1, then back to the room",
      "Dinner",
    ],
    note: "Visit Laxmanpur Beach 2 according to the low tide time, to see the corals and marine life and to walk along the shoreline.",
  },
  {
    day: 4,
    title: "Neil to Sri Vijayapuram (Port Blair)",
    stops: [
      "Early morning sunrise at Sitapur Beach",
      "Breakfast and check out",
      "Ferry towards Sri Vijayapuram",
      "Reach the jetty and drop at the hotel",
      "Lunch and a short rest",
      "Samudrika Naval Marine Museum",
      "Shopping at Aberdeen Bazaar",
      "Dinner and back to the room",
    ],
  },
  {
    day: 5,
    title: "Chatham, Ross Island and North Bay",
    stops: [
      "Breakfast",
      "Chatham Saw Mill, said to be Asia's oldest",
      "Ross Island and the North Bay Island lighthouse",
      "Back to the jetty in the evening",
      "Corbyn's Cove Beach",
      "Dinner and back to the room",
    ],
  },
  {
    day: 6,
    title: "Departure",
    stops: ["Breakfast", "Check out", "Return to the mainland with beautiful memories"],
  },
];

const INCLUDED = [
  "AC room, breakfast and travelling facilities",
  "Ferry tickets for Swaraj Dweep and Shaheed Dweep, Elephanta Beach, Ross Island, North Bay and Baratang",
  "All entry tickets and the light and sound show at Cellular Jail",
];

const ON_REQUEST = [
  "Activities like scuba diving, sea walk, snorkelling and semi-submarine",
  "Lunch and dinner",
  "Rental two-wheeler service",
];

const CARRY = ["ID proof", "Driving licence", "Swimming clothes", "Cap and sunglasses", "Regular medicines, if you use any", "Umbrella"];
const BEACH = ["Towel and extra clothes", "Sunscreen", "Waterproof phone pouch", "Light snacks and drinking water"];
/* --------------------------------------- */

export default function GroupPackagesPage() {
  const wa = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
    "Hi Yellow Fin Tours, I'd like details and a quote for the Andaman 5 nights 6 days group package.",
  )}`;

  return (
    <div className={`yf-page ${body.className}`} style={{ ["--display" as string]: display.style.fontFamily }}>
      <SiteHeader current="/group-packages" />

      <main>
        {/* ---------- Title block ---------- */}
        <section className="yf-trip-hero">
          <div className="yf-trip-hero-inner">
            <div>
              <p className="yf-crumbs"><a href="/">Home</a> / Group Packages</p>
              <h1 className="yf-display">{TRIP.title}: {TRIP.length}</h1>
              <p className="yf-trip-lead">
                The Yellow Fin team welcomes you to a beautiful and memorable trip. Choose a plan according to your
                comfort and enjoy the days.
              </p>
              <div className="yf-hero-actions">
                <a className="yf-btn-primary" href={wa} target="_blank" rel="noopener noreferrer">Get a quote on WhatsApp</a>
                <a className="yf-btn-ghost" href={tel(BRAND.phone)}>Call {BRAND.phone}</a>
              </div>
            </div>
            <ul className="yf-facts">
              <li><strong>6 days</strong><span>5 nights</span></li>
              <li><strong>3 stops</strong><span>Port Blair, Havelock, Neil</span></li>
              <li><strong>AC stay</strong><span>Breakfast included</span></li>
            </ul>
          </div>
        </section>

        {/* ---------- Itinerary + sidebar ---------- */}
        <section className="yf-trip">
          <div>
            <h2 className="yf-display yf-h2">Day-by-day itinerary</h2>
            <ol className="yf-days">
              {DAYS.map((d) => (
                <li key={d.day} className="yf-day">
                  <span className="yf-day-num" aria-hidden="true"><small>Day</small>{d.day}</span>
                  <div>
                    <h3 className="yf-display">Day {d.day}: {d.title}</h3>
                    <ul className="yf-stops">
                      {d.stops.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                    {d.note && <p className="yf-note"><strong>Note:</strong> {d.note}</p>}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside className="yf-aside" aria-label="Package summary">
            <div className="yf-panel">
              <h2 className="yf-display">At a glance</h2>
              <dl>
                <div><dt>Duration</dt><dd>{TRIP.length}</dd></div>
                <div><dt>Route</dt><dd>{TRIP.route}</dd></div>
                <div><dt>Stay</dt><dd>AC rooms with breakfast</dd></div>
                <div><dt>Price</dt><dd>On request, based on group size and dates</dd></div>
              </dl>
              <a className="yf-btn-primary" href={wa} target="_blank" rel="noopener noreferrer">Enquire on WhatsApp</a>
              <a className="yf-btn-outline" href={tel(BRAND.phone2)}>Call {BRAND.phone2}</a>
            </div>
          </aside>
        </section>

        {/* ---------- Inclusions ---------- */}
        <section className="yf-lists">
          <div className="yf-panel">
            <h2 className="yf-display">Included in this package</h2>
            <ul className="yf-tick">{INCLUDED.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
          <div className="yf-panel">
            <h2 className="yf-display">Arranged on request</h2>
            <ul className="yf-plus">{ON_REQUEST.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
          <div className="yf-panel">
            <h2 className="yf-display">Before you travel, carry</h2>
            <ul className="yf-plain">{CARRY.map((i) => <li key={i}>{i}</li>)}</ul>
            <h3 className="yf-display yf-h3">For beach visits</h3>
            <ul className="yf-plain">{BEACH.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        </section>

        {/* ---------- Closing CTA ---------- */}
        <section className="yf-enquire yf-cta">
          <div>
            <h2 className="yf-display">Travelling as a group?</h2>
            <p>Tell us your dates and group size. We will confirm hotels, ferries and a final price.</p>
          </div>
          <div className="yf-cta-actions">
            <a className="yf-btn-primary" href={wa} target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a>
            <a className="yf-btn-ghost" href="/custom-packages">Need changes? Custom packages</a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}