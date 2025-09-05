import { Search, Shuffle, TestTube, FileText, Code } from "lucide-react";
import CodeDemo from "@/components/ui/code-demo";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Analyze",
      description: "Def Mutator scans your codebase and identifies critical paths and logic branches that need robust testing.",
      color: "from-primary to-primary/80"
    },
    {
      number: "02", 
      icon: Shuffle,
      title: "Mutate",
      description: "Our engine introduces strategic mutations like changing > to >=, && to ||, or removing conditions entirely - simulating real developer mistakes.",
      color: "from-secondary to-secondary/80"
    },
    {
      number: "03",
      icon: TestTube,
      title: "Test",
      description: "Your existing test suite runs against each mutation. Tests that fail indicate good coverage; tests that pass reveal gaps.",
      color: "from-accent to-accent/80"
    },
    {
      number: "04",
      icon: FileText,
      title: "Report", 
      description: "Get actionable insights with specific recommendations for improving test quality and catching edge cases.",
      color: "from-warning to-warning/80"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Mutation Testing Made Simple
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our four-step process transforms your existing tests into a powerful bug-catching system
          </p>
        </div>
        
        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center group">
                <div className={`relative w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-10 h-10 text-white" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-background border-2 border-current rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* Interactive Demo */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Try It Yourself</h3>
            <p className="text-muted-foreground">
              See how mutation testing reveals weak spots in your test suite
            </p>
          </div>
          
          <CodeDemo />
        </div>
        
        {/* Process Flow Visualization */}
        <div className="mt-16 bg-card rounded-2xl p-8 border shadow-lg">
          <h3 className="text-xl font-semibold text-center mb-8">Mutation Testing Workflow</h3>
          
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <div className="text-sm font-medium">Original Code</div>
            </div>
            
            <div className="flex-1 h-px bg-gradient-to-r from-primary via-secondary to-accent lg:block hidden"></div>
            <div className="lg:hidden w-px h-8 bg-gradient-to-b from-primary via-secondary to-accent"></div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-3">
                <Shuffle className="w-8 h-8 text-secondary" />
              </div>
              <div className="text-sm font-medium">Generate Mutants</div>
            </div>
            
            <div className="flex-1 h-px bg-gradient-to-r from-secondary via-accent to-warning lg:block hidden"></div>
            <div className="lg:hidden w-px h-8 bg-gradient-to-b from-secondary via-accent to-warning"></div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-3">
                <TestTube className="w-8 h-8 text-accent" />
              </div>
              <div className="text-sm font-medium">Run Tests</div>
            </div>
            
            <div className="flex-1 h-px bg-gradient-to-r from-accent to-warning lg:block hidden"></div>
            <div className="lg:hidden w-px h-8 bg-gradient-to-b from-accent to-warning"></div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mb-3">
                <FileText className="w-8 h-8 text-warning" />
              </div>
              <div className="text-sm font-medium">Quality Report</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;