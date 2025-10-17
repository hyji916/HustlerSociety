"use client";

import { useEffect, useState } from "react";
import { Highlighter } from "@/components/ui/highlighter";
import WistiaPlayer from "./WistiaPlayer";

declare global {
  interface Window {
    _wq?: any[];
  }
}

export default function HeroEnglish() {
  const [videoCompleted, setVideoCompleted] = useState(false);
  const [watchedPercent, setWatchedPercent] = useState(0);

  useEffect(() => {
    const setupWistiaPlayer = () => {
      const playerElement = document.querySelector(
        'wistia-player[media-id="z3z253lf9h"]'
      ) as any;

      if (playerElement && playerElement._video) {
        const video = playerElement._video;
        console.log("🎥 Wistia player found and ready!");

        // Track progress
        video.bind("timechange", function (t: number) {
          const duration = video.duration();
          if (duration > 0) {
            const percent = t / duration;
            const percentRounded = Math.round(percent * 100);
            setWatchedPercent(percentRounded);

            // Unlock when user reaches 95%
            if (percent >= 0.95 && !videoCompleted) {
              console.log("✅ Video 95% complete - unlocking button!");
              setVideoCompleted(true);
            }
          }
        });

        // Ensure it unlocks if user reaches the end
        video.bind("end", function () {
          console.log("🎬 Video ended - unlocking button!");
          setVideoCompleted(true);
        });
      } else {
        // Retry if player not ready yet
        setTimeout(setupWistiaPlayer, 500);
      }
    };

    // Delay setup to ensure Wistia has loaded
    const timeout = setTimeout(setupWistiaPlayer, 1000);
    return () => clearTimeout(timeout);
  }, [videoCompleted]);

  const scrollToApplySection = () => {
    if (!videoCompleted) {
      alert("⏸️ Please finish watching the video before applying!");
      return;
    }

    const applySection = document.getElementById("apply-section");
    if (applySection) {
      applySection.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url('/backgroundpaper.PNG')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#0a0a0a",
        fontFamily: "Geistmono, Arial, sans-serif",
      }}
    >
      {/* Header */}
      <div className="relative z-10 flex flex-col items-center pt-6 md:pt-14">
        <div
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full mt-2 mb-0 md:mb-3 md:px-10 lg:px-10"
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

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-start px-4 pt-2 md:pt-1">
        {/* Headline */}
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
            <span className="italic" style={{ color: "#dc2626" }}>
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
            <span className="italic" style={{ color: "#dc2626" }}>
              ONLINE
            </span>
          </span>
        </h1>

        {/* Video text */}
        <p
          className="text-lg text-white md:text-xl text-center italic font-semibold whitespace-nowrap"
          style={{ marginTop: "-8px", marginBottom: "16px" }}
        >
          (Click play on the video below to watch)
        </p>

        {/* Video */}
        <div
          className="relative mb-4 custom-video-container"
          style={{
            border: "4px solid rgba(156,163,175,0.35)",
            borderRadius: "18px",
            background: "rgba(17, 24, 39, 0.35)",
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
          onClick={scrollToApplySection}
          disabled={!videoCompleted}
          className="text-base md:text-xl font-bold py-2 px-16 rounded-full shadow-2xl transition border-none mb-2 uppercase tracking-tight"
          style={{
            background: videoCompleted ? "white" : "rgba(255, 255, 255, 0.3)",
            color: videoCompleted ? "black" : "rgba(0, 0, 0, 0.4)",
            cursor: videoCompleted ? "pointer" : "not-allowed",
            opacity: videoCompleted ? 1 : 0.5,
          }}
        >
          {videoCompleted ? "Apply Now" : "Watch Video to Apply"}
        </button>

        {/* Progress feedback */}
        {!videoCompleted && watchedPercent > 0 && (
          <p className="text-gray-400 text-sm mb-4">
            Video progress: {watchedPercent}%
          </p>
        )}
        {videoCompleted && (
          <p className="text-green-500 text-sm mb-4 font-semibold">
            ✅ Video completed! Click to apply
          </p>
        )}

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
            Join Over <strong className="text-white">100+ Hustlers</strong>
          </span>
        </div>
      </div>

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
