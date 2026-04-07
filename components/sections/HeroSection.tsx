"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { HERO_IMAGES } from "@/utils/images";

const SLIDE_INTERVAL = 5000;

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      gsap.set(".hero-hola", { y: 100, opacity: 0 });
      gsap.set(".hero-tagline", { y: 50, opacity: 0 });
      gsap.set(".floating-item", { scale: 0.8, opacity: 0, rotate: -10 });
      gsap.set(".scroll-hint", { opacity: 0, y: -20 });

      tl.to(".hero-hola", {
        y: 0,
        opacity: 1,
        duration: 1.5,
        delay: 0.5,
      })
      .to(".hero-tagline", {
        y: 0,
        opacity: 1,
        duration: 1.2,
      }, "-=1")
      .to(".floating-item", {
        scale: 1,
        opacity: 1,
        rotate: 0,
        duration: 1.5,
        stagger: {
          amount: 0.6,
          from: "random"
        },
      }, "-=0.8")
      .to(".scroll-hint", {
        opacity: 1,
        y: 0,
        duration: 1,
      }, "-=0.5");

      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5);
        const yPos = (clientY / window.innerHeight - 0.5);

        gsap.to(".floating-item", {
          x: (i) => xPos * (i + 1) * 60,
          y: (i) => yPos * (i + 1) * 60,
          rotateX: yPos * 15,
          rotateY: xPos * 15,
          duration: 1.5,
          ease: "power2.out",
        });

        gsap.to(".hero-tagline", {
          x: xPos * 20,
          y: yPos * 20,
          duration: 2,
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    setLoaded(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-charcoal flex items-center justify-center">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((img, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: loaded && index === currentSlide ? 1 : 0 }}
          >
            <Image
              src={img}
              alt={`Hola Panjim ${index + 1}`}
              fill
              className="object-cover scale-110 animate-slow-zoom"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/20 to-charcoal/90" />
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 rounded-full transition-all duration-500 ${
              index === currentSlide ? "w-8 bg-terracotta" : "w-4 bg-cream/30 hover:bg-cream/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Floating 3D Food Items */}
      <div className="absolute inset-0 pointer-events-none z-10 hidden lg:block">
        <div className="floating-item absolute top-[15%] left-[10%] w-64 h-80 rounded-2xl overflow-hidden shadow-2xl border border-cream/10">
          <Image src={HERO_IMAGES[1]} alt="" fill className="object-cover" />
        </div>
        <div className="floating-item absolute bottom-[15%] right-[12%] w-72 h-96 rounded-2xl overflow-hidden shadow-2xl border border-cream/10">
          <Image src={HERO_IMAGES[2]} alt="" fill className="object-cover" />
        </div>
        <div className="floating-item absolute top-[20%] right-[15%] w-56 h-72 rounded-2xl overflow-hidden shadow-2xl border border-cream/10">
          <Image src={HERO_IMAGES[3]} alt="" fill className="object-cover" />
        </div>
        <div className="floating-item absolute bottom-[20%] left-[15%] w-48 h-64 rounded-2xl overflow-hidden shadow-2xl border border-cream/10">
          <Image src={HERO_IMAGES[4] || HERO_IMAGES[0]} alt="" fill className="object-cover" />
        </div>
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <h1 className="hero-hola text-terracotta text-2xl md:text-3xl font-sans uppercase tracking-[0.5em] mb-6 font-semibold">
          Hola.
        </h1>
        <h2 className="hero-tagline text-cream text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.9] tracking-tighter italic">
          Copas. Tapas. <br /> Panjim.
        </h2>
        
        <div className="mt-16 flex flex-col sm:flex-row gap-8 justify-center items-center">
          <button className="group relative px-12 py-5 bg-terracotta text-cream rounded-full overflow-hidden transition-all duration-500 hover:bg-wine hover:scale-105 shadow-xl">
            <span className="relative z-10 text-xs uppercase tracking-[0.3em] font-bold">Discover the Menu</span>
            <div className="absolute inset-0 bg-wine scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
          </button>
          <p className="text-cream/50 font-serif italic text-lg border-l border-cream/20 pl-6 text-left">
            Iberian soul, <br /> tucked in Fontainhas.
          </p>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="scroll-hint absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20">
        <span className="text-cream/30 text-[10px] uppercase tracking-[0.4em] font-bold rotate-90 mb-4 origin-center">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-terracotta to-transparent" />
      </div>

      {/* Grain Overlay */}
      <div className="absolute inset-0 pointer-events-none mix-blend-soft-light opacity-30 bg-noise" />
    </section>
  );
}
