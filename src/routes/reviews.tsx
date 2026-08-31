import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Star } from "lucide-react";
import { FinalCta, PageIntro, PageShell, directionsHref } from "@/components/site";
import { ReviewsRow, type Review } from "@/components/gallery-carousel";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews | REKAGO Car Wash & Cafe" },
      {
        name: "description",
        content: "What customers say about REKAGO Car Wash & Cafe in Irumbuzhi, Malappuram.",
      },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

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

function ReviewsPage() {
  return (
    <PageShell>
      <PageIntro eyebrow="Google reviews" title="Loved by Our Customers.">
        A few words from the people who have experienced REKAGO.
      </PageIntro>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
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
          <ReviewsRow reviews={reviews} />
          <a
            href={directionsHref}
            className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary"
          >
            See all reviews on Google <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <FinalCta />
    </PageShell>
  );
}
