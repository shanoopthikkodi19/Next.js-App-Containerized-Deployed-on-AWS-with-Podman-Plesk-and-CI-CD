"use client";

import { useState } from "react";
import Image from "next/image";
import { BRAND, NAV, tel } from "../site-data";

type HeaderProps = {
  /** href of the current page, e.g. "/group-packages", to highlight it in the nav */
  current?: string;
  /** pass both to show the package search box (used on the home page) */
  query?: string;
  onQuery?: (value: string) => void;
};

export function SiteHeader({ current, query = "", onQuery }: HeaderProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <header className="yf-header">
      <div className="yf-topbar">
        <span>{BRAND.address}</span>
        <span className="yf-top-phones">
          <a href={tel(BRAND.phone)}>{BRAND.phone}</a>
          <a href={tel(BRAND.phone2)}>{BRAND.phone2}</a>
        </span>
      </div>

      <div className="yf-brand-row">
        <a href="/" className="yf-logo" aria-label="Yellow Fin Tours and Travels home">
          <Image src="/logo.png" alt="" width={112} height={112} priority className="yf-logo-img" />
          <span className="yf-logo-text">
            <strong className="yf-display">{BRAND.name}</strong>
            <small>{BRAND.suffix}</small>
          </span>
        </a>

        {onQuery ? (
          <label className="yf-search">
            <span className="yf-sr-only">Search packages</span>
            <input type="search" value={query} onChange={(e) => onQuery(e.target.value)} placeholder='Search for "Havelock"' />
          </label>
        ) : (
          <span className="yf-search" />
        )}

        <div className="yf-quick">
          <a href="/honeymoon-package"><strong>Honeymoon Package</strong><small>Island escapes for two</small></a>
          <a href="/family-packages"><strong>Family Packages</strong><small>Easy pace, all ages</small></a>
        </div>

        <button className="yf-burger" aria-expanded={mobileNav} aria-controls="main-nav" onClick={() => setMobileNav((v) => !v)}>
          {mobileNav ? "Close" : "Menu"}
        </button>
      </div>

      <nav id="main-nav" className={`yf-nav ${mobileNav ? "yf-nav-open" : ""}`} aria-label="Main">
        <ul>
          {NAV.map((item) => (
            <li key={item.label} onMouseEnter={() => item.children && setOpenMenu(item.label)} onMouseLeave={() => setOpenMenu(null)}>
              {item.children ? (
                <>
                  <button aria-haspopup="true" aria-expanded={openMenu === item.label} onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}>
                    {item.label} <span aria-hidden="true" className="yf-caret" />
                  </button>
                  {openMenu === item.label && (
                    <ul className="yf-dropdown">
                      <li><a href={item.href}>All speciality tours</a></li>
                      {item.children.map((c) => (
                        <li key={c.label}><a href={c.href}>{c.label}</a></li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <a href={item.href} aria-current={current === item.href ? "page" : undefined}>{item.label}</a>
              )}
            </li>
          ))}
        </ul>
        <a href="/#enquire" className="yf-expert">Book with Expert</a>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="yf-footer">
      <div>
        <strong className="yf-display">{BRAND.name} {BRAND.suffix}</strong>
        <p>{BRAND.address}</p>
      </div>
      <div>
        <a href={tel(BRAND.phone)}>{BRAND.phone}</a>
        <a href={tel(BRAND.phone2)}>{BRAND.phone2}</a>
        <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
      </div>
      <div>
        {NAV.map((n) => (
          <a key={n.label} href={n.href}>{n.label}</a>
        ))}
      </div>
    </footer>
  );
}