import React from "react";
import Hero from "../components/Hero"; // Adjust relative to the current file
import BusinessStats from "../components/BusinessStats";

export default function EnglishPage(): JSX.Element {
  return (
    <main>
      <Hero />
      <BusinessStats />
      {/* Add more sections here as you build out your English content */}
    </main>
  );
}
