"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Highlighter } from "@/components/ui/highlighter";

const ApplySection = () => {
  const router = useRouter();
  const [showForm, setShowForm] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [budget, setBudget] = useState("");
  const [phoneCommitment, setPhoneCommitment] = useState("");
  const [showPhoneError, setShowPhoneError] = useState(false);
  const [errors, setErrors] = useState({
    email: false,
    firstName: false,
    lastName: false,
    phone: false,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set initial state after mount
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleApplyClick = () => {
    setShowForm(true);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phone: string) => {
    const digitsOnly = phone.replace(/\D/g, "");
    return digitsOnly.length === 10;
  };

  const formatPhoneNumber = (value: string) => {
    const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
    if (digitsOnly.length <= 3) {
      return digitsOnly;
    } else if (digitsOnly.length <= 6) {
      return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3)}`;
    } else {
      return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(
        3,
        6
      )}-${digitsOnly.slice(6)}`;
    }
  };

  const handleClose = () => {
    setShowForm(false);
  };

  const handleSubmit = useCallback(() => {
    if (formStep === 1) {
      if (email && validateEmail(email)) {
        setFormStep(2);
        setErrors({ ...errors, email: false });
      } else {
        setErrors({ ...errors, email: true });
      }
    } else if (formStep === 2) {
      const newErrors = {
        email: false,
        firstName: !firstName,
        lastName: !lastName,
        phone: !phoneNumber || !validatePhoneNumber(phoneNumber),
      };
      setErrors(newErrors);

      if (!newErrors.firstName && !newErrors.lastName && !newErrors.phone) {
        setFormStep(3);
      }
    } else if (formStep === 3) {
      if (budget) {
        setFormStep(4);
      }
    } else if (formStep === 4) {
      if (phoneCommitment) {
        setShowPhoneError(false);
        console.log("Form submitted:", {
          email,
          firstName,
          lastName,
          phoneNumber,
          budget,
          phoneCommitment,
        });
        // Redirect to application-approved page
        router.push("/application-approved");
      } else {
        setShowPhoneError(true);
      }
    }
  }, [
    formStep,
    email,
    firstName,
    lastName,
    phoneNumber,
    budget,
    phoneCommitment,
    router,
  ]);

  const handleBack = useCallback(() => {
    if (formStep === 2) {
      setFormStep(1);
      setErrors({
        email: false,
        firstName: false,
        lastName: false,
        phone: false,
      });
    } else if (formStep === 3) {
      setFormStep(2);
    } else if (formStep === 4) {
      setFormStep(3);
      setShowPhoneError(false);
    }
  }, [formStep]);

  const ApplyForm = useMemo(() => {
    const totalSteps = 4;
    const progressPercentage = (formStep / totalSteps) * 100;

    return (
      <div className="space-y-4 animate-fadeIn">
        <div className="mb-6">
          <div className="w-full bg-zinc-800 rounded-full h-2">
            <div
              className="bg-red-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <p className="text-gray-400 text-xs mt-2 text-center">
            Step {formStep} of {totalSteps}
          </p>
        </div>

        {formStep === 1 && (
          <div className="flex flex-col h-full justify-between">
            {/* Image Section */}
            <div className="relative w-full h-48 mb-6">
              <Image
                src="/car-red.jpg" // change to your own hosted image path
                alt="Red supercar"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>

            {/* Form Section */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-white mb-2">
                1. What&apos;s a good email to reach you at?*
              </label>
              {errors.email && (
                <div className="bg-red-950 border border-red-800 text-red-200 px-3 py-2 rounded mb-2 text-sm flex items-center gap-2">
                  <span>⚠</span> Please enter a valid email address
                </div>
              )}
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors({ ...errors, email: false });
                }}
                className="w-full px-4 py-3 bg-black border-b-2 border-red-900 text-red-900 placeholder-red-900 focus:outline-none focus:border-red-600 transition-colors"
              />
            </div>

            {/* Bottom Button */}
            <div className="mt-6">
              <button
                onClick={handleSubmit}
                className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                OK
              </button>
            </div>
          </div>
        )}

        {formStep === 2 && (
          <div className="flex flex-col h-full justify-between">
            {/* Image Section */}
            <div className="relative w-full h-48 mb-6">
              <Image
                src="/car-black.jpg" // another step image if you have one
                alt="Luxury car"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>

            {/* Form Section */}
            <div className="flex-1 space-y-4">
              <label className="block text-sm font-medium text-white mb-2">
                2. And your name and phone number?*
              </label>

              <div>
                <label className="block text-xs text-white mb-1">
                  First name *
                </label>
                <input
                  type="text"
                  placeholder="Jane"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-3 bg-black border-b-2 border-red-900 text-red-900 placeholder-red-900 focus:outline-none focus:border-red-600"
                />
              </div>

              <div>
                <label className="block text-xs text-white mb-1">
                  Last name *
                </label>
                <input
                  type="text"
                  placeholder="Smith"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-4 py-3 bg-black border-b-2 border-red-900 text-red-900 placeholder-red-900 focus:outline-none focus:border-red-600"
                />
              </div>

              <div>
                <label className="block text-xs text-white mb-1">
                  Phone number *
                </label>
                <div className="flex items-center gap-2 border-b-2 border-red-900 pb-3">
                  <span className="text-2xl">🇺🇸</span>
                  <span className="text-white">▼</span>
                  <input
                    type="tel"
                    placeholder="(201) 555-0123"
                    value={phoneNumber}
                    onChange={(e) => {
                      const formatted = formatPhoneNumber(e.target.value);
                      setPhoneNumber(formatted);
                    }}
                    className="flex-1 bg-black text-red-900 placeholder-red-900 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Buttons */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleBack}
                className="w-16 bg-gray-800 text-white font-bold py-4 rounded-lg hover:bg-gray-700 flex items-center justify-center"
              >
                ←
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-100"
              >
                OK
              </button>
            </div>
          </div>
        )}

        {formStep === 3 && (
          <>
            <div className="mb-4">
              <h3 className="text-white text-base mb-4">
                3. We have different options based on how much help you are
                looking to get with freelance brandscaling.
              </h3>
              <p className="text-white text-sm mb-4">
                How much cash do you have set aside to put towards reaching your
                goals?*
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => setBudget("0-1500")}
                className={`w-full text-left px-4 py-4 rounded-lg border-2 transition-colors ${
                  budget === "0-1500"
                    ? "border-red-600 bg-red-950"
                    : "border-red-900 bg-black hover:border-red-700"
                }`}
              >
                <span className="text-white font-bold mr-2">A</span>
                <span className="text-red-500">
                  $0-$1,500 (Can&apos;t afford it, sorry)
                </span>
              </button>

              <button
                onClick={() => setBudget("1500-3000")}
                className={`w-full text-left px-4 py-4 rounded-lg border-2 transition-colors ${
                  budget === "1500-3000"
                    ? "border-red-600 bg-red-950"
                    : "border-red-900 bg-black hover:border-red-700"
                }`}
              >
                <span className="text-white font-bold mr-2">B</span>
                <span className="text-red-500">
                  $1,500-$3,000 (Need a payment plan)
                </span>
              </button>

              <button
                onClick={() => setBudget("3000-5000")}
                className={`w-full text-left px-4 py-4 rounded-lg border-2 transition-colors ${
                  budget === "3000-5000"
                    ? "border-red-600 bg-red-950"
                    : "border-red-900 bg-black hover:border-red-700"
                }`}
              >
                <span className="text-white font-bold mr-2">C</span>
                <span className="text-red-500">
                  $3,000- $5,000 (Ready to go right now)
                </span>
              </button>

              <button
                onClick={() => setBudget("5000+")}
                className={`w-full text-left px-4 py-4 rounded-lg border-2 transition-colors ${
                  budget === "5000+"
                    ? "border-red-600 bg-red-950"
                    : "border-red-900 bg-black hover:border-red-700"
                }`}
              >
                <span className="text-white font-bold mr-2">D</span>
                <span className="text-red-500">
                  $5,000+ (I&apos;m looking for as much help as possible)
                </span>
              </button>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                onClick={handleBack}
                className="w-16 bg-gray-800 text-white font-bold py-4 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center"
              >
                ←
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                OK
              </button>
            </div>
          </>
        )}

        {formStep === 4 && (
          <>
            <div className="mb-4">
              <h3 className="text-white text-base font-bold mb-4">
                4. Just a heads up so you are aware. To see if we can help, we
                will give you a quick 2 minute phone call right after this
                application is submitted.
              </h3>
              <p className="text-white text-base font-bold mb-2">
                Can you commit to having your phone turned on ready to pick up?*
              </p>
              <p className="text-gray-400 text-sm mb-4">
                On this call we will dish you some free resources and give you
                details about the program.
              </p>
            </div>

            {showPhoneError && (
              <div className="bg-white border-2 border-red-600 text-red-800 px-4 py-3 rounded mb-4 flex items-start gap-2">
                <span className="text-red-600 text-xl">⚠</span>
                <div>
                  <span className="font-bold text-red-600">Oops!</span> Please
                  make a selection
                </div>
              </div>
            )}

            <div className="space-y-3">
              <button
                onClick={() => {
                  setPhoneCommitment("yes");
                  setShowPhoneError(false);
                }}
                className={`w-full text-left px-4 py-4 rounded-lg border-2 transition-colors ${
                  phoneCommitment === "yes"
                    ? "border-red-600 bg-red-950"
                    : "border-red-900 bg-black hover:border-red-700"
                }`}
              >
                <span className="text-white font-bold mr-2">A</span>
                <span className="text-red-500">
                  Yes, I&apos;ll pick up when you guys call me
                </span>
              </button>

              <button
                onClick={() => {
                  setPhoneCommitment("no");
                  setShowPhoneError(false);
                }}
                className={`w-full text-left px-4 py-4 rounded-lg border-2 transition-colors ${
                  phoneCommitment === "no"
                    ? "border-red-600 bg-red-950"
                    : "border-red-900 bg-black hover:border-red-700"
                }`}
              >
                <span className="text-white font-bold mr-2">B</span>
                <span className="text-red-500">
                  No, I&apos;ll be unresponsive
                </span>
              </button>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                onClick={handleBack}
                className="w-16 bg-gray-800 text-white font-bold py-4 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center"
              >
                ←
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Submit
              </button>
            </div>
          </>
        )}
      </div>
    );
  }, [
    formStep,
    email,
    firstName,
    lastName,
    phoneNumber,
    budget,
    phoneCommitment,
    errors,
    showPhoneError,
    handleSubmit,
    handleBack,
  ]);

  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>

      <div
        id="apply-section"
        className="bg-black px-16 py-16 flex items-center justify-center"
      >
        <div className="w-full max-w-sm">
          <h2 className="text-white text-3xl md:text-3xl font-extrabold text-center mb-12">
            <Highlighter
              action="underline"
              color="#dc2626"
              strokeWidth={6}
              animationDuration={800}
              padding={0}
            >
              APPLY
            </Highlighter>{" "}
            DOWN BELOW...
          </h2>

          {!isMobile && (
            <div className="border-2 border-white p-12 relative min-h-[480px] flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white -translate-x-1 -translate-y-1" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white translate-x-1 -translate-y-1" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white -translate-x-1 translate-y-1" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white translate-x-1 translate-y-1" />

              <div className="w-full flex-1 flex flex-col justify-between">
                {!showForm ? (
                  <>
                    <div className="flex-1 flex items-center justify-center">
                      <div className="text-center animate-fadeIn">
                        <h3 className="text-white text-2xl font-bold mb-2">
                          Apply To Work With Me Below
                        </h3>
                        <p className="text-gray-400 text-lg">
                          Join over 100+ Hustlers
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <button
                        onClick={handleApplyClick}
                        className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        Apply Now
                      </button>

                      <p className="text-white text-md flex items-center justify-center gap-2">
                        ⏱ Takes 30 sec
                      </p>
                    </div>
                  </>
                ) : (
                  ApplyForm
                )}
              </div>
            </div>
          )}

          {isMobile && (
            <>
              <div className="border-2 border-white p-8 relative min-h-[480px] flex flex-col justify-between">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white -translate-x-1 -translate-y-1" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white translate-x-1 -translate-y-1" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white -translate-x-1 translate-y-1" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white translate-x-1 translate-y-1" />

                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center w-full">
                    <h3 className="text-white text-xl font-bold mb-2">
                      Apply To Work With Me Below
                    </h3>
                    <p className="text-gray-400">Join over 100+ Hustlers</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <button
                    onClick={handleApplyClick}
                    className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Apply Now
                  </button>

                  <p className="text-white text-md flex items-center justify-center gap-2">
                    ⏱ Takes 30 sec
                  </p>
                </div>
              </div>

              {showForm && (
                <div className="fixed inset-0 bg-black z-50 flex flex-col animate-slideUp overflow-y-auto">
                  <div className="flex justify-end p-4 sticky top-0 bg-black z-10">
                    <button
                      onClick={handleClose}
                      className="text-white hover:text-gray-300 transition-colors text-3xl w-10 h-10 flex items-center justify-center"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="flex-1 flex items-start justify-center px-6 pb-12 pt-4">
                    <div className="w-full max-w-md">{ApplyForm}</div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ApplySection;
