import { createFileRoute } from "@tanstack/react-router";
import { Clock3, MapPin, Phone } from "lucide-react";
import {
  ButtonLink,
  InstagramIcon,
  PageIntro,
  PageShell,
  WhatsAppIcon,
  directionsHref,
  instagramHref,
  phoneHref,
  whatsappHref,
} from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | REKAGO Car Wash & Cafe" },
      {
        name: "description",
        content:
          "Find REKAGO Car Wash & Cafe at Alukaparab, Irumbuzhi, Malappuram — call, WhatsApp or get directions.",
      },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <PageIntro eyebrow="Visit us" title="Find REKAGO.">
        Come for the clean finish. Stay for the good vibes.
      </PageIntro>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-xl border border-foreground/10 bg-card px-5 lg:grid-cols-2 lg:px-8">
          <div className="p-8 sm:p-12 lg:p-16">
            <div className="space-y-8">
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Location
                </div>
                <div className="mt-2 text-lg leading-relaxed text-foreground">
                  REKAGO — Car Wash & Cafe
                  <br />
                  Alukaparab, Irumbuzhi
                  <br />
                  Malappuram, Kerala – 676509
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Phone
                </div>
                <a
                  href={phoneHref}
                  className="mt-2 inline-block text-lg text-foreground hover:text-primary"
                >
                  099618 98269
                </a>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Hours
                </div>
                <div className="mt-2 flex items-center gap-2 text-lg text-foreground">
                  <Clock3 className="size-4 text-primary" aria-hidden="true" />
                  7:00 AM – 7:00 PM, every day
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Follow
                </div>
                <a
                  href={instagramHref}
                  className="mt-2 inline-flex items-center gap-2 text-lg text-foreground hover:text-primary"
                >
                  <InstagramIcon className="size-4" aria-hidden="true" />
                  @rekago.irumbuzhi
                </a>
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
                <WhatsAppIcon className="size-4" aria-hidden="true" /> WhatsApp
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
    </PageShell>
  );
}
