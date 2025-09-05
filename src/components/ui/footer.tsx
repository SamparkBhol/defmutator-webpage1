import { Button } from "@/components/ui/button";
import { Github, MessageSquare, FileText, Mail } from "lucide-react";

const Footer = () => {
  const links = {
    product: [
      { label: "Features", href: "#features" },
      { label: "Demo", href: "#demo" },
      { label: "Pricing", href: "#pricing" },
      { label: "Documentation", href: "#docs" }
    ],
    resources: [
      { label: "Research Papers", href: "#research" },
      { label: "API Reference", href: "#api" },
      { label: "Tutorials", href: "#tutorials" },
      { label: "Best Practices", href: "#practices" }
    ],
    community: [
      { label: "Discord", href: "#discord" },
      { label: "GitHub Discussions", href: "#discussions" },
      { label: "Stack Overflow", href: "#stackoverflow" },
      { label: "Blog", href: "#blog" }
    ],
    company: [
      { label: "About", href: "#about" },
      { label: "Team", href: "#team" },
      { label: "Careers", href: "#careers" },
      { label: "Contact", href: "#contact" }
    ]
  };

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-6 py-16">
        {/* Newsletter */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get the latest updates on new features, research insights, and best practices for mutation testing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="primary">Subscribe</Button>
            </div>
          </div>
        </div>
        
        {/* Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              Def Mutator
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              The next-generation mutation testing framework that revolutionizes test validation.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <MessageSquare className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <FileText className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {/* Link Columns */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {links.product.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {links.resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              {links.community.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Def Mutator. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#privacy" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#cookies" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;