import { Brain, Code, Zap, TrendingUp, Shield } from "lucide-react";

const SolutionSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Smart Mutation Engine",
      description: "Advanced algorithms generate realistic bug scenarios, not just random code changes",
      color: "text-primary"
    },
    {
      icon: Code,
      title: "Multi-Language Support",
      description: "Works seamlessly with JavaScript, TypeScript, Python, Java, and C# codebases",
      color: "text-secondary"
    },
    {
      icon: Zap,
      title: "AI-Powered Analysis", 
      description: "Machine learning identifies the most valuable mutations to test, reducing noise",
      color: "text-accent"
    },
    {
      icon: TrendingUp,
      title: "Developer-Friendly Reports",
      description: "Interactive dashboards showing exactly which tests need improvement",
      color: "text-warning"
    },
    {
      icon: Shield,
      title: "CI/CD Integration",
      description: "Plugs into existing workflows with zero configuration required",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Intelligent Mutation Testing That Actually Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Def Mutator revolutionizes test validation with cutting-edge mutation testing technology 
            that understands your code and delivers actionable insights.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group p-6 rounded-xl border bg-card hover-lift">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-${feature.color.split('-')[1]}/10 to-${feature.color.split('-')[1]}/5 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* Comparison */}
        <div className="mt-20 bg-gradient-to-r from-card to-muted/50 rounded-2xl p-8 border">
          <h3 className="text-2xl font-bold text-center mb-8">Traditional Coverage vs. Mutation Testing</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="text-lg font-semibold text-muted-foreground mb-4">
                ❌ Traditional Code Coverage
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p>• Shows which lines were executed</p>
                <p>• Doesn't verify test quality</p>
                <p>• Can't detect weak assertions</p>
                <p>• Gives false confidence</p>
                <p>• Misses edge cases</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="text-lg font-semibold text-primary mb-4">
                ✅ Def Mutator Mutation Testing
              </div>
              <div className="space-y-2">
                <p>• Tests if your tests actually catch bugs</p>
                <p>• Validates assertion strength</p>
                <p>• Identifies weak test cases</p>
                <p>• Provides actionable insights</p>
                <p>• Reveals hidden edge cases</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;