"use client";

import { useEffect } from "react";

export default function BookingSectionEnglish() {
  useEffect(() => {
    // Load GoHighLevel / LeadConnector embed script for the booking iframe
    const script = document.createElement("script");
    script.src = "https://api.leadconnectorhq.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      try {
        document.body.removeChild(script);
      } catch {
        // ignore
      }
    };
  }, []);

  return (
    <section
      className="py-0 relative"
      style={{
        backgroundImage: `url('/backgroundpaper.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Gradient line at top */}
      <div className="py-0">
        <div
          className="h-px w-full mb-0"
          style={{
            background:
              "linear-gradient(to right, transparent 0%, #9CA3AF 25%, #018DFB 50%, #9CA3AF 75%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Book Your Call
          </h2>
          <p className="text-xl font-semibold" style={{ color: "#018DFB" }}>
            Book Your Call If You&apos;re Ready To Invest In Turning Big Ideas
            Into A Reality
          </p>
        </div>

        {/* Booking Widget Container - GoHighLevel / LeadConnector iframe */}
        <div className="bg-white rounded-lg shadow-2xl p-8 max-w-2xl mx-auto ghl-booking-widget">
          <iframe
            title="GoHighLevel Booking"
            src="https://api.leadconnectorhq.com/widget/booking/jT9UiwQus3hszbMEBYb4"
            style={{
              width: "100%",
              border: "none",
              overflow: "hidden",
              height: "700px",
            }}
            scrolling="no"
            id="jT9UiwQus3hszbMEBYb4_1759052864812"
          />
        </div>

        {/* Optional: Additional Info */}
        <div className="text-center mt-10">
          <p className="text-gray-400 text-sm">
            This call is all about your{" "}
            <span className="font-semibold text-white">Vision</span>. We&apos;ll
            talk through your plans, answer your questions, and see how <br />
            <em style={{ color: "#018DFB", WebkitTextFillColor: "#018DFB" }}>
              <span className="font-bold">The Lab</span>
            </em>{" "}
            can help bring it to life.
          </p>
        </div>
      </div>
    </section>
  );
}
