/*
Design philosophy for this file: Executive cloud-identity command center. Preserve the uploaded page's dark Microsoft-cloud engineering tone while improving recruiter scan speed, credibility, and mobile readability. Use the corrected LinkedIn URL and hosted headshot asset throughout.
*/
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Cloud,
  FileDown,
  Linkedin,
  Lock,
  Mail,
  MapPin,
  Monitor,
  Phone,
  Server,
  Settings,
  Shield,
  ShieldCheck,
  Terminal,
  type LucideIcon,
} from "lucide-react";

const headshot = "/manus-storage/jason-headshot_bc28959f.png";
const cvDownload = "/manus-storage/JasonAlebord-ITCV_dda695e3.docx";
const linkedInUrl = "https://www.linkedin.com/in/jason-alebord-72ba68126";

const certifications = ["AZ-104", "AZ-500", "SC-300", "MS-102", "MS-700", "CCNA", "A+"];

const impactStats = [
  ["18", "Years Experience"],
  ["20+", "Domain Migrations Led"],
<<<<<<< Updated upstream
  ["10,200+", "Endpoints Under Management"],
=======
  ["120,000+", "Endpoints Under Management"],
>>>>>>> Stashed changes
  ["900+", "Inactive Agents Remediated"],
  ["8", "Compliance Frameworks"],
];

const competencies = [
  {
    icon: Lock,
    tone: "blue",
    title: "Identity & Access Engineering",
    copy: "Azure Entra ID · PIM · Conditional Access · Hybrid Identity Architecture · SSO & Federation · Identity Lifecycle Governance · Access Reviews · Entitlement Management",
  },
  {
    icon: Monitor,
    tone: "teal",
    title: "Endpoint Engineering & MDM",
    copy: "Intune · Autopilot · SCCM · Co-Management · Win32 App Deployment · Patch Compliance · Device Hardening · Endpoint Baselines",
  },
  {
    icon: Cloud,
    tone: "blue",
    title: "Cloud & Modern Workplace",
    copy: "Azure Infrastructure · M365 Administration · SharePoint & OneDrive · SaaS Integration · Zero Trust Alignment · Cloud Migration Planning · Azure VM Deployments",
  },
  {
    icon: ShieldCheck,
    tone: "amber",
    title: "Microsoft Security Stack",
    copy: "Defender for Endpoint · Defender for Identity · Defender for Office 365 · Microsoft Purview · Secure Score Optimization · Threat Analytics",
  },
  {
    icon: Server,
    tone: "teal",
    title: "Active Directory & Infrastructure",
    copy: "Active Directory Architecture · Domain Controller Hardening · Domain Health Remediation · Group Policy Modernization · Replication Troubleshooting · Fortinet · SonicWALL · Meraki",
  },
  {
    icon: Terminal,
    tone: "blue",
    title: "Automation & Scripting",
    copy: "PowerShell · Python · Bash · Microsoft Graph API · Log & Telemetry Analysis · RCA & Incident Leadership · Automated Identity & Endpoint Remediation",
  },
];

const compliance = ["CMMC", "PCI DSS", "NIST CSF", "ISO 27001", "SOX", "HIPAA", "GDPR", "NIS2"];

const impacts = [
  {
    icon: Settings,
    border: "border-l-electric",
    title: "Restored Enterprise Automation at Scale",
    copy: "Identified and remediated 900+ inactive agents across client servers and endpoints. Repaired broken Windows patching affecting 1,200+ computers, restoring compliance, OS stability, and security. Improved patch success rates by over 75% through custom scripting solutions.",
  },
  {
    icon: Cloud,
    border: "border-l-teal",
    title: "Led 20+ Domain Migrations to Azure Entra & Intune",
    copy: "Executed domain structure, firewall stability, and Group Policy cleanup across 20+ client environments. Achieved a 45% reduction in authentication errors while strengthening security posture across SSO and API integrations.",
  },
  {
    icon: Shield,
    border: "border-l-amber",
    title: "Security Expert — Forensics & Compliance",
    copy: "Assigned as the security expert for cyber threats and intrusion cases. Performed forensic analysis through Microsoft Purview, Microsoft Graph, Azure, and firewall logs, delivering reports to state, federal, and SEC-affiliated firms.",
  },
];

