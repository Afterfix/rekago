import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Phone } from "lucide-react";
import cafeImage from "../assets/rekago-cafe.jpg";
import foamImage from "../assets/rekago-foam.jpg";
import detailImage from "../assets/rekago-detail.jpg";
import interior from "../assets/rekago-interior.png";
import {
  ButtonLink,
  FinalCta,
  PageIntro,
  Reveal,
  PageShell,
  phoneHref,
  whatsappHref,
} from "@/components/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | REKAGO Car Wash & Cafe" },
      {
        name: "description",
        content:
          "Professional car wash services at REKAGO in Irumbuzhi — exterior wash, full car cleaning, interior detailing and custom service.",
      },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

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

function ServicesPage() {
  return (
    <PageShell>
      <PageIntro eyebrow="01 · Wash" title="Give Your Car the REKAGO Treatment.">
        Keep your vehicle looking fresh with professional car wash services designed around
        quality, care and convenience.
      </PageIntro>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="grid gap-x-5 gap-y-16 sm:grid-cols-2">
            {services.map((service, i) => (
              <div key={service.title}>
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
                <h3 className="display-heading mt-6 text-3xl text-foreground">{service.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {service.text}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section-light border-t border-foreground/10 bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
              <span className="h-px w-8 bg-primary" aria-hidden="true" />
              Pricing
            </div>
            <h2 className="display-heading-soft text-3xl leading-[1.05] text-foreground sm:text-4xl">
              Not Sure Which Service You Need?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Pricing depends on your vehicle and what it needs. Call or WhatsApp us and our team
              will help you pick the right service and give you a straight quote.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href={whatsappHref}>
                <MessageCircle className="size-4" aria-hidden="true" /> WhatsApp us
              </ButtonLink>
              <ButtonLink href={phoneHref} variant="outline">
                <Phone className="size-4" aria-hidden="true" /> Call now
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </PageShell>
  );
}
