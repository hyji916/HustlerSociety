import React from "react";
import HeroEnglish from "../components/HeroEnglish"; // Adjust relative to the current file
import InfoCardsEnglish from "../components/InfoCardsEnglish";
import ReviewsSectionEnglish from "../components/ReviewsSectionEnglish";
import BookingSectionEnglish from "../components/BookingSectionEnglish";
import FAQSectionEnglish from "../components/FAQSectionEnglish";
import ApplySection from "../components/ApplySection";

export default function EnglishPage(): JSX.Element {
  return (
    <main>
      <HeroEnglish />
      {/* Add more sections here as you build out your English content */}
      <ApplySection />
      {/* <InfoCardsEnglish />
      <ReviewsSectionEnglish />
      <BookingSectionEnglish />
      <FAQSectionEnglish /> */}
    </main>
  );
}
