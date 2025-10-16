import Hero from "@/components/Hero";
import ImpactHighlights from "@/components/ImpactHighlights";
import HowItWorksSection from "@/components/HowItWorksSection";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorksSection />
      <ImpactHighlights />
      <Footer />
    </main>
  );
};

export default Index;
