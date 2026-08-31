import { ArrowRight, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/site";

/**
 * Shared "which item is focused" state for the carousels on this site
 * (photo gallery + reviews): cycles on a timer (paused on hover/focus,
 * skipped under prefers-reduced-motion), exposes go(±1) for prev/next and
 * drag, and setActive for direct selection.
 */
export function useCarouselFocus(count: number) {
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

/** Prev/next buttons + dot indicators, shared by every carousel on the site. */
export function CarouselControls({
  count,
  active,
  onSelect,
  onPrev,
  onNext,
  itemLabel = "item",
}: {
  count: number;
  active: number;
  onSelect: (i: number) => void;
  onPrev: () => void;
  onNext: () => void;
  itemLabel?: string;
}) {
  return (
    <div className="mt-8 flex items-center justify-center gap-4">
      <button
        type="button"
        onClick={onPrev}
        aria-label={`Previous ${itemLabel}`}
        className="rounded-full border border-foreground/15 p-2.5 text-foreground/70 transition-colors hover:border-primary hover:text-primary"
      >
        <ArrowRight className="size-4 rotate-180" aria-hidden="true" />
      </button>
      <div className="flex items-center gap-2">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onSelect(i)}
            aria-label={`Show ${itemLabel} ${i + 1} of ${count}`}
            aria-current={i === active}
            className={`h-1.5 rounded-full transition-all ${i === active ? "w-6 bg-primary" : "w-1.5 bg-foreground/25 hover:bg-foreground/40"}`}
          />
        ))}
      </div>
      <button
        type="button"
        onClick={onNext}
        aria-label={`Next ${itemLabel}`}
        className="rounded-full border border-foreground/15 p-2.5 text-foreground/70 transition-colors hover:border-primary hover:text-primary"
      >
        <ArrowRight className="size-4" aria-hidden="true" />
      </button>
    </div>
  );
}

export type GalleryImage = { src: string; alt: string };

/**
 * Fanned photo stack (small/mobile screens): one photo in sharp focus up
 * front, the rest fanned out and progressively blurred behind it. Focus
 * shifts by clicking any card, dragging/swiping the front card, the
 * prev/next controls, or the shared auto-rotate timer.
 */
export function GalleryStack({ images }: { images: GalleryImage[] }) {
  const count = images.length;
  const { active, setActive, go, pauseHandlers } = useCarouselFocus(count);

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
      <CarouselControls
        count={count}
        active={active}
        onSelect={setActive}
        onPrev={() => go(-1)}
        onNext={() => go(1)}
        itemLabel="photo"
      />
    </div>
  );
}

/**
 * Coverflow (desktop/large screens): the focused photo sits large and sharp
 * at center; the rest fan out sideways in 3D — tilted, scaled down and
 * dimmed with distance. Same focus controls as the mobile stack.
 */
export function GalleryCoverflow({ images }: { images: GalleryImage[] }) {
  const count = images.length;
  const { active, setActive, go, pauseHandlers } = useCarouselFocus(count);

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
      <CarouselControls
        count={count}
        active={active}
        onSelect={setActive}
        onPrev={() => go(-1)}
        onNext={() => go(1)}
        itemLabel="photo"
      />
    </div>
  );
}

export type Review = { name: string; meta: string; time: string; text: string; avatar?: string };

/** Colored initial-letter avatar, used whenever a reviewer has no profile photo. */
export function ReviewAvatar({
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

/** Horizontal row of review cards — the same content used on Home and the dedicated Reviews page. */
export function ReviewsRow({ reviews }: { reviews: Review[] }) {
  return (
    <Reveal className="-mx-5 mt-14 flex gap-5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0">
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
          <div className="mt-5 flex gap-0.5 text-gold" aria-label="5 out of 5 stars" role="img">
            {Array.from({ length: 5 }).map((_, starIndex) => (
              <Star key={starIndex} className="size-3.5 fill-current" aria-hidden="true" />
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-card-foreground/85">{review.text}</p>
        </blockquote>
      ))}
    </Reveal>
  );
}
