import { createFileRoute } from "@tanstack/react-router";
import heroImage from "../assets/rekago-hero.jpg";
import interior from "../assets/rekago-interior.png";
import cafeImage2 from "../assets/cafeteria-2.png";
import rekagoimg from "../assets/rekago2.png";
import carwash from "../assets/carwash.png";
import carwash2 from "../assets/carwash-2.png";
import foamImage from "../assets/rekago-foam.jpg";
import detailImage from "../assets/rekago-detail.jpg";
import { InstagramIcon, PageIntro, PageShell, instagramHref } from "@/components/site";
import { GalleryCoverflow, GalleryStack } from "@/components/gallery-carousel";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | REKAGO Car Wash & Cafe" },
      {
        name: "description",
        content:
          "Photos from REKAGO in Irumbuzhi — the wash bay, detailing, the cafe and the gaming lounge.",
      },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

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

function GalleryPage() {
  return (
    <PageShell>
      <PageIntro eyebrow="Curated moments" title="The REKAGO Experience.">
        Cars, clean finishes, good vibes and everything in between.
      </PageIntro>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <GalleryStack images={galleryImages} />
          <GalleryCoverflow images={galleryImages} />
          <a
            href={instagramHref}
            className="mx-auto mt-10 flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-foreground/70 transition-colors hover:text-primary"
          >
            <InstagramIcon className="size-4" aria-hidden="true" />
            Follow @rekago.irumbuzhi
          </a>
        </div>
      </section>
    </PageShell>
  );
}
