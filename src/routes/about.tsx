import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Coffee, Gamepad2, Sparkles, Star } from "lucide-react";
import cafeImage from "../assets/rekago-cafe.jpg";
import { FinalCta, PageIntro, PageShell, Reveal } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About REKAGO | Car Wash, Cafe & Gaming in Irumbuzhi" },
      {
        name: "description",
        content:
          "REKAGO is a car wash, cafe and gaming lounge in one place in Irumbuzhi, Malappuram — professional car care with a comfortable place to wait.",
      },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const differences = [
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
];

function AboutPage() {
  return (
    <PageShell>
      <PageIntro eyebrow="About REKAGO" title="More Than Just a Car Wash.">
        At REKAGO, we make car care more enjoyable. Get your vehicle professionally cleaned while
        you relax, grab a refreshment or enjoy some gaming — a car wash, a cafe and a gaming
        lounge, all in one place in Irumbuzhi, Malappuram.
      </PageIntro>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
              <span className="h-px w-8 bg-primary" aria-hidden="true" />
              Our story
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">
              REKAGO started with a simple idea: getting your car cleaned shouldn't mean standing
              around waiting. So we built a place where professional car care sits right next to a
              proper cafe and a gaming lounge — somewhere local, easygoing and worth the visit even
              before your car needs a wash.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-light border-t border-foreground/10 bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-4 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
            <span className="h-px w-8 bg-primary" aria-hidden="true" />
            The REKAGO difference
          </div>
          <Reveal className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4" delay={0.1}>
            {differences.map((item, i) => (
              <div key={item.title} className="group border-t border-foreground/15 pt-5">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-primary transition-transform group-hover:scale-110">
                    {item.icon}
                  </span>
                  <span className="font-display text-4xl italic text-foreground/15">0{i + 1}</span>
                </div>
                <h3 className="display-heading text-2xl text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-card py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div className="aspect-[4/5] overflow-hidden rounded-xl lg:order-2">
            <img
              src={cafeImage}
              alt="Guests relaxing in the REKAGO cafe beside the wash bay"
              loading="lazy"
              width={1200}
              height={800}
              className="image-hover h-full w-full object-cover"
            />
          </div>
          <Reveal className="lg:order-1">
            <div className="mb-4 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
              <span className="h-px w-8 bg-primary" aria-hidden="true" />
              Wash · Chill · Play
            </div>
            <h2 className="display-heading-soft text-3xl leading-[1.05] text-foreground sm:text-4xl lg:text-5xl">
              A Local Hangout, Not Just a Service Stop.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Wash covers professional car care. Chill is the cafe — good coffee and a comfortable
              space. Play is the gaming lounge — a fun way to pass the time with friends. Together,
              that's the whole REKAGO experience.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-primary-foreground transition-colors hover:bg-accent"
              >
                See our services <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                to="/cafe-gaming"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/5 px-6 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-foreground backdrop-blur-sm transition-all hover:border-primary hover:bg-foreground/10"
              >
                Cafe & gaming <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </PageShell>
  );
}
