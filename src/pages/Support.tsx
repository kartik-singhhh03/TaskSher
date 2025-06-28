import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  ArrowLeft, 
  MessageSquare,
  Mail,
  Phone,
  Clock,
  HelpCircle,
  Send,
  CheckCircle,
  AlertCircle,
  Book,
  Video,
  Users,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ContactForm } from "@/components/ContactForm";

const Support = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [ticketForm, setTicketForm] = useState({
    subject: '',
    category: '',
    priority: '',
    description: ''
  });

  const faqs = [
    {
      question: "How do I get started with TaskSher?",
      answer: "Getting started is easy! Sign up for a free account, connect your tools (Gmail, Notion, etc.), and configure your first automation. Our setup wizard will guide you through the process in under 10 minutes."
    },
    {
      question: "What's included in the free plan?",
      answer: "The free plan includes 50 automation credits per month, access to all 3 core automations (email replies, newsletter generation, Notion tasks), basic analytics, and email support."
    },
    {
      question: "How do automation credits work?",
      answer: "Each time an automation runs, it consumes 1 credit. For example, sending a thank-you email or creating a Notion task each use 1 credit. Pro users get unlimited credits."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time from your dashboard. Your service will continue until the end of your current billing period, and you won't be charged again."
    },
    {
      question: "Is my data secure with TaskSher?",
      answer: "Absolutely. We use bank-grade encryption, SOC 2 compliance, and never store sensitive information. All integrations use secure OAuth authentication, and your data is never shared with third parties."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, contact our support team for a full refund."
    },
    {
      question: "How do I connect my Gmail account?",
      answer: "Go to your dashboard, click 'Connect Gmail', and follow the OAuth authentication process. We only request the minimum permissions needed for your automations to work."
    },
    {
      question: "Can I use TaskSher for my team?",
      answer: "Currently, TaskSher is designed for individual solopreneurs. Team features are planned for our Enterprise plan. Contact us if you're interested in team functionality."
    },
    {
      question: "What happens if an automation fails?",
      answer: "If an automation fails, you'll receive a notification (if enabled), and we'll automatically retry the automation. Failed automations don't consume credits, and you can view error details in your dashboard."
    },
    {
      question: "Do you have an API?",
      answer: "Yes! Pro users get access to our REST API for custom integrations. Check out our API documentation for detailed information on endpoints and authentication."
    }
  ];

  const supportChannels = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email",
      details: "contactsweatandcode@gmail.com",
      responseTime: "Usually within 2-4 hours",
      availability: "24/7"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our support team",
      details: "Available in dashboard",
      responseTime: "Instant response",
      availability: "9 AM - 6 PM PST"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Talk to a human (Pro only)",
      details: "+1 (555) 123-4567",
      responseTime: "Immediate",
      availability: "Business hours"
    }
  ];

  const resources = [
    {
      icon: Book,
      title: "Documentation",
      description: "Complete guides and tutorials",
      link: "/guide"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      link: "#"
    },
    {
      icon: Users,
      title: "Community Forum",
      description: "Connect with other users",
      link: "#"
    },
    {
      icon: Zap,
      title: "API Docs",
      description: "Developer documentation",
      link: "/api-docs"
    }
  ];

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle ticket submission
    console.log('Ticket submitted:', ticketForm);
  };

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
              <HelpCircle className="h-8 w-8 text-[#D4AF37]" />
              <div>
                <h1 className="text-2xl font-bold">Support Center</h1>
                <p className="text-muted-foreground">Get help when you need it</p>
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
          <h2 className="text-4xl font-bold mb-4">How can we help you?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Find answers to common questions, browse our documentation, or contact our support team.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Input
                placeholder="Search for help articles, guides, or FAQs..."
                className="pl-12 pr-4 py-6 text-lg bg-background border-border"
              />
              <HelpCircle className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Contact Support</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {supportChannels.map((channel, index) => {
              const IconComponent = channel.icon;
              return (
                <Card key={index} className="bg-card border-border hover:border-[#D4AF37]/50 transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-[#D4AF37]" />
                    </div>
                    <CardTitle>{channel.title}</CardTitle>
                    <CardDescription>{channel.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-3">
                    <div>
                      <p className="font-semibold">{channel.details}</p>
                      <p className="text-sm text-muted-foreground">{channel.availability}</p>
                    </div>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      {channel.responseTime}
                    </Badge>
                    <Button 
                      className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-[#121212] font-semibold"
                      onClick={() => {
                        if (channel.title === "Email Support") {
                          setShowContactForm(true);
                        }
                      }}
                    >
                      Contact Now
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Submit Ticket */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Send className="h-5 w-5 text-[#D4AF37]" />
                  <span>Submit a Ticket</span>
                </CardTitle>
                <CardDescription>
                  Can't find what you're looking for? Submit a support ticket.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleTicketSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="Brief description of your issue"
                      value={ticketForm.subject}
                      onChange={(e) => setTicketForm(prev => ({ ...prev, subject: e.target.value }))}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Category</Label>
                      <Select value={ticketForm.category} onValueChange={(value) => setTicketForm(prev => ({ ...prev, category: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technical">Technical Issue</SelectItem>
                          <SelectItem value="billing">Billing Question</SelectItem>
                          <SelectItem value="feature">Feature Request</SelectItem>
                          <SelectItem value="general">General Question</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Priority</Label>
                      <Select value={ticketForm.priority} onValueChange={(value) => setTicketForm(prev => ({ ...prev, priority: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="urgent">Urgent</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Please provide as much detail as possible..."
                      rows={4}
                      value={ticketForm.description}
                      onChange={(e) => setTicketForm(prev => ({ ...prev, description: e.target.value }))}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-[#121212] font-semibold">
                    <Send className="h-4 w-4 mr-2" />
                    Submit Ticket
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Status & Updates */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertCircle className="h-5 w-5 text-[#D4AF37]" />
                  <span>System Status</span>
                </CardTitle>
                <CardDescription>
                  Current status of TaskSher services
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>API Services</span>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-green-500">Operational</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Email Automations</span>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-green-500">Operational</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Notion Integration</span>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-green-500">Operational</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Dashboard</span>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-green-500">Operational</span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <span>Last updated:</span>
                    <span className="text-muted-foreground">2 minutes ago</span>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full border-border text-foreground hover:bg-accent">
                  View Status Page
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h3>
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Resources */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Helpful Resources</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <Card key={index} className="bg-card border-border text-center hover:border-[#D4AF37]/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-[#D4AF37]" />
                    </div>
                    <h4 className="font-semibold mb-2">{resource.title}</h4>
                    <p className="text-muted-foreground text-sm mb-4">{resource.description}</p>
                    <Link to={resource.link}>
                      <Button variant="outline" size="sm" className="w-full border-border text-foreground hover:bg-accent">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Contact Info */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-[#D4AF37]/20 to-[#B8941F]/20 border-[#D4AF37]/30">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4">Still Need Help?</h3>
              <p className="text-xl text-muted-foreground mb-8">
                Our support team is here to help you succeed with TaskSher.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#121212] font-semibold px-8 py-4"
                  onClick={() => setShowContactForm(true)}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Support
                </Button>
                <Link to="/guide">
                  <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-accent px-8 py-4">
                    <Book className="h-4 w-4 mr-2" />
                    Browse Guides
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <ContactForm 
        isOpen={showContactForm} 
        onClose={() => setShowContactForm(false)} 
      />
    </div>
  );
};

export default Support;