"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { MapPin, Clock, Phone } from "lucide-react";
import { LOCATION_IMAGES } from "@/utils/images";

export default function LocationSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      contentRef.current?.children as HTMLCollection,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="py-40 px-6 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
      <div className="flex-1 w-full relative aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl group">
        <Image
          src={LOCATION_IMAGES[0]}
          alt="Hola Panjim Location"
          fill
          className="object-cover transition-transform duration-[3s] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-charcoal/10 mix-blend-multiply" />
        
        {/* Floating Badge */}
        <div className="absolute bottom-10 left-10 bg-cream p-8 rounded-2xl shadow-2xl border border-charcoal/5 hidden md:block">
          <p className="text-terracotta text-[10px] uppercase tracking-[0.4em] font-bold mb-2">Visit Us</p>
          <p className="text-charcoal font-serif italic text-2xl">Panjim&apos;s <br />Latin Quarter</p>
        </div>
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="w-6 h-6 bg-terracotta rounded-full animate-ping absolute" />
          <div className="w-6 h-6 bg-terracotta rounded-full relative z-10 shadow-2xl border-4 border-cream" />
        </div>
      </div>

      <div ref={contentRef} className="flex-1 space-y-12">
        <div>
          <p className="text-terracotta font-sans text-[10px] uppercase tracking-[0.5em] mb-6 font-bold">Location</p>
          <h2 className="text-5xl md:text-7xl font-serif text-charcoal mb-8 leading-tight tracking-tighter">
            Find us in <br />
            <span className="text-terracotta italic">Fontainhas</span>
          </h2>
          <p className="text-xl text-charcoal/60 font-serif leading-relaxed max-w-md italic">
            &quot;Goa&apos;s vibrant Latin Quarter, where every corner tells a story of heritage and soul.&quot;
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 border-t border-charcoal/10 pt-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-terracotta" />
              <h4 className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-charcoal/40">Address</h4>
            </div>
            <p className="text-charcoal/80 font-serif text-lg leading-snug">
              123 Heritage Lane, <br />
              Fontainhas, Panjim, <br />
              Goa 403001
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-terracotta" />
              <h4 className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-charcoal/40">Hours</h4>
            </div>
            <p className="text-charcoal/80 font-serif text-lg leading-snug">
              Lunch: 12 PM – 4 PM <br />
              Dinner: 7 PM – Late <br />
              <span className="text-terracotta">Closed Mondays</span>
            </p>
          </div>
          
          <div className="space-y-4 sm:col-span-2">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-terracotta" />
              <h4 className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-charcoal/40">Reservations</h4>
            </div>
            <p className="text-charcoal/80 font-serif text-lg">
              +91 98765 43210
            </p>
          </div>
        </div>

        <button className="group relative px-10 py-5 bg-charcoal text-cream rounded-full overflow-hidden transition-all duration-500 hover:scale-105">
          <span className="relative z-10 text-[10px] uppercase tracking-[0.3em] font-bold">Get Directions</span>
          <div className="absolute inset-0 bg-terracotta scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
        </button>
      </div>
    </section>
  );
}
