import { Button } from "@/components/ui/button";
import { Check, Github, Building, Zap } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Open Source",
      price: "Free",
      description: "Perfect for public repositories and open source projects",
      icon: Github,
      features: [
        "Unlimited public repositories",
        "Basic mutation testing",
        "Community support",
        "GitHub integration",
        "Standard reports"
      ],
      cta: "Get Started Free",
      variant: "outline" as const,
      popular: false
    },
    {
      name: "Team",
      price: "$29",
      period: "/month",
      description: "For private repositories and small to medium teams",
      icon: Zap,
      features: [
        "Up to 10 developers",
        "Private repositories",
        "Advanced mutations",
        "CI/CD integrations",
        "Interactive reports",
        "Priority support",
        "Custom rules"
      ],
      cta: "Start Free Trial",
      variant: "hero" as const,
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large organizations",
      icon: Building,
      features: [
        "Unlimited developers",
        "On-premise deployment",
        "Advanced security",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantees",
        "Training & onboarding"
      ],
      cta: "Contact Sales",
      variant: "secondary" as const,
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Get Started Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your team size and requirements. 
            All plans include our core mutation testing features.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border bg-card hover-lift ${
                  plan.popular ? 'ring-2 ring-primary shadow-xl scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-4">{plan.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground">{plan.period}</span>
                    )}
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant={plan.variant} className="w-full" size="lg">
                  {plan.cta}
                </Button>
              </div>
            );
          })}
        </div>
        
        {/* FAQ */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            <div className="bg-card p-6 rounded-lg border">
              <h4 className="font-semibold mb-2">Do you offer a free trial?</h4>
              <p className="text-muted-foreground text-sm">
                Yes! All paid plans include a 14-day free trial with full access to features.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h4 className="font-semibold mb-2">Can I change plans later?</h4>
              <p className="text-muted-foreground text-sm">
                Absolutely. You can upgrade or downgrade your plan at any time with prorated billing.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h4 className="font-semibold mb-2">What languages are supported?</h4>
              <p className="text-muted-foreground text-sm">
                Currently JavaScript, TypeScript, Python, Java, and C#. More languages coming soon.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h4 className="font-semibold mb-2">Is there an API available?</h4>
              <p className="text-muted-foreground text-sm">
                Yes, comprehensive REST API and CLI tools are included in Team and Enterprise plans.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;