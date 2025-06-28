import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Mail, 
  FileText, 
  Calendar, 
  Settings, 
  Bell, 
  CheckCircle, 
  AlertCircle,
  TrendingUp,
  Clock,
  Zap,
  LogOut,
  CreditCard
} from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useProfile } from "@/hooks/useProfile";
import { useSubscription } from "@/hooks/useSubscription";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PaymentModal } from "@/components/PaymentModal";
import { stripeConfig } from "@/stripe-config";
import { toast } from "@/components/ui/sonner";
import { useEffect } from "react";

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const { data: profile, isLoading: isProfileLoading } = useProfile();
  const { data: subscription, isLoading: isSubscriptionLoading } = useSubscription();
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [searchParams] = useSearchParams();
  
  const [automations, setAutomations] = useState({
    thankYouEmails: true,
    newsletter: false,
    notionTasks: true
  });

  // Handle success/error messages from URL params
  useEffect(() => {
    const success = searchParams.get('success');
    const canceled = searchParams.get('canceled');
    
    if (success === 'true') {
      toast.success('Payment successful! Welcome to TaskSher Pro!');
    } else if (canceled === 'true') {
      toast.error('Payment was canceled. You can try again anytime.');
    }
  }, [searchParams]);

  const handleAutomationToggle = (key: keyof typeof automations) => {
    setAutomations(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSignOut = async () => {
    await signOut();
  };

  const handleUpgrade = () => {
    setPaymentModalOpen(true);
  };

  const recentActivities = [
    {
      id: 1,
      type: "email",
      description: "Thank-you email sent to Sarah Chen",
      time: "2 minutes ago",
      status: "success"
    },
    {
      id: 2,
      type: "notion",
      description: "Task logged: 'Review Q4 marketing strategy'",
      time: "15 minutes ago",
      status: "success"
    },
    {
      id: 3,
      type: "newsletter",
      description: "Weekly newsletter draft created",
      time: "1 hour ago",
      status: "success"
    },
    {
      id: 4,
      type: "email",
      description: "Failed to send email - API limit reached",
      time: "2 hours ago",
      status: "error"
    }
  ];

  const stats = [
    {
      title: "Tasks Completed",
      value: "127",
      change: "+12%",
      icon: CheckCircle,
      color: "text-green-400"
    },
    {
      title: "Time Saved",
      value: "8.5h",
      change: "+2.1h",
      icon: Clock,
      color: "text-blue-400"
    },
    {
      title: "Credits Used",
      value: profile?.credits_used?.toString() || "0",
      change: `of ${profile?.credits_limit || 50}`,
      icon: Zap,
      color: "text-yellow-400"
    }
  ];

  const getInitials = (name: string | null | undefined) => {
    if (!name) return 'U';
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getFirstName = (fullName: string | null | undefined) => {
    if (!fullName) return 'User';
    return fullName.split(' ')[0];
  };

  const getSubscriptionPlan = () => {
    if (isSubscriptionLoading) return 'Loading...';
    
    if (subscription?.subscription_status === 'active') {
      return 'Pro Plan';
    }
    
    return profile?.subscription_plan === 'pro' ? 'Pro Plan' : 'Free Plan';
  };

  const isProUser = () => {
    return subscription?.subscription_status === 'active' || profile?.subscription_plan === 'pro';
  };

  if (isProfileLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-foreground">Loading profile...</div>
      </div>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <header className="border-b border-border p-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-xl flex items-center justify-center font-bold text-[#121212] text-lg">
                🦁
              </div>
              <div>
                <h1 className="text-2xl font-bold">Welcome back, {getFirstName(profile?.full_name)}</h1>
                <p className="text-muted-foreground">Your AI assistant is working hard for you</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Badge className="bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/30">
                {getSubscriptionPlan()}
              </Badge>
              <ThemeToggle />
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
              </Button>
              <Link to="/settings">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Settings className="h-4 w-4" />
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSignOut}
                className="text-muted-foreground hover:text-foreground"
              >
                <LogOut className="h-4 w-4" />
              </Button>
              <Avatar>
                <AvatarImage src={profile?.avatar_url || undefined} />
                <AvatarFallback className="bg-[#D4AF37] text-[#121212]">
                  {getInitials(profile?.full_name)}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="bg-card border-border rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-muted-foreground text-sm">{stat.title}</p>
                        <p className="text-3xl font-bold text-foreground mt-1">{stat.value}</p>
                        <p className="text-sm text-[#D4AF37] mt-1">{stat.change}</p>
                      </div>
                      <IconComponent className={`h-10 w-10 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Automation Controls */}
            <div className="lg:col-span-2">
              <Card className="bg-card border-border rounded-2xl mb-6">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center">
                    <Settings className="h-5 w-5 mr-2" />
                    Automation Controls
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Toggle your AI automations on and off
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-accent/50 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-6 w-6 text-blue-400" />
                      <div>
                        <h3 className="font-semibold text-foreground">Thank-you Email Generator</h3>
                        <p className="text-sm text-muted-foreground">Auto-send personalized responses</p>
                      </div>
                    </div>
                    <Switch
                      checked={automations.thankYouEmails}
                      onCheckedChange={() => handleAutomationToggle('thankYouEmails')}
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-accent/50 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-6 w-6 text-green-400" />
                      <div>
                        <h3 className="font-semibold text-foreground">Newsletter Summary</h3>
                        <p className="text-sm text-muted-foreground">Weekly content generation</p>
                      </div>
                    </div>
                    <Switch
                      checked={automations.newsletter}
                      onCheckedChange={() => handleAutomationToggle('newsletter')}
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-accent/50 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-6 w-6 text-purple-400" />
                      <div>
                        <h3 className="font-semibold text-foreground">Notion Task Logger</h3>
                        <p className="text-sm text-muted-foreground">Auto-organize emails into tasks</p>
                      </div>
                    </div>
                    <Switch
                      checked={automations.notionTasks}
                      onCheckedChange={() => handleAutomationToggle('notionTasks')}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Quickstart */}
              <Card className="bg-gradient-to-br from-[#D4AF37]/10 to-card border-[#D4AF37]/30 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-foreground">Quick Setup</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Connect your tools to get started
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-white hover:bg-gray-100 text-gray-900 rounded-xl">
                    <Mail className="h-4 w-4 mr-2" />
                    Connect Gmail
                  </Button>
                  <Button className="w-full bg-[#000000] hover:bg-[#333333] text-white border border-gray-600 rounded-xl">
                    Connect Notion
                  </Button>
                  {!isProUser() && (
                    <div className="pt-4 border-t border-border">
                      <div className="text-center mb-4">
                        <h4 className="font-semibold text-foreground mb-2">Upgrade to Pro</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          Get unlimited automations and priority support
                        </p>
                      </div>
                      <Button 
                        onClick={handleUpgrade}
                        className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-[#121212] font-semibold rounded-xl"
                      >
                        <CreditCard className="h-4 w-4 mr-2" />
                        Upgrade to Pro - ${stripeConfig.products[0].price}/{stripeConfig.products[0].interval}
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Activity Feed */}
            <div>
              <Card className="bg-card border-border rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center justify-between">
                    Recent Activity
                    <Badge variant="secondary" className="bg-[#D4AF37]/20 text-[#D4AF37]">
                      {recentActivities.filter(a => a.status === 'error').length} errors
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3 p-3 bg-accent/50 rounded-xl">
                      <div className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${
                        activity.status === 'success' ? 'bg-green-400' : 'bg-red-400'
                      }`}></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-foreground">{activity.description}</p>
                        <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                      </div>
                      {activity.status === 'success' ? (
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="h-4 w-4 text-red-400 flex-shrink-0" />
                      )}
                    </div>
                  ))}
                  
                  <Button variant="ghost" className="w-full text-[#D4AF37] hover:bg-[#D4AF37]/10">
                    View All Activity
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <PaymentModal
          isOpen={paymentModalOpen}
          onClose={() => setPaymentModalOpen(false)}
          product={stripeConfig.products[0]}
        />
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;