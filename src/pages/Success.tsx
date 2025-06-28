import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  ArrowRight,
  Sparkles,
  Clock,
  Shield
} from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useSubscription } from "@/hooks/useSubscription";

const Success = () => {
  const [searchParams] = useSearchParams();
  const { user } = useAuth();
  const { data: subscription, refetch } = useSubscription();
  const [isLoading, setIsLoading] = useState(true);

  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    // Refetch subscription data after successful payment
    const timer = setTimeout(() => {
      refetch();
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [refetch]);

  const benefits = [
    {
      icon: Sparkles,
      title: "Unlimited Automations",
      description: "Create as many automations as you need"
    },
    {
      icon: Clock,
      title: "Priority Support",
      description: "Get help faster with priority support"
    },
    {
      icon: Shield,
      title: "Advanced Features",
      description: "Access to all premium features and analytics"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background text-foreground">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-500" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Welcome to TaskSher Pro!</h1>
            <p className="text-xl text-muted-foreground">
              Your subscription is now active. Let's get you started with your automations.
            </p>
          </div>

          {/* Subscription Details */}
          <Card className="bg-gradient-to-r from-[#D4AF37]/10 to-[#B8941F]/10 border-[#D4AF37]/30 mb-8">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center space-x-2">
                <span>TaskSher Pro</span>
                <Badge className="bg-[#D4AF37] text-[#121212]">Active</Badge>
              </CardTitle>
              <CardDescription>
                {subscription?.subscription_status === 'active' 
                  ? 'Your subscription is active and ready to use'
                  : isLoading 
                    ? 'Activating your subscription...'
                    : 'Setting up your account...'
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              {subscription && (
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Status:</span>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      {subscription.subscription_status}
                    </Badge>
                  </div>
                  {subscription.current_period_end && (
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Next billing:</span>
                      <span>{new Date(subscription.current_period_end * 1000).toLocaleDateString()}</span>
                    </div>
                  )}
                  {subscription.payment_method_last4 && (
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Payment method:</span>
                      <span>•••• •••• •••• {subscription.payment_method_last4}</span>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Benefits */}
          <div className="space-y-4 mb-8">
            <h2 className="text-2xl font-bold text-center">What's included in your Pro plan</h2>
            <div className="grid gap-4">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="bg-card border-border">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-5 w-5 text-[#D4AF37]" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{benefit.title}</h3>
                          <p className="text-muted-foreground text-sm">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Next Steps */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Ready to get started?</CardTitle>
              <CardDescription>
                Head to your dashboard to set up your first automation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link to="/dashboard">
                <Button className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-[#121212] font-semibold">
                  Go to Dashboard
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <Link to="/guide">
                <Button variant="outline" className="w-full border-border text-foreground hover:bg-accent">
                  View Setup Guide
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Support */}
          <div className="text-center mt-8">
            <p className="text-muted-foreground text-sm">
              Need help getting started? 
              <Link to="/support" className="text-[#D4AF37] hover:underline ml-1">
                Contact our support team
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;