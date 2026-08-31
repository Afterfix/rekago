import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Menu, Phone, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import logoAsset from "@/assets/rekago-logo.png";

/**
 * Shared chrome, primitives and constants for every page of the REKAGO site.
 * Each route file imports from here rather than redefining Header/Footer/etc,
 * so nav, brand styling and the page shell stay in exactly one place.
 */

export const phoneHref = "tel:+919961898269";
export const whatsappHref = "https://wa.me/919961898269";
export const directionsHref =
  "https://www.google.com/maps/search/?api=1&query=REKAGO+Car+Wash+Cafe+Alukaparab+Irumbuzhi+Malappuram+Kerala";
export const instagramHref = "https://instagram.com/rekago.irumbuzhi";

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.8 14.07c-.24.68-1.4 1.31-1.94 1.37-.5.06-1.13.08-1.82-.12-.42-.12-.96-.31-1.65-.6-2.9-1.25-4.8-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.13 1.01-2.42.27-.29.58-.36.78-.36l.55.01c.18 0 .41-.07.64.49.24.58.8 1.99.87 2.14.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.17 1.52 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.44.12.61-.07.16-.19.7-.81.88-1.09.19-.28.37-.23.61-.14.25.09 1.6.75 1.87.89.28.14.46.21.53.32.07.12.07.68-.16 1.35z" />
    </svg>
  );
}

/** Scroll-reveal: fades/slides content in the first time it enters the viewport. */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <img
      src={logoAsset}
      alt="REKAGO Car Wash & Cafe"
      className={`rounded-full object-cover shadow-md shadow-black/30 ${compact ? "h-10 w-10" : "h-11 w-11"}`}
    />
  );
}

export function ButtonLink({
  children,
  to,
  variant = "primary",
  href,
}: {
  children: ReactNode;
  to?: string;
  variant?: "primary" | "outline" | "light";
  href?: string;
}) {
  const className = `inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-xs font-semibold uppercase tracking-[0.13em] transition-all duration-300 active:scale-[0.98] ${variant === "primary" ? "bg-primary text-primary-foreground hover:bg-accent" : variant === "light" ? "bg-foreground text-background hover:bg-foreground/90" : "border border-foreground/20 bg-foreground/5 text-foreground backdrop-blur-sm hover:border-primary hover:bg-foreground/10"}`;
  if (href)
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  return (
    <Link to={to ?? "/"} className={className}>
      {children}
    </Link>
  );
}

