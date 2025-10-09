"use client";

import WistiaPlayer from "./WistiaPlayer";

const wistiaMedia = [
  // Replace these with real Wistia media ids or extend the list
  "vhrbskdj19",
  "wger5gw516",
  "w1ds4gqk14",
];

export default function GallerySection() {
  return (
    <section
      className="py-0 text-white relative"
      style={{
        backgroundImage: `url('/backgroundpaper.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
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
        <p className="text-gray-400 mb-8">
          A glimpse of past productions, events, and creative projects hosted in
          our space.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wistiaMedia.map((id) => (
            <div
              key={id}
              className="w-full aspect-video overflow-hidden rounded shadow-lg"
            >
              {/* Use the existing WistiaPlayer wrapper for consistency */}
              <WistiaPlayer media-id={id} className="w-full h-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
