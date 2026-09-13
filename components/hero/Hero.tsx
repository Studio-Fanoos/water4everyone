"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { images } from "@/lib/data/images";
import { siteConfig } from "@/lib/data/site";
import { gsap, prefersReducedMotion, registerGsap } from "@/lib/motion/gsap";
import { scrollToId } from "@/lib/motion/lenis";

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsap();
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "premium" } });
      tl.fromTo(
        "[data-hero-photo]",
        { clipPath: "inset(18% 12% 18% 12%)", scale: 1.15 },
        { clipPath: "inset(0% 0% 0% 0%)", scale: 1, duration: 1.15 },
        0.1,
      )
        .fromTo(
          "[data-hero-line]",
          { yPercent: 110 },
          { yPercent: 0, duration: 0.85, stagger: 0.07 },
          0.22,
        )
        .fromTo(
          "[data-hero-meta]",
          { autoAlpha: 0, y: 18 },
          { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.06 },
          0.48,
        )
        .fromTo(
          "[data-hero-inset]",
          { autoAlpha: 0, y: 40, scale: 1.08 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.9 },
          0.62,
        );
    }, root);

    return () => ctx.revert();
  }, []);

  const lines = ["IEDEREEN", "VERDIENT", "SCHOON", "WATER."];

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative min-h-[100svh] overflow-hidden bg-ink pt-24 text-paper"
    >
      <div className="absolute inset-0">
        <div data-hero-photo className="absolute inset-0">
          <Image
            src={images.hero.src}
            alt={images.hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/30" />
        </div>
      </div>

      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-6rem)] max-w-[1400px] grid-cols-1 items-end gap-10 px-[clamp(1.25rem,4vw,4.5rem)] pb-14 lg:grid-cols-12 lg:pb-16">
        <div className="lg:col-span-8">
          <p
            data-hero-meta
            className="label-caps mb-6 text-white/70"
          >
            Water4Everyone / Stichting / Marokko
          </p>

          <h1 className="font-display text-[length:var(--display-xl)] text-paper">
            {lines.map((line) => (
              <span key={line} className="block overflow-hidden">
                <span data-hero-line className="block">
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <div className="mt-8 max-w-xl">
            <p data-hero-meta className="text-[length:var(--body-xl)] leading-snug text-white/85">
              {siteConfig.tagline}
            </p>
            <p data-hero-meta className="mt-4 text-base leading-relaxed text-white/70">
              Water4Everyone werkt aan een duurzaam model voor toegang tot schoon
              drinkwater. We beginnen in Marokko en bouwen stap voor stap aan een
              systeem waarin onderhoud, hergebruik en nieuwe installaties elkaar
              versterken.
            </p>
            <div data-hero-meta className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => scrollToId("#model")}
              >
                Ontdek hoe het werkt
              </button>
              <button
                type="button"
                className="btn btn-ghost"
                data-cursor="Geef"
                onClick={() => scrollToId("#doneren")}
              >
                Direct doneren
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 lg:justify-self-end">
          <div
            data-hero-inset
            className="relative ml-auto aspect-[3/4] w-full max-w-[280px] overflow-hidden border border-white/20 shadow-2xl sm:max-w-[320px]"
          >
            <Image
              src={images.heroInset.src}
              alt={images.heroInset.alt}
              fill
              sizes="320px"
              className="object-cover"
              priority
            />
            <div className="absolute left-3 top-3 bg-sun px-2 py-1 label-caps !text-[0.62rem] text-ink">
              Sfeerbeeld
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
