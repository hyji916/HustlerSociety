"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import GallerySection from "./GallerySectionEnglish";

export default function ReviewsSectionEnglish() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "Before working with Julio, I was constantly putting out fires and tied to my desk 12 hours a day. My agency was making around $40K/month, but it was chaos. After installing his operating system, everything changed. We crossed $150K/month last quarter, and I actually bought back my time. The best part isn’t just the revenue, it’s that I can finally spend time with my family and still have the business grow without me. That kind of freedom is something I didn’t even know was possible before this program.",
      name: "Julian G.",
      avatar: "/static/images/JuliusPhoto.jpg",
      time: "2wks ago",
    },
    {
      text: "I joined the program when my agency was doing around $10K/month, which is good money, but I was still basically an employee inside my own company. Within the first 30 days, we scaled to $50K/month using Julio's systems for delegation and team management. The structure he helped me install completely shifted how I run things. Now my team handles client work and delivery, and I finally operate like a real CEO. This isn’t just about growth, it’s about taking control of my business.",
      name: "Kenny K.",
      avatar: "/static/images/MichaelPhoto.jpg",
      time: "1mo ago",
    },
    {
      text: "I’ve been running my creative agency for four years, and I thought I had it all figured out until Julio showed me how much money and time I was leaving on the table. We tightened up our processes, introduced real KPIs, and within 60 days, profit margins jumped by 50%. What I appreciated most was how practical everything was. This isn’t theory, it’s systems that make your company run smoother and scale faster. If you’re serious about building something sustainable, this is it.",
      name: "Jake N.",
      avatar: "/static/images/TreyPhoto.jpg",
      time: "3wks ago",
    },
    {
      text: "As someone who’s always been hands-on, letting go of control was hard for me. But once I implemented Julio's operating system, it became clear how much smoother things ran when I wasn’t in every detail. We now have clear accountability, weekly scorecards, and actual time to focus on strategy instead of micromanaging. The result speaks for itself. More clarity, less chaos, and a business that doesn’t fall apart when I step away. This is a life changer for any agency owner who wants to scale the right way.",
      name: "Daniel K.",
      avatar: "/static/images/DanielPhoto.jpg",
      time: "2mo ago",
    },
    {
      text: "When I started working with Julio, my agency was doing okay, around $25K/month, but everything relied on me. Within a few weeks, I realized how inefficient our systems were. After we rebuilt our client delivery and ops workflow, not only did revenue grow, but our fulfillment time dropped by 40%. It’s rare to find someone who can combine strategy with execution like this. If you’re tired of being stuck in your own business, this is the framework you need.",
      name: "Diego M.",
      avatar: "/static/images/SophiaPhoto.jpg",
      time: "1mo ago",
    },
  ];

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section
      className="py-0 relative overflow-hidden pb-16"
      style={{
        backgroundImage: `url('/backgroundpaper.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content with relative positioning */}
      <div className="relative z-10">
        {/* Success Stats */}
        {/* <div className="text-center mb-12">
          <p className="text-white text-lg font-medium mb-4">
            Trusted by{" "}
            <span style={{ color: "#dc2626" }}>
              <strong className="text-2xl">100+</strong>
            </span>{" "}
            Clients
          </p>
          <div className="w-full">
            <div
              className="h-px w-full"
              style={{
                background:
                  "linear-gradient(to right, transparent 0%, #9CA3AF 25%, #dc2626 50%, #9CA3AF 75%, transparent 100%)",
              }}
            />
          </div>
        </div> */}

        {/* Gallery inserted after Trusted stats + gradient */}
        {/* <GallerySection /> */}

        {/* full-width gradient divider between gallery and reviews header */}
        <div className="py-12">
          <div
            className="h-px w-full mb-0"
            style={{
              background:
                "linear-gradient(to right, transparent 0%, #9CA3AF 25%, #dc2626 50%, #9CA3AF 75%, transparent 100%)",
            }}
          />
        </div>

        {/* Reviews Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white text-black px-6 py-2 rounded-full mb-8">
            <span className="mr-2">📋</span>
            <span className="font-bold">REVIEWS</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
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
              Inside
            </span>{" "}
            <span style={{ color: "#dc2626", WebkitTextFillColor: "#dc2626" }}>
              <br /> Hustler&apos;s Society
            </span>
          </h2>

          <p className="text-gray-400 font-bold text-lg mb-2">
            AFTER WORKING WITH HUNDREDS OF PEOPLE WE LET OUR
          </p>
          <p className="text-gray-400 font-bold text-lg mb-4">RESULTS SPEAK</p>
        </div>

        {/* Manual Carousel */}
        <div className="relative max-w-4xl mx-auto px-4">
          {/* Testimonial Cards Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((review, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-black text-white border border-gray-600 p-8 rounded-lg min-h-[24rem] flex flex-col">
                    <div className="flex justify-center mb-6 md:mb-8 space-x-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          className="text-yellow-400 text-3xl md:text-4xl leading-none"
                          aria-hidden="true"
                        >
                          ⭐
                        </span>
                      ))}
                    </div>
                    <div className="flex-1 flex items-center flex-col">
                      <p className="text-base leading-relaxed text-center">
                        &quot;{review.text}&quot;
                      </p>
                    </div>
                    <div className="flex items-center justify-center mt-6">
                      <div className="w-14 h-14 rounded-full mr-4 overflow-hidden relative flex-shrink-0">
                        <Image
                          src={review.avatar}
                          alt={`${review.name} photo`}
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                      <div className="text-center">
                        <p className="font-semibold text-lg">{review.name}</p>
                        <p className="text-gray-600">{review.time}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-white scale-125"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
