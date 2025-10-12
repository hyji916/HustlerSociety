"use client";

import { Marquee } from "@/components/ui/marquee";
import WistiaPlayer from "./WistiaPlayer";

const wistiaMedia = [
  // Replace these with real Wistia media ids or extend the list
  "vhrbskdj19",
  "wger5gw516",
  "w1ds4gqk14",
];

export default function GallerySection() {
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
            See What&apos;s Possible
          </span>{" "}
          <span style={{ whiteSpace: "nowrap" }}>
            <span>at&nbsp;</span>
            <span style={{ color: "#018DFB", WebkitTextFillColor: "#018DFB" }}>
              The Lab
            </span>
          </span>
        </h2>
        <p className="text-gray-400 text-sm md:text-base mb-6">
          A glimpse of past productions, events, and creative projects hosted in
          our space.
        </p>

        <div className="relative">
          {/* Left fade overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-black/80 to-transparent z-10 pointer-events-none" />

          {/* Right fade overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-black/80 to-transparent z-10 pointer-events-none" />

          <Marquee pauseOnHover className="[--duration:20s]">
            {wistiaMedia.map((id) => (
              <div
                key={id}
                className="w-64 md:w-80 aspect-video overflow-hidden rounded shadow-lg mx-2"
              >
                {/* Use the existing WistiaPlayer wrapper for consistency */}
                <WistiaPlayer media-id={id} className="w-full h-full" />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
