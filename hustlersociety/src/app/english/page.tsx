import React from "react";
import HeroEnglish from "../components/HeroEnglish"; // Adjust relative to the current file
import ReviewsSectionEnglish from "../components/ReviewsSectionEnglish";
import BookingSectionEnglish from "../components/BookingSectionEnglish";
import FAQSectionEnglish from "../components/FAQSectionEnglish";
import ApplySection from "../components/ApplySection";
import InfoSection from "../components/InfoSection";
import TestimonialSection from "../components/TestimonalSection";

export default function EnglishPage(): JSX.Element {
  return (
    <main>
      <HeroEnglish />
      {/* Add more sections here as you build out your English content */}
      <ApplySection />
      <InfoSection />
      <TestimonialSection />
      {/* <ReviewsSectionEnglish />
      <BookingSectionEnglish />
      <FAQSectionEnglish /> */}
    </main>
  );
}
