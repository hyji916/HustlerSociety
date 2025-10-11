"use client";

import React from "react";
import { Globe } from "lucide-react";
import Image from "next/image";

type Language = "spanish" | "english";

export default function LandingPage() {
  const handleLanguageSelect = (language: Language): void => {
    window.location.href = `/${language}`;
  };

  return (
    <div
      className="min-h-screen flex flex-col relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('/landingpagebg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        {/* Brand Logo */}
        <div className="mb-16 text-center">
          <Image
            src="/hustlersocietytransparentlogo.png"
            alt="Hustler Society"
            width={288}
            height={288}
            className="mx-auto mb-4 h-48 md:h-64 lg:h-72 w-auto"
          />
          <div className="flex items-center justify-center gap-2 text-purple-300">
            <Globe className="w-6 h-6" />
            <p className="text-xl font-light">Select Your Language</p>
          </div>
        </div>

        {/* Language Selection Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mb-8">
          <button
            onClick={() => handleLanguageSelect("spanish")}
            className="group relative bg-black/50 hover:bg-black/70 text-white border-2 border-gray-300 px-16 py-4 rounded-2xl font-bold text-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-black/50"
          >
            <div className="flex items-center gap-4">
              <svg className="w-10 h-10 rounded" viewBox="0 0 36 24">
                <rect width="12" height="24" fill="#006847" />
                <rect x="12" width="12" height="24" fill="#FFF" />
                <rect x="24" width="12" height="24" fill="#CE1126" />
                <g transform="translate(18, 12)">
                  <circle r="3" fill="#8B4513" />
                  <path
                    d="M-1.5,-1 L-1.5,1 L1.5,1 L1.5,-1 L0.5,-1 L0.5,0 L-0.5,0 L-0.5,-1 Z"
                    fill="#8B4513"
                  />
                  <ellipse cx="0" cy="-2" rx="2" ry="1.5" fill="#8B4513" />
                </g>
              </svg>
              <span>Spanish</span>
            </div>
          </button>

          <button
            onClick={() => handleLanguageSelect("english")}
            className="group relative bg-black/50 hover:bg-black/70 text-white border-2 border-gray-300 px-16 py-4 rounded-2xl font-bold text-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-black/50"
          >
            <div className="flex items-center gap-4">
              <svg className="w-10 h-10 rounded" viewBox="0 0 36 24">
                <rect width="36" height="24" fill="#B22234" />
                <rect y="2.77" width="36" height="1.85" fill="#FFF" />
                <rect y="6.46" width="36" height="1.85" fill="#FFF" />
                <rect y="10.15" width="36" height="1.85" fill="#FFF" />
                <rect y="13.85" width="36" height="1.85" fill="#FFF" />
                <rect y="17.54" width="36" height="1.85" fill="#FFF" />
                <rect y="21.23" width="36" height="1.85" fill="#FFF" />
                <rect width="14.4" height="12.92" fill="#3C3B6E" />
                <g fill="#FFF">
                  <circle cx="2.4" cy="2.15" r="0.6" />
                  <circle cx="4.8" cy="2.15" r="0.6" />
                  <circle cx="7.2" cy="2.15" r="0.6" />
                  <circle cx="9.6" cy="2.15" r="0.6" />
                  <circle cx="12" cy="2.15" r="0.6" />
                  <circle cx="3.6" cy="3.69" r="0.6" />
                  <circle cx="6" cy="3.69" r="0.6" />
                  <circle cx="8.4" cy="3.69" r="0.6" />
                  <circle cx="10.8" cy="3.69" r="0.6" />
                  <circle cx="2.4" cy="5.23" r="0.6" />
                  <circle cx="4.8" cy="5.23" r="0.6" />
                  <circle cx="7.2" cy="5.23" r="0.6" />
                  <circle cx="9.6" cy="5.23" r="0.6" />
                  <circle cx="12" cy="5.23" r="0.6" />
                  <circle cx="3.6" cy="6.77" r="0.6" />
                  <circle cx="6" cy="6.77" r="0.6" />
                  <circle cx="8.4" cy="6.77" r="0.6" />
                  <circle cx="10.8" cy="6.77" r="0.6" />
                  <circle cx="2.4" cy="8.31" r="0.6" />
                  <circle cx="4.8" cy="8.31" r="0.6" />
                  <circle cx="7.2" cy="8.31" r="0.6" />
                  <circle cx="9.6" cy="8.31" r="0.6" />
                  <circle cx="12" cy="8.31" r="0.6" />
                  <circle cx="3.6" cy="9.85" r="0.6" />
                  <circle cx="6" cy="9.85" r="0.6" />
                  <circle cx="8.4" cy="9.85" r="0.6" />
                  <circle cx="10.8" cy="9.85" r="0.6" />
                  <circle cx="2.4" cy="11.38" r="0.6" />
                  <circle cx="4.8" cy="11.38" r="0.6" />
                  <circle cx="7.2" cy="11.38" r="0.6" />
                  <circle cx="9.6" cy="11.38" r="0.6" />
                  <circle cx="12" cy="11.38" r="0.6" />
                </g>
              </svg>
              <span>English</span>
            </div>
          </button>
        </div>
      </div>

      {/* Footer Links */}
      <footer className="py-8 px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-8 text-gray-300">
          <a
            href="#"
            className="hover:text-emerald-400 transition-colors duration-200"
          >
            Terms and Conditions
          </a>
          <span className="text-gray-600">|</span>
          <a
            href="#"
            className="hover:text-emerald-400 transition-colors duration-200"
          >
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
}