const roles = [
  "IT Manager",
  "Team Lead",
  "Cloud Operations Lead",
  "Infrastructure Lead",
  "Systems Engineer",
  "Sr. Cloud Engineer",
  "Identity & Access Engineer",
  "IT Director (Growth Path)",
  "T2 / T3 Entry Point Welcome",
];

const experience = [
  {
    company: "AC4S Technologies and Contract MSPs",
    role: "Cloud Identity and Endpoint Management Engineer | Tier 3 Technical Specialist and Project Lead",
    dates: "Jan 2025 – Feb 2026",
    copy: "Led identity modernization and endpoint transformation across client environments, remediated unhealthy domains and domain controllers, engineered Azure tenant transition paths, and served as senior escalation authority for authentication, identity, and device issues.",
  },
  {
    company: "Chadwell Supply",
    role: "IT Support Manager, Modern Workplace and Endpoint Operations",
    dates: "Jul 2021 – Nov 2024",
    copy: "Managed enterprise endpoint operations, identity-driven support, infrastructure, and M365 administration for a fast-growing organization of more than 3,200 employees while supporting a 99.7% SLA adherence rate through structured workflows and metrics.",
  },
  {
    company: "Jackson Hewitt National Headquarters",
    role: "Senior Technical Support Specialist, Identity and Application Services",
    dates: "2009 – 2021",
    copy: "Resolved high-tier identity, authentication, and proprietary application issues, authored more than 230 knowledge base articles, and trained more than 90 employees annually for advanced support and red-alert teams.",
  },
  {
    company: "SouthTech / Persistent Web Design",
    role: "Systems Support Specialist and Digital Technology Consultant",
    dates: "2015 – Present",
    copy: "Supported Azure, M365, on-premises systems, backup administration, tenant administration, cloud endpoint reliability, and responsive website design with ongoing hosting and digital content work.",
  },
];

