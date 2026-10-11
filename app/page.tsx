const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "750", label: "Projects complete" },
  { value: "568", label: "Happy clients" },
  { value: "478", label: "Cups of coffee" },
  { value: "780", label: "Years experienced" },
];

const skills = [
  { name: "Brand identity", level: 95 },
  { name: "Web design", level: 90 },
  { name: "Next.js / React", level: 85 },
  { name: "Docker & Linux", level: 75 },
];

const services = [
  {
    title: "Brand design",
    text: "Logos, color systems and guidelines that make your business easy to recognise.",
  },
  {
    title: "Web development",
    text: "Fast, responsive websites built with Next.js and deployed in containers.",
  },
  {
    title: "UI/UX design",
    text: "Clear interfaces and flows, tested with real users before launch.",
  },
  {
    title: "Hosting & deployment",
    text: "Docker setups on AlmaLinux with repeatable builds and simple updates.",
  },
];

function Icon() {
  return (
    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sage text-white">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      </svg>
    </span>
  );
}

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-lg font-extrabold tracking-tight">
            CLYDE.
          </a>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-1 text-[13px] font-medium">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="py-1 transition-colors hover:text-sage-dark">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        {/* Home / Hero */}
        <section id="home" className="relative overflow-hidden bg-white">
          <div className="hero-panel absolute inset-y-0 right-0 hidden w-[62%] bg-panel md:block" aria-hidden="true">
            <svg viewBox="0 0 400 500" className="absolute bottom-0 right-[8%] h-[92%] text-foreground/80" fill="currentColor">
              <circle cx="200" cy="130" r="62" />
              <path d="M60 500c0-110 50-190 140-190s140 80 140 190z" />
            </svg>
          </div>

          <div className="relative mx-auto flex min-h-[28rem] max-w-6xl items-center px-6 py-16 md:min-h-[34rem]">
            <div className="max-w-md">
              <p className="mb-4 text-xs font-semibold tracking-widest text-sage-dark">
                We design &amp; build brands
              </p>
              <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
                Hi, I am <span className="text-sage-dark">Clyde</span>. This is my favorite work.
              </h1>
              <div className="mt-8 flex gap-3">
                <a href="#contact" className="rounded bg-sage px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-sage-dark">
                  Hire me
                </a>
                <a href="#" className="rounded border border-neutral-300 bg-white px-5 py-2 text-xs font-semibold transition-colors hover:border-sage-dark">
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-surface">
          <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
            {stats.map((s) => (
              <li key={s.label} className="flex items-center gap-4">
                <Icon />
                <div>
                  <p className="text-2xl font-bold leading-none">{s.value}</p>
                  <p className="mt-1 text-[11px] font-medium text-sage-dark">{s.label}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* About */}
        <section id="about" className="bg-white py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
            <div className="flex aspect-[4/3] items-end justify-center overflow-hidden bg-panel" aria-hidden="true">
              <svg viewBox="0 0 400 300" className="h-[85%] text-foreground/80" fill="currentColor">
                <circle cx="200" cy="90" r="50" />
                <path d="M80 300c0-90 50-150 120-150s120 60 120 150z" />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-bold">About me</h2>
              <p className="mt-4 max-w-prose leading-relaxed text-muted">
                I am a designer and developer who helps small businesses build a brand people remember. I
                handle everything from the first sketch to the live website, and I keep each project simple,
                fast and easy to maintain.
              </p>
              <p className="mt-4 max-w-prose leading-relaxed text-muted">
                When I am not designing, I am usually tinkering with containers, servers and a strong cup of coffee.
              </p>
              <a href="#contact" className="mt-6 inline-block rounded bg-sage px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-sage-dark">
                Work with me
              </a>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="bg-surface py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold">Skills</h2>
            <ul className="mt-10 grid gap-8 md:grid-cols-2">
              {skills.map((s) => (
                <li key={s.name}>
                  <div className="mb-2 flex justify-between text-sm font-medium">
                    <span>{s.name}</span>
                    <span className="text-sage-dark">{s.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-neutral-200">
                    <div className="h-2 rounded-full bg-sage" style={{ width: `${s.level}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold">Services</h2>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <li key={s.title} className="rounded-lg border border-neutral-200 p-6 transition-colors hover:border-sage">
                  <Icon />
                  <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-surface py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">Contact us</h2>
              <p className="mt-4 max-w-prose leading-relaxed text-muted">
                Tell me about your project and I will reply within two working days.
              </p>
              <p className="mt-6 text-sm">
                <a href="mailto:hello@clyde.example" className="font-medium text-sage-dark hover:underline">
                  hr@shanoop.in
                </a>
              </p>
            </div>
            <form action="mailto:hello@clyde.example" method="post" encType="text/plain" className="space-y-4">
              <input name="name" type="text" required placeholder="Your name" className="w-full rounded border border-neutral-300 bg-white px-4 py-3 text-sm" />
              <input name="email" type="email" required placeholder="Your email" className="w-full rounded border border-neutral-300 bg-white px-4 py-3 text-sm" />
              <textarea name="message" required rows={4} placeholder="Your message" className="w-full rounded border border-neutral-300 bg-white px-4 py-3 text-sm" />
              <button type="submit" className="rounded bg-sage px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sage-dark">
                Send message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-white py-8 text-center text-xs text-muted">
        © {new Date().getFullYear()} Clyde. All rights reserved.
      </footer>
    </>
  );
}