"use client";

import React from "react";
import HeroEnglish from "./components/HeroEnglish"; // Adjust relative to the current file
import ApplySection from "./components/ApplySection";
import InfoSection from "./components/InfoSection";
import TestimonialSection from "./components/TestimonalSection";
import GallerySection from "./components/GallerySectionEnglish";
import CtaButtonComponent from "./components/CtaButtonComponent";
import Footer from "./components/Footer";
import GHLPopupForm from "./components/GHLPopupForm";
import HeroFirst from "./components/HeroFirst";

type Language = "spanish" | "english";

export default function LandingPage() {
  const handleLanguageSelect = (language: Language): void => {
    window.location.href = `/${language}`;
  };

  return (
    <main className="bg-black">
      <HeroFirst />
      {/* Add more sections here as you build out your English content */}
      {/* <ApplySection /> */}
      {/* <GHLPopupForm /> */}
      {/* <InfoSection />
      <CtaButtonComponent />
      <TestimonialSection />
      <CtaButtonComponent />
      <GallerySection />
      <CtaButtonComponent />  */}
      <Footer />
    </main>
  );
}
