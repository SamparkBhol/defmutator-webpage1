import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, RotateCcw } from "lucide-react";

const CodeDemo = () => {
  const [activeTab, setActiveTab] = useState<'original' | 'mutated'>('original');
  const [isAnimating, setIsAnimating] = useState(false);

  const originalCode = `function validateAge(age) {
  // Test should catch this boundary condition
  if (age > 18) {
    return "adult";
  }
  return "minor";
}

// Test case
test("validates adult age", () => {
  expect(validateAge(19)).toBe("adult");
  expect(validateAge(18)).toBe("minor"); // Edge case
});`;

  const mutatedCode = `function validateAge(age) {
  // Mutation: > changed to >= 
  if (age >= 18) {  // <-- MUTATION HERE
    return "adult";
  }
  return "minor";
}

// Same test case
test("validates adult age", () => {
  expect(validateAge(19)).toBe("adult");
  expect(validateAge(18)).toBe("minor"); // FAILS!
});`;

  const runMutation = () => {
    setIsAnimating(true);
    setActiveTab('mutated');
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const reset = () => {
    setActiveTab('original');
  };

  return (
    <div className="bg-card rounded-lg border shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Interactive Mutation Demo</h3>
        <div className="flex gap-2">
          <Button onClick={runMutation} variant="primary" size="sm" disabled={isAnimating}>
            <Play className="w-4 h-4 mr-2" />
            {isAnimating ? "Running..." : "Run Mutation"}
          </Button>
          <Button onClick={reset} variant="outline" size="sm">
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset
          </Button>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div className={`code-block ${activeTab === 'original' ? 'ring-2 ring-secondary' : ''} transition-all duration-300`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-muted-foreground">ORIGINAL CODE</span>
            <span className="text-xs px-2 py-1 bg-secondary/20 text-secondary rounded">
              ✓ Tests Pass
            </span>
          </div>
          <pre className="text-sm overflow-x-auto">
            <code dangerouslySetInnerHTML={{ 
              __html: originalCode
                .replace(/function|if|return|test|expect/g, '<span class="syntax-keyword">$&</span>')
                .replace(/"[^"]*"/g, '<span class="syntax-string">$&</span>')
                .replace(/\/\/[^\n]*/g, '<span class="syntax-comment">$&</span>')
                .replace(/\d+/g, '<span class="syntax-number">$&</span>')
            }} />
          </pre>
        </div>
        
        <div className={`code-block ${activeTab === 'mutated' ? 'ring-2 ring-destructive' : ''} transition-all duration-300`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-muted-foreground">MUTATED CODE</span>
            <span className="text-xs px-2 py-1 bg-destructive/20 text-destructive rounded">
              ✗ Test Fails
            </span>
          </div>
          <pre className="text-sm overflow-x-auto">
            <code dangerouslySetInnerHTML={{ 
              __html: mutatedCode
                .replace(/function|if|return|test|expect/g, '<span class="syntax-keyword">$&</span>')
                .replace(/"[^"]*"/g, '<span class="syntax-string">$&</span>')
                .replace(/\/\/[^\n]*/g, '<span class="syntax-comment">$&</span>')
                .replace(/\d+/g, '<span class="syntax-number">$&</span>')
                .replace(/age >= 18/, '<span class="bg-destructive/20 px-1 rounded">age >= 18</span>')
                .replace(/MUTATION HERE/, '<span class="text-destructive font-bold">MUTATION HERE</span>')
                .replace(/FAILS!/, '<span class="text-destructive font-bold">FAILS!</span>')
            }} />
          </pre>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-muted rounded-lg">
        <p className="text-sm text-muted-foreground">
          <strong>Analysis:</strong> This mutation reveals a weak test case. The original test doesn't cover the edge case where age = 18, 
          allowing the mutated code (which treats 18 as adult) to pass. A good test would catch this difference.
        </p>
      </div>
    </div>
  );
};

export default CodeDemo;