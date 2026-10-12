/* Shared by every page. Edit contact details and menu here once. */
export const BRAND = {
  name: "Yellow Fin",
  suffix: "Tours & Travels",
  phone: "+91 96795 73417",
  phone2: "+91 80895 08728",
  whatsapp: "919679573417", // country code + number, no + or spaces
  email: "hello@yellowfintours.in", // placeholder: replace with your real email
  address: "Andaman & Nicobar Islands",
};

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

export const NAV: NavItem[] = [
  { label: "Group Packages", href: "/group-packages" },
  { label: "Custom Packages", href: "/custom-packages" },
  { label: "Holiday Packages", href: "/holiday-packages" },
  { label: "Office Tour", href: "/office-tour" },
  {
    label: "Speciality Tours",
    href: "/speciality-tours",
    children: [
      { label: "Student Tour", href: "/speciality-tours/student" },
      { label: "Onam Tour", href: "/speciality-tours/onam" },
      { label: "Vishu Tour", href: "/speciality-tours/vishu" },
      { label: "New Year Tour", href: "/speciality-tours/new-year" },
    ],
  },
];

export const tel = (p: string) => `tel:${p.replace(/\s/g, "")}`;
