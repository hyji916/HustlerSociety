"use client";

import { useState } from "react";
import Image from "next/image";
import IconArrow from "./IconArrow";

export default function FAQPrivacySection() {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const faqs = [
    {
      question: "Who is this program actually for?",
      answer:
        "This is built for agency owners doing at least $10K/month who are ready to step out of day-to-day operations and scale with systems. Whether you’re running a marketing, creative, or service-based agency, if you’re still the bottleneck — this operating system was built for you. The best way to see if it’s a fit is to book a quick strategy call and we’ll walk you through how it applies to your model.",
    },
    {
      question: "How does the program actually work?",
      answer:
        "We help you install the exact systems, processes, and leadership frameworks I used to scale multiple 7-figure companies. It’s not just training — it’s implementation. We build the structure, workflows, and dashboards with you so you can immediately start running your business like a real CEO. On our call, we’ll map out what that would look like for your agency specifically.",
    },
    {
      question: "How long until I start seeing results?",
      answer:
        "Most clients start seeing major clarity and regained time within the first 2–4 weeks. Revenue growth typically follows right after once systems start running without you. But this depends on your current setup, team size, and offer. On the call, we’ll break down exactly what your timeline would look like and how fast we can roll out your operating system.",
    },
    {
      question: "What kind of results are people getting?",
      answer:
        "Clients who’ve implemented this system have scaled from $10K to $50K/month in their first month, doubled profit margins, and cut their workload by 10–20 hours a week. The goal isn’t just more money — it’s freedom and control. You can see their full results on the call, where we’ll show you case studies and help you understand what’s possible for your agency.",
    },
    {
      question: "What’s the investment to join?",
      answer:
        "It depends on the level of implementation support you need — whether you just want the framework or full hands-on setup with our team. We don’t do one-size-fits-all pricing because every agency is at a different stage. Book a quick call and we’ll break down the options transparently so you know exactly what makes sense for you.",
    },
    {
      question: "Do I need a team already to make this work?",
      answer:
        "No. We help both solo founders and established agency teams. If you’re solo, we’ll help you prepare your systems so hiring becomes easy. If you already have a team, we’ll plug in management and accountability systems so they perform without constant oversight. Either way, we’ll show you how this works for your setup on the call.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndices((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const handlePrivacyClick = () => {
    window.open(
      "https://www.freeprivacypolicy.com/live/7dc52fbf-080d-40f6-ab68-843655dbc95f",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleDisclaimerClick = () => {
    window.open(
      "https://www.freeprivacypolicy.com/live/c9d47d2a-1c5b-446d-8408-d433f2eea443",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      className="relative"
      style={{
        backgroundImage: `url('/backgroundpaper.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="py-12">
        <div
          className="h-px w-full mb-0"
          style={{
            background:
              "linear-gradient(to right, transparent 0%, #9CA3AF 25%, #018DFB 50%, #9CA3AF 75%, transparent 100%)",
          }}
        />
      </div>
      {/* Dark texture background */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-gradient-to-br"></div>
      </div>

      <div className="relative z-10">
        {/* FAQ Section */}
        <div className="py-4 max-w-4xl mx-auto px-4">
          {/* FAQ Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white text-black px-6 py-2 rounded-full mb-6">
              <span className="mr-2">📋</span>
              <span className="font-bold">FAQ&apos;s</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              <span
                style={{ color: "#dc2626", WebkitTextFillColor: "#dc2626" }}
              >
                YOU HAVE QUESTIONS,
              </span>
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #BDBDBD 0%, #FFFFFF 10%, #FFFFFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                  display: "inline-block",
                }}
              >
                WE HAVE ANSWERS
              </span>
            </h2>
          </div>

          {/* FAQ Cards */}
          <div className="space-y-4 mb-12">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden"
                style={{ border: "2px solid #dc2626" }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-4 text-black font-bold text-sm md:text-base flex justify-between items-center hover:bg-gray-100 transition-colors"
                >
                  <span>{faq.question}</span>
                  <span className="text-black text-xl">
                    {openIndices.includes(index) ? "▲" : "▼"}
                  </span>
                </button>

                {openIndices.includes(index) && (
                  <div
                    className="px-6 py-4 bg-white text-black border-t"
                    style={{ borderColor: "#dc2626" }}
                  >
                    <p className="text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mb-4">
            <button
              onClick={() => {
                const bookingSection = document.querySelector(
                  ".ghl-booking-widget"
                );
                if (bookingSection) {
                  bookingSection.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }
              }}
              className="text-2xl md:text-3xl font-bold py-3 px-10 rounded shadow-lg transition hover:opacity-90 cursor-pointer border-none mb-4 inline-flex items-center gap-2"
              style={{
                background: "linear-gradient(90deg, #ff6b6b 0%, #dc2626 100%)",
                color: "white",
              }}
              aria-label="Apply now"
            >
              <span>Apply Now</span>
              <IconArrow size="1.05em" stroke="white" strokeWidth={2} />
            </button>
          </div>
        </div>
        <div className="py-0">
          <div
            className="h-px w-full mb-0"
            style={{
              background:
                "linear-gradient(to right, transparent 0%, #9CA3AF 25%, #018DFB 50%, #9CA3AF 75%, transparent 100%)",
            }}
          />
        </div>
        {/* Footer Section */}
        <div className="py-0 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Logo/Brand Section */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center">
                <Image
                  src="/hustlersocietytransparentlogo.png"
                  alt="Hustler Society Logo"
                  width={150}
                  height={150}
                  priority
                />
              </div>
            </div>

            {/* Privacy Policy and Disclaimer Links */}
            <div className="flex justify-center space-x-4 mb-8">
              <button
                onClick={handlePrivacyClick}
                className="text-white hover:text-gray-200 transition-colors duration-200 underline cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                onClick={handleDisclaimerClick}
                className="text-white hover:text-gray-200 transition-colors duration-200 underline cursor-pointer"
              >
                Terms & Conditions
              </button>
            </div>

            {/* Disclaimer Text */}
            <div className="text-xs text-gray-300 leading-relaxed max-w-6xl mx-auto text-center mb-8">
              <p className="mb-4">
                <strong>NOT AFFILIATED WITH META™ OR OTHER PLATFORMS:</strong>{" "}
                This site is not a part of the Facebook™ website, Facebook Inc.,
                Meta Platforms Inc., or any other advertising or social media
                platform. Additionally, this site is NOT endorsed by Facebook™,
                Instagram™, YouTube™, or any platform in any way. All related
                trademarks are the property of their respective owners.
              </p>

              <p className="mb-4">
                <strong>DISCLAIMER:</strong> The events, productions, and
                results showcased on this website, funnels, advertisements, or
                materials are examples of real projects executed at The Lab.
                These are provided strictly for illustrative purposes and should
                not be taken as typical, average, or guaranteed outcomes. Each
                event or production is unique, and results depend on many
                factors outside of our control, including but not limited to:
                your event objectives, guest turnout, marketing efforts,
                creative direction, and budget. Booking space or production
                services with The Lab does not guarantee audience size, sales,
                media reach, or engagement outcomes. Our role is to provide
                professional venue facilities and production support — the
                overall success of your event or content depends on your
                planning, promotion, and execution. By using this site, booking
                a consultation, or engaging our services, you acknowledge and
                accept that all events and productions involve risk, and no
                specific results are promised or implied.
              </p>

              <p>© 2025 Hustler Society. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
