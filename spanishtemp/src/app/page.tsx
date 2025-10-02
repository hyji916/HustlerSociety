"use client";

import React from "react";
import { Globe } from "lucide-react";

type Language = "spanish" | "english";

export default function LandingPage(): JSX.Element {
  const handleLanguageSelect = (language: Language): void => {
    window.location.href = `/${language}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        {/* Brand Name */}
        <div className="mb-16 text-center">
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-wider mb-4">
            LLADOS UNIVERSITY
          </h1>
          <div className="flex items-center justify-center gap-2 text-purple-300">
            <Globe className="w-6 h-6" />
            <p className="text-xl font-light">Select Your Language</p>
          </div>
        </div>

        {/* Language Selection Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mb-8">
          <button
            onClick={() => handleLanguageSelect("spanish")}
            className="group relative bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white px-12 py-6 rounded-2xl font-bold text-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-emerald-500/50"
          >
            <div className="flex items-center gap-4">
              <span className="text-4xl">🇪🇸</span>
              <span>Spanish</span>
            </div>
          </button>

          <button
            onClick={() => handleLanguageSelect("english")}
            className="group relative bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white px-12 py-6 rounded-2xl font-bold text-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-emerald-500/50"
          >
            <div className="flex items-center gap-4">
              <span className="text-4xl">🇺🇸</span>
              <span>English</span>
            </div>
          </button>
        </div>
      </div>

      {/* Bottom Left Brand */}
      <div className="absolute bottom-8 left-8 flex items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
          <Globe className="w-6 h-6 text-white" />
        </div>
        <span className="text-white font-bold text-xl">LLADOS UNIVERSITY</span>
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
          <span className="text-gray-600">|</span>
          <a
            href="#"
            className="hover:text-emerald-400 transition-colors duration-200"
          >
            Affiliate Program
          </a>
          <span className="text-gray-600">|</span>
          <a
            href="mailto:info@lladosuniversity.com"
            className="hover:text-emerald-400 transition-colors duration-200"
          >
            info@lladosuniversity.com
          </a>
        </div>
      </footer>
    </div>
  );
}
