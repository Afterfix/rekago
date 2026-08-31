import { createFileRoute } from "@tanstack/react-router";
import { Car, Coffee, Gamepad2, KeyRound, LogOut, Sparkles } from "lucide-react";
import cafeImage from "../assets/rekago-cafe.jpg";
import gamingImage from "../assets/rekago-gaming.jpg";
import { FinalCta, PageIntro, PageShell, Reveal } from "@/components/site";

export const Route = createFileRoute("/cafe-gaming")({
  head: () => ({
    meta: [
      { title: "Cafe & Gaming | REKAGO Car Wash & Cafe" },
      {
        name: "description",
        content:
          "While REKAGO washes your car, chill in the cafe or challenge a friend in the gaming lounge — car care meets a proper hangout in Irumbuzhi.",
      },
    ],
    links: [{ rel: "canonical", href: "/cafe-gaming" }],
  }),
  component: CafeGamingPage,
});

const highlights = [
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
];

const journey = [
  { icon: <KeyRound aria-hidden="true" />, label: "Drop your car" },
  { icon: <Coffee aria-hidden="true" />, label: "Grab a drink" },
  { icon: <Gamepad2 aria-hidden="true" />, label: "Play a game" },
  { icon: <Car aria-hidden="true" />, label: "Check the wash" },
  { icon: <LogOut aria-hidden="true" />, label: "Drive out fresh" },
];

function CafeGamingPage() {
  return (
    <PageShell>
      <PageIntro eyebrow="02 · Chill & Play" title="While We Wash, You Chill.">
        Why wait around while your car is being cleaned? Grab a drink, relax in our cafe or
        challenge your friends in our gaming area.
      </PageIntro>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20 lg:px-8">
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
          <Reveal>
            <div className="mb-4 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
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
            <div className="space-y-8">
              {highlights.map((item) => (
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
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-light border-y border-foreground/10 bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-4 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
            <span className="h-px w-8 bg-primary" aria-hidden="true" />
            The visit
          </div>
          <h2 className="display-heading-soft mb-14 text-3xl leading-[1.05] text-foreground sm:text-4xl">
            One Visit, A Little Bit of Everything.
          </h2>
          <Reveal className="grid grid-cols-2 gap-6 sm:grid-cols-5" delay={0.1}>
            {journey.map((step, i) => (
              <div key={step.label} className="text-center">
                <div className="mx-auto mb-4 grid size-14 place-items-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/25">
                  {step.icon}
                </div>
                <div className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  Step 0{i + 1}
                </div>
                <div className="mt-1 text-sm font-semibold text-foreground">{step.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-card py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="overflow-hidden rounded-xl">
            <img
              src={gamingImage}
              alt="Gaming at REKAGO"
              loading="lazy"
              width={1600}
              height={900}
              className="image-hover h-full max-h-[420px] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </PageShell>
  );
}
