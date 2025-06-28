import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Mail, 
  FileText, 
  Calendar, 
  Check,
  Zap,
  Clock,
  Shield,
  Users,
  BarChart,
  Settings,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

const Features = () => {
  const coreFeatures = [
    {
      icon: Mail,
      title: "Thank-you Email Generator",
      description: "Automatically send personalized thank-you emails when you receive payments or positive feedback.",
      features: [
        "Smart trigger detection",
        "Customizable templates",
        "Personalization tokens",
        "Timing controls",
        "A/B testing"
      ],
      color: "text-blue-400",
      bgColor: "bg-blue-500/20"
    },
    {
      icon: FileText,
      title: "Newsletter Summary Generator",
      description: "Create weekly newsletter summaries from your content, saving hours of writing time.",
      features: [
        "AI content curation",
        "Brand voice matching",
        "Custom scheduling",
        "Multi-source aggregation",
        "SEO optimization"
      ],
      color: "text-green-400",
      bgColor: "bg-green-500/20"
    },
    {
      icon: Calendar,
      title: "Notion Task Logger",
      description: "Automatically convert emails into organized tasks in your Notion workspace.",
      features: [
        "Smart categorization",
        "Priority detection",
        "Due date suggestions",
        "Custom properties",
        "Bulk operations"
      ],
      color: "text-purple-400",
      bgColor: "bg-purple-500/20"
    }
  ];

  const additionalFeatures = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process automations in under 1 second with 99.9% uptime guarantee."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and SOC 2 compliance for your data protection."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share automations and collaborate with team members seamlessly."
    },
    {
      icon: BarChart,
      title: "Advanced Analytics",
      description: "Detailed insights into your automation performance and time savings."
    },
    {
      icon: Settings,
      title: "Custom Integrations",
      description: "Connect with 5000+ apps through our API and webhook system."
    },
    {
      icon: Clock,
      title: "Smart Scheduling",
      description: "Intelligent timing based on recipient behavior and optimal engagement."
    }
  ];

  const useCases = [
    {
      title: "E-commerce Owners",
      description: "Automate customer follow-ups and order confirmations",
      benefits: ["Increase customer retention", "Reduce manual work", "Improve response times"]
    },
    {
      title: "Content Creators",
      description: "Streamline newsletter creation and audience engagement",
      benefits: ["Consistent content delivery", "Better audience insights", "Time savings"]
    },
    {
      title: "Consultants",
      description: "Manage client communications and project tracking",
      benefits: ["Professional image", "Better organization", "Client satisfaction"]
    },
    {
      title: "Small Business",
      description: "Handle customer service and administrative tasks",
      benefits: ["Cost reduction", "Scalability", "Focus on growth"]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <div className="flex items-center space-x-3">
              <Zap className="h-8 w-8 text-[#D4AF37]" />
              <div>
                <h1 className="text-2xl font-bold">Features</h1>
                <p className="text-muted-foreground">Powerful automation capabilities</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link to="/auth">
              <Button className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#121212] font-semibold">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <Badge className="mb-6 bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/30 px-4 py-2">
            ✨ AI-Powered Automation
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Everything You Need to Automate</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            TaskSher provides comprehensive automation tools designed specifically for solopreneurs and small businesses.
          </p>
        </section>

        {/* Core Features */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Core Automations</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="bg-card border-border hover:border-[#D4AF37]/50 transition-all duration-300">
                  <CardHeader>
                    <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                      <IconComponent className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {feature.features.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center space-x-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Additional Features */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Additional Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-5 w-5 text-[#D4AF37]" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{feature.title}</h4>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Perfect For</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                  <CardDescription>{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Free vs Pro Features</h3>
          <Card className="bg-card border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-accent/50">
                  <tr>
                    <th className="text-left p-4">Feature</th>
                    <th className="text-center p-4">Free</th>
                    <th className="text-center p-4">Pro</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="p-4">Automation Credits</td>
                    <td className="text-center p-4">50/month</td>
                    <td className="text-center p-4">Unlimited</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4">Core Automations</td>
                    <td className="text-center p-4"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                    <td className="text-center p-4"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4">Custom Templates</td>
                    <td className="text-center p-4">Basic</td>
                    <td className="text-center p-4">Advanced</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4">Analytics</td>
                    <td className="text-center p-4">Basic</td>
                    <td className="text-center p-4">Advanced</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4">API Access</td>
                    <td className="text-center p-4">-</td>
                    <td className="text-center p-4"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4">Priority Support</td>
                    <td className="text-center p-4">-</td>
                    <td className="text-center p-4"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-[#D4AF37]/20 to-[#B8941F]/20 border-[#D4AF37]/30">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4">Ready to Automate Your Workflow?</h3>
              <p className="text-xl text-muted-foreground mb-8">
                Start with our free plan and upgrade when you're ready for more power.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/auth">
                  <Button size="lg" className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#121212] font-semibold px-8 py-4">
                    Start Free Trial
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-accent px-8 py-4">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Features;