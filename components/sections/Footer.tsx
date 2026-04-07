"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const InstagramIcon = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const FacebookIcon = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream pt-24 pb-12 px-6 md:px-12 border-t border-cream/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Identity */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-serif italic mb-2">Hola Panjim</h2>
              <p className="text-cream/50 font-sans text-xs uppercase tracking-[0.3em]">Copas. Tapas. Panjim.</p>
            </div>
            <p className="text-cream/70 font-serif italic text-lg leading-relaxed max-w-xs">
              Iberian soul, tucked in the heart of Fontainhas, Goa. A slow evening, a shared plate, a second drink.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-cream/40 hover:text-terracotta transition-colors duration-500">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-cream/40 hover:text-terracotta transition-colors duration-500">
                <FacebookIcon size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.3em] text-terracotta mb-10 font-bold">Explore</h4>
            <ul className="space-y-4">
              {["Menu", "The Story", "Visit", "Reservations", "Private Events"].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-cream/60 hover:text-cream font-serif text-lg transition-all duration-500 hover:pl-2 block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.3em] text-terracotta mb-10 font-bold">Connect</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-cream/60">
                <MapPin size={18} className="shrink-0 mt-1 text-terracotta/60" />
                <span className="font-serif text-lg leading-snug">
                  123 Heritage Lane, Fontainhas,<br />
                  Panjim, Goa 403001
                </span>
              </li>
              <li className="flex items-center gap-4 text-cream/60">
                <Phone size={18} className="shrink-0 text-terracotta/60" />
                <span className="font-serif text-lg">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-4 text-cream/60">
                <Mail size={18} className="shrink-0 text-terracotta/60" />
                <span className="font-serif text-lg">hola@panjim.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.3em] text-terracotta mb-10 font-bold">Hours</h4>
            <div className="space-y-4 font-serif text-lg text-cream/60">
              <div className="flex justify-between border-b border-cream/5 pb-2">
                <span>Tue — Thu</span>
                <span>7 PM – 12 AM</span>
              </div>
              <div className="flex justify-between border-b border-cream/5 pb-2">
                <span>Fri — Sat</span>
                <span>12 PM – 1 AM</span>
              </div>
              <div className="flex justify-between border-b border-cream/5 pb-2 text-cream/40 italic">
                <span>Monday</span>
                <span>Closed</span>
              </div>
            </div>
            <p className="mt-8 text-xs text-cream/30 uppercase tracking-widest leading-relaxed">
              Reservations are recommended for weekend evenings.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-cream/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-cream/30 text-xs uppercase tracking-[0.2em]">
            © {currentYear} Hola Panjim. All Rights Reserved.
          </div>
          <div className="flex gap-8 text-cream/30 text-xs uppercase tracking-[0.2em]">
            <Link href="#" className="hover:text-cream transition-colors duration-500">Privacy Policy</Link>
            <Link href="#" className="hover:text-cream transition-colors duration-500">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
