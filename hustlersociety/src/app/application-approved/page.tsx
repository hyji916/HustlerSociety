import FaqSection from "../components/applicationApprovedComponents/FaqSection";
import TimerHeader from "../components/applicationApprovedComponents/TimerHeader";
import TimerSection from "../components/applicationApprovedComponents/TimerSection";
import Footer from "../components/Footer";
import GallerySection from "../components/GallerySectionEnglish";
import InfoSection from "../components/InfoSection";
import TestimonialSection from "../components/TestimonalSection";
import { Highlighter } from "@/components/ui/highlighter";

export default function ApplicationApprovedPage() {
  return (
    <div className="bg-black">
      <TimerHeader />
      <div className="pt-1 md:pt-5">
        <TimerSection />
        <FaqSection />
        <h2 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-white text-center mb-0 px-4 pt-10">
          <Highlighter
            action="underline"
            color="#dc2626"
            strokeWidth={8}
            animationDuration={800}
            padding={0}
          >
            STEP 3:
          </Highlighter>{" "}
          SEE WHAT OTHER PEOPLE HAVE TO SAY
        </h2>
        <div className="pt-10">
          <InfoSection />
        </div>
        <TestimonialSection />
        {/* <div className="py-10 md:py-12"></div> */}
        <GallerySection />
        <Footer />
      </div>
    </div>
  );
}
