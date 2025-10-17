"use client";

import React from "react";
import Footer from "./components/Footer";
import HeroFirst from "./components/HeroFirst";

type Language = "spanish" | "english";

export default function LandingPage() {
  return (
    <main className="bg-black">
      <HeroFirst />
      <Footer />
    </main>
  );
}