function ToneIcon({ icon: Icon, tone }: { icon: LucideIcon; tone: string }) {
  const styles: Record<string, string> = {
    blue: "bg-electric/15 text-electric ring-electric/25",
    teal: "bg-teal/15 text-teal ring-teal/25",
    amber: "bg-amber/15 text-amber ring-amber/25",
  };
  return (
    <div className={`grid size-11 place-items-center rounded-2xl ring-1 ${styles[tone] ?? styles.blue}`}>
      <Icon className="size-5" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08101f] text-slate-100 selection:bg-electric/30 selection:text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.22),transparent_28%),radial-gradient(circle_at_78%_18%,rgba(20,184,166,0.18),transparent_30%),linear-gradient(180deg,#08101f_0%,#0f172a_55%,#08101f_100%)]" />
      <div className="fixed inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:48px_48px]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08101f]/78 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <a href="#top" className="flex items-center gap-3" aria-label="Jason Alebord profile home">
            <span className="grid size-10 place-items-center rounded-2xl border border-electric/40 bg-electric/10 text-sm font-black text-electric shadow-[0_0_24px_rgba(59,130,246,0.18)]">JA</span>
            <span className="hidden text-xs font-bold uppercase tracking-[0.22em] text-slate-300 sm:block">Cloud Identity Profile</span>
          </a>
          <nav className="hidden items-center gap-7 text-xs font-semibold text-slate-400 md:flex" aria-label="Profile navigation">
            <a className="transition hover:text-electric" href="#summary">Summary</a>
            <a className="transition hover:text-electric" href="#competencies">Competencies</a>
            <a className="transition hover:text-electric" href="#impact">Impact</a>
            <a className="transition hover:text-electric" href="#contact">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href={cvDownload} download className="hidden min-h-11 items-center gap-2 rounded-full border border-teal/40 bg-teal/15 px-4 py-2 text-sm font-bold text-teal transition hover:-translate-y-0.5 hover:bg-teal/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal sm:inline-flex">
              <FileDown className="size-4" /> CV
            </a>
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-electric/40 bg-electric/15 px-4 py-2 text-sm font-bold text-electric transition hover:-translate-y-0.5 hover:bg-electric/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric">
              <Linkedin className="size-4" /> LinkedIn
            </a>
          </div>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden px-5 py-16 sm:px-8 md:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <aside className="order-2 lg:order-1">
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-5 rounded-[2.5rem] bg-[conic-gradient(from_180deg,rgba(59,130,246,0.35),rgba(20,184,166,0.25),rgba(245,158,11,0.18),rgba(59,130,246,0.35))] blur-2xl" />
              <div className="relative rounded-[2rem] border border-white/12 bg-white/[0.045] p-5 shadow-2xl backdrop-blur-xl">
                <img src={headshot} alt="Headshot of Jason Alebord" className="mx-auto aspect-square w-56 rounded-full border border-white/15 object-cover shadow-[0_0_48px_rgba(59,130,246,0.18)] sm:w-64" />
                <div className="mt-6 space-y-4 text-center">
                  <div className="inline-flex items-center gap-2 rounded-full border border-amber/40 bg-amber/10 px-4 py-2 text-sm font-semibold text-amber">
                    <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.9)]" /> Available Now — Actively Interviewing
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-left">
                    <div className="rounded-2xl border border-white/10 bg-slate-950/35 p-4">
                      <p className="text-2xl font-black text-white">18</p>
                      <p className="text-xs text-slate-400">Years in IT</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-950/35 p-4">
                      <p className="text-2xl font-black text-white">20+</p>
                      <p className="text-xs text-slate-400">Migrations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="order-1 text-center lg:order-2 lg:text-left">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-electric">Jason Alebord</p>
            <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">Cloud Identity & Endpoint Management Engineer</h1>
            <p className="mt-6 max-w-3xl text-xl font-medium leading-8 text-slate-300">IT Manager & Operations Leader based in St. Petersburg, FL, with eighteen years delivering enterprise infrastructure, identity governance, and cloud modernization.</p>
            <div className="mt-7 flex flex-wrap justify-center gap-4 text-sm text-slate-300 lg:justify-start">
              <span className="inline-flex items-center gap-2"><MapPin className="size-4 text-electric" /> St. Petersburg, FL</span>
              <span className="inline-flex items-center gap-2"><Monitor className="size-4 text-electric" /> On-site · Hybrid · Remote US</span>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a href="tel:9417350731" className="profile-pill border-teal/40 bg-teal/15 text-teal hover:bg-teal/25"><Phone className="size-4" /> 941-735-0731</a>
              <a href="mailto:jason.alebord@outlook.com" className="profile-pill border-electric/40 bg-electric/15 text-electric hover:bg-electric/25"><Mail className="size-4" /> jason.alebord@outlook.com</a>
              <a href={cvDownload} download className="profile-pill border-teal/40 bg-teal/15 text-teal hover:bg-teal/25"><FileDown className="size-4" /> Download CV</a>
              <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="profile-pill border-electric/40 bg-electric/15 text-electric hover:bg-electric/25"><Linkedin className="size-4" /> LinkedIn</a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-2.5 lg:justify-start">
              {certifications.map((cert) => (
                <span key={cert} className="rounded-xl border border-electric/45 bg-slate-800/80 px-4 py-2 text-xs font-black tracking-[0.16em] text-white shadow-[0_0_14px_rgba(59,130,246,0.15)]">{cert}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[linear-gradient(135deg,rgba(20,184,166,0.08),rgba(59,130,246,0.08))] px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-5">
          {impactStats.map(([value, label]) => (
            <div key={label} className="bg-[#0b1424]/90 p-6 text-center">
              <p className="text-4xl font-black text-white md:text-5xl">{value}</p>
              <p className="mt-2 text-sm font-medium text-slate-400">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="summary" className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <p className="section-label text-teal">Professional Summary</p>
          <div className="mt-10 rounded-[2rem] border border-white/10 bg-slate-800/70 p-6 shadow-2xl md:p-10">
            <p className="text-lg leading-8 text-slate-300">Cloud Identity and Endpoint Management Engineer with eighteen years of experience modernizing enterprise environments, strengthening identity governance, and leading high-impact technical operations.</p>
            <p className="mt-5 text-lg leading-8 text-slate-300">Skilled in Azure Entra ID, Intune, SCCM, Conditional Access, device compliance, Autopilot, hybrid identity, and Microsoft’s security stack. Known for transforming support organizations, remediating unhealthy domains, engineering clean migration paths, and elevating team performance through structured leadership and technical depth.</p>
            <p className="mt-5 text-lg leading-8 text-slate-300">Recognized as a senior escalation authority, modernization catalyst, and trusted engineer for complex identity, endpoint, and security challenges across SMB, MSP, and enterprise environments.</p>
            <p className="mt-6 border-l-4 border-electric pl-5 text-lg font-semibold italic leading-8 text-electric">Leadership is not a career aspiration separate from engineering — it is how I have always worked.</p>
          </div>
        </div>
      </section>

      <section id="experience" className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="section-label text-electric">CV-Backed Experience</p>
          <div className="mt-10 grid gap-5">
            {experience.map((item) => (
              <article key={item.company} className="rounded-[1.6rem] border border-white/10 bg-slate-800/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-electric/35 md:grid md:grid-cols-[0.72fr_1.28fr] md:gap-8">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-electric/25 bg-electric/10 px-3 py-1.5 text-xs font-bold text-electric">
                    <Building2 className="size-3.5" /> {item.dates}
                  </div>
                  <h3 className="mt-4 text-2xl font-black tracking-[-0.035em] text-white">{item.company}</h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-teal">{item.role}</p>
                </div>
                <p className="mt-5 text-base leading-7 text-slate-300 md:mt-0">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="competencies" className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="section-label text-teal">Core Competencies</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {competencies.map((item) => (
              <article key={item.title} className="group rounded-[1.6rem] border border-white/10 bg-slate-800/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-electric/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.12)]">
                <ToneIcon icon={item.icon} tone={item.tone} />
                <h3 className="mt-5 text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-amber/10 bg-[linear-gradient(135deg,rgba(245,158,11,0.06),rgba(59,130,246,0.05))] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <p className="section-label text-amber">Compliance Frameworks Delivered</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {compliance.map((item) => (
              <span key={item} className="rounded-xl border border-amber/45 bg-slate-800/80 px-5 py-2.5 text-sm font-black tracking-[0.12em] text-amber shadow-[0_0_14px_rgba(245,158,11,0.12)]">{item}</span>
            ))}
          </div>
          <p className="mt-8 text-sm leading-6 text-slate-400">Delivered across SMB, MSP, healthcare, financial services, government, and enterprise environments.</p>
        </div>
      </section>

      <section id="impact" className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="section-label text-teal">Featured Impact</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {impacts.map((item) => (
              <article key={item.title} className={`rounded-[1.6rem] border border-white/10 border-l-4 ${item.border} bg-slate-800/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20`}>
                <ToneIcon icon={item.icon} tone={item.border.includes("teal") ? "teal" : item.border.includes("amber") ? "amber" : "blue"} />
                <h3 className="mt-5 text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <p className="section-label text-teal">Open to Opportunities</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {roles.map((role) => (
              <span key={role} className={`rounded-full border px-5 py-2.5 text-sm font-semibold ${role.includes("T2") ? "border-teal/40 bg-teal/15 text-teal" : "border-electric/40 bg-electric/15 text-white"}`}>{role}</span>
            ))}
          </div>
          <p className="mt-8 text-sm text-slate-400">Available for on-site, hybrid, or remote US positions. Open to contract or direct hire.</p>
        </div>
      </section>

      <section id="contact" className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-electric/30 bg-[linear-gradient(135deg,rgba(59,130,246,0.16),rgba(20,184,166,0.13))] p-8 text-center shadow-[0_0_80px_rgba(59,130,246,0.09)] md:p-12">
          <div className="mx-auto grid size-16 place-items-center rounded-3xl border border-white/10 bg-white/10 text-electric">
            <BriefcaseBusiness className="size-7" />
          </div>
          <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] text-white">Let’s Connect</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">I’m actively interviewing and available for a conversation this week.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="tel:9417350731" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-teal px-7 py-3 text-base font-black text-white transition hover:-translate-y-1 hover:bg-teal/90 sm:w-auto"><Phone className="size-5" /> Call or Text: 941-735-0731</a>
            <a href="mailto:jason.alebord@outlook.com" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-electric px-7 py-3 text-base font-black text-white transition hover:-translate-y-1 hover:bg-electric/90 sm:w-auto"><Mail className="size-5" /> Email Jason</a>
            <a href={cvDownload} download className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-7 py-3 text-base font-black text-white transition hover:-translate-y-1 hover:bg-white/15 sm:w-auto"><FileDown className="size-5" /> Download CV</a>
          </div>
          <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-electric"><Linkedin className="size-4" /> Connect on LinkedIn — linkedin.com/in/jason-alebord-72ba68126 <ArrowUpRight className="size-4" /></a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-center sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm text-slate-500">Jason Alebord · St. Petersburg, FL · Cloud Identity & Endpoint Management Engineer</p>
          <p className="mt-1 text-xs text-slate-600">© 2026 — Profile shared for professional networking purposes.</p>
        </div>
      </footer>
    </main>
  );
}
