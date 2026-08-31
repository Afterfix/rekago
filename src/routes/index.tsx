import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronDown,
  Clock3,
  Coffee,
  Gamepad2,
  MapPin,
  Star,
  Sparkles,
} from "lucide-react";
import heroImage from "../assets/rekago-hero.jpg";
import interior from "../assets/rekago-interior.png";
import cafeImage from "../assets/rekago-cafe.jpg";
import cafeImage2 from "../assets/cafeteria-2.png";
import rekagoimg from "../assets/rekago2.png";
import carwash from "../assets/carwash.png";
import carwash2 from "../assets/carwash-2.png";
import foamImage from "../assets/rekago-foam.jpg";
import detailImage from "../assets/rekago-detail.jpg";
import {
  ButtonLink,
  FinalCta,
  InstagramIcon,
  PageShell,
  Reveal,
  SectionHeading,
  directionsHref,
  instagramHref,
  whatsappHref,
} from "@/components/site";
import { GalleryCoverflow, GalleryStack, ReviewsRow, type Review } from "@/components/gallery-carousel";

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

function HomePage() {
  const quickActions = [
    {
      word: "Wash.",
      label: "Car Wash",
      text: "Professional cleaning services for a spotless, showroom finish.",
      icon: <Sparkles className="size-6" aria-hidden="true" />,
      to: "/services",
    },
    {
      word: "Chill.",
      label: "Cafe",
      text: "Relax with refreshments while your car is meticulously cleaned.",
      icon: <Coffee className="size-6" aria-hidden="true" />,
      to: "/cafe-gaming",
    },
    {
      word: "Play.",
      label: "Gaming",
      text: "Challenge your friends or unwind with our gaming lounge.",
      icon: <Gamepad2 className="size-6" aria-hidden="true" />,
      to: "/cafe-gaming",
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
    <PageShell>
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
      <section className="section-light border-t border-foreground/10 bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <SectionHeading eyebrow="The REKAGO difference" title="More Than Just a Car Wash.">
              At REKAGO, we make car care more enjoyable. Get your vehicle professionally cleaned
              while you relax, grab a refreshment or enjoy some gaming.
            </SectionHeading>
            <Link
              to="/about"
              className="inline-flex shrink-0 items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary"
            >
              More about us <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <Reveal className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4" delay={0.1}>
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
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
      <section className="bg-card py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <SectionHeading eyebrow="01 · Wash" title="Give Your Car the REKAGO Treatment.">
              Keep your vehicle looking fresh with professional car wash services designed around
              quality, care and convenience.
            </SectionHeading>
            <Link
              to="/services"
              className="inline-flex shrink-0 items-center gap-2 border-b border-primary pb-2 text-xs font-semibold uppercase tracking-[0.15em] text-foreground transition-colors hover:text-primary"
            >
              View all services <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <Reveal className="mt-16 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4" delay={0.1}>
            {services.map((service, i) => (
              <Link to="/services" key={service.title} className="group">
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
                <h3 className="display-heading mt-5 text-2xl text-foreground">{service.title}</h3>
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
      <section className="border-y border-foreground/10 bg-background py-24 sm:py-32">
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
              Why wait around while your car is being cleaned? Grab a drink, relax in our cafe or
              challenge your friends in our gaming area.
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
              to="/cafe-gaming"
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
              <div key={step.word} className="relative border-t border-primary-foreground/25 pt-6">
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
      <section className="bg-card py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <SectionHeading eyebrow="Curated moments" title="The REKAGO Experience.">
              Cars, clean finishes, good vibes and everything in between.
            </SectionHeading>
            <Link
              to="/gallery"
              className="inline-flex shrink-0 items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary"
            >
              View gallery <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <GalleryStack images={galleryImages} />
          <GalleryCoverflow images={galleryImages} />
          <a
            href={instagramHref}
            className="mt-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-foreground/70 transition-colors hover:text-primary"
          >
            <InstagramIcon className="size-4" aria-hidden="true" />
            Follow @rekago.irumbuzhi
          </a>
        </div>
      </section>
      <section className="section-light border-t border-foreground/10 bg-background py-24 sm:py-32">
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
          <ReviewsRow reviews={reviews} />
          <Link
            to="/reviews"
            className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary"
          >
            See all reviews <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
      <section className="bg-card py-24 sm:py-32">
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
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-foreground/20 bg-foreground/5 px-6 text-xs font-semibold uppercase tracking-[0.13em] text-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-foreground/10 active:scale-[0.98]"
              >
                Full contact details
              </Link>
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
      <FinalCta />
    </PageShell>
  );
}
