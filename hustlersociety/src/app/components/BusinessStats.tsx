"use client";

import React, { useEffect, useRef, useState } from "react";
import { TrendingUp, DollarSign, Users, Calendar } from "lucide-react";

interface StatCard {
  id: string;
  title: string;
  value: string;
  subtitle: string;
  count?: number;
  period: string;
  icon: React.ReactNode;
  trend?: number[];
}

export default function BusinessStats(): JSX.Element {
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const stats: StatCard[] = [
    {
      id: "card-1",
      title: "Sales Information",
      value: "$335 USD",
      subtitle: "Total PayPal Sales",
      count: 7,
      period: "3/1/16 - 3/31/16",
      icon: <DollarSign className="w-8 h-8" />,
    },
    {
      id: "card-2",
      title: "Sales Information",
      value: "$2,225 USD",
      subtitle: "Total PayPal Sales",
      count: 43,
      period: "3/1/17 - 3/31/17",
      icon: <DollarSign className="w-8 h-8" />,
    },
    {
      id: "card-3",
      title: "Sales Information",
      value: "$16,680 USD",
      subtitle: "Total PayPal Sales",
      count: 296,
      period: "3/1/18 - 3/31/18",
      icon: <DollarSign className="w-8 h-8" />,
    },
    {
      id: "card-4",
      title: "Reports Overview",
      value: "$43,687.67",
      subtitle: "Gross Volume",
      period: "Mar 1, 2019 - Mar 29, 2019",
      icon: <TrendingUp className="w-8 h-8" />,
      trend: [30, 45, 35, 50, 45, 60, 55, 70, 65, 75],
    },
    {
      id: "card-5",
      title: "Today",
      value: "USD 33.2K",
      subtitle: "Gross Volume",
      count: 71,
      period: "Payments",
      icon: <Calendar className="w-8 h-8" />,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = entry.target.getAttribute("data-card-id");
            if (cardId) {
              setVisibleCards((prev) => new Set([...prev, cardId]));
            }
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const setCardRef = (id: string, element: HTMLDivElement | null) => {
    if (element) {
      cardRefs.current.set(id, element);
    } else {
      cardRefs.current.delete(id);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-black py-20 px-4 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50" />

      {/* Grid background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            MY <span className="text-emerald-500">BUSINESS</span>{" "}
            <span className="text-white">EVOLUTION</span>
          </h2>
          <p className="text-gray-400 text-xl">Tracking Growth Over Time</p>
        </div>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {stats.slice(0, 3).map((stat, index) => (
            <div
              key={stat.id}
              ref={(el) => setCardRef(stat.id, el)}
              data-card-id={stat.id}
              className={`transform transition-all duration-700 ease-out ${
                visibleCards.has(stat.id)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-emerald-500 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 h-full">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-400 text-sm">{stat.period}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-gray-400 text-sm mb-2">{stat.title}</h3>

                {/* Main Value */}
                <div className="mb-4">
                  <p className="text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-gray-500 text-sm">{stat.subtitle}</p>
                </div>

                {/* Count */}
                {stat.count && (
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-emerald-500" />
                    <span className="text-2xl font-semibold text-emerald-500">
                      {stat.count}
                    </span>
                    <span className="text-gray-500 text-sm">transactions</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row - Wider Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {stats.slice(3).map((stat, index) => (
            <div
              key={stat.id}
              ref={(el) => setCardRef(stat.id, el)}
              data-card-id={stat.id}
              className={`transform transition-all duration-700 ease-out ${
                visibleCards.has(stat.id)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: `${(index + 3) * 150}ms` }}
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-emerald-500 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 h-full">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">
                    {stat.title}
                  </h3>
                  <div className="text-emerald-500">{stat.icon}</div>
                </div>

                {/* Content */}
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-4xl font-bold text-white mb-2">
                      {stat.value}
                    </p>
                    <p className="text-gray-400 text-sm mb-1">
                      {stat.subtitle}
                    </p>
                    {stat.count && (
                      <p className="text-emerald-500 font-semibold">
                        {stat.count} {stat.period}
                      </p>
                    )}
                    {!stat.count && (
                      <p className="text-gray-500 text-sm">{stat.period}</p>
                    )}
                  </div>

                  {/* Mini trend chart */}
                  {stat.trend && (
                    <div className="flex items-end gap-1 h-16">
                      {stat.trend.map((value, i) => (
                        <div
                          key={i}
                          className="bg-gradient-to-t from-emerald-500 to-emerald-300 rounded-t w-2 transition-all duration-300 hover:from-emerald-400 hover:to-emerald-200"
                          style={{
                            height: `${value}%`,
                            animationDelay: `${i * 50}ms`,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
