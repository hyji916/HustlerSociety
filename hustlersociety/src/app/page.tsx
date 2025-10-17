"use client";

import React from "react";
import Footer from "./components/Footer";
import HeroFirst from "./components/HeroFirst";

export default function LandingPage() {
  return (
    <main className="bg-black">
      <HeroFirst />
      <Footer />
    </main>
  );
}
