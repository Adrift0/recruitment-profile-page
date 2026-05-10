/*
Design philosophy for this file: Swiss International Typographic Style interpreted as a modern technical dossier. Preserve the asymmetric recruiter-facing layout, precise section numbering, thin rules, restrained signal-blue accents, and fast-scanning professional hierarchy.
*/
import { ArrowUpRight, CheckCircle2, ClipboardList, ExternalLink, Mail, MonitorCog, ShieldCheck, TerminalSquare, Wrench } from "lucide-react";

const heroImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663639644044/S7EEqxJt3w3Jtz6eccr8Wr/jason-dossier-hero-P9YywfcAteQMtdoeaDpeBk.webp";
const textureImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663639644044/S7EEqxJt3w3Jtz6eccr8Wr/dossier-grid-texture-mLe7zLAF7yDqUpQS7RgaEu.webp";
const capabilityImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663639644044/S7EEqxJt3w3Jtz6eccr8Wr/capability-panel-abstract-Ym9Wr8e7zXKuhasM9Be5nC.webp";

const capabilities = [
  {
    icon: MonitorCog,
    title: "Endpoint & desktop support",
    copy: "Practical troubleshooting for Windows environments, browser configuration, device settings, and day-to-day user productivity blockers.",
  },
  {
    icon: TerminalSquare,
    title: "Automation mindset",
    copy: "Comfortable using scripts, structured checklists, and repeatable workflows to reduce manual effort and improve consistency.",
  },
  {
    icon: ShieldCheck,
    title: "Operational reliability",
    copy: "Clear documentation, careful change handling, and a steady approach to resolving issues without adding unnecessary complexity.",
  },
  {
    icon: Wrench,
    title: "Hands-on problem solving",
    copy: "A pragmatic IT profile oriented around diagnosing root causes, communicating clearly, and getting systems back to usable condition.",
  },
];

const profilePoints = [
  "IT professional profile prepared for recruiters and hiring managers.",
  "Clear emphasis on support readiness, technical troubleshooting, and user-focused service.",
  "Shareable one-page format designed for quick review before interviews or screening calls.",
];

