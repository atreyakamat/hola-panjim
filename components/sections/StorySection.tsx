"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { STORY_IMAGES } from "@/utils/images";

export default function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const textElements = textRef.current?.querySelectorAll("p");

    if (textElements) {
      gsap.fromTo(
        textElements,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 1.4,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        }
      );
    }

    gsap.fromTo(
      imageRef.current,
      { scale: 1.2, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        },
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="py-40 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 lg:gap-32">
      <div ref={textRef} className="flex-1 space-y-10 text-3xl md:text-4xl lg:text-5xl text-charcoal font-serif leading-[1.1] tracking-tight">
        <p className="opacity-0">A table.</p>
        <p className="opacity-0">A drink.</p>
        <p className="opacity-0">A conversation that <br/><span className="text-terracotta italic">stays longer</span> than planned.</p>
        <div className="pt-10">
          <p className="opacity-0 text-charcoal/40 text-sm md:text-base font-sans uppercase tracking-[0.4em] leading-relaxed max-w-md">
            Iberian soul, rooted in the colorful heart of Goa&apos;s Latin Quarter.
          </p>
        </div>
      </div>

      <div className="flex-1 w-full flex gap-4 md:gap-8">
        <div className="flex-1 aspect-[3/5] relative rounded-3xl overflow-hidden shadow-2xl translate-y-12" ref={imageRef}>
          <Image
            src={STORY_IMAGES[0]}
            alt="Hola Panjim Vibe"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 aspect-[3/5] relative rounded-3xl overflow-hidden shadow-2xl -translate-y-12 hidden md:block">
          <Image
            src={STORY_IMAGES[1]}
            alt="Hola Panjim Detail"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
