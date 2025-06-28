import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Check, 
  CreditCard,
  Zap,
  Users,
  Shield,
  Clock,
  Star,
  HelpCircle
} from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PaymentModal } from "@/components/PaymentModal";
import { stripeConfig } from "@/stripe-config";
import { useState, useEffect } from "react";
import { toast } from "@/components/ui/sonner";

const Pricing = () => {
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [searchParams] = useSearchParams();

  // Handle canceled payment message
  useEffect(() => {
    const canceled = searchParams.get('canceled');
    if (canceled === 'true') {
      toast.error('Payment was canceled. You can try again anytime.');
    }
  }, [searchParams]);

  const plans = [
    {
      name: "Free",
      price: 0,
      description: "Perfect for trying out TaskSher",
      features: [
        "50 automation credits/month",
        "All 3 core automations",
        "Basic analytics",
        "Email support",
        "Community access"
      ],
      limitations: [
        "Limited to 50 credits",
        "Basic templates only",
        "Standard support"
      ],
      cta: "Get Started Free",
      popular: false
    },
    {
      name: "Pro",
      price: stripeConfig.products[0].price,
      description: "For serious solopreneurs",
      features: [
        "Unlimited automation credits",
        "All 3 core automations",
        "Advanced analytics",
        "Priority support",
        "Custom templates",
        "API access",
        "Advanced integrations",
        "White-label options"
      ],
      limitations: [],
      cta: "Start Pro Trial",
      popular: true,
      stripeProduct: stripeConfig.products[0]
    },
    {
      name: "Enterprise",
      price: 99,
      description: "For teams and agencies",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Advanced security",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom training",
        "Multi-workspace"
      ],
      limitations: [],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const faqs = [
    {
      question: "Can I change plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
    },
    {
      question: "What happens if I exceed my credit limit?",
      answer: "On the free plan, automations will pause until the next month. Pro users get unlimited credits, so this isn't a concern."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee for all paid plans. No questions asked."
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees ever. You only pay the monthly or yearly subscription fee."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Absolutely. You can cancel your subscription at any time from your dashboard. Your service continues until the end of your billing period."
    }
  ];

  const addOns = [
    {
      name: "Premium Support",
      price: 19,
      description: "24/7 priority support with dedicated account manager"
    },
    {
      name: "Custom Integrations",
      price: 49,
      description: "Build custom integrations for your specific tools"
    },
    {
      name: "Advanced Analytics",
      price: 29,
      description: "Detailed reporting and business intelligence"
    }
  ];

  const handleUpgrade = (plan: any) => {
    if (plan.stripeProduct) {
      setPaymentModalOpen(true);
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
              <CreditCard className="h-8 w-8 text-[#D4AF37]" />
              <div>
                <h1 className="text-2xl font-bold">Pricing</h1>
                <p className="text-muted-foreground">Simple, transparent pricing</p>
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
          <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Start free and scale as you grow. All plans include our core automation features.
          </p>
        </section>

        {/* Pricing Plans */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`bg-card border-border relative ${plan.popular ? 'border-[#D4AF37] shadow-lg' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#D4AF37] text-[#121212] px-4 py-1">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold my-4">
                    ${plan.price}
                    <span className="text-lg font-normal text-muted-foreground">
                      /month
                    </span>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {plan.stripeProduct ? (
                    <Button 
                      onClick={() => handleUpgrade(plan)}
                      className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-[#121212]"
                    >
                      {plan.cta}
                    </Button>
                  ) : (
                    <Link to={plan.name === 'Free' ? '/auth' : '/support'}>
                      <Button 
                        className={`w-full ${
                          plan.popular 
                            ? 'bg-[#D4AF37] hover:bg-[#B8941F] text-[#121212]' 
                            : 'bg-background hover:bg-accent border border-border text-foreground'
                        }`}
                      >
                        {plan.cta}
                      </Button>
                    </Link>
                  )}

                  {plan.limitations.length > 0 && (
                    <div className="pt-4 border-t border-border">
                      <p className="text-xs text-muted-foreground mb-2">Limitations:</p>
                      {plan.limitations.map((limitation, limitIndex) => (
                        <p key={limitIndex} className="text-xs text-muted-foreground">• {limitation}</p>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Add-ons */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Add-ons</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold mb-2">{addon.name}</h4>
                  <div className="text-2xl font-bold text-[#D4AF37] mb-2">${addon.price}/month</div>
                  <p className="text-muted-foreground text-sm">{addon.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Features Comparison */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Feature Comparison</h3>
          <Card className="bg-card border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-accent/50">
                  <tr>
                    <th className="text-left p-4">Feature</th>
                    <th className="text-center p-4">Free</th>
                    <th className="text-center p-4">Pro</th>
                    <th className="text-center p-4">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="p-4">Automation Credits</td>
                    <td className="text-center p-4">50/month</td>
                    <td className="text-center p-4">Unlimited</td>
                    <td className="text-center p-4">Unlimited</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4">Core Automations</td>
                    <td className="text-center p-4"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                    <td className="text-center p-4"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                    <td className="text-center p-4"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4">Advanced Analytics</td>
                    <td className="text-center p-4">-</td>
                    <td className="text-center p-4"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                    <td className="text-center p-4"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4">API Access</td>
                    <td className="text-center p-4">-</td>
                    <td className="text-center p-4"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                    <td className="text-center p-4"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4">Team Collaboration</td>
                    <td className="text-center p-4">-</td>
                    <td className="text-center p-4">-</td>
                    <td className="text-center p-4"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <HelpCircle className="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-2">{faq.question}</h4>
                      <p className="text-muted-foreground text-sm">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-[#D4AF37]/20 to-[#B8941F]/20 border-[#D4AF37]/30">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of solopreneurs saving time with TaskSher.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/auth">
                  <Button size="lg" className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#121212] font-semibold px-8 py-4">
                    Start Free Trial
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-accent px-8 py-4">
                  Schedule Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <PaymentModal
        isOpen={paymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
        product={stripeConfig.products[0]}
      />
    </div>
  );
};

export default Pricing;