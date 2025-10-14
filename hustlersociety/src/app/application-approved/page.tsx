import FaqSection from "../components/applicationApprovedComponents/FaqSection";
import TimerHeader from "../components/applicationApprovedComponents/TimerHeader";
import TimerSection from "../components/applicationApprovedComponents/TimerSection";
import GallerySection from "../components/GallerySectionEnglish";
import TestimonialSection from "../components/TestimonalSection";
import { Highlighter } from "@/components/ui/highlighter";

export default function ApplicationApprovedPage() {
  return (
    <div className="bg-black">
      <TimerHeader />
      <div className="pt-5 md:pt-16">
        <TimerSection />
        <FaqSection />
        <h2 className="text-5xl font-extrabold text-white text-center mb-0 px-4">
          <Highlighter
            action="underline"
            color="#018DFB"
            strokeWidth={8}
            animationDuration={800}
            padding={0}
          >
            STEP 3:
          </Highlighter>{" "}
          SEE WHAT OTHER PEOPLE HAVE TO SAY
        </h2>
        <TestimonialSection />
        <GallerySection />
      </div>
    </div>
  );
}
