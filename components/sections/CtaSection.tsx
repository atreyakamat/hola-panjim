"use client";

export default function CtaSection() {
  return (
    <section className="py-40 bg-charcoal text-center relative overflow-hidden flex items-center justify-center">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-wine/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 space-y-12">
        <h2 className="text-5xl md:text-7xl font-serif text-cream italic tracking-wide">
          Your table is waiting.
        </h2>
        
        <div>
          <button className="group relative px-10 py-5 bg-terracotta text-cream rounded-full overflow-hidden transition-all hover:scale-105 duration-500 shadow-[0_0_40px_-10px_rgba(161,74,47,0.6)] hover:shadow-[0_0_60px_-10px_rgba(161,74,47,0.8)]">
            <span className="relative z-10 text-sm uppercase tracking-widest font-medium">
              Reserve Now
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
