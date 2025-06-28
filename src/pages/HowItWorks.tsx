import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Play,
  ArrowRight,
  CheckCircle,
  Settings,
  Zap,
  BarChart,
  Users,
  Clock,
  Shield,
  Lightbulb
} from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Connect Your Tools",
      description: "Link your Gmail, Notion, and other favorite tools with secure OAuth authentication.",
      details: [
        "One-click OAuth integration",
        "Bank-grade security",
        "No API keys to manage",
        "Instant connection verification"
      ],
      time: "2 minutes"
    },
    {
      number: 2,
      title: "Configure Automations",
      description: "Set up your automation preferences using our intuitive interface.",
      details: [
        "Choose from pre-built templates",
        "Customize triggers and conditions",
        "Set timing and frequency",
        "Test with sample data"
      ],
      time: "5 minutes"
    },
    {
      number: 3,
      title: "AI Takes Over",
      description: "Our AI monitors your triggers and executes automations intelligently.",
      details: [
        "Real-time monitoring",
        "Smart decision making",
        "Error handling and retries",
        "Performance optimization"
      ],
      time: "Instant"
    },
    {
      number: 4,
      title: "Monitor & Optimize",
      description: "Track performance and refine your automations for maximum efficiency.",
      details: [
        "Detailed analytics dashboard",
        "Performance insights",
        "Optimization suggestions",
        "Usage tracking"
      ],
      time: "Ongoing"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Save 5-10 Hours Weekly",
      description: "Eliminate repetitive tasks and focus on high-value activities that grow your business."
    },
    {
      icon: Zap,
      title: "Lightning Fast Setup",
      description: "Get up and running in minutes with our intuitive setup process and smart defaults."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Your data is protected with bank-grade encryption and SOC 2 compliance."
    },
    {
      icon: BarChart,
      title: "Detailed Analytics",
      description: "Track time saved, tasks completed, and ROI with comprehensive reporting."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share automations with team members and collaborate on optimization."
    },
    {
      icon: Lightbulb,
      title: "Smart Suggestions",
      description: "AI-powered recommendations to improve your automation performance."
    }
  ];

  const workflows = [
    {
      title: "E-commerce Thank You Flow",
      description: "Customer makes purchase → Payment received → Thank you email sent → Follow-up scheduled",
      automations: ["Payment detection", "Email generation", "Scheduling"],
      timeSaved: "2 hours/day"
    },
    {
      title: "Content Creation Pipeline",
      description: "Content published → Newsletter draft created → Social posts scheduled → Analytics tracked",
      automations: ["Content aggregation", "Newsletter creation", "Social scheduling"],
      timeSaved: "4 hours/week"
    },
    {
      title: "Client Management System",
      description: "Email received → Task created in Notion → Priority assigned → Deadline set",
      automations: ["Email parsing", "Task creation", "Priority detection"],
      timeSaved: "1 hour/day"
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
              <Settings className="h-8 w-8 text-[#D4AF37]" />
              <div>
                <h1 className="text-2xl font-bold">How It Works</h1>
                <p className="text-muted-foreground">Simple automation in 4 steps</p>
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
            🚀 Simple Setup Process
          </Badge>
          <h2 className="text-4xl font-bold mb-4">From Setup to Automation in Minutes</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            TaskSher makes automation accessible to everyone. No coding required, no complex configurations.
          </p>
        </section>

        {/* Steps */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-12 text-center">4 Simple Steps</h3>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-2">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-full flex items-center justify-center">
                          <span className="text-xl font-bold text-[#D4AF37]">{step.number}</span>
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold">{step.title}</h4>
                          <Badge variant="secondary" className="bg-[#D4AF37]/20 text-[#D4AF37]">
                            {step.time}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-6 text-lg">{step.description}</p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="lg:col-span-1">
                      <div className="bg-gradient-to-br from-[#D4AF37]/10 to-[#B8941F]/10 rounded-2xl p-8 text-center border border-[#D4AF37]/30">
                        <div className="text-6xl mb-4">
                          {step.number === 1 && "🔗"}
                          {step.number === 2 && "⚙️"}
                          {step.number === 3 && "🤖"}
                          {step.number === 4 && "📊"}
                        </div>
                        <p className="text-muted-foreground">Step {step.number} Visualization</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Why TaskSher Works</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-5 w-5 text-[#D4AF37]" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{benefit.title}</h4>
                        <p className="text-muted-foreground text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Example Workflows */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Real-World Workflows</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {workflows.map((workflow, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">{workflow.title}</CardTitle>
                  <CardDescription>{workflow.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h5 className="font-semibold mb-2">Automations Used:</h5>
                    <div className="space-y-1">
                      {workflow.automations.map((automation, autoIndex) => (
                        <div key={autoIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          <span className="text-sm text-muted-foreground">{automation}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Time Saved:</span>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                        {workflow.timeSaved}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Video Demo Section */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-[#D4AF37]/10 to-[#B8941F]/10 border-[#D4AF37]/30">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">See It In Action</h3>
              <p className="text-xl text-muted-foreground mb-8">
                Watch how TaskSher transforms a solopreneur's workflow in under 3 minutes.
              </p>
              <div className="bg-background/50 rounded-2xl p-8 mb-8">
                <div className="w-20 h-20 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="h-10 w-10 text-[#D4AF37]" />
                </div>
                <p className="text-muted-foreground">3-minute demo video</p>
              </div>
              <Button size="lg" className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#121212] font-semibold px-8 py-4">
                <Play className="h-4 w-4 mr-2" />
                Watch Demo
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-[#D4AF37]/20 to-[#B8941F]/20 border-[#D4AF37]/30">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4">Ready to Start Automating?</h3>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of solopreneurs who are saving time with TaskSher.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/auth">
                  <Button size="lg" className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#121212] font-semibold px-8 py-4">
                    Start Free Trial
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/guide">
                  <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-accent px-8 py-4">
                    Setup Guide
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

export default HowItWorks;