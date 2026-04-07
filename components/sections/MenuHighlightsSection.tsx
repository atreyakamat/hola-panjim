"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { MENU_HIGHLIGHTS } from "@/utils/images";

// Descriptions for some items to make it look more realistic
const DESCRIPTIONS = [
  "Traditional Gambas al Ajillo with local spices.",
  "Crispy Croquetas with Iberico ham and creamy bechamel.",
  "Artisanal cheese platter featuring Manchego and local Goan varieties.",
  "Our signature Red Sangria, aged with seasonal fruits.",
  "Slow-cooked Octopus with paprika and olive oil.",
  "Hand-stretched coca with roasted vegetables.",
];

export default function MenuHighlightsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scrollWidth = triggerRef.current?.scrollWidth || 0;
    const windowWidth = window.innerWidth;

    const pin = gsap.fromTo(
      triggerRef.current,
      { x: 0 },
      {
        x: -(scrollWidth - windowWidth + 100),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          invalidateOnRefresh: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-cream overflow-hidden">
      <div className="min-h-screen flex flex-col justify-center py-20 relative">
        {/* Background text decoration */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[20vw] font-serif text-charcoal/[0.02] whitespace-nowrap pointer-events-none select-none italic">
          Taste of Iberia • Taste of Iberia • Taste of Iberia
        </div>

        <div className="px-6 md:px-12 mb-16 relative z-10">
          <p className="text-terracotta font-sans text-xs uppercase tracking-[0.5em] mb-4">The Selection</p>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-serif text-charcoal leading-[0.85] tracking-tighter">
            Copas <span className="text-terracotta font-sans tracking-normal font-light">&</span> <br />
            <span className="italic">Tapas</span>
          </h2>
          <div className="h-px w-24 bg-terracotta mt-8" />
        </div>

        <div ref={triggerRef} className="flex flex-nowrap gap-8 px-6 md:px-12 items-end relative z-10">
          {MENU_HIGHLIGHTS.map((img, i) => (
            <div
              key={i}
              className="menu-card relative w-[320px] md:w-[450px] aspect-[4/5] rounded-3xl overflow-hidden group cursor-pointer shadow-2xl shrink-0"
            >
              <Image
                src={img}
                alt={`Menu item ${i + 1}`}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 320px, 450px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/10 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="absolute bottom-0 left-0 right-0 p-10 transform translate-y-6 group-hover:translate-y-0 transition-all duration-700 ease-out opacity-0 group-hover:opacity-100">
                <p className="text-terracotta font-sans text-[10px] uppercase tracking-[0.4em] mb-4">House Signature</p>
                <h3 className="text-4xl font-serif text-cream mb-4 italic leading-tight">Authentic <br />Selection</h3>
                <p className="text-cream/60 text-sm leading-relaxed max-w-[280px]">
                  {DESCRIPTIONS[i % DESCRIPTIONS.length]}
                </p>
                <div className="mt-8 flex items-center gap-4 text-cream/40 group-hover:text-terracotta transition-colors">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Discover more</span>
                  <div className="h-px w-8 bg-current" />
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-cream/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          ))}
          
          <div className="w-[30vw] shrink-0 flex flex-col justify-center items-start pl-12">
            <h4 className="text-4xl md:text-5xl font-serif text-charcoal italic mb-8">Ready to <br /> indulge?</h4>
            <button className="px-10 py-4 border border-charcoal/20 text-charcoal rounded-full hover:bg-charcoal hover:text-cream transition-all duration-500 uppercase text-xs tracking-[0.3em] font-bold">
              View Full Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
