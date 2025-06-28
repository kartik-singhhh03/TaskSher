import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, ArrowRight, Mail, FileText, Calendar, Zap, Shield, Clock, MessageSquare, Phone, MapPin, Send, Play, BookOpen, Users, Award, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ContactForm } from "@/components/ContactForm";
import { useState } from "react";

const Index = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background text-foreground">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 sticky top-0 bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-xl flex items-center justify-center font-bold text-[#121212] text-lg">
              🦁
            </div>
            <span className="text-2xl font-bold">TaskSher</span>
          </div>
          
          {/* Navigation Links - Hidden on mobile, shown on larger screens */}
          <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            <Link to="/features" className="text-muted-foreground hover:text-[#D4AF37] transition-colors whitespace-nowrap">Features</Link>
            <Link to="/pricing" className="text-muted-foreground hover:text-[#D4AF37] transition-colors whitespace-nowrap">Pricing</Link>
            <Link to="/how-it-works" className="text-muted-foreground hover:text-[#D4AF37] transition-colors whitespace-nowrap">How it Works</Link>
            <Link to="/dashboard" className="text-muted-foreground hover:text-[#D4AF37] transition-colors whitespace-nowrap">Dashboard</Link>
            <Link to="/api-docs" className="text-muted-foreground hover:text-[#D4AF37] transition-colors whitespace-nowrap">API Docs</Link>
            <Link to="/integrations" className="text-muted-foreground hover:text-[#D4AF37] transition-colors whitespace-nowrap">Integrations</Link>
            <button 
              onClick={() => setShowContactForm(true)}
              className="text-muted-foreground hover:text-[#D4AF37] transition-colors whitespace-nowrap"
            >
              Contact
            </button>
          </div>

          {/* Mobile Navigation Menu - Shown on smaller screens */}
          <div className="lg:hidden flex items-center space-x-4">
            <div className="relative group">
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                Menu
              </Button>
              <div className="absolute right-0 top-full mt-2 w-48 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link to="/features" className="block px-4 py-2 text-muted-foreground hover:text-[#D4AF37] hover:bg-accent transition-colors">Features</Link>
                  <Link to="/pricing" className="block px-4 py-2 text-muted-foreground hover:text-[#D4AF37] hover:bg-accent transition-colors">Pricing</Link>
                  <Link to="/how-it-works" className="block px-4 py-2 text-muted-foreground hover:text-[#D4AF37] hover:bg-accent transition-colors">How it Works</Link>
                  <Link to="/dashboard" className="block px-4 py-2 text-muted-foreground hover:text-[#D4AF37] hover:bg-accent transition-colors">Dashboard</Link>
                  <Link to="/api-docs" className="block px-4 py-2 text-muted-foreground hover:text-[#D4AF37] hover:bg-accent transition-colors">API Docs</Link>
                  <Link to="/integrations" className="block px-4 py-2 text-muted-foreground hover:text-[#D4AF37] hover:bg-accent transition-colors">Integrations</Link>
                  <button 
                    onClick={() => setShowContactForm(true)}
                    className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-[#D4AF37] hover:bg-accent transition-colors"
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            <ThemeToggle />
            <Link to="/auth">
              <Button variant="outline" className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#121212] rounded-xl hidden sm:inline-flex">
                Sign In
              </Button>
            </Link>
            <Link to="/auth">
              <Button className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#121212] font-semibold rounded-xl">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-6 bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/30 px-4 py-2 text-sm font-medium rounded-full">
            ✨ AI-Powered Virtual Assistant
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Let the{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] bg-clip-text text-transparent">
              Lion
            </span>{" "}
            Handle It
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            TaskSher automates your recurring micro-tasks like email replies, newsletters, 
            and Notion logging so you can focus on growing your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/auth">
              <Button size="lg" className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#121212] font-semibold px-8 py-4 rounded-xl text-lg">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-accent px-8 py-4 rounded-xl text-lg">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Check className="h-5 w-5 text-[#D4AF37]" />
              <span>Free 7-day trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-5 w-5 text-[#D4AF37]" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-5 w-5 text-[#D4AF37]" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="container mx-auto px-6 py-20 bg-accent/20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How TaskSher Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started in 3 simple steps and let AI handle your repetitive tasks
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="bg-card border-border rounded-2xl text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#D4AF37]">1</span>
              </div>
              <CardTitle className="text-xl">Connect Your Tools</CardTitle>
              <CardDescription>
                Link your Gmail, Notion, and other tools in just a few clicks. Our secure OAuth integration keeps your data safe.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="bg-card border-border rounded-2xl text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#D4AF37]">2</span>
              </div>
              <CardTitle className="text-xl">Configure Automations</CardTitle>
              <CardDescription>
                Set up your automation preferences. Choose templates, timing, and triggers that match your workflow.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="bg-card border-border rounded-2xl text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#D4AF37]">3</span>
              </div>
              <CardTitle className="text-xl">Sit Back & Relax</CardTitle>
              <CardDescription>
                Watch as TaskSher handles your repetitive tasks automatically. Monitor progress and savings in your dashboard.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Core AI Automations</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three powerful automations that save you hours every week
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-card border-border rounded-2xl hover:border-[#D4AF37]/50 transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-blue-400" />
              </div>
              <CardTitle className="text-foreground text-xl">Thank-you Email Generator</CardTitle>
              <CardDescription className="text-muted-foreground">
                Automatically send personalized thank-you emails when you receive payments or positive feedback. Increase customer satisfaction and retention.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-green-400 mr-2" />
                  Personalized templates
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-green-400 mr-2" />
                  Smart timing
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-green-400 mr-2" />
                  Multiple triggers
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border rounded-2xl hover:border-[#D4AF37]/50 transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-green-400" />
              </div>
              <CardTitle className="text-foreground text-xl">Newsletter Summary Generator</CardTitle>
              <CardDescription className="text-muted-foreground">
                Create weekly newsletter summaries from your content, saving hours of writing time while maintaining quality and engagement.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-green-400 mr-2" />
                  AI content curation
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-green-400 mr-2" />
                  Custom scheduling
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-green-400 mr-2" />
                  Brand voice matching
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border rounded-2xl hover:border-[#D4AF37]/50 transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-purple-400" />
              </div>
              <CardTitle className="text-foreground text-xl">Notion Task Logger</CardTitle>
              <CardDescription className="text-muted-foreground">
                Automatically convert emails into organized tasks in your Notion workspace. Never miss important follow-ups again.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-green-400 mr-2" />
                  Smart categorization
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-green-400 mr-2" />
                  Priority detection
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-green-400 mr-2" />
                  Due date suggestions
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-6 py-20 bg-accent/20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Why Solopreneurs Choose TaskSher</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="h-4 w-4 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Save 5-10 Hours Per Week</h3>
                  <p className="text-muted-foreground">Eliminate repetitive tasks and focus on high-value activities that grow your business. Our users report saving an average of 8 hours weekly.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Zap className="h-4 w-4 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Lightning Fast Setup</h3>
                  <p className="text-muted-foreground">Get up and running in minutes, not hours. Our AI learns your preferences quickly and adapts to your workflow seamlessly.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="h-4 w-4 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
                  <p className="text-muted-foreground">Your data stays secure with enterprise-grade encryption. We never store sensitive information or share it with third parties.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="h-4 w-4 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                  <p className="text-muted-foreground">Get help when you need it with our dedicated support team. Pro users get priority support with faster response times.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-[#D4AF37]/20 to-[#B8941F]/20 rounded-2xl p-8 border border-[#D4AF37]/30">
              <div className="text-center">
                <div className="text-6xl mb-4">📊</div>
                <h3 className="text-2xl font-bold mb-4">Dashboard Preview</h3>
                <p className="text-muted-foreground mb-6">Monitor your automations and track time saved with detailed analytics</p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-background/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-[#D4AF37]">127</div>
                    <div className="text-sm text-muted-foreground">Tasks Completed</div>
                  </div>
                  <div className="bg-background/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-[#D4AF37]">8.5h</div>
                    <div className="text-sm text-muted-foreground">Time Saved</div>
                  </div>
                  <div className="bg-background/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-[#D4AF37]">98%</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </div>
                  <div className="bg-background/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-[#D4AF37]">$2.4k</div>
                    <div className="text-sm text-muted-foreground">Value Created</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground">Choose the plan that fits your automation needs</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-card border-border rounded-2xl p-8">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl text-foreground">Free</CardTitle>
              <div className="text-4xl font-bold text-foreground my-4">$0<span className="text-lg font-normal text-muted-foreground">/month</span></div>
              <CardDescription className="text-muted-foreground">Perfect for trying out TaskSher</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-[#D4AF37]" />
                <span>50 automation credits/month</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-[#D4AF37]" />
                <span>All 3 core automations</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-[#D4AF37]" />
                <span>Email support</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-[#D4AF37]" />
                <span>Basic analytics</span>
              </div>
              <Link to="/auth">
                <Button className="w-full mt-6 bg-background hover:bg-accent border border-border text-foreground rounded-xl">
                  Get Started Free
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-[#D4AF37]/10 to-card border-[#D4AF37]/50 rounded-2xl p-8 relative">
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#D4AF37] text-[#121212] px-4 py-1">
              Most Popular
            </Badge>
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl text-foreground">Pro</CardTitle>
              <div className="text-4xl font-bold text-foreground my-4">$29<span className="text-lg font-normal text-muted-foreground">/month</span></div>
              <CardDescription className="text-muted-foreground">For serious solopreneurs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-[#D4AF37]" />
                <span>Unlimited automation credits</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-[#D4AF37]" />
                <span>All 3 core automations</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-[#D4AF37]" />
                <span>Priority support</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-[#D4AF37]" />
                <span>Advanced analytics</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-[#D4AF37]" />
                <span>Custom automation templates</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-[#D4AF37]" />
                <span>API access</span>
              </div>
              <Link to="/auth">
                <Button className="w-full mt-6 bg-[#D4AF37] hover:bg-[#B8941F] text-[#121212] font-semibold rounded-xl">
                  Start Pro Trial
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="container mx-auto px-6 py-20 bg-accent/20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Loved by Solopreneurs Worldwide</h2>
          <p className="text-xl text-muted-foreground">Join thousands of entrepreneurs saving time with TaskSher</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Chen",
              role: "E-commerce Founder",
              company: "StyleCraft",
              content: "TaskSher saves me 8 hours every week. The thank-you email automation alone has improved my customer relationships significantly. ROI was immediate!",
              rating: 5,
              avatar: "SC"
            },
            {
              name: "Marcus Rodriguez",
              role: "Content Creator",
              company: "Digital Nomad Hub",
              content: "The newsletter summary feature is a game-changer. What used to take me 3 hours now happens automatically. I can focus on creating instead of admin work.",
              rating: 5,
              avatar: "MR"
            },
            {
              name: "Emily Johnson",
              role: "Business Consultant",
              company: "Growth Partners",
              content: "Finally, an AI tool that actually understands small business needs. The Notion integration is seamless and the support team is incredibly responsive.",
              rating: 5,
              avatar: "EJ"
            }
          ].map((testimonial, index) => (
            <Card key={index} className="bg-card border-border rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#121212] font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">TaskSher by the Numbers</h2>
          <p className="text-xl text-muted-foreground">Trusted by entrepreneurs worldwide</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#D4AF37] mb-2">10,000+</div>
            <div className="text-muted-foreground">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#D4AF37] mb-2">500K+</div>
            <div className="text-muted-foreground">Tasks Automated</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#D4AF37] mb-2">50K+</div>
            <div className="text-muted-foreground">Hours Saved</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#D4AF37] mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-[#D4AF37]/20 to-[#B8941F]/20 rounded-2xl p-12 text-center border border-[#D4AF37]/30">
          <h2 className="text-4xl font-bold mb-4">Ready to Let the Lion Handle It?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of solopreneurs who are saving time and growing their businesses with TaskSher.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link to="/auth">
              <Button size="lg" className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#121212] font-semibold px-8 py-4 rounded-xl text-lg">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border text-foreground hover:bg-accent px-8 py-4 rounded-xl text-lg"
              onClick={() => setShowContactForm(true)}
            >
              Schedule Demo
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            7-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>

      {/* Professional Footer */}
      <footer className="bg-accent/30 border-t border-border">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-lg flex items-center justify-center font-bold text-[#121212] text-sm">
                  🦁
                </div>
                <span className="text-xl font-bold">TaskSher</span>
              </div>
              <p className="text-muted-foreground text-sm">
                AI-powered virtual assistant for solopreneurs. Automate your recurring tasks and focus on what matters most - growing your business.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center">
                  <Globe className="h-4 w-4 text-[#D4AF37]" />
                </div>
                <div className="w-8 h-8 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center">
                  <MessageSquare className="h-4 w-4 text-[#D4AF37]" />
                </div>
                <div className="w-8 h-8 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center">
                  <Mail className="h-4 w-4 text-[#D4AF37]" />
                </div>
              </div>
            </div>

            {/* Product */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Product</h3>
              <div className="space-y-2">
                <Link to="/features" className="block text-muted-foreground hover:text-[#D4AF37] transition-colors text-sm">Features</Link>
                <Link to="/pricing" className="block text-muted-foreground hover:text-[#D4AF37] transition-colors text-sm">Pricing</Link>
                <Link to="/how-it-works" className="block text-muted-foreground hover:text-[#D4AF37] transition-colors text-sm">How it Works</Link>
                <Link to="/dashboard" className="block text-muted-foreground hover:text-[#D4AF37] transition-colors text-sm">Dashboard</Link>
                <Link to="/api-docs" className="block text-muted-foreground hover:text-[#D4AF37] transition-colors text-sm">API Documentation</Link>
                <Link to="/integrations" className="block text-muted-foreground hover:text-[#D4AF37] transition-colors text-sm">Integrations</Link>
              </div>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Support</h3>
              <div className="space-y-2">
                <Link to="/support" className="block text-muted-foreground hover:text-[#D4AF37] transition-colors text-sm">Contact Support</Link>
                <Link to="/support" className="block text-muted-foreground hover:text-[#D4AF37] transition-colors text-sm">Help Center</Link>
                <Link to="/guide" className="block text-muted-foreground hover:text-[#D4AF37] transition-colors text-sm">Getting Started</Link>
                <a href="#" className="block text-muted-foreground hover:text-[#D4AF37] transition-colors text-sm">Video Tutorials</a>
                <a href="#" className="block text-muted-foreground hover:text-[#D4AF37] transition-colors text-sm">Community Forum</a>
                <a href="#" className="block text-muted-foreground hover:text-[#D4AF37] transition-colors text-sm">Status Page</a>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-[#D4AF37]" />
                  <a href="mailto:contactsweatandcode@gmail.com" className="text-muted-foreground hover:text-[#D4AF37] transition-colors text-sm">
                    contactsweatandcode@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-[#D4AF37]" />
                  <span className="text-muted-foreground text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-[#D4AF37]" />
                  <span className="text-muted-foreground text-sm">San Francisco, CA</span>
                </div>
                <Button 
                  onClick={() => setShowContactForm(true)}
                  className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-[#121212] font-semibold rounded-xl mt-4"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-muted-foreground text-sm">
                <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-[#D4AF37] transition-colors">Cookie Policy</a>
                <a href="#" className="hover:text-[#D4AF37] transition-colors">GDPR</a>
              </div>
              <div className="text-muted-foreground text-sm">
                © 2024 TaskSher. All rights reserved. Built with ❤️ by Kartik Singh
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={showContactForm} 
        onClose={() => setShowContactForm(false)} 
      />
    </div>
  );
};

export default Index;