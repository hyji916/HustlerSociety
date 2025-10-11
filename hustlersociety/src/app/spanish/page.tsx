import React from "react";
import HeroEnglish from "../components/HeroEnglish"; // Adjust relative to the current file
import ApplySection from "../components/ApplySection";
import InfoSection from "../components/InfoSection";
import TestimonialSection from "../components/TestimonalSection";

export default function EnglishPage() {
  return (
    <main>
      <HeroEnglish />
      {/* Add more sections here as you build out your English content */}
      <ApplySection />
      <InfoSection />
      <TestimonialSection />
    </main>
  );
}
