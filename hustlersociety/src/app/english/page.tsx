"use client";

import React from "react";
import HeroEnglish from "../components/HeroEnglish"; // Adjust relative to the current file
import ApplySection from "../components/ApplySection";
import InfoSection from "../components/InfoSection";
import TestimonialSection from "../components/TestimonalSection";
import GallerySection from "../components/GallerySectionEnglish";
import CtaButtonComponent from "../components/CtaButtonComponent";
import Footer from "../components/Footer";

export default function EnglishPage() {
  return (
    <main className="bg-black">
      <HeroEnglish />
      {/* Add more sections here as you build out your English content */}
      <ApplySection />
      <InfoSection />
      <CtaButtonComponent />
      <TestimonialSection />
      <CtaButtonComponent />
      <GallerySection />
      <CtaButtonComponent />
      <Footer />
    </main>
  );
}
