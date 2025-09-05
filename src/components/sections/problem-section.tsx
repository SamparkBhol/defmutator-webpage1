import { AlertTriangle, BarChart3, Bug, Shield } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: BarChart3,
      title: "Code Coverage Lies",
      description: "90% coverage doesn't mean your tests catch bugs. It just means code was executed."
    },
    {
      icon: Bug,
      title: "False Confidence",
      description: "Tests that pass without proper assertions give dangerous false security about code quality."
    },
    {
      icon: Shield,
      title: "Production Incidents",
      description: "Weak tests allow critical bugs to slip through, causing costly production failures."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="w-12 h-12 text-warning" />
          </div>
          <h2 className="text-4xl font-bold mb-6">
            Code Coverage Lies - Your Tests Might Be Broken
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Traditional code coverage tools tell you your code is 90% covered, but they don't tell you if those tests 
            would catch real bugs. A test that simply executes code without proper assertions gives false confidence. 
            <span className="font-semibold text-foreground"> Def Mutator solves this by introducing strategic code mutations 
            and verifying your tests can detect them.</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div key={index} className="text-center p-6 rounded-lg border bg-card hover-lift">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-destructive/10 text-destructive rounded-full mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
              </div>
            );
          })}
        </div>
        
        {/* Stats */}
        <div className="mt-16 bg-card rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-destructive mb-2">73%</div>
              <div className="text-sm text-muted-foreground">of teams have false confidence in their tests</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-destructive mb-2">2.5x</div>
              <div className="text-sm text-muted-foreground">more bugs slip through weak test suites</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-destructive mb-2">$4.7M</div>
              <div className="text-sm text-muted-foreground">average cost of a critical production bug</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-destructive mb-2">68%</div>
              <div className="text-sm text-muted-foreground">of incidents could be prevented by better tests</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;