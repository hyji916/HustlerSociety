"use client";

import { useState, useEffect } from "react";

export default function TimerHeader() {
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
    <div
      className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800"
      style={{
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-center gap-2">
          <span className="text-white text-base font-medium uppercase tracking-wider">
            CHECK YOUR PHONE:
          </span>
          <span className="text-white text-base font-bold tabular-nums">
            {String(minutes).padStart(2, "0")}M {String(seconds).padStart(2, "0")}S
          </span>
        </div>
      </div>
    </div>
  );
}
