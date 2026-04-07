import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/animations/SmoothScrolling";
import PageTransition from "@/components/animations/PageTransition";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Hola Panjim | Copas. Tapas. Panjim.",
  description: "Iberian soul, in the heart of Goa. A hidden gem tapas bar in Fontainhas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <div className="grain-overlay"></div>
        <SmoothScrolling>
          <PageTransition>{children}</PageTransition>
        </SmoothScrolling>
      </body>
    </html>
  );
}
