"use client";

import Image from "next/image";
import IconArrow from "./IconArrow";

const cards = [
  {
    title: "The 7-Figure Operating System",
    desc: [
      "Plug in the exact systems and workflows I used to scale multiple 7-figure agencies — without the chaos or burnout.",
      "Build a business that runs on process, not personality, and frees you from daily firefighting.",
      "Finally operate like a true CEO with clear dashboards, automation, and accountability structures.",
    ],
    img: "/system.png",
  },
  {
    title: "Team & Time Freedom Framework",
    desc: [
      "Delegate with confidence and install proven management systems that reclaim 10–20 hours per week.",
      "Learn how to hire, train, and align A-player teams that execute without constant supervision.",
      "Transform your agency from a people dependent hustle into a performance driven machine.",
    ],
    img: "/team.png",
  },
  {
    title: "Profit Expansion Blueprint",
    desc: [
      "Double your margins by identifying hidden leaks in operations, pricing, and delivery.",
      "Leverage data backed decisions to scale sustainably not by working harder, but smarter.",
      "Shift from reactive cashflow to predictable profit, the hallmark of a real business owner.",
    ],
    img: "/profit.png",
  },
];

const scrollToCalendly = () => {
  const bookingSection = document.querySelector(".ghl-booking-widget");
  if (bookingSection) {
    bookingSection.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
};

export default function InfoCardsEnglish() {
  return (
    <section
      className="py-8 text-white relative overflow-hidden min-h-screen"
      style={{
        backgroundImage: `url('/backgroundpaper.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#000000",
      }}
    >
      <div className="relative z-10">
        <h2
          className="text-4xl font-bold text-center mb-10"
          style={{
            transform: "translateY(-5px)",
            background:
              "linear-gradient(90deg, #9CA3AF 0%, #FFFFFF 60%, #FFFFFF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          What's Inside of Hustler's Society
        </h2>

        <div className="max-w-4xl mx-auto px-8">
          <div className="space-y-8">
            {cards.map((card, i) => (
              <div
                key={i}
                className="text-white rounded-2xl shadow-xl overflow-hidden max-w-md mx-auto border-2 border-black"
              >
                {card.img && (
                  <div className="w-full h-80 md:h-[28rem] relative">
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#00121a]" />
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center text-white">
                    {card.title}
                  </h3>

                  <ul className="space-y-3 text-gray-300">
                    {card.desc.map((item, j) => (
                      <li key={j} className="flex items-center">
                        <span
                          className="mr-3 flex-shrink-0 text-2xl md:text-3xl leading-none text-[#88e2ff]"
                          aria-hidden="true"
                        >
                          ♦
                        </span>
                        <span className="text-sm leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center py-8 bg-black relative">
          <button
            onClick={scrollToCalendly}
            className="text-2xl md:text-3xl font-bold py-3 px-10 rounded shadow-lg transition hover:opacity-90 cursor-pointer border-none mb-4 inline-flex items-center gap-2"
            style={{
              background: "linear-gradient(90deg, #ff6b6b 0%, #dc2626 100%)",
              color: "white",
            }}
            aria-label="Book a call"
          >
            <span>Apply Now</span>
            {/* Inline arrow icon component */}
            <IconArrow size="1.1em" stroke="white" strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  );
}
