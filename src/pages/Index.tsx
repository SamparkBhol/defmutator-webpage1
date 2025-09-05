import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/sections/hero-section";
import ProblemSection from "@/components/sections/problem-section";
import SolutionSection from "@/components/sections/solution-section";
import HowItWorksSection from "@/components/sections/how-it-works";
import PricingSection from "@/components/sections/pricing-section";
import Footer from "@/components/ui/footer";

const Index = () => {
  return (
    <>
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <PricingSection />
      <Footer />
    </>
  );
};

export default Index;
