import { Navigation } from "@/components/navigation/Navigation";
import { Hero } from "@/components/hero/Hero";
import { OpeningStatement } from "@/components/sections/OpeningStatement";
import { StorySection } from "@/components/sections/StorySection";
import { CircularModel } from "@/components/sections/CircularModel";
import { PhotoBreak } from "@/components/sections/PhotoBreak";
import { MoroccoSection } from "@/components/sections/MoroccoSection";
import { ImpactMap } from "@/components/sections/ImpactMap";
import { TransparencySection } from "@/components/sections/TransparencySection";
import { DonationSection } from "@/components/sections/DonationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { PageLoader } from "@/components/ui/PageLoader";
import { MotionProvider } from "@/components/MotionProvider";

export default function HomePage() {
  return (
    <MotionProvider>
      <PageLoader />
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <OpeningStatement />
        <StorySection />
        <CircularModel />
        <PhotoBreak />
        <MoroccoSection />
        <ImpactMap />
        <TransparencySection />
        <DonationSection />
        <ContactSection />
        <FinalCTA />
      </main>
      <Footer />
    </MotionProvider>
  );
}
