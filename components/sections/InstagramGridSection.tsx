"use client";

import Image from "next/image";
import { INSTAGRAM_IMAGES } from "@/utils/images";

export default function InstagramGridSection() {
  return (
    <section className="py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <p className="text-terracotta uppercase tracking-[0.4em] text-[10px] font-bold mb-4">Social Feed</p>
            <h2 className="text-5xl md:text-6xl font-serif text-charcoal italic leading-none">@holapanjim</h2>
          </div>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-charcoal/40 hover:text-terracotta transition-colors font-sans text-xs uppercase tracking-widest border-b border-charcoal/10 pb-2"
          >
            Follow our journey
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {INSTAGRAM_IMAGES.map((src, i) => (
            <a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`relative aspect-square overflow-hidden group cursor-pointer rounded-2xl shadow-lg ${
                i % 3 === 0 ? "md:translate-y-8" : i % 3 === 1 ? "md:-translate-y-4" : ""
              }`}
            >
              <Image
                src={src}
                alt={`Instagram post ${i + 1}`}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center backdrop-blur-[4px]">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                  <span className="text-cream text-[10px] tracking-[0.4em] uppercase font-bold block mb-2">
                    View Post
                  </span>
                  <div className="w-8 h-px bg-terracotta mx-auto" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
