import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronDown,
  Clock3,
  Coffee,
  Gamepad2,
  MapPin,
  Menu,
  Phone,
  Star,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import heroImage from "../assets/rekago-hero.jpg";
import interior from "../assets/rekago-interior.png";
import logoAsset from "../assets/rekago-logo.png";
import cafeImage from "../assets/rekago-cafe.jpg";
import cafeImage2 from "../assets/cafeteria-2.png";
import rekagoimg from "../assets/rekago2.png";
import carwash from "../assets/carwash.png";
import carwash2 from "../assets/carwash-2.png";
import gamingImage from "../assets/rekago-gaming.jpg";
import foamImage from "../assets/rekago-foam.jpg";
import detailImage from "../assets/rekago-detail.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "REKAGO Car Wash & Cafe | Car Wash in Irumbuzhi" },
      {
        name: "description",
        content:
          "REKAGO Car Wash & Cafe in Irumbuzhi, Malappuram offers professional car wash services, a cafe and gaming experience.",
      },
      { property: "og:title", content: "REKAGO Car Wash & Cafe | Car Wash in Irumbuzhi" },
      {
        property: "og:description",
        content:
          "Your car gets clean. You get to chill. Professional car care, cafe comfort and gaming in Irumbuzhi.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const phoneHref = "tel:+919961898269";
const whatsappHref = "https://wa.me/919961898269";
const directionsHref =
  "https://www.google.com/maps/search/?api=1&query=REKAGO+Car+Wash+Cafe+Alukaparab+Irumbuzhi+Malappuram+Kerala";

function InstagramIcon({ className }: { className?: string }) {
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

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.8 14.07c-.24.68-1.4 1.31-1.94 1.37-.5.06-1.13.08-1.82-.12-.42-.12-.96-.31-1.65-.6-2.9-1.25-4.8-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.13 1.01-2.42.27-.29.58-.36.78-.36l.55.01c.18 0 .41-.07.64.49.24.58.8 1.99.87 2.14.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.17 1.52 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.44.12.61-.07.16-.19.7-.81.88-1.09.19-.28.37-.23.61-.14.25.09 1.6.75 1.87.89.28.14.46.21.53.32.07.12.07.68-.16 1.35z" />
    </svg>
  );
}

/** Scroll-reveal: fades/slides content in the first time it enters the viewport. */
function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
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

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <img
      src={logoAsset}
      alt="REKAGO Car Wash & Cafe"
      className={`rounded-full object-cover shadow-md shadow-black/30 ${compact ? "h-10 w-10" : "h-11 w-11"}`}
    />
  );
}

