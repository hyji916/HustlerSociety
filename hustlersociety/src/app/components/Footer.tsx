"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Brand Logo */}
        <div className="flex justify-center">
          <Image
            src="/hustlersocietytransparentlogo.png" // Replace with your logo path
            alt="Brand Logo"
            width={200} // Increased from 120
            height={100} // Increased from 60
            className="object-contain"
          />
        </div>

        {/* Links */}
        <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
          <Link
            href="/privacy-policy"
            className="hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="hover:text-white transition-colors"
          >
            Terms of Service
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-white text-sm font-mono">
          © 2025 Hustler Society LLC - All rights reserved
        </p>

        {/* Facebook Disclaimer */}
        <div className="text-center max-w-2xl mx-auto space-y-4 text-sm text-gray-400">
          <p>
            <span className="italic">Facebook disclaimer:</span> &quot;This site
            is not a part of the Facebook website or Facebook Inc. Additionally,
            this site is NOT endorsed by Facebook in any way. Facebook is a
            trademark of Facebook, Inc.&quot;
          </p>

          {/* Income Disclaimer */}
          <p>
            <span className="italic">Income disclaimer:</span> &quot;Any
            financial numbers referenced here, or on any of our sites or emails,
            are simply estimates, projections, or past results and should not be
            considered exact, actual, or as a promise of potential earnings. All
            numbers are illustrative only. Your results will depend on many
            factors, including your background, experience, and work ethic.
            There are NO guarantees of success or income.&quot;
          </p>

          {/* Age Disclaimer */}
          <p>
            This coaching program and course are intended for adults 18 years of
            age or older. We do not knowingly market, sell, or provide services
            to anyone under 18. By purchasing or accessing our program, you
            confirm that you are at least 18 years old or have the consent of a
            parent or legal guardian.
          </p>
        </div>
      </div>
    </footer>
  );
}
