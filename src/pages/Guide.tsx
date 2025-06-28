import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, 
  Play, 
  CheckCircle, 
  Mail, 
  FileText, 
  Calendar, 
  Settings, 
  Zap, 
  Shield, 
  Users,
  BookOpen,
  Video,
  Download,
  ExternalLink,
  Clock,
  Target,
  Lightbulb,
  AlertCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

const Guide = () => {
  const steps = [
    {
      title: "Sign Up & Connect",
      description: "Create your account and connect your tools",
      time: "2 minutes",
      steps: [
        "Sign up with email or OAuth (Google/LinkedIn)",
        "Connect your Gmail account",
        "Link your Notion workspace",
        "Verify integrations are working"
      ]
    },
    {
      title: "Configure Automations",
      description: "Set up your first automation workflows",
      time: "5 minutes",
      steps: [
        "Choose your automation type",
        "Configure triggers and conditions",
        "Customize templates and timing",
        "Test with sample data"
      ]
    },
    {
      title: "Monitor & Optimize",
      description: "Track performance and refine your setup",
      time: "Ongoing",
      steps: [
        "Review automation analytics",
        "Adjust settings based on results",
        "Add new automations as needed",
        "Monitor credit usage"
      ]
    }
  ];

  const automations = [
    {
      icon: Mail,
      title: "Thank-you Email Generator",
      description: "Automatically send personalized thank-you emails",
      features: [
        "Trigger on payment received",
        "Customizable templates",
        "Smart timing delays",
        "Personalization tokens"
      ],
      setup: [
        "Connect your email provider",
        "Choose email templates",
        "Set trigger conditions",
        "Configure timing"
      ]
    },
    {
      icon: FileText,
      title: "Newsletter Summary",
      description: "Generate weekly newsletter content automatically",
      features: [
        "Content aggregation",
        "AI-powered summaries",
        "Scheduled delivery",
        "Brand voice matching"
      ],
      setup: [
        "Add content sources",
        "Set publication schedule",
        "Customize newsletter template",
        "Configure distribution"
      ]
    },
    {
      icon: Calendar,
      title: "Notion Task Logger",
      description: "Convert emails into organized Notion tasks",
      features: [
        "Smart email parsing",
        "Automatic categorization",
        "Priority detection",
        "Due date suggestions"
      ],
      setup: [
        "Connect Notion workspace",
        "Select target database",
        "Configure task properties",
        "Set filtering rules"
      ]
    }
  ];

  const tips = [
    {
      icon: Target,
      title: "Start Small",
      description: "Begin with one automation and gradually add more as you get comfortable with the platform."
    },
    {
      icon: Clock,
      title: "Monitor Performance",
      description: "Check your dashboard regularly to see time saved and optimize your automations."
    },
    {
      icon: Lightbulb,
      title: "Use Templates",
      description: "Leverage pre-built templates to get started quickly and learn best practices."
    },
    {
      icon: Users,
      title: "Join Community",
      description: "Connect with other users to share tips, tricks, and automation ideas."
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
              <BookOpen className="h-8 w-8 text-[#D4AF37]" />
              <div>
                <h1 className="text-2xl font-bold">TaskSher Guide</h1>
                <p className="text-muted-foreground">Learn how to automate your workflow</p>
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
        {/* Introduction */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Complete TaskSher Guide</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn how to set up and use TaskSher to automate your recurring tasks and save hours every week.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="font-semibold mb-2">Quick Setup</h3>
                <p className="text-muted-foreground text-sm">Get started in under 10 minutes</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="font-semibold mb-2">Powerful Automations</h3>
                <p className="text-muted-foreground text-sm">3 core automations to transform your workflow</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="font-semibold mb-2">Secure & Reliable</h3>
                <p className="text-muted-foreground text-sm">Enterprise-grade security and 99.9% uptime</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Getting Started Steps */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Getting Started</h2>
          
          <div className="space-y-6">
            {steps.map((step, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-[#D4AF37]/20 rounded-full flex items-center justify-center">
                        <span className="font-bold text-[#D4AF37]">{index + 1}</span>
                      </div>
                      <div>
                        <CardTitle className="text-xl">{step.title}</CardTitle>
                        <CardDescription>{step.description}</CardDescription>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-[#D4AF37]/20 text-[#D4AF37]">
                      {step.time}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {step.steps.map((stepItem, stepIndex) => (
                      <div key={stepIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{stepItem}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Automation Guides */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Automation Setup Guides</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {automations.map((automation, index) => {
              const IconComponent = automation.icon;
              return (
                <Card key={index} className="bg-card border-border">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-[#D4AF37]/20 rounded-xl flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-[#D4AF37]" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{automation.title}</CardTitle>
                        <CardDescription className="text-sm">{automation.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Key Features</h4>
                      <div className="space-y-2">
                        {automation.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">Setup Steps</h4>
                      <div className="space-y-2">
                        {automation.setup.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-center space-x-2">
                            <span className="w-5 h-5 bg-[#D4AF37]/20 rounded-full flex items-center justify-center text-xs font-semibold text-[#D4AF37]">
                              {stepIndex + 1}
                            </span>
                            <span className="text-sm text-muted-foreground">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button variant="outline" className="w-full border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#121212]">
                      <Video className="h-4 w-4 mr-2" />
                      Watch Tutorial
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Best Practices & Tips</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {tips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-5 w-5 text-[#D4AF37]" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{tip.title}</h3>
                        <p className="text-muted-foreground text-sm">{tip.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Troubleshooting</h2>
          
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertCircle className="h-5 w-5 text-orange-500" />
                <span>Common Issues & Solutions</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Automation not triggering</h4>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Check if the automation is enabled in your dashboard</li>
                  <li>• Verify trigger conditions are met</li>
                  <li>• Ensure connected services have proper permissions</li>
                  <li>• Check your credit balance</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-2">Integration connection issues</h4>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Re-authenticate your connected services</li>
                  <li>• Check service status pages for outages</li>
                  <li>• Verify API permissions are granted</li>
                  <li>• Contact support if issues persist</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-2">Email delivery problems</h4>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Check spam/junk folders</li>
                  <li>• Verify sender email is authenticated</li>
                  <li>• Review email content for spam triggers</li>
                  <li>• Check recipient email validity</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Resources */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Additional Resources</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <Video className="h-8 w-8 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Video Tutorials</h3>
                <p className="text-muted-foreground text-sm mb-4">Step-by-step video guides</p>
                <Button variant="outline" size="sm" className="w-full">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Watch Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <Download className="h-8 w-8 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Templates</h3>
                <p className="text-muted-foreground text-sm mb-4">Pre-built automation templates</p>
                <Button variant="outline" size="sm" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Community</h3>
                <p className="text-muted-foreground text-sm mb-4">Join our user community</p>
                <Button variant="outline" size="sm" className="w-full">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Join Forum
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <BookOpen className="h-8 w-8 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="font-semibold mb-2">API Docs</h3>
                <p className="text-muted-foreground text-sm mb-4">Developer documentation</p>
                <Button variant="outline" size="sm" className="w-full">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Docs
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-[#D4AF37]/20 to-[#B8941F]/20 border-[#D4AF37]/30">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Follow this guide and start automating your tasks today. Join thousands of solopreneurs saving time with TaskSher.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/auth">
                  <Button size="lg" className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#121212] font-semibold px-8 py-4">
                    Start Free Trial
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-accent px-8 py-4">
                  <Play className="h-4 w-4 mr-2" />
                  Watch Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Guide;