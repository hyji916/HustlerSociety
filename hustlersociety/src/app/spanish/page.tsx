"use client";

import React from "react";
import HeroSpanish from "../components/spanishComponents/HeroSpanish";
import ApplySectionSpanish from "../components/spanishComponents/ApplySectionSpanish";
import InfoSectionSpanish from "../components/spanishComponents/InfoSectionSpanish";
import CtaButtonComponentSpanish from "../components/spanishComponents/CtaButtonComponentSpanish";
import TestimonalSectionSpanish from "../components/spanishComponents/TestimonalSectionSpanish";
import GallerySectionSpanish from "../components/spanishComponents/GallerySectionSpanish";
import FooterSpanish from "../components/spanishComponents/FooterSpanish";

export default function SpanishPage() {
  return (
    <main className="bg-black">
      <HeroSpanish />
      <ApplySectionSpanish />
      <InfoSectionSpanish />
      <CtaButtonComponentSpanish />
      <TestimonalSectionSpanish />
      <CtaButtonComponentSpanish />
      <GallerySectionSpanish />
      <CtaButtonComponentSpanish />
      <FooterSpanish />
    </main>
  );
}
