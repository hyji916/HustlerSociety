"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import WistiaPlayer from "./WistiaPlayer";
import IconArrow from "./IconArrow";

type Particle = {
  id: number;
  width: number;
  height: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
};

export default function Hero() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [videoParticles, setVideoParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particles on client side only
    const mainParticles = [...Array(30)].map((_, i) => ({
      id: i,
      width: 2 + Math.random() * 3,
      height: 2 + Math.random() * 3,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 4 + Math.random() * 6,
      delay: Math.random() * 3,
    }));

    const videoParticleArray = [...Array(20)].map((_, i) => ({
      id: i,
      width: 1 + Math.random() * 2,
      height: 1 + Math.random() * 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 1.5 + Math.random() * 2,
      delay: Math.random() * 2,
    }));

    setParticles(mainParticles);
    setVideoParticles(videoParticleArray);
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
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Grid background that fades out */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(ellipse 60% 50% at center, black 20%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 50% at center, black 20%, transparent 70%)",
          }}
        />
      </div>

      {/* White particle animations */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute bg-white rounded-full opacity-60"
            style={{
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animation: `floatWhite ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Brand logo at top */}
      <div className="relative z-10 flex flex-col items-center pt-0 md:pt-6">
        <Image
          src="/static/images/logo_transparent.png"
          alt="Brand Logo"
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
                "linear-gradient(to right, transparent 0%, #9CA3AF 25%, #018DFB 50%, #9CA3AF 75%, transparent 100%)",
            }}
          />
        </div>
      </div>

      {/* Main content - moved closer to logo */}
      <div className="relative z-10 flex flex-col items-center justify-start px-4 pt-4 md:pt-8">
        {/* Updated headline with bigger font size and gradient */}
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight mb-2 max-w-5xl"
          style={{
            background:
              "linear-gradient(90deg, #888888 0%, #FFFFFF 8%, #FFFFFF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Here&apos;s Why You Should Take Your Next Event To The{" "}
          <em
            style={{
              background: "linear-gradient(90deg, #018DFB 0%, #88e2ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            NXT LEVEL
          </em>
        </h1>
        <h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center leading-tight mb-10 md:mb-14 max-w-5xl"
          style={{
            background:
              "linear-gradient(90deg, #888888 0%, #FFFFFF 12%, #FFFFFF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          With a Venue Built For Impact And Powered by{" "}
          <em
            style={{
              background: "linear-gradient(90deg, #018DFB 0%, #88e2ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            NXT LEVEL
          </em>{" "}
          Production
        </h2>

        {/* YouTube video with enhanced grid effect */}
        <div className="relative w-full max-w-2xl aspect-video mb-12">
          {/* Concentrated grid behind video */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
                `,
                backgroundSize: "30px 30px",
                animation: "gridPulse 2s ease-in-out infinite alternate",
              }}
            />
          </div>

          {/* Additional white particles around video */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded">
            {videoParticles.map((particle) => (
              <div
                key={`video-particle-${particle.id}`}
                className="absolute bg-white rounded-full opacity-40"
                style={{
                  width: `${particle.width}px`,
                  height: `${particle.height}px`,
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  animation: `twinkle ${particle.duration}s ease-in-out infinite`,
                  animationDelay: `${particle.delay}s`,
                }}
              />
            ))}
          </div>

          {/* Video container */}
          <div
            className="relative z-10 w-full h-full shadow-lg"
            style={{ border: "2px solid #018DFB" }}
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
            background: "linear-gradient(90deg, #018DFB 0%, #88e2ff 100%)",
            color: "white",
          }}
          aria-label="Book a call"
        >
          <span>Book Now</span>
          {/* Inline arrow icon component */}
          <IconArrow size="1.1em" stroke="white" strokeWidth={2} />
        </button>

        {/* Hosted Events Section */}
        <div className="flex flex-col items-center w-full">
          <p className="text-white text-lg font-medium mb-4">
            Hosted Over{" "}
            <span style={{ color: "#018DFB" }}>
              <strong className="text-2xl">100+</strong>
            </span>{" "}
            Events
          </p>

          {/* Location indicator */}
          <div className="flex items-center justify-center mb-4">
            <span className="text-2xl md:text-3xl mr-3 leading-none">📍</span>
            <span className="text-white text-xl md:text-2xl font-semibold">
              DFW
            </span>
          </div>

          {/* Full-width gradient line under hosted events */}
          <div className="w-full">
            <div
              className="h-px w-full"
              style={{
                background:
                  "linear-gradient(to right, transparent 0%, #9CA3AF 25%, #018DFB 50%, #9CA3AF 75%, transparent 100%)",
              }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        wistia-player[media-id="z3z253lf9h"]:not(:defined) {
          background: center / contain no-repeat
            url("https://fast.wistia.com/embed/medias/z3z253lf9h/swatch");
          display: block;
          filter: blur(5px);
          padding-top: 56.25%;
        }

        @keyframes floatWhite {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.6;
          }
          25% {
            transform: translateY(-15px) translateX(10px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-30px) translateX(-5px);
            opacity: 0.8;
          }
          75% {
            transform: translateY(-10px) translateX(15px);
            opacity: 0.4;
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }

        @keyframes gridPulse {
          0% {
            opacity: 0.8;
          }
          100% {
            opacity: 0.4;
          }
        }
      `}</style>
    </section>
  );
}
