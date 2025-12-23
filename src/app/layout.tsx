import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Navbar from "./components/Navbar";
import InfiniteTicker from "@/app/components/InfiniteTicker";
import Footer from "@/app/components/Footer";
import ContactPreview from "@/app/components/ContactPreview";
import FloatingWhatsApp from "@/app/components/FloatingWhatsApp";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Emergent Institute | Empowering Future Excellence",
  description: "A premier coaching institute dedicated to perfectly planned education and student success.",
  icons: { icon: "/logo.avif" },
};

// layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="...">
        
        {/* THE UNITARY STICKY HEADER */}
        <div className="sticky top-0 z-100 w-full flex flex-col">
          <Navbar />
          {/* The Ticker now sits naturally below the Navbar */}
          <InfiniteTicker />
        </div>

        <main className="relative min-h-screen">
          {children}
          <FloatingWhatsApp />
        </main>

        <ContactPreview />
        <Footer />
      </body>
    </html>
  );
}