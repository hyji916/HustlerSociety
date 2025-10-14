"use client";

import { useState } from "react";
import WistiaPlayer from "../WistiaPlayer";
import { Highlighter } from "@/components/ui/highlighter";

interface FAQ {
  question: string;
  answer: string;
  videoId?: string;
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "How quickly will i make my $ back?",
      answer:
        "Honestly, it depends on how much effort you put in. Some people see results within weeks, others take a little longer. We give you everything to make it happen fast.",
      videoId: "z3z253lf9h", // Replace with actual video ID
    },
    {
      question: "How much money do I need to start?",
      answer:
        "You can start with as little as $500. We teach you how to scale gradually without requiring massive upfront investment.",
      videoId: "z3z253lf9h", // Replace with actual video ID
    },
    {
      question: "do i actively do the business model myself",
      answer:
        "Yes, you'll be hands-on in building and running your business. We provide all the training, systems, and support to help you succeed.",
      videoId: "z3z253lf9h", // Replace with actual video ID
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-center mb-12">
          <Highlighter
            action="underline"
            color="#018DFB"
            strokeWidth={8}
            animationDuration={800}
            padding={0}
          >
            STEP 2:
          </Highlighter>{" "}
          GO THROUGH OUR FREQUENTLY ASKED
          <br />
          QUESTIONS BELOW
        </h2>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                background:
                  openIndex === index
                    ? "rgba(60, 60, 60, 0.95)"
                    : "rgba(40, 40, 40, 0.9)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-opacity-80 transition-all duration-600"
              >
                <h3 className="text-lg md:text-xl font-bold text-white pr-4">
                  {faq.question}
                </h3>
                <div
                  className="flex-shrink-0 text-white text-2xl font-bold transition-transform duration-600"
                  style={{
                    transform:
                      openIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </div>
              </button>

              {/* Answer Content */}
              <div
                className="grid transition-all ease-in-out"
                style={{
                  gridTemplateRows: openIndex === index ? "1fr" : "0fr",
                  transitionDuration: "1200ms",
                }}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 space-y-4">
                    {/* Answer Text */}
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                      {faq.answer}
                    </p>

                    {/* Video Player */}
                    {faq.videoId && (
                      <div className="w-full">
                        <div
                          className="relative aspect-video rounded-lg overflow-hidden"
                          style={{
                            border: "2px solid rgba(1, 141, 251, 0.3)",
                            boxShadow: "0 0 20px rgba(1, 141, 251, 0.1)",
                          }}
                        >
                          <WistiaPlayer
                            media-id={faq.videoId}
                            className="w-full h-full"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