function ButtonLink({
  children,
  to,
  variant = "primary",
  href,
}: {
  children: React.ReactNode;
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

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { label: "Home", to: "/", hash: undefined },
    { label: "About Us", to: "/", hash: "why-rekago" },
    { label: "Services", to: "/", hash: "services" },
    { label: "Cafe & Gaming", to: "/", hash: "cafe-gaming" },
    { label: "Gallery", to: "/", hash: "gallery" },
    { label: "Reviews", to: "/", hash: "reviews" },
    { label: "Contact", to: "/", hash: "contact" },
  ];
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
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              hash={link.hash}
              className="rounded-full px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-foreground/65 transition-colors hover:bg-foreground/10 hover:text-foreground"
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
            {links.map((link) => (
              <Link
                onClick={() => setMenuOpen(false)}
                key={link.label}
                to={link.to}
                hash={link.hash}
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

function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
  emphasis = "heading",
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
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

/**
 * Shared "which photo is focused" state for the gallery carousels: cycles on
 * a timer (paused on hover/focus, skipped under prefers-reduced-motion),
 * exposes go(±1) for prev/next and drag, and setActive for direct selection.
 */
function useGalleryFocus(count: number) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const id = setInterval(() => setActive((a) => (a + 1) % count), 3400);
    return () => clearInterval(id);
  }, [paused, count]);

  const go = (dir: number) => setActive((a) => (a + dir + count) % count);
  const pauseHandlers = {
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    onFocus: () => setPaused(true),
    onBlur: () => setPaused(false),
  };

  return { active, setActive, go, pauseHandlers };
}

/** Prev/next buttons + dot indicators, shared by both gallery carousels. */
function GalleryControls({
  images,
  active,
  onSelect,
  onPrev,
  onNext,
}: {
  images: { src: string; alt: string }[];
  active: number;
  onSelect: (i: number) => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="mt-8 flex items-center justify-center gap-4">
      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous photo"
        className="rounded-full border border-foreground/15 p-2.5 text-foreground/70 transition-colors hover:border-primary hover:text-primary"
      >
        <ArrowRight className="size-4 rotate-180" aria-hidden="true" />
      </button>
      <div className="flex items-center gap-2">
        {images.map((image, i) => (
          <button
            key={image.src}
            type="button"
            onClick={() => onSelect(i)}
            aria-label={`Show photo ${i + 1} of ${images.length}`}
            aria-current={i === active}
            className={`h-1.5 rounded-full transition-all ${i === active ? "w-6 bg-primary" : "w-1.5 bg-foreground/25 hover:bg-foreground/40"}`}
          />
        ))}
      </div>
      <button
        type="button"
        onClick={onNext}
        aria-label="Next photo"
        className="rounded-full border border-foreground/15 p-2.5 text-foreground/70 transition-colors hover:border-primary hover:text-primary"
      >
        <ArrowRight className="size-4" aria-hidden="true" />
      </button>
    </div>
  );
}

/**
 * Fanned photo stack (small/mobile screens): one photo in sharp focus up
 * front, the rest fanned out and progressively blurred behind it. Focus
 * shifts by clicking any card, dragging/swiping the front card, the
 * prev/next controls, or the shared auto-rotate timer.
 */
function GalleryStack({ images }: { images: { src: string; alt: string }[] }) {
  const count = images.length;
  const { active, setActive, go, pauseHandlers } = useGalleryFocus(count);

  return (
    <div className="mt-14 lg:hidden" {...pauseHandlers}>
      <div
        role="group"
        aria-label="REKAGO photo gallery"
        className="relative mx-auto h-[300px] w-full max-w-sm sm:h-[380px]"
      >
        {images.map((image, i) => {
          let offset = i - active;
          if (offset > count / 2) offset -= count;
          if (offset < -count / 2) offset += count;
          const distance = Math.abs(offset);
          const isActive = offset === 0;
          return (
            <motion.button
              key={image.src}
              type="button"
              aria-label={isActive ? undefined : `Show photo: ${image.alt}`}
              aria-current={isActive}
              onClick={() => setActive(i)}
              className="absolute inset-0 m-auto h-full w-[76%] overflow-hidden rounded-2xl shadow-2xl shadow-black/40"
              style={{ zIndex: count - distance }}
              animate={{
                x: offset * 44,
                y: distance * 16,
                rotate: offset * 7,
                scale: 1 - distance * 0.09,
                opacity: distance > 2 ? 0 : 1,
                filter: isActive
                  ? "blur(0px) saturate(1)"
                  : `blur(${Math.min(distance * 2.5, 6)}px) saturate(${Math.max(1 - distance * 0.2, 0.5)})`,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              drag={isActive ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.5}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) go(1);
                else if (info.offset.x > 60) go(-1);
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover"
                draggable={false}
              />
            </motion.button>
          );
        })}
      </div>
      <GalleryControls
        images={images}
        active={active}
        onSelect={setActive}
        onPrev={() => go(-1)}
        onNext={() => go(1)}
      />
    </div>
  );
}

/**
 * Coverflow (desktop/large screens): the focused photo sits large and sharp
 * at center; the rest fan out sideways in 3D — tilted, scaled down and
 * dimmed with distance. Same focus controls as the mobile stack.
 */
function GalleryCoverflow({ images }: { images: { src: string; alt: string }[] }) {
  const count = images.length;
  const { active, setActive, go, pauseHandlers } = useGalleryFocus(count);

  return (
    <div className="mt-14 hidden lg:block" {...pauseHandlers}>
      <div
        role="group"
        aria-label="REKAGO photo gallery"
        className="relative mx-auto h-[420px] w-full max-w-4xl"
        style={{ perspective: "1400px" }}
      >
        {images.map((image, i) => {
          let offset = i - active;
          if (offset > count / 2) offset -= count;
          if (offset < -count / 2) offset += count;
          const distance = Math.abs(offset);
          const isActive = offset === 0;
          return (
            <motion.button
              key={image.src}
              type="button"
              aria-label={isActive ? undefined : `Show photo: ${image.alt}`}
              aria-current={isActive}
              onClick={() => setActive(i)}
              className="absolute left-1/2 top-1/2 -ml-[150px] -mt-[190px] h-[380px] w-[300px] overflow-hidden rounded-2xl shadow-2xl shadow-black/50"
              style={{ zIndex: count - distance }}
              animate={{
                x: offset * 190,
                rotateY: offset * -32,
                scale: isActive ? 1 : 0.8,
                opacity: distance > 2 ? 0 : 1,
                filter: isActive ? "brightness(1) saturate(1)" : "brightness(0.55) saturate(0.75)",
              }}
              transition={{ type: "spring", stiffness: 240, damping: 28 }}
              drag={isActive ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.5}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) go(1);
                else if (info.offset.x > 60) go(-1);
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover"
                draggable={false}
              />
            </motion.button>
          );
        })}
      </div>
      <GalleryControls
        images={images}
        active={active}
        onSelect={setActive}
        onPrev={() => go(-1)}
        onNext={() => go(1)}
      />
    </div>
  );
}

type Review = { name: string; meta: string; time: string; text: string; avatar?: string };

/** Colored initial-letter avatar, used whenever a reviewer has no profile photo. */
function ReviewAvatar({
  name,
  avatar,
  className,
}: {
  name: string;
  avatar?: string;
  className?: string;
}) {
  if (avatar) {
    return <img src={avatar} alt="" className={`object-cover ${className}`} />;
  }
  return (
    <div
      className={`grid place-items-center bg-primary font-display text-lg text-primary-foreground ${className}`}
      aria-hidden="true"
    >
      {name.charAt(0).toUpperCase()}
    </div>
  );
}

function HomePage() {
  const quickActions = [
    {
      word: "Wash.",
      label: "Car Wash",
      text: "Professional cleaning services for a spotless, showroom finish.",
      icon: <Sparkles className="size-6" aria-hidden="true" />,
      to: "/",
      hash: "services",
    },
    {
      word: "Chill.",
      label: "Cafe",
      text: "Relax with refreshments while your car is meticulously cleaned.",
      icon: <Coffee className="size-6" aria-hidden="true" />,
      to: "/",
      hash: "cafe-gaming",
    },
    {
      word: "Play.",
      label: "Gaming",
      text: "Challenge your friends or unwind with our gaming lounge.",
      icon: <Gamepad2 className="size-6" aria-hidden="true" />,
      to: "/",
      hash: "cafe-gaming",
    },
  ];
  const galleryImages = [
    { src: rekagoimg, alt: "REKAGO" },
    { src: cafeImage2, alt: "REKAGO cafe interior" },
    { src: foamImage, alt: "Car covered in white wash foam" },
    { src: heroImage, alt: "REKAGO car wash bay" },
    { src: carwash, alt: "Car being washed at REKAGO" },
    { src: interior, alt: "REKAGO car wash interior" },
    { src: detailImage, alt: "Detailing the interior of a car at REKAGO" },
    { src: carwash2, alt: "Car being washed at REKAGO" },



  ];
  const reviews: Review[] = [
    {
      name: "Heh Huhe",
      meta: "1 review",
      time: "5 months ago",
      text: "Very satisfied with the service here. The team is hardworking and they cleaned every part of the car perfectly.",
    },
    {
      name: "Pta Salam",
      meta: "1 review",
      time: "5 months ago",
      text: "Excellent washing service! The staff were very professional and friendly.",
    },
    {
      name: "Mirshad Pt",
      meta: "1 review",
      time: "5 months ago",
      text: "Excellent service and best customer service.",
    },
  ];
  const services = [
    {
      title: "Exterior Wash",
      text: "Remove dirt, dust and road grime for a clean exterior finish.",
      image: foamImage,
    },
    {
      title: "Full Car Cleaning",
      text: "Give your vehicle a complete clean inside and out.",
      image: detailImage,
    },
    {
      title: "Interior Detailing",
      text: "A more detailed cleaning experience for an extra level of care.",
      image: interior,
    },
    {
      title: "Custom Service",
      text: "Looking for something specific? Talk to our team about your vehicle’s needs.",
      image: cafeImage,
    },
  ];
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="overflow-x-hidden">
          <section className="relative flex min-h-[640px] items-end overflow-hidden pb-28 pt-16 sm:min-h-[720px] lg:min-h-[85vh]">
            <img
              src={heroImage}
              alt="Black sedan covered in foam inside the REKAGO wash bay"
              width={1920}
              height={1080}
              fetchPriority="high"
              className="hero-zoom absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/15" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20" />
            <div className="relative z-10 mx-auto w-full max-w-7xl px-5 lg:px-8">
              <div className="max-w-2xl animate-fade-in">
                <div className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
                  <span className="h-px w-10 bg-primary" />
                  REKAGO Car Wash & Cafe
                </div>
                <h1 className="display-heading max-w-2xl text-[3.3rem] leading-[0.88] text-foreground sm:text-7xl lg:text-[6.7rem]">
                  Your Car Gets Clean.
                  <br />
                  <span className="text-primary">You Get to Chill.</span>
                </h1>
                <p className="mt-7 max-w-lg text-base leading-relaxed text-foreground/70 sm:text-lg">
                  Professional car wash services, a comfortable cafe and gaming experience — all in
                  one place at Irumbuzhi, Malappuram.
                </p>
                <div className="mt-5 flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                  <span>Wash</span>
                  <span className="text-foreground/25" aria-hidden="true">
                    •
                  </span>
                  <span>Chill</span>
                  <span className="text-foreground/25" aria-hidden="true">
                    •
                  </span>
                  <span>Play</span>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink href={whatsappHref}>
                    Book a wash <ArrowRight className="size-4" aria-hidden="true" />
                  </ButtonLink>
                  <ButtonLink href={directionsHref} variant="outline">
                    Get directions <MapPin className="size-4" aria-hidden="true" />
                  </ButtonLink>
                </div>
                <div className="mt-9 flex items-center gap-5">
                  <div>
                    <div className="flex items-center gap-1 text-gold">
                      <Star className="size-4 fill-current" aria-hidden="true" />
                      <span className="text-lg font-semibold">5.0</span>
                    </div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.16em] text-foreground/45">
                      Google Rating
                    </div>
                  </div>
                  <div className="h-9 w-px bg-foreground/20" />
                  <div>
                    <div className="flex items-center gap-2 text-sm font-semibold uppercase">
                      <Clock3 className="size-4 text-primary" aria-hidden="true" />
                      7:00 AM - 7:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="relative z-20 -mt-10 pb-20 sm:-mt-16">
            <Reveal className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-xl border border-foreground/10 bg-foreground/10 px-5 lg:grid-cols-3 lg:px-8">
              {quickActions.map((action, index) => (
                <Link
                  key={action.label}
                  to={action.to}
                  hash={action.hash}
                  className="group bg-card p-7 transition-colors hover:bg-surface-muted sm:p-9"
                >
                  <div className="mb-8 flex items-start justify-between">
                    <span className="text-primary">{action.icon}</span>
                    <span className="font-display text-3xl italic text-foreground/15">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                    {action.label}
                  </div>
                  <h3 className="display-heading mt-1 text-3xl text-foreground">{action.word}</h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                    {action.text}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary transition-transform group-hover:translate-x-2">
                    Explore {action.label} <ArrowRight className="size-3.5" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </Reveal>
          </section>
          <section
            id="why-rekago"
            className="section-light border-t border-foreground/10 bg-background py-24 sm:py-32"
          >
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
              <SectionHeading eyebrow="The REKAGO difference" title="More Than Just a Car Wash.">
                At REKAGO, we make car care more enjoyable. Get your vehicle professionally cleaned
                while you relax, grab a refreshment or enjoy some gaming.
              </SectionHeading>
              <Reveal
                className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4"
                delay={0.1}
              >
                {[
                  {
                    icon: <Sparkles aria-hidden="true" />,
                    title: "Professional Service",
                    text: "Careful cleaning with attention to every part of your vehicle.",
                  },
                  {
                    icon: <Coffee aria-hidden="true" />,
                    title: "Comfortable Cafe",
                    text: "Sit back, relax and enjoy refreshments while you wait.",
                  },
                  {
                    icon: <Gamepad2 aria-hidden="true" />,
                    title: "Gaming Experience",
                    text: "Turn waiting time into entertainment with our gaming facility.",
                  },
                  {
                    icon: <Star aria-hidden="true" />,
                    title: "Customer First",
                    text: "Friendly service and a welcoming experience from start to finish.",
                  },
                ].map((item, i) => (
                  <div key={item.title} className="group border-t border-foreground/15 pt-5">
                    <div className="mb-8 flex items-center justify-between">
                      <span className="text-primary transition-transform group-hover:scale-110">
                        {item.icon}
                      </span>
                      <span className="font-display text-4xl italic text-foreground/15">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="display-heading text-2xl text-foreground">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                ))}
              </Reveal>
            </div>
          </section>
          <section id="services" className="bg-card py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
              <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
                <SectionHeading eyebrow="01 · Wash" title="Give Your Car the REKAGO Treatment.">
                  Keep your vehicle looking fresh with professional car wash services designed
                  around quality, care and convenience.
                </SectionHeading>
                <Link
                  to="/"
                  hash="services"
                  className="inline-flex shrink-0 items-center gap-2 border-b border-primary pb-2 text-xs font-semibold uppercase tracking-[0.15em] text-foreground transition-colors hover:text-primary"
                >
                  View all services <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
              <Reveal
                className="mt-16 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4"
                delay={0.1}
              >
                {services.map((service, i) => (
                  <Link to="/" hash="services" key={service.title} className="group">
                    <div className="relative aspect-[3/2] overflow-hidden rounded-xl bg-background">
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        width={1200}
                        height={800}
                        className="image-hover h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/55 to-transparent" />
                      <span className="absolute bottom-4 left-4 font-display text-4xl italic text-foreground/85">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="display-heading mt-5 text-2xl text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {service.text}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-primary">
                      Learn more{" "}
                      <ArrowRight
                        className="size-3.5 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                ))}
              </Reveal>
            </div>
          </section>
          <section
            id="cafe-gaming"
            className="border-y border-foreground/10 bg-background py-24 sm:py-32"
          >
            <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20 lg:px-8">
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden rounded-xl">
                  <img
                    src={cafeImage}
                    alt="Guests relaxing in the REKAGO cafe beside the wash bay"
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="image-hover h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-7 -right-3 hidden max-w-[210px] rounded-xl bg-primary p-6 sm:block">
                  <div className="display-heading text-3xl text-primary-foreground">
                    While We Wash, You Chill.
                  </div>
                  <div className="mt-5 h-1 w-9 bg-primary-foreground" />
                </div>
              </div>
              <div>
                <SectionHeading
                  eyebrow="02 · Chill & Play"
                  title="While We Wash, You Chill."
                  emphasis="statement"
                >
                  Why wait around while your car is being cleaned? Grab a drink, relax in our cafe
                  or challenge your friends in our gaming area.
                </SectionHeading>
                <div className="mt-6 flex flex-wrap items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  <span>Coffee</span>
                  <span className="text-foreground/25" aria-hidden="true">
                    •
                  </span>
                  <span>Gaming</span>
                  <span className="text-foreground/25" aria-hidden="true">
                    •
                  </span>
                  <span>Friends</span>
                </div>
                <Reveal className="mt-10 space-y-8" delay={0.1}>
                  {[
                    {
                      icon: <Coffee aria-hidden="true" />,
                      title: "Comfortable Cafe",
                      text: "Fresh refreshments and a premium space to relax while we take care of your car.",
                    },
                    {
                      icon: <Gamepad2 aria-hidden="true" />,
                      title: "Gaming Lounge",
                      text: "Turn waiting time into play time with friends in our energetic gaming zone.",
                    },
                    {
                      icon: <Sparkles aria-hidden="true" />,
                      title: "Premium Vibes",
                      text: "A modern automotive lifestyle atmosphere designed to make your visit feel different.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-5">
                      <div className="grid size-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/25">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="display-heading text-xl text-foreground">{item.title}</h3>
                        <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </Reveal>
                <Link
                  to="/"
                  hash="cafe-gaming"
                  className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-background transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Explore cafe & gaming <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>
          <section className="bg-primary py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
              <Reveal className="mx-auto max-w-2xl text-center">
                <div className="mb-4 flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary-foreground/80">
                  <span className="h-px w-8 bg-primary-foreground" aria-hidden="true" />
                  The REKAGO way
                </div>
                <h2 className="display-heading text-4xl leading-[0.95] text-primary-foreground sm:text-5xl lg:text-6xl">
                  Wash. Chill. Play.
                </h2>
                <p className="mt-5 max-w-xl mx-auto text-base leading-relaxed text-primary-foreground/80">
                  Drive in, hand over the keys and make the most of your time at REKAGO.
                </p>
              </Reveal>
              <Reveal className="mt-16 grid gap-10 md:grid-cols-3" delay={0.1}>
                {[
                  {
                    word: "Wash.",
                    title: "Professional Car Care",
                    text: "Bring your vehicle in — our team takes it from there.",
                  },
                  {
                    word: "Chill.",
                    title: "Cafe & Refreshments",
                    text: "Relax with a drink while your car gets the REKAGO treatment.",
                  },
                  {
                    word: "Play.",
                    title: "Gaming & Good Times",
                    text: "Challenge a friend, then drive away fresh and ready.",
                  },
                ].map((step, index) => (
                  <div
                    key={step.word}
                    className="relative border-t border-primary-foreground/25 pt-6"
                  >
                    <span className="display-heading text-5xl text-primary-foreground sm:text-6xl">
                      {step.word}
                    </span>
                    <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-primary-foreground/90">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-primary-foreground/75">
                      {step.text}
                    </p>
                    {index < 2 && (
                      <ArrowRight
                        className="absolute right-4 top-8 hidden size-5 text-primary-foreground/50 md:block"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                ))}
              </Reveal>
            </div>
          </section>
          <section id="gallery" className="bg-card py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
              <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
                <SectionHeading eyebrow="Curated moments" title="The REKAGO Experience.">
                  Cars, clean finishes, good vibes and everything in between.
                </SectionHeading>
                <Link
                  to="/"
                  hash="gallery"
                  className="inline-flex shrink-0 items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary"
                >
                  View gallery <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
              <GalleryStack images={galleryImages} />
              <GalleryCoverflow images={galleryImages} />
              <a
                href="https://instagram.com/rekago.irumbuzhi"
                className="mt-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-foreground/70 transition-colors hover:text-primary"
              >
                <InstagramIcon className="size-4" aria-hidden="true" />
                Follow @rekago.irumbuzhi
              </a>
            </div>
          </section>
          <section
            id="reviews"
            className="section-light border-t border-foreground/10 bg-background py-24 sm:py-32"
          >
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
              <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
                <SectionHeading eyebrow="Google reviews" title="Loved by Our Customers.">
                  A few words from the people who have experienced REKAGO.
                </SectionHeading>
                <div className="flex items-center gap-4">
                  <div className="display-heading text-6xl text-foreground">5.0</div>
                  <div>
                    <div className="flex text-gold" aria-label="5 out of 5 stars" role="img">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="size-4 fill-current" aria-hidden="true" />
                      ))}
                    </div>
                    <div className="mt-2 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                      Based on Google Reviews
                    </div>
                  </div>
                </div>
              </div>
              <Reveal
                className="-mx-5 mt-14 flex gap-5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0"
                delay={0.1}
              >
                {reviews.map((review) => (
                  <blockquote
                    key={review.name}
                    className="w-[280px] shrink-0 rounded-2xl bg-card p-7 sm:w-[320px]"
                  >
                    <div className="flex items-center gap-3">
                      <ReviewAvatar
                        name={review.name}
                        avatar={review.avatar}
                        className="size-11 shrink-0 rounded-full"
                      />
                      <div className="min-w-0">
                        <div className="truncate text-sm font-semibold text-card-foreground">
                          {review.name}
                        </div>
                        <div className="truncate text-[11px] text-card-foreground/55">
                          {review.meta} · {review.time}
                        </div>
                      </div>
                    </div>
                    <div
                      className="mt-5 flex gap-0.5 text-gold"
                      aria-label="5 out of 5 stars"
                      role="img"
                    >
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className="size-3.5 fill-current"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-card-foreground/85">
                      {review.text}
                    </p>
                  </blockquote>
                ))}
              </Reveal>
            </div>
          </section>
          <section id="contact" className="bg-card py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl overflow-hidden rounded-xl border border-foreground/10 bg-background lg:grid-cols-2">
              <div className="p-8 sm:p-12 lg:p-16">
                <SectionHeading eyebrow="Visit us" title="Find REKAGO.">
                  Come for the clean finish. Stay for the good vibes.
                </SectionHeading>
                <div className="mt-10 space-y-6">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Location
                    </div>
                    <div className="mt-2 text-base leading-relaxed">
                      REKAGO — Car Wash & Cafe
                      <br />
                      Alukaparab, Irumbuzhi
                      <br />
                      Malappuram, Kerala – 676509
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Contact
                    </div>
                    <a href={phoneHref} className="mt-2 inline-block text-base hover:text-primary">
                      099618 98269
                    </a>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Hours
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-base">
                      <Clock3 className="size-4 text-primary" aria-hidden="true" />
                      Open until 7:00 PM
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex flex-wrap gap-3">
                  <ButtonLink href={directionsHref}>
                    Get directions <MapPin className="size-4" aria-hidden="true" />
                  </ButtonLink>
                  <ButtonLink href={phoneHref} variant="outline">
                    Call now <Phone className="size-4" aria-hidden="true" />
                  </ButtonLink>
                  <ButtonLink href={whatsappHref} variant="outline">
                    WhatsApp
                  </ButtonLink>
                </div>
              </div>
              <div className="relative min-h-[360px] bg-surface-muted">
                <iframe
                  title="REKAGO location map"
                  src="https://www.google.com/maps?q=REKAGO%20Car%20Wash%20Cafe%20Alukaparab%20Irumbuzhi%20Malappuram%20Kerala&output=embed"
                  className="absolute inset-0 h-full w-full grayscale-[0.8] contrast-125 opacity-80"
                  loading="lazy"
                />
              </div>
            </div>
          </section>
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
        </main>
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

function Footer() {
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
              <Link className="block hover:text-foreground" to="/" hash="services">
                Services
              </Link>
              <Link className="block hover:text-foreground" to="/" hash="cafe-gaming">
                Cafe & Gaming
              </Link>
              <Link className="block hover:text-foreground" to="/" hash="gallery">
                Gallery
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
              <a
                className="block hover:text-foreground"
                href="https://instagram.com/rekago.irumbuzhi"
              >
                Instagram
              </a>
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