/** Primary site navigation — every page routes here now instead of hash-anchoring into Home. */
const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Cafe & Gaming", to: "/cafe-gaming" },
  { label: "Gallery", to: "/gallery" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
        <Link to="/" aria-label="REKAGO home" className="flex shrink-0 items-center gap-2.5">
          <BrandMark />
          <span className="display-heading text-xl text-foreground sm:text-2xl">REKAGO</span>
        </Link>

        <nav
          className="hidden items-center gap-1 rounded-full border border-foreground/10 bg-card p-1.5 shadow-lg shadow-black/40 backdrop-blur-md xl:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="rounded-full px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-foreground/65 transition-colors hover:bg-foreground/10 hover:text-foreground"
              activeProps={{ className: "bg-foreground/10 text-foreground" }}
              activeOptions={{ exact: true }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={whatsappHref}
            className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-primary-foreground transition-colors hover:bg-accent"
          >
            Book Now
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="rounded-full border border-foreground/10 bg-card p-3 text-foreground shadow-lg shadow-black/40 backdrop-blur-md xl:hidden"
        >
          {menuOpen ? (
            <X className="size-4" aria-hidden="true" />
          ) : (
            <Menu className="size-4" aria-hidden="true" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-2xl border border-foreground/10 bg-card px-5 shadow-xl shadow-black/40 backdrop-blur-md xl:hidden"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <Link
                onClick={() => setMenuOpen(false)}
                key={link.label}
                to={link.to}
                className="block border-b border-foreground/10 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-foreground/70 last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={whatsappHref}
              onClick={() => setMenuOpen(false)}
              className="my-4 flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground"
            >
              Book Now <ArrowRight className="size-3.5" aria-hidden="true" />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-background py-12 pb-28 lg:pb-12">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 px-5 lg:flex-row lg:px-8">
        <div className="max-w-xs">
          <BrandMark compact />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Professional car wash.
            <br />
            Cafe. Gaming.
            <br />
            One place.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:grid-cols-3">
          <div>
            <h3 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
              Quick links
            </h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <Link className="block hover:text-foreground" to="/about">
                About Us
              </Link>
              <Link className="block hover:text-foreground" to="/services">
                Services
              </Link>
              <Link className="block hover:text-foreground" to="/cafe-gaming">
                Cafe & Gaming
              </Link>
              <Link className="block hover:text-foreground" to="/gallery">
                Gallery
              </Link>
              <Link className="block hover:text-foreground" to="/reviews">
                Reviews
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
              Contact
            </h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a className="block hover:text-foreground" href={phoneHref}>
                099618 98269
              </a>
              <a className="block hover:text-foreground" href={directionsHref}>
                Get directions
              </a>
              <a className="block hover:text-foreground" href={instagramHref}>
                Instagram
              </a>
              <Link className="block hover:text-foreground" to="/contact">
                Contact page
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
              Hours
            </h3>
            <p className="text-sm text-muted-foreground">
              Open until
              <br />
              7:00 PM
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-foreground/10 px-5 pt-6 text-[10px] uppercase tracking-[0.16em] text-foreground/35 lg:px-8">
        © 2026 REKAGO — Car Wash & Cafe. All rights reserved.
      </div>
    </footer>
  );
}

/** Persistent page chrome: motion config, header, main content slot, footer and the floating call/WhatsApp affordances. */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
        <div className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-2 gap-2 rounded-full border border-foreground/15 bg-background/90 p-1.5 shadow-2xl backdrop-blur-lg lg:hidden">
          <a
            href={phoneHref}
            className="flex min-h-11 items-center justify-center gap-2 rounded-full bg-foreground/10 text-[10px] font-semibold uppercase tracking-[0.14em]"
          >
            <Phone className="size-3.5" aria-hidden="true" />
            Call now
          </a>
          <a
            href={whatsappHref}
            className="flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary text-[10px] font-semibold uppercase tracking-[0.14em] text-primary-foreground"
          >
            <WhatsAppIcon className="size-3.5" aria-hidden="true" />
            WhatsApp
          </a>
        </div>
        <a
          href={phoneHref}
          aria-label="Call REKAGO"
          className="fixed bottom-6 right-6 z-40 hidden size-14 items-center justify-center rounded-full bg-white text-primary shadow-2xl shadow-black/40 transition-transform hover:scale-105 active:scale-95 lg:flex"
        >
          <span
            className="absolute inset-0 -z-10 animate-ping rounded-full bg-primary/60"
            aria-hidden="true"
          />
          <Phone className="size-5" aria-hidden="true" />
        </a>
      </div>
    </MotionConfig>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
  emphasis = "heading",
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
  align?: "left" | "center";
  /** "statement" keeps the full big-italic treatment for major brand moments;
   *  "heading" (default) is the toned-down Level-2 style so that treatment
   *  doesn't fire on every section — see the typography-hierarchy note in
   *  the brand report. */
  emphasis?: "heading" | "statement";
}) {
  return (
    <Reveal className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <div
        className={`mb-4 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary ${align === "center" ? "justify-center" : ""}`}
      >
        <span className="h-px w-8 bg-primary" aria-hidden="true" />
        {eyebrow}
      </div>
      <h2
        className={
          emphasis === "statement"
            ? "display-heading text-4xl leading-[0.95] text-foreground sm:text-5xl lg:text-6xl"
            : "display-heading-soft text-3xl leading-[1.05] text-foreground sm:text-4xl lg:text-5xl"
        }
      >
        {title}
      </h2>
      <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">{children}</p>
    </Reveal>
  );
}

/** Compact page-top intro band, used by every non-home page instead of a full hero image. */
export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-b border-foreground/10 pb-16 pt-36 sm:pt-40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} emphasis="statement">
          {children}
        </SectionHeading>
      </div>
    </section>
  );
}

/** Shared closing conversion banner, reused at the bottom of every page. */
export function FinalCta() {
  return (
    <section className="px-5 py-8 sm:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-xl bg-primary px-6 py-16 text-center sm:px-10 sm:py-20">
        <div className="relative z-10 mx-auto max-w-2xl">
          <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary-foreground/75">
            Ready when you are
          </div>
          <h2 className="display-heading text-5xl leading-[0.9] text-primary-foreground sm:text-7xl">
            Ready to Ride Out Fresh?
          </h2>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-primary-foreground/85">
            Bring your car to REKAGO and let us take care of the rest.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href={whatsappHref} variant="light">
              Book a wash <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href={whatsappHref} variant="outline">
              WhatsApp us
            </ButtonLink>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.16em] text-primary-foreground/70">
            <MapPin className="size-3.5" aria-hidden="true" />
            Irumbuzhi, Malappuram
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10">
          <span className="display-heading whitespace-nowrap text-[18vw] text-primary-foreground">
            REKAGO
          </span>
        </div>
      </div>
    </section>
  );
}
