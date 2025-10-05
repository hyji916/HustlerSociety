"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import WistiaPlayer from "./WistiaPlayer";
import IconArrow from "./IconArrow";

export default function Hero() {
  useEffect(() => {
    // Load Wistia scripts
    const playerScript = document.createElement("script");
    playerScript.src = "https://fast.wistia.com/player.js";
    playerScript.async = true;
    document.head.appendChild(playerScript);

    const embedScript = document.createElement("script");
    embedScript.src = "https://fast.wistia.com/embed/z3z253lf9h.js";
    embedScript.async = true;
    embedScript.type = "module";
    document.head.appendChild(embedScript);

    // Cleanup function
    return () => {
      if (playerScript.parentNode) {
        playerScript.parentNode.removeChild(playerScript);
      }
      if (embedScript.parentNode) {
        embedScript.parentNode.removeChild(embedScript);
      }
    };
  }, []);

  const scrollToCalendly = () => {
    const bookingSection = document.querySelector(".ghl-booking-widget");
    if (bookingSection) {
      bookingSection.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url('/backgroundpaper.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Brand logo at top */}
      <div className="relative z-10 flex flex-col items-center pt-0 md:pt-6">
        <Image
          src="/hustlersocietytransparentlogo.png"
          alt="Hustler Society Logo"
          width={196}
          height={196}
          className="h-32 md:h-40 lg:h-48 w-auto"
          style={{ objectFit: "contain" }}
          priority
        />

        {/* Full-width gradient line under logo */}
        <div className="mt-0 mb-2 w-full">
          <div
            className="h-px w-full"
            style={{
              background:
                "linear-gradient(to right, transparent 0%, #9CA3AF 25%, #dc2626 50%, #9CA3AF 75%, transparent 100%)",
            }}
          />
        </div>
      </div>

      {/* Main content - moved closer to logo */}
      <div className="relative z-10 flex flex-col items-center justify-start px-4 pt-4 md:pt-8">
        {/* Updated headline with bigger font size and gradient */}
        <h1
          className="font-bold text-center leading-tight mb- max-w-5xl mb-6"
          style={{
            fontSize: "27px",
            background:
              "linear-gradient(90deg, #888888 0%, #FFFFFF 8%, #FFFFFF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Learn The Exact System We Used To Go From Door To Door To $12.2M+ In
          High Ticket Sales
        </h1>

        <h2
          className="font-bold text-center leading-tight mb-8 max-w-4xl"
          style={{
            fontSize: "20px",
            background:
              "linear-gradient(90deg, #888888 0%, #FFFFFF 8%, #FFFFFF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          And How You Can Do It Too
        </h2>

        {/* YouTube video */}
        <div className="relative w-full max-w-2xl aspect-video mb-12">
          {/* Video container */}
          <div
            className="relative z-10 w-full h-full shadow-lg"
            style={{ border: "2px solid #dc2626" }}
          >
            <WistiaPlayer
              media-id="z3z253lf9h"
              aspect="1.7777777777777777"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={scrollToCalendly}
          className="text-2xl md:text-3xl font-bold py-3 px-10 rounded shadow-lg transition hover:opacity-90 cursor-pointer border-none mb-4 inline-flex items-center gap-2"
          style={{
            background: "linear-gradient(90deg, #ff6b6b 0%, #dc2626 100%)",
            color: "white",
          }}
          aria-label="Book a call"
        >
          <span>Apply Now</span>
          {/* Inline arrow icon component */}
          <IconArrow size="1.1em" stroke="white" strokeWidth={2} />
        </button>
      </div>

      <style jsx>{`
        h1 {
          font-size: 27px;
        }

        @media (min-width: 768px) {
          h1 {
            font-size: 33px;
          }
        }

        @media (min-width: 1024px) {
          h1 {
            font-size: 42px;
          }
        }

        h2 {
          font-size: 20px;
        }

        @media (min-width: 768px) {
          h2 {
            font-size: 24px;
          }
        }

        @media (min-width: 1024px) {
          h2 {
            font-size: 28px;
          }
        }

        wistia-player[media-id="z3z253lf9h"]:not(:defined) {
          background: center / contain no-repeat
            url("https://fast.wistia.com/embed/medias/z3z253lf9h/swatch");
          display: block;
          filter: blur(5px);
          padding-top: 56.25%;
        }
      `}</style>
    </section>
  );
}
