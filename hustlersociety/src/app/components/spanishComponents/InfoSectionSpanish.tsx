"use client";

import React, { useState, useEffect } from "react";

const InfoSectionSpanish = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // 🧩 All your info blocks live here
  const infoBlocks = [
    {
      title: "How Luke Is Hitting $20k Months At 18 Years Old",
      description: `"Since joining, I went from knowing nothing about online business to signing multiple clients, charging up to $2k retainers, and shifting my mindset from thinking small to thinking abundantly."`,
      videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_1",
      reverse: false,
    },
    {
      title: "How Jose Graduated High School And Makes $60k/Month",
      description: `"Since joining, I scaled from 10k months to hitting 20k+, built AI-powered funnels for clients, and the community support fast-tracked my growth far beyond what I could've done alone."`,
      videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_2",
      reverse: false,
    },
    {
      title: "How Sarah Built A 6-Figure Agency In Under A Year",
      description: `"I never thought I could replace my 9-5 this quickly. The mentorship and frameworks gave me everything I needed to turn freelancing into a real business."`,
      videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
      reverse: false,
    },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>

      <section className="bg-black text-white py-0 md:py-0 px-5 md:px-12 space-y-8 pb-6 md:pb-8">
        {infoBlocks.map((info, index) => (
          <div key={index} className="animate-fadeIn">
            {/* Desktop View */}
            {!isMobile && (
              <div
                className="max-w-6xl mx-auto border border-zinc-700 rounded-2xl overflow-hidden"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(40, 0, 0, 0.4), rgba(0, 0, 0, 0.95))",
                }}
              >
                <div
                  className={`flex items-center justify-between gap-12 p-8 ${
                    info.reverse ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {/* Text */}
                  <div className="flex-1 space-y-6">
                    <h2 className="text-2xl md:text-3xl font-extrabold">
                      {info.title}
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {info.description}
                    </p>
                  </div>

                  {/* Video */}
                  <div className="flex-1">
                    <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                      <iframe
                        src={info.videoUrl}
                        title={info.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Mobile View */}
            {isMobile && (
              <div
                className="max-w-md mx-auto border border-zinc-700 rounded-2xl overflow-hidden"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(40, 0, 0, 0.4), rgba(0, 0, 0, 0.95))",
                }}
              >
                <div className="p-6 space-y-6">
                  {/* Video on top */}
                  <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src={info.videoUrl}
                      title={info.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  {/* Text below */}
                  <div className="space-y-4">
                    <h2 className="text-xl font-extrabold">{info.title}</h2>
                    <p className="text-gray-400 text-base leading-relaxed">
                      {info.description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </section>
    </>
  );
};

export default InfoSectionSpanish;
