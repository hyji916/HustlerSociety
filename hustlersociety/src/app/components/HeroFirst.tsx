"use client";

import { useEffect, useState } from "react";
import { Highlighter } from "@/components/ui/highlighter";
import WistiaPlayer from "./WistiaPlayer";

export default function HeroFirst() {
  const [showPopup, setShowPopup] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Set mounted to true after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle redirect after form submission
  useEffect(() => {
    const listener = (event: MessageEvent) => {
      console.log("📩 Received message:", event.data);

      // Check for form submission
      if (event.data && event.origin.includes("leadconnectorhq.com")) {
        // Log all events to see what GHL sends
        if (event.data.type || event.data.event || event.data.eventName) {
          console.log("GHL Event detected:", event.data);
        }

        // Check various submission patterns
        if (
          event.data.type === "hsFormCallback" ||
          event.data.event === "onFormSubmitted" ||
          event.data.type === "form_submitted" ||
          (event.data.payload && event.data.payload.formSubmitted)
        ) {
          console.log("✅ Form submitted! Redirecting...");
          setTimeout(() => {
            window.location.href = "/english";
          }, 1000);
        }
      }
    };

    window.addEventListener("message", listener);
    return () => window.removeEventListener("message", listener);
  }, []);

  // Open popup
  const openForm = () => {
    console.log("🔘 Apply Now button clicked");
    setShowPopup(true);
    document.body.style.overflow = "hidden";
  };

  // Close popup
  const closeForm = () => {
    console.log("❌ Closing form");
    setShowPopup(false);
    document.body.style.overflow = "auto";
  };

  return (
    <section
      className="relative overflow-hidden flex flex-col items-center justify-start px-4 pt-10 md:pt-16 text-center"
      style={{
        backgroundImage: `url('/backgroundpaper.PNG')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#0a0a0a",
        fontFamily: "Geistmono, Arial, sans-serif",
        minHeight: "100vh",
      }}
    >
      {/* --- Top Banner --- */}
      <div className="relative z-10 flex flex-col items-center mb-6">
        <div
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full mt-2 md:mb-3 md:px-10 lg:px-10"
          style={{
            background: "rgba(220, 38, 38, 0.15)",
            border: "1px solid rgba(220, 38, 38, 0.3)",
            maxWidth: "90%",
          }}
        >
          <span className="text-white text-xs md:text-base font-bold text-center">
            WATCH NOW BEFORE THIS GETS TAKEN DOWN‼️
          </span>
        </div>
      </div>

      {/* --- Headline --- */}
      <h1
        className="custom-hook-headline mb-6"
        style={{
          color: "white",
          letterSpacing: "-0.07em",
          fontWeight: 900,
          width: "100%",
        }}
      >
        <span style={{ width: "100%", fontWeight: 900 }}>
          HOW THIS{" "}
          <span
            className="italic"
            style={{ color: "#dc2626", fontWeight: 900 }}
          >
            ONE SKILL
          </span>{" "}
          TOOK ME FROM A BROKE TIRED WAITER TO MAKING{" "}
          <Highlighter
            action="underline"
            color="#dc2626"
            strokeWidth={4}
            animationDuration={800}
            padding={0}
          >
            <span style={{ fontWeight: 900 }}>8 FIGURES</span>
          </Highlighter>{" "}
          <span
            className="italic"
            style={{ color: "#dc2626", fontWeight: 900 }}
          >
            ONLINE
          </span>
        </span>
      </h1>

      {/* --- Video Prompt --- */}
      <p className="text-lg text-white md:text-xl italic font-semibold mb-4">
        (Click play on the video below to watch)
      </p>

      {/* --- Video --- */}
      <div
        className="relative mb-8 custom-video-container"
        style={{
          border: "4px solid rgba(156,163,175,0.35)",
          borderRadius: "18px",
          background: "rgba(17, 24, 39, 0.35)",
          boxShadow: "0 2px 16px 0 rgba(0,0,0,0.12)",
          overflow: "hidden",
          width: "90%",
          maxWidth: "640px",
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

      {/* --- CTA Button --- */}
      <button
        onClick={openForm}
        className="text-base md:text-xl font-bold py-2 px-16 rounded-full shadow-2xl transition hover:opacity-90 cursor-pointer border-none mb-4 uppercase tracking-tight"
        style={{
          background: "white",
          color: "black",
        }}
        aria-label="Apply now"
      >
        <strong>Unlock The Mini Course</strong>
      </button>

      {/* --- Social Proof --- */}
      <div className="flex items-center gap-2 mb-12">
        <div className="flex -space-x-2">
          {mounted
            ? // Client-side only: random gradients
              [1, 2, 3].map((i) => (
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
              ))
            : // SSR placeholder
              [1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-5 h-5 rounded-full border-2 border-gray-900 bg-gray-700"
                />
              ))}
        </div>
        <span className="text-gray-400 text-sm">
          Join Over <strong className="text-white">100+ Hustlers</strong>
        </span>
      </div>

      {/* --- Popup Overlay --- */}
      {showPopup && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{
            background: "rgba(0, 0, 0, 0.85)",
            backdropFilter: "blur(4px)",
          }}
          onClick={(e) => {
            // Close if clicking the backdrop
            if (e.target === e.currentTarget) {
              closeForm();
            }
          }}
        >
          {/* Close Button */}
          <button
            onClick={closeForm}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white text-3xl font-bold hover:text-gray-300 transition-colors z-[10001]"
            aria-label="Close form"
          >
            ✕
          </button>

          {/* Form Container */}
          <div
            className="relative w-full max-w-2xl mx-4"
            style={{
              maxHeight: "90vh",
              overflow: "auto",
            }}
          >
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/KPR1tIJKO8JvEMqA3EMb"
              style={{
                width: "100%",
                height: "650px",
                border: "none",
                borderRadius: "8px",
              }}
              title="Application Form"
            />
          </div>
        </div>
      )}

      <style jsx>{`
        h1 {
          font-size: 24px;
          line-height: 1.15;
        }

        @media (min-width: 768px) {
          h1 {
            font-size: 34px;
            line-height: 1.1;
          }
        }

        @media (min-width: 1024px) {
          h1 {
            font-size: 44px;
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