const evidence = [
  ["Focus", "IT support, endpoint troubleshooting, workflow improvement"],
  ["Signal", "Reliable, practical, documentation-minded"],
  ["Best fit", "Help desk, desktop support, junior systems support, technical operations"],
  ["Availability", "Open to recruitment conversations"],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <section className="relative isolate min-h-screen">
        <div
          className="absolute inset-0 -z-20 opacity-55"
          style={{ backgroundImage: `url(${textureImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(247,246,241,0.98)_0%,rgba(247,246,241,0.9)_48%,rgba(247,246,241,0.72)_100%)]" />

        <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <a href="#top" className="group flex items-center gap-3" aria-label="Jason Alebord profile home">
            <span className="grid size-10 place-items-center border border-ink/20 bg-paper text-xs font-black tracking-[0.22em] text-ink shadow-[4px_4px_0_#0b5cad] transition-transform duration-300 group-hover:-translate-y-0.5">JA</span>
            <span className="hidden text-[0.68rem] font-bold uppercase tracking-[0.32em] text-steel sm:block">Recruitment Dossier</span>
          </a>
          <nav className="hidden items-center gap-7 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-ink/70 md:flex" aria-label="Profile sections">
            <a className="nav-link" href="#profile">Profile</a>
            <a className="nav-link" href="#capabilities">Capabilities</a>
            <a className="nav-link" href="#contact">Contact</a>
          </nav>
          <a href="mailto:?subject=Recruitment%20inquiry%20for%20Jason%20Alebord" className="inline-flex items-center gap-2 border border-ink bg-ink px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-paper transition duration-300 hover:-translate-y-0.5 hover:bg-signal hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal">
            Inquiry <ArrowUpRight className="size-3.5" />
          </a>
        </header>

        <div id="top" className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-10 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-10 lg:pb-24 lg:pt-16">
          <aside className="order-2 lg:order-1">
            <div className="sticky top-8 border-l border-ink/20 pl-5 lg:pl-7">
              <p className="section-kicker">Candidate File</p>
              <div className="mt-8 space-y-7">
                {evidence.map(([label, value]) => (
                  <div key={label} className="border-t border-ink/15 pt-4">
                    <dt className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-steel">{label}</dt>
                    <dd className="mt-2 max-w-xs text-sm leading-6 text-ink/80">{value}</dd>
                  </div>
                ))}
              </div>
              <div className="mt-9 border border-ink/15 bg-white/55 p-5 shadow-[12px_12px_0_rgba(11,92,173,0.08)] backdrop-blur">
                <div className="flex items-start gap-3">
                  <ClipboardList className="mt-1 size-5 text-signal" />
                  <p className="text-sm leading-6 text-ink/78">This page was rebuilt as a standalone recruitment profile so it can be shared outside the original Copilot artifact wrapper.</p>
                </div>
              </div>
            </div>
          </aside>

          <section className="order-1 lg:order-2">
            <div className="relative overflow-hidden border border-ink/15 bg-ink text-paper shadow-[18px_18px_0_rgba(11,92,173,0.12)]">
              <img src={heroImage} alt="Abstract technical operations workspace with server infrastructure and precision grid lines" className="absolute inset-0 h-full w-full object-cover opacity-70" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,13,20,0.94)_0%,rgba(8,13,20,0.88)_42%,rgba(8,13,20,0.28)_100%)]" />
              <div className="relative min-h-[620px] px-6 py-8 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
                <div className="mb-16 flex flex-wrap items-center gap-3">
                  <span className="status-chip"><span className="status-dot" /> Open to conversations</span>
                  <span className="status-chip border-paper/20 text-paper/70">IT Professional</span>
                </div>
                <p className="font-mono text-xs uppercase tracking-[0.34em] text-signal-light">Jason Alebord</p>
                <h1 className="mt-5 max-w-3xl text-5xl font-black uppercase leading-[0.92] tracking-[-0.07em] text-paper sm:text-7xl lg:text-8xl">Technical support profile for recruitment review.</h1>
                <p className="mt-8 max-w-2xl text-lg leading-8 text-paper/78 sm:text-xl">A concise, recruiter-facing profile for an IT professional focused on practical troubleshooting, endpoint support, documentation, and reliable user-centered problem solving.</p>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <a href="#profile" className="inline-flex items-center justify-center gap-2 bg-paper px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-ink transition duration-300 hover:-translate-y-1 hover:bg-signal hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper">Review profile <ArrowUpRight className="size-4" /></a>
                  <a href="#contact" className="inline-flex items-center justify-center gap-2 border border-paper/35 px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-paper transition duration-300 hover:-translate-y-1 hover:border-signal-light hover:text-signal-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper">Recruiter contact <Mail className="size-4" /></a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section id="profile" className="border-y border-ink/15 bg-paper px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="section-kicker">01 / Profile</p>
            <h2 className="mt-4 max-w-xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.055em] text-ink sm:text-6xl">Built for clear, fast hiring decisions.</h2>
          </div>
          <div className="grid gap-5">
            {profilePoints.map((point) => (
              <div key={point} className="group flex gap-4 border-t border-ink/15 pt-5">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-signal transition-transform duration-300 group-hover:scale-110" />
                <p className="text-lg leading-8 text-ink/78">{point}</p>
              </div>
            ))}
            <blockquote className="mt-6 border-l-4 border-signal bg-white/65 p-6 text-xl font-semibold leading-8 text-ink shadow-sm">
              “A recruitment page should reduce friction: who this person is, what they can help with, and how to start a conversation.”
            </blockquote>
          </div>
        </div>
      </section>

      <section id="capabilities" className="bg-ink px-5 py-20 text-paper sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="section-kicker text-signal-light">02 / Capability Map</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.055em] sm:text-6xl">Practical IT strengths, presented without noise.</h2>
            <div className="mt-10 grid gap-px border border-white/15 bg-white/15 sm:grid-cols-2">
              {capabilities.map((item) => (
                <article key={item.title} className="group bg-ink p-6 transition duration-300 hover:bg-[#101a27]">
                  <item.icon className="size-6 text-signal-light" />
                  <h3 className="mt-8 text-xl font-bold tracking-[-0.025em] text-paper">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-paper/68">{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="relative min-h-[460px] overflow-hidden border border-white/15 bg-white/5">
            <img src={capabilityImage} alt="Abstract capability panel showing diagnostic systems, status lights, and infrastructure modules" className="h-full min-h-[460px] w-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 border-t border-white/15 bg-ink/86 p-5 backdrop-blur-md">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-signal-light">Recruiter scan summary</p>
              <p className="mt-2 text-sm leading-6 text-paper/75">A compact page for sharing in applications, messages, and screening workflows.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative bg-paper px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-kicker">03 / Contact</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-[-0.055em] text-ink sm:text-6xl">Ready to share.</h2>
          </div>
          <div className="border border-ink/15 bg-white/70 p-6 shadow-[14px_14px_0_rgba(11,92,173,0.08)] sm:p-8">
            <p className="max-w-2xl text-lg leading-8 text-ink/78">Use this hosted page as the profile link in recruitment messages, job applications, and outreach. Contact details can be added when you provide an email address, LinkedIn URL, phone number, résumé link, or any role-specific details you want displayed.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="mailto:?subject=Recruitment%20inquiry%20for%20Jason%20Alebord" className="inline-flex items-center justify-center gap-2 bg-ink px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-paper transition duration-300 hover:-translate-y-1 hover:bg-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal">Start email <Mail className="size-4" /></a>
              <a href="#top" className="inline-flex items-center justify-center gap-2 border border-ink/20 px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-ink transition duration-300 hover:-translate-y-1 hover:border-signal hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal">Back to top <ExternalLink className="size-4" /></a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
