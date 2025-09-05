import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-mutation-testing.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient opacity-5"></div>
      
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Def Mutator:
                </span>
                <br />
                The Future of Intelligent Test Validation
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Go beyond code coverage. Discover if your tests actually protect against bugs 
                with our advanced mutation testing engine that thinks like a developer.
              </p>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8">
                Start Testing Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <Play className="w-5 h-5 mr-2" />
                View Live Demo
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">35%</div>
                <div className="text-sm text-muted-foreground">More Bugs Caught</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">3x</div>
                <div className="text-sm text-muted-foreground">Faster Testing</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">28%</div>
                <div className="text-sm text-muted-foreground">Fewer Incidents</div>
              </div>
            </div>
          </div>
          
          {/* Hero Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hover-lift">
              <img 
                src={heroImage} 
                alt="Mutation testing code comparison showing original vs mutated code with test results"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg shadow-lg">
              <div className="text-sm font-semibold">Mutation Score</div>
              <div className="text-2xl font-bold">85%</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card border shadow-lg rounded-lg p-4">
              <div className="text-sm text-muted-foreground mb-1">Test Quality</div>
              <div className="flex items-center space-x-2">
                <div className="w-16 bg-muted rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full w-4/5"></div>
                </div>
                <span className="text-sm font-medium">Strong</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;