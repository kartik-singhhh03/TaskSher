import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Plug, 
  CheckCircle,
  ExternalLink,
  Star,
  Users,
  Zap,
  Shield,
  Clock,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

const Integrations = () => {
  const featuredIntegrations = [
    {
      name: "Gmail",
      logo: "📧",
      description: "Automate email responses and manage your inbox efficiently",
      category: "Email",
      features: [
        "Auto-reply to emails",
        "Email parsing and categorization",
        "Smart filtering",
        "Template management"
      ],
      status: "available",
      popularity: 95
    },
    {
      name: "Notion",
      logo: "📝",
      description: "Convert emails to tasks and manage your workspace automatically",
      category: "Productivity",
      features: [
        "Create tasks from emails",
        "Update database entries",
        "Custom properties",
        "Bulk operations"
      ],
      status: "available",
      popularity: 88
    },
    {
      name: "Stripe",
      logo: "💳",
      description: "Trigger automations based on payment events and customer actions",
      category: "Payments",
      features: [
        "Payment confirmations",
        "Subscription events",
        "Customer lifecycle",
        "Revenue tracking"
      ],
      status: "available",
      popularity: 82
    }
  ];

  const allIntegrations = [
    {
      name: "Slack",
      logo: "💬",
      description: "Send notifications and updates to your team channels",
      category: "Communication",
      status: "available"
    },
    {
      name: "Discord",
      logo: "🎮",
      description: "Automate community management and notifications",
      category: "Communication",
      status: "available"
    },
    {
      name: "Zapier",
      logo: "⚡",
      description: "Connect with 5000+ apps through Zapier integration",
      category: "Automation",
      status: "available"
    },
    {
      name: "Webhooks",
      logo: "🔗",
      description: "Custom integrations with any service that supports webhooks",
      category: "Developer",
      status: "available"
    },
    {
      name: "Google Sheets",
      logo: "📊",
      description: "Log data and create reports in your spreadsheets",
      category: "Productivity",
      status: "coming-soon"
    },
    {
      name: "Airtable",
      logo: "🗃️",
      description: "Manage databases and automate workflows",
      category: "Database",
      status: "coming-soon"
    },
    {
      name: "Trello",
      logo: "📋",
      description: "Create cards and manage boards automatically",
      category: "Project Management",
      status: "coming-soon"
    },
    {
      name: "HubSpot",
      logo: "🎯",
      description: "Sync contacts and automate marketing workflows",
      category: "CRM",
      status: "coming-soon"
    },
    {
      name: "Salesforce",
      logo: "☁️",
      description: "Enterprise CRM integration for sales automation",
      category: "CRM",
      status: "planned"
    },
    {
      name: "Microsoft Teams",
      logo: "👥",
      description: "Team collaboration and notification automation",
      category: "Communication",
      status: "planned"
    },
    {
      name: "Shopify",
      logo: "🛍️",
      description: "E-commerce automation for order and customer management",
      category: "E-commerce",
      status: "planned"
    },
    {
      name: "WordPress",
      logo: "📰",
      description: "Content management and blog automation",
      category: "Content",
      status: "planned"
    }
  ];

  const categories = [
    { name: "All", count: allIntegrations.length + featuredIntegrations.length },
    { name: "Communication", count: 4 },
    { name: "Productivity", count: 3 },
    { name: "CRM", count: 2 },
    { name: "E-commerce", count: 1 },
    { name: "Developer", count: 1 }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "available":
        return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Available</Badge>;
      case "coming-soon":
        return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Coming Soon</Badge>;
      case "planned":
        return <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">Planned</Badge>;
      default:
        return null;
    }
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
              <Plug className="h-8 w-8 text-[#D4AF37]" />
              <div>
                <h1 className="text-2xl font-bold">Integrations</h1>
                <p className="text-muted-foreground">Connect your favorite tools</p>
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
          <h2 className="text-4xl font-bold mb-4">Connect Everything</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            TaskSher integrates with your favorite tools to create seamless automation workflows. 
            Connect once, automate forever.
          </p>
        </section>

        {/* Stats */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-[#D4AF37] mb-2">15+</div>
                <div className="text-muted-foreground text-sm">Available Integrations</div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-[#D4AF37] mb-2">5000+</div>
                <div className="text-muted-foreground text-sm">Via Zapier</div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-[#D4AF37] mb-2">99.9%</div>
                <div className="text-muted-foreground text-sm">Uptime</div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-[#D4AF37] mb-2">{"< 1s"}</div>
                <div className="text-muted-foreground text-sm">Response Time</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Featured Integrations */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8">Featured Integrations</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredIntegrations.map((integration, index) => (
              <Card key={index} className="bg-card border-border hover:border-[#D4AF37]/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{integration.logo}</div>
                      <div>
                        <CardTitle className="text-xl">{integration.name}</CardTitle>
                        <Badge variant="secondary" className="text-xs">{integration.category}</Badge>
                      </div>
                    </div>
                    {getStatusBadge(integration.status)}
                  </div>
                  <CardDescription>{integration.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Popularity</span>
                      <span className="text-sm text-muted-foreground">{integration.popularity}%</span>
                    </div>
                    <div className="w-full bg-accent rounded-full h-2">
                      <div 
                        className="bg-[#D4AF37] h-2 rounded-full" 
                        style={{ width: `${integration.popularity}%` }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Key Features</h4>
                    <div className="space-y-2">
                      {integration.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-[#121212] font-semibold">
                    <Plug className="h-4 w-4 mr-2" />
                    Connect {integration.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* All Integrations */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold">All Integrations</h3>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Filter by:</span>
              <select className="bg-background border border-border rounded-lg px-3 py-2 text-sm">
                {categories.map((category, index) => (
                  <option key={index} value={category.name}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allIntegrations.map((integration, index) => (
              <Card key={index} className="bg-card border-border hover:border-[#D4AF37]/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{integration.logo}</div>
                      <div>
                        <h4 className="font-semibold">{integration.name}</h4>
                        <Badge variant="secondary" className="text-xs">{integration.category}</Badge>
                      </div>
                    </div>
                    {getStatusBadge(integration.status)}
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{integration.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#121212]"
                    disabled={integration.status !== 'available'}
                  >
                    {integration.status === 'available' ? (
                      <>
                        <Plug className="h-4 w-4 mr-2" />
                        Connect
                      </>
                    ) : (
                      <>
                        <Clock className="h-4 w-4 mr-2" />
                        {integration.status === 'coming-soon' ? 'Coming Soon' : 'Planned'}
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Custom Integration */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-[#D4AF37]/10 to-[#B8941F]/10 border-[#D4AF37]/30">
            <CardContent className="p-12 text-center">
              <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Need a Custom Integration?</h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Don't see your tool listed? We can build custom integrations for Enterprise customers 
                or you can use our webhook system to connect any service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#121212] font-semibold px-8 py-4">
                  Request Integration
                </Button>
                <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-accent px-8 py-4">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Webhook Docs
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Integration Benefits */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Why Our Integrations Rock</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-green-500" />
                </div>
                <h4 className="font-semibold mb-2">Secure OAuth</h4>
                <p className="text-muted-foreground text-sm">Bank-grade security with OAuth 2.0 authentication</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-blue-500" />
                </div>
                <h4 className="font-semibold mb-2">Real-time Sync</h4>
                <p className="text-muted-foreground text-sm">Instant data synchronization across all platforms</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-purple-500" />
                </div>
                <h4 className="font-semibold mb-2">Easy Setup</h4>
                <p className="text-muted-foreground text-sm">One-click connection with guided setup process</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-orange-500" />
                </div>
                <h4 className="font-semibold mb-2">Reliable</h4>
                <p className="text-muted-foreground text-sm">99.9% uptime with automatic retry mechanisms</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-[#D4AF37]/20 to-[#B8941F]/20 border-[#D4AF37]/30">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4">Ready to Connect Your Tools?</h3>
              <p className="text-xl text-muted-foreground mb-8">
                Start building powerful automation workflows with your favorite tools today.
              </p>
              <Link to="/auth">
                <Button size="lg" className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#121212] font-semibold px-8 py-4">
                  Start Connecting
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Integrations;