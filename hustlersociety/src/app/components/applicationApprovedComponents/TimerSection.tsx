"use client";

import { useState, useEffect } from "react";
import WistiaPlayer from "../WistiaPlayer";
import { Highlighter } from "@/components/ui/highlighter";

export default function TimerSection() {
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12 bg-black">
      <div className="max-w-5xl w-full text-center">
        {/* Congrats Badge */}
        <div className="flex justify-center mb-6">
          <div
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full"
            style={{
              background: "rgba(60, 60, 60, 0.8)",
              border: "2px solid rgba(255, 255, 255, 0.3)",
            }}
          >
            <span
              className="text-base font-bold uppercase tracking-wide px-4 py-1 rounded-full"
              style={{
                color: "white",
                background: "#018DFB",
                border: "none",
              }}
            >
              CONGRATS
            </span>
            <span className="text-white text-base font-medium">
              YOUR APPLICATION HAS BEEN
            </span>
            <span className="text-white text-base font-bold uppercase">
              APPROVED!
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl font-extrabold text-white mb-8 leading-tight">
          <span style={{ color: "#018DFB" }}>ATTENTION:</span>{" "}
          <span>YOU ARE GOING TO</span>
          <br />
          <span>RECEIVE A </span>
          <Highlighter
            action="underline"
            color="#018DFB"
            strokeWidth={8}
            animationDuration={800}
            padding={0}
          >
            PHONE CALL
          </Highlighter>
          <span> FROM MY</span>
          <br />
          <span>TEAM IN THE NEXT</span>
        </h1>

        {/* Countdown Timer */}
        <div className="flex items-center justify-center gap-4 mb-4">
          {/* Minutes */}
          <div className="flex flex-col items-center">
            <div className="text-8xl font-bold text-white tabular-nums">
              {String(minutes).padStart(2, "0")}
            </div>
            <div className="text-gray-400 text-base mt-2 uppercase tracking-wide">
              Minutes
            </div>
          </div>

          {/* Colon */}
          <div className="text-8xl font-bold text-white mb-8">
            :
          </div>

          {/* Seconds */}
          <div className="flex flex-col items-center">
            <div className="text-8xl font-bold text-white tabular-nums">
              {String(seconds).padStart(2, "0")}
            </div>
            <div className="text-gray-400 text-base mt-2 uppercase tracking-wide">
              Seconds
            </div>
          </div>
        </div>

        {/* Video Instruction */}
        <p className="text-white text-lg mb-6">
          Watch this{" "}
          <span
            className="font-bold px-3 py-1 rounded"
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
            }}
          >
            2 minute video
          </span>{" "}
          with sound
        </p>

        {/* Video Player */}
        <div className="max-w-3xl mx-auto">
          <div
            className="relative aspect-video rounded-2xl overflow-hidden"
            style={{
              border: "4px solid rgba(1, 141, 251, 0.3)",
              boxShadow: "0 0 30px rgba(1, 141, 251, 0.2)",
            }}
          >
            <WistiaPlayer media-id="z3z253lf9h" className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
