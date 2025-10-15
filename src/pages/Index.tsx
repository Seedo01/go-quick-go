import Hero from "@/components/Hero";
import ImpactHighlights from "@/components/ImpactHighlights";
import HowItWorksSection from "@/components/HowItWorksSection";
import Features from "@/components/Features";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ImpactHighlights />
      <HowItWorksSection />
      <Features />
    </main>
  );
};

export default Index;
