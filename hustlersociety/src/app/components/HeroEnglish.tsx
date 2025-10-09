"use client";

import { useEffect } from "react";
import Image from "next/image";
import WistiaPlayer from "./WistiaPlayer";

export default function HeroEnglish() {
  useEffect(() => {
    const playerScript = document.createElement("script");
    playerScript.src = "https://fast.wistia.com/player.js";
    playerScript.async = true;
    document.head.appendChild(playerScript);

    const embedScript = document.createElement("script");
    embedScript.src = "https://fast.wistia.com/embed/z3z253lf9h.js";
    embedScript.async = true;
    embedScript.type = "module";
    document.head.appendChild(embedScript);

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
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url('/backgroundpaper.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#0a0a0a",
        fontFamily: "Geistmono, Arial, sans-serif",
      }}
    >
      {/* Brand logo and congrats bar at top */}
      <div className="relative z-10 flex flex-col items-center pt-6 md:pt-14">
        {/* <Image
          src="/hustlersocietytransparentlogo.png"
          alt="Hustler Society Logo"
          width={120}
          height={120}
          className="h-16 md:h-20 lg:h-24 w-auto"
          style={{ objectFit: "contain" }}
          priority
        /> */}
        {/* Congratulations bar - moved up for mobile */}
        {/* <div
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full mt-0 mb-0 md:mb-3"
          style={{
            background: "rgba(220, 38, 38, 0.15)",
            border: "1px solid rgba(220, 38, 38, 0.3)",
          }}
        >
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: "#dc2626" }}
          />
          <span className="text-gray-300 text-sm md:text-base font-medium">
            Congrats! this free training is now yours:
          </span>
        </div> */}
        <div
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full mt-2 mb-0 md:mb-3 md:px-10 lg:px-12"
          style={{
            background: "rgba(220, 38, 38, 0.15)",
            border: "1px solid rgba(220, 38, 38, 0.3)",
            maxWidth: "90%", // keep responsive control
          }}
        >
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: "#dc2626" }}
          />
          <span className="text-gray-300 text-sm md:text-base font-medium text-center">
            Congrats! this free training is now yours:
          </span>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-start px-4 pt-2 md:pt-1">
        {/* Hook headline - 1040x88px on desktop, responsive on mobile */}
        <h1
          className="custom-hook-headline mb-6"
          style={{
            color: "white",
            letterSpacing: "-0.07em",
            fontWeight: 800,
            width: "100%",
          }}
        >
          <span style={{ width: "100%" }}>
            LEARN HOW ME AND{" "}
            <span style={{ color: "#dc2626" }}>HUNDREDS OF OTHERS</span> ARE
            CASHING OUT THIS Q4 USING THIS{" "}
            <span style={{ color: "#dc2626" }}>ONE SKILL:</span>
          </span>
        </h1>

        {/* Video prompt */}
        <p
          className="text-white text-center italic font-semibold whitespace-nowrap"
          style={{
            fontSize: "20px",
            marginTop: "-8px",
            marginBottom: "16px",
            letterSpacing: "-0.01em",
          }}
        >
          (Click play on the video below to watch)
        </p>

        {/* Video with border - less wide on desktop */}
        <div
          className="relative mb-4 custom-video-container"
          style={{
            border: "4px solid rgba(156,163,175,0.35)", // gray-400 with transparency
            borderRadius: "18px",
            background: "rgba(17, 24, 39, 0.35)", // matches dark bg with transparency
            boxShadow: "0 2px 16px 0 rgba(0,0,0,0.12)",
            overflow: "hidden",
          }}
        >
          <div className="absolute inset-0 z-10 w-full h-full">
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
          className="text-base md:text-xl font-bold py-2 px-16 rounded-full shadow-2xl transition hover:opacity-90 cursor-pointer border-none mb-4 uppercase tracking-tight"
          style={{
            background: "white",
            color: "black",
          }}
          aria-label="Apply now"
        >
          <strong>Apply Now</strong>
        </button>

        {/* Social proof */}
        <div className="flex items-center gap-2 mb-12">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-5 h-5 rounded-full border-2 border-gray-900"
                style={{
                  background: `linear-gradient(135deg, #${Math.floor(
                    Math.random() * 16777215
                  ).toString(16)} 0%, #${Math.floor(
                    Math.random() * 16777215
                  ).toString(16)} 100%)`,
                }}
              />
            ))}
          </div>
          <span className="text-gray-400 text-sm">
            Join Over <strong className="text-white">100+ People</strong>{" "}
            Worldwide
          </span>
        </div>
      </div>

      <style jsx>{`
        h1 {
          font-size: 24px; /* smaller for mobile */
          line-height: 1.15;
        }

        @media (min-width: 768px) {
          h1 {
            font-size: 34px; /* tablet */
            line-height: 1.1;
          }
        }

        @media (min-width: 1024px) {
          h1 {
            font-size: 44px; /* desktop */
            line-height: 1.05;
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
