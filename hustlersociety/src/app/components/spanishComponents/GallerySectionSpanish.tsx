"use client";

import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  // Replace these with your actual image paths
  "/backgroundpaper.Png",
  "/backgroundpaper.Png",
  "/backgroundpaper.Png",
  "/backgroundpaper.Png",
  "/backgroundpaper.Png",
];

export default function GallerySectionSpanish() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-8 md:py-12 text-white relative bg-black">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-2">
          <span
            style={{
              background:
                "linear-gradient(90deg, #BDBDBD 0%, #FFFFFF 10%, #FFFFFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
              display: "inline-block",
            }}
          >
            IF THEIR HUSTLE PAID OFF
          </span>
          <br />
          <span style={{ whiteSpace: "nowrap" }}>
            <span>WHY CAN&apos;T&nbsp;</span>
            <span style={{ color: "#dc2626", WebkitTextFillColor: "#dc2626" }}>
              YOURS?
            </span>
          </span>
        </h2>

        <div
          className="relative"
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Left fade overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-black/80 to-transparent z-10 pointer-events-none" />

          {/* Right fade overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-black/80 to-transparent z-10 pointer-events-none" />

          <Marquee
            pauseOnHover
            className={`[--duration:20s] ${
              isPaused ? "[&>*]:[animation-play-state:paused]" : ""
            }`}
          >
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="w-64 md:w-80 aspect-video overflow-hidden rounded shadow-lg mx-2 relative"
              >
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 256px, 320px"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
