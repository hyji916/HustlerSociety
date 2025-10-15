"use client";
export default function CtaButtonComponent() {
  const scrollToCalendly = () => {
    const bookingSection = document.querySelector(".ghl-booking-widget");
    if (bookingSection) {
      bookingSection.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };
  {
    /* Apply CTA Button - Hero Style */
  }
  return (
    <div className="max-w-2xl mx-auto  text-center animate-fadeIn">
      <button
        onClick={scrollToCalendly}
        className="text-base md:text-xl font-bold py-2 px-16 rounded-full shadow-2xl transition hover:opacity-90 cursor-pointer border-none mb-4 uppercase tracking-tight"
        style={{
          background: "white",
          color: "black",
        }}
        aria-label="Apply now"
      >
        <strong>Apply Now</strong>
      </button>

      {/* Social proof */}
      <div className="flex items-center justify-center gap-2">
        <div className="flex -space-x-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-5 h-5 rounded-full border-2 border-gray-900"
              suppressHydrationWarning
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
          Join Over <strong className="text-white">300+ People</strong>{" "}
          Worldwide
        </span>
      </div>
    </div>
  );
}
