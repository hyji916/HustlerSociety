"use client";

import React, { useState, useEffect } from "react";

const TestimonialSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const testimonials = [
    {
      videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_1",
      quote:
        "I joined with zero knowledge on ads and the course has helped me tremendously I joined with zero knowledge on ads and the course has helped me tremendously I joined with zero knowledge on ads and the course has helped me tremendously I joined with zero knowledge on ads and the course has helped me tremendously",
    },
    {
      videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_2",
      quote:
        "Since joining, I went from knowing nothing to signing multiple clients and charging up to $2k retainers",
    },
    {
      videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
      quote:
        "The community support fast-tracked my growth far beyond what I could've done alone",
    },
    {
      videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_4",
      quote:
        "I scaled from 10k months to hitting 20k+ and built AI-powered funnels for clients",
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

      <section className="bg-black text-white py-12 px-6 md:px-12">
        {/* Header with red dot badge */}
        <div className="max-w-6xl mx-auto text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-zinc-900 border border-zinc-800">
              <div className="w-2 h-2 rounded-full bg-red-600" />
              <span className="text-white text-sm font-medium uppercase tracking-wide">
                Testimonials
              </span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase mb-2">
            Hear What Our Students
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase">
            Have To Say...
          </h2>
        </div>

        {/* Testimonial Grid */}
        <div className="max-w-6xl mx-auto">
          {!isMobile ? (
            /* Desktop View - 2 columns */
            <div className="grid grid-cols-2 gap-6 mb-12">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden animate-fadeIn"
                >
                  {/* Video */}
                  <div className="relative w-full max-h-[400px] min-h-[300px] overflow-hidden">
                    <iframe
                      src={testimonial.videoUrl}
                      title={`Testimonial ${index + 1}`}
                      className="w-full h-[400px]"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  {/* Quote */}
                  <div className="p-6">
                    <p className="text-gray-300 italic text-base leading-relaxed">
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Mobile View - 1 column */
            <div className="space-y-6 mb-12">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden animate-fadeIn max-w-md mx-auto"
                >
                  {/* Video */}
                  <div className="relative w-full max-h-[400px] min-h-[300px] overflow-hidden">
                    <iframe
                      src={testimonial.videoUrl}
                      title={`Testimonial ${index + 1}`}
                      className="w-full h-[400px]"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  {/* Quote */}
                  <div className="p-6">
                    <p className="text-gray-300 italic text-base leading-relaxed">
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;
