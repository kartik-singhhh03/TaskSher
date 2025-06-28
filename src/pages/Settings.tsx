import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { 
  User, 
  Bell, 
  CreditCard, 
  Shield, 
  Trash2, 
  Upload,
  Mail,
  Calendar,
  FileText,
  Settings as SettingsIcon,
  ArrowLeft,
  Save,
  Eye,
  EyeOff,
  ExternalLink,
  Download,
  AlertTriangle
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useProfile } from "@/hooks/useProfile";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { toast } from "@/components/ui/sonner";

const Settings = () => {
  const { user, signOut } = useAuth();
  const { data: profile, isLoading: isProfileLoading } = useProfile();
  
  // Profile settings state
  const [profileData, setProfileData] = useState({
    fullName: profile?.full_name || '',
    email: profile?.email || '',
    bio: '',
    timezone: 'UTC-8',
    language: 'en'
  });

  // Notification settings state
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    taskCompletions: true,
    weeklyReports: true,
    errorAlerts: true,
    marketingEmails: false
  });

  // Automation settings state
  const [automationSettings, setAutomationSettings] = useState({
    thankYouEmails: {
      enabled: true,
      delay: '5',
      template: 'professional'
    },
    newsletter: {
      enabled: false,
      frequency: 'weekly',
      dayOfWeek: 'monday'
    },
    notionTasks: {
      enabled: true,
      database: '',
      autoAssign: false
    }
  });

  // Security settings state
  const [securitySettings, setSecuritySettings] = useState({
    twoFactorEnabled: false,
    sessionTimeout: '24',
    apiKeyVisible: false
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSaveProfile = async () => {
    setIsLoading(true);
    try {
      // TODO: Implement profile update API call
      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error("Failed to update profile");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveNotifications = async () => {
    setIsLoading(true);
    try {
      // TODO: Implement notification settings update
      toast.success("Notification preferences updated");
    } catch (error) {
      toast.error("Failed to update notification preferences");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveAutomations = async () => {
    setIsLoading(true);
    try {
      // TODO: Implement automation settings update
      toast.success("Automation settings updated");
    } catch (error) {
      toast.error("Failed to update automation settings");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      try {
        // TODO: Implement account deletion
        toast.success("Account deletion initiated");
      } catch (error) {
        toast.error("Failed to delete account");
      }
    }
  };

  const getInitials = (name: string | null | undefined) => {
    if (!name) return 'U';
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  if (isProfileLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#121212] flex items-center justify-center">
        <div className="text-white">Loading settings...</div>
      </div>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#121212] text-white">
        {/* Header */}
        <header className="border-b border-[#E2E2E2]/20 p-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/dashboard" className="text-[#F9F9F9]/70 hover:text-[#F9F9F9] transition-colors">
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <div className="flex items-center space-x-3">
                <SettingsIcon className="h-8 w-8 text-[#D4AF37]" />
                <div>
                  <h1 className="text-2xl font-bold">Settings</h1>
                  <p className="text-[#F9F9F9]/70">Manage your account and preferences</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Badge className="bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/30">
                {profile?.subscription_plan === 'pro' ? 'Pro Plan' : 'Free Plan'}
              </Badge>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto p-6">
          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5 bg-[#1a1a1a] border border-[#E2E2E2]/20 rounded-xl">
              <TabsTrigger value="profile" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#121212]">
                <User className="h-4 w-4 mr-2" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="automations" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#121212]">
                <SettingsIcon className="h-4 w-4 mr-2" />
                Automations
              </TabsTrigger>
              <TabsTrigger value="notifications" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#121212]">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="billing" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#121212]">
                <CreditCard className="h-4 w-4 mr-2" />
                Billing
              </TabsTrigger>
              <TabsTrigger value="security" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#121212]">
                <Shield className="h-4 w-4 mr-2" />
                Security
              </TabsTrigger>
            </TabsList>

            {/* Profile Tab */}
            <TabsContent value="profile" className="space-y-6">
              <Card className="bg-[#1a1a1a] border-[#E2E2E2]/20 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-[#F9F9F9]">Profile Information</CardTitle>
                  <CardDescription className="text-[#F9F9F9]/70">
                    Update your personal information and preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Avatar Section */}
                  <div className="flex items-center space-x-6">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src={profile?.avatar_url || undefined} />
                      <AvatarFallback className="bg-[#D4AF37] text-[#121212] text-xl">
                        {getInitials(profile?.full_name)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-2">
                      <Button variant="outline" className="border-[#E2E2E2]/30 text-[#F9F9F9] hover:bg-[#E2E2E2]/10">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Photo
                      </Button>
                      <p className="text-sm text-[#F9F9F9]/60">JPG, PNG or GIF. Max size 2MB.</p>
                    </div>
                  </div>

                  <Separator className="bg-[#E2E2E2]/20" />

                  {/* Profile Form */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-[#F9F9F9]">Full Name</Label>
                      <Input
                        id="fullName"
                        value={profileData.fullName}
                        onChange={(e) => setProfileData(prev => ({ ...prev, fullName: e.target.value }))}
                        className="bg-[#121212] border-[#E2E2E2]/30 text-[#F9F9F9]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#F9F9F9]">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
                        className="bg-[#121212] border-[#E2E2E2]/30 text-[#F9F9F9]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timezone" className="text-[#F9F9F9]">Timezone</Label>
                      <Select value={profileData.timezone} onValueChange={(value) => setProfileData(prev => ({ ...prev, timezone: value }))}>
                        <SelectTrigger className="bg-[#121212] border-[#E2E2E2]/30 text-[#F9F9F9]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1a1a1a] border-[#E2E2E2]/30">
                          <SelectItem value="UTC-8">Pacific Time (UTC-8)</SelectItem>
                          <SelectItem value="UTC-5">Eastern Time (UTC-5)</SelectItem>
                          <SelectItem value="UTC+0">UTC</SelectItem>
                          <SelectItem value="UTC+1">Central European Time (UTC+1)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="language" className="text-[#F9F9F9]">Language</Label>
                      <Select value={profileData.language} onValueChange={(value) => setProfileData(prev => ({ ...prev, language: value }))}>
                        <SelectTrigger className="bg-[#121212] border-[#E2E2E2]/30 text-[#F9F9F9]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1a1a1a] border-[#E2E2E2]/30">
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Spanish</SelectItem>
                          <SelectItem value="fr">French</SelectItem>
                          <SelectItem value="de">German</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio" className="text-[#F9F9F9]">Bio</Label>
                    <Textarea
                      id="bio"
                      placeholder="Tell us about yourself..."
                      value={profileData.bio}
                      onChange={(e) => setProfileData(prev => ({ ...prev, bio: e.target.value }))}
                      className="bg-[#121212] border-[#E2E2E2]/30 text-[#F9F9F9] min-h-[100px]"
                    />
                  </div>

                  <Button 
                    onClick={handleSaveProfile}
                    disabled={isLoading}
                    className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#121212] font-semibold"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    {isLoading ? "Saving..." : "Save Changes"}
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Automations Tab */}
            <TabsContent value="automations" className="space-y-6">
              <div className="grid gap-6">
                {/* Thank-you Emails */}
                <Card className="bg-[#1a1a1a] border-[#E2E2E2]/20 rounded-2xl">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Mail className="h-6 w-6 text-blue-400" />
                        <div>
                          <CardTitle className="text-[#F9F9F9]">Thank-you Email Generator</CardTitle>
                          <CardDescription className="text-[#F9F9F9]/70">
                            Automatically send personalized thank-you emails
                          </CardDescription>
                        </div>
                      </div>
                      <Switch
                        checked={automationSettings.thankYouEmails.enabled}
                        onCheckedChange={(checked) => 
                          setAutomationSettings(prev => ({
                            ...prev,
                            thankYouEmails: { ...prev.thankYouEmails, enabled: checked }
                          }))
                        }
                      />
                    </div>
                  </CardHeader>
                  {automationSettings.thankYouEmails.enabled && (
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="text-[#F9F9F9]">Delay (minutes)</Label>
                          <Input
                            value={automationSettings.thankYouEmails.delay}
                            onChange={(e) => 
                              setAutomationSettings(prev => ({
                                ...prev,
                                thankYouEmails: { ...prev.thankYouEmails, delay: e.target.value }
                              }))
                            }
                            className="bg-[#121212] border-[#E2E2E2]/30 text-[#F9F9F9]"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-[#F9F9F9]">Template Style</Label>
                          <Select 
                            value={automationSettings.thankYouEmails.template}
                            onValueChange={(value) => 
                              setAutomationSettings(prev => ({
                                ...prev,
                                thankYouEmails: { ...prev.thankYouEmails, template: value }
                              }))
                            }
                          >
                            <SelectTrigger className="bg-[#121212] border-[#E2E2E2]/30 text-[#F9F9F9]">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-[#1a1a1a] border-[#E2E2E2]/30">
                              <SelectItem value="professional">Professional</SelectItem>
                              <SelectItem value="friendly">Friendly</SelectItem>
                              <SelectItem value="casual">Casual</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>

                {/* Newsletter */}
                <Card className="bg-[#1a1a1a] border-[#E2E2E2]/20 rounded-2xl">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-6 w-6 text-green-400" />
                        <div>
                          <CardTitle className="text-[#F9F9F9]">Newsletter Summary</CardTitle>
                          <CardDescription className="text-[#F9F9F9]/70">
                            Generate weekly newsletter summaries
                          </CardDescription>
                        </div>
                      </div>
                      <Switch
                        checked={automationSettings.newsletter.enabled}
                        onCheckedChange={(checked) => 
                          setAutomationSettings(prev => ({
                            ...prev,
                            newsletter: { ...prev.newsletter, enabled: checked }
                          }))
                        }
                      />
                    </div>
                  </CardHeader>
                  {automationSettings.newsletter.enabled && (
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="text-[#F9F9F9]">Frequency</Label>
                          <Select 
                            value={automationSettings.newsletter.frequency}
                            onValueChange={(value) => 
                              setAutomationSettings(prev => ({
                                ...prev,
                                newsletter: { ...prev.newsletter, frequency: value }
                              }))
                            }
                          >
                            <SelectTrigger className="bg-[#121212] border-[#E2E2E2]/30 text-[#F9F9F9]">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-[#1a1a1a] border-[#E2E2E2]/30">
                              <SelectItem value="weekly">Weekly</SelectItem>
                              <SelectItem value="biweekly">Bi-weekly</SelectItem>
                              <SelectItem value="monthly">Monthly</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label className="text-[#F9F9F9]">Day of Week</Label>
                          <Select 
                            value={automationSettings.newsletter.dayOfWeek}
                            onValueChange={(value) => 
                              setAutomationSettings(prev => ({
                                ...prev,
                                newsletter: { ...prev.newsletter, dayOfWeek: value }
                              }))
                            }
                          >
                            <SelectTrigger className="bg-[#121212] border-[#E2E2E2]/30 text-[#F9F9F9]">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-[#1a1a1a] border-[#E2E2E2]/30">
                              <SelectItem value="monday">Monday</SelectItem>
                              <SelectItem value="tuesday">Tuesday</SelectItem>
                              <SelectItem value="wednesday">Wednesday</SelectItem>
                              <SelectItem value="thursday">Thursday</SelectItem>
                              <SelectItem value="friday">Friday</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>

                {/* Notion Tasks */}
                <Card className="bg-[#1a1a1a] border-[#E2E2E2]/20 rounded-2xl">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Calendar className="h-6 w-6 text-purple-400" />
                        <div>
                          <CardTitle className="text-[#F9F9F9]">Notion Task Logger</CardTitle>
                          <CardDescription className="text-[#F9F9F9]/70">
                            Convert emails into Notion tasks
                          </CardDescription>
                        </div>
                      </div>
                      <Switch
                        checked={automationSettings.notionTasks.enabled}
                        onCheckedChange={(checked) => 
                          setAutomationSettings(prev => ({
                            ...prev,
                            notionTasks: { ...prev.notionTasks, enabled: checked }
                          }))
                        }
                      />
                    </div>
                  </CardHeader>
                  {automationSettings.notionTasks.enabled && (
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label className="text-[#F9F9F9]">Notion Database URL</Label>
                        <Input
                          placeholder="https://notion.so/..."
                          value={automationSettings.notionTasks.database}
                          onChange={(e) => 
                            setAutomationSettings(prev => ({
                              ...prev,
                              notionTasks: { ...prev.notionTasks, database: e.target.value }
                            }))
                          }
                          className="bg-[#121212] border-[#E2E2E2]/30 text-[#F9F9F9]"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-[#F9F9F9]">Auto-assign tasks to me</Label>
                          <p className="text-sm text-[#F9F9F9]/60">Automatically assign created tasks to your Notion user</p>
                        </div>
                        <Switch
                          checked={automationSettings.notionTasks.autoAssign}
                          onCheckedChange={(checked) => 
                            setAutomationSettings(prev => ({
                              ...prev,
                              notionTasks: { ...prev.notionTasks, autoAssign: checked }
                            }))
                          }
                        />
                      </div>
                    </CardContent>
                  )}
                </Card>

                <Button 
                  onClick={handleSaveAutomations}
                  disabled={isLoading}
                  className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#121212] font-semibold"
                >
                  <Save className="h-4 w-4 mr-2" />
                  {isLoading ? "Saving..." : "Save Automation Settings"}
                </Button>
              </div>
            </TabsContent>

            {/* Notifications Tab */}
            <TabsContent value="notifications" className="space-y-6">
              <Card className="bg-[#1a1a1a] border-[#E2E2E2]/20 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-[#F9F9F9]">Notification Preferences</CardTitle>
                  <CardDescription className="text-[#F9F9F9]/70">
                    Choose how you want to be notified about your automations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-[#F9F9F9]">Email Notifications</Label>
                        <p className="text-sm text-[#F9F9F9]/60">Receive notifications via email</p>
                      </div>
                      <Switch
                        checked={notifications.emailNotifications}
                        onCheckedChange={(checked) => 
                          setNotifications(prev => ({ ...prev, emailNotifications: checked }))
                        }
                      />
                    </div>

                    <Separator className="bg-[#E2E2E2]/20" />

                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-[#F9F9F9]">Task Completions</Label>
                        <p className="text-sm text-[#F9F9F9]/60">Get notified when automations complete</p>
                      </div>
                      <Switch
                        checked={notifications.taskCompletions}
                        onCheckedChange={(checked) => 
                          setNotifications(prev => ({ ...prev, taskCompletions: checked }))
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-[#F9F9F9]">Weekly Reports</Label>
                        <p className="text-sm text-[#F9F9F9]/60">Receive weekly automation summaries</p>
                      </div>
                      <Switch
                        checked={notifications.weeklyReports}
                        onCheckedChange={(checked) => 
                          setNotifications(prev => ({ ...prev, weeklyReports: checked }))
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-[#F9F9F9]">Error Alerts</Label>
                        <p className="text-sm text-[#F9F9F9]/60">Get notified when automations fail</p>
                      </div>
                      <Switch
                        checked={notifications.errorAlerts}
                        onCheckedChange={(checked) => 
                          setNotifications(prev => ({ ...prev, errorAlerts: checked }))
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-[#F9F9F9]">Marketing Emails</Label>
                        <p className="text-sm text-[#F9F9F9]/60">Receive product updates and tips</p>
                      </div>
                      <Switch
                        checked={notifications.marketingEmails}
                        onCheckedChange={(checked) => 
                          setNotifications(prev => ({ ...prev, marketingEmails: checked }))
                        }
                      />
                    </div>
                  </div>

                  <Button 
                    onClick={handleSaveNotifications}
                    disabled={isLoading}
                    className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#121212] font-semibold"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    {isLoading ? "Saving..." : "Save Notification Settings"}
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Billing Tab */}
            <TabsContent value="billing" className="space-y-6">
              <div className="grid gap-6">
                {/* Current Plan */}
                <Card className="bg-[#1a1a1a] border-[#E2E2E2]/20 rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-[#F9F9F9]">Current Plan</CardTitle>
                    <CardDescription className="text-[#F9F9F9]/70">
                      Manage your subscription and billing information
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-[#121212] rounded-xl">
                      <div>
                        <h3 className="text-lg font-semibold text-[#F9F9F9]">
                          {profile?.subscription_plan === 'pro' ? 'Pro Plan' : 'Free Plan'}
                        </h3>
                        <p className="text-[#F9F9F9]/70">
                          {profile?.subscription_plan === 'pro' 
                            ? 'Unlimited automations and priority support' 
                            : '50 automation credits per month'
                          }
                        </p>
                      </div>
                      <Badge className="bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/30">
                        {profile?.subscription_plan === 'pro' ? '$29/month' : 'Free'}
                      </Badge>
                    </div>

                    {profile?.subscription_plan === 'free' && (
                      <div className="p-4 bg-gradient-to-r from-[#D4AF37]/10 to-[#B8941F]/10 rounded-xl border border-[#D4AF37]/30">
                        <h4 className="font-semibold text-[#F9F9F9] mb-2">Upgrade to Pro</h4>
                        <p className="text-[#F9F9F9]/70 mb-4">
                          Get unlimited automations, priority support, and advanced features.
                        </p>
                        <Button className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#121212] font-semibold">
                          Upgrade Now
                        </Button>
                      </div>
                    )}

                    {profile?.subscription_plan === 'pro' && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-[#F9F9F9]">Next billing date</span>
                          <span className="text-[#F9F9F9]/70">January 15, 2025</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[#F9F9F9]">Payment method</span>
                          <span className="text-[#F9F9F9]/70">•••• •••• •••• 4242</span>
                        </div>
                        <Button variant="outline" className="border-[#E2E2E2]/30 text-[#F9F9F9] hover:bg-[#E2E2E2]/10">
                          <CreditCard className="h-4 w-4 mr-2" />
                          Update Payment Method
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Usage */}
                <Card className="bg-[#1a1a1a] border-[#E2E2E2]/20 rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-[#F9F9F9]">Usage This Month</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[#F9F9F9]">Automation Credits</span>
                        <span className="text-[#F9F9F9]">
                          {profile?.credits_used || 0} / {profile?.credits_limit || 50}
                        </span>
                      </div>
                      <div className="w-full bg-[#121212] rounded-full h-2">
                        <div 
                          className="bg-[#D4AF37] h-2 rounded-full" 
                          style={{ 
                            width: `${((profile?.credits_used || 0) / (profile?.credits_limit || 50)) * 100}%` 
                          }}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Billing History */}
                <Card className="bg-[#1a1a1a] border-[#E2E2E2]/20 rounded-2xl">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-[#F9F9F9]">Billing History</CardTitle>
                      <Button variant="outline" size="sm" className="border-[#E2E2E2]/30 text-[#F9F9F9] hover:bg-[#E2E2E2]/10">
                        <Download className="h-4 w-4 mr-2" />
                        Download All
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { date: 'Dec 15, 2024', amount: '$29.00', status: 'Paid' },
                        { date: 'Nov 15, 2024', amount: '$29.00', status: 'Paid' },
                        { date: 'Oct 15, 2024', amount: '$29.00', status: 'Paid' }
                      ].map((invoice, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-[#121212] rounded-lg">
                          <div>
                            <p className="text-[#F9F9F9]">{invoice.date}</p>
                            <p className="text-sm text-[#F9F9F9]/60">Pro Plan</p>
                          </div>
                          <div className="text-right">
                            <p className="text-[#F9F9F9]">{invoice.amount}</p>
                            <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                              {invoice.status}
                            </Badge>
                          </div>
                          <Button variant="ghost" size="sm">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Security Tab */}
            <TabsContent value="security" className="space-y-6">
              <div className="grid gap-6">
                {/* Password */}
                <Card className="bg-[#1a1a1a] border-[#E2E2E2]/20 rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-[#F9F9F9]">Password</CardTitle>
                    <CardDescription className="text-[#F9F9F9]/70">
                      Update your password to keep your account secure
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-[#F9F9F9]">Current Password</Label>
                      <Input
                        type="password"
                        className="bg-[#121212] border-[#E2E2E2]/30 text-[#F9F9F9]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[#F9F9F9]">New Password</Label>
                      <Input
                        type="password"
                        className="bg-[#121212] border-[#E2E2E2]/30 text-[#F9F9F9]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[#F9F9F9]">Confirm New Password</Label>
                      <Input
                        type="password"
                        className="bg-[#121212] border-[#E2E2E2]/30 text-[#F9F9F9]"
                      />
                    </div>
                    <Button className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#121212] font-semibold">
                      Update Password
                    </Button>
                  </CardContent>
                </Card>

                {/* Two-Factor Authentication */}
                <Card className="bg-[#1a1a1a] border-[#E2E2E2]/20 rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-[#F9F9F9]">Two-Factor Authentication</CardTitle>
                    <CardDescription className="text-[#F9F9F9]/70">
                      Add an extra layer of security to your account
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[#F9F9F9]">
                          {securitySettings.twoFactorEnabled ? 'Enabled' : 'Disabled'}
                        </p>
                        <p className="text-sm text-[#F9F9F9]/60">
                          {securitySettings.twoFactorEnabled 
                            ? 'Your account is protected with 2FA' 
                            : 'Enable 2FA for better security'
                          }
                        </p>
                      </div>
                      <Button 
                        variant={securitySettings.twoFactorEnabled ? "destructive" : "default"}
                        className={securitySettings.twoFactorEnabled 
                          ? "" 
                          : "bg-[#D4AF37] hover:bg-[#B8941F] text-[#121212] font-semibold"
                        }
                      >
                        {securitySettings.twoFactorEnabled ? 'Disable' : 'Enable'} 2FA
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* API Keys */}
                <Card className="bg-[#1a1a1a] border-[#E2E2E2]/20 rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-[#F9F9F9]">API Keys</CardTitle>
                    <CardDescription className="text-[#F9F9F9]/70">
                      Manage your API keys for integrations
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-[#121212] rounded-lg">
                      <div>
                        <p className="text-[#F9F9F9]">Primary API Key</p>
                        <p className="text-sm text-[#F9F9F9]/60 font-mono">
                          {securitySettings.apiKeyVisible 
                            ? 'ts_1234567890abcdef...' 
                            : '••••••••••••••••••••'
                          }
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSecuritySettings(prev => ({ 
                            ...prev, 
                            apiKeyVisible: !prev.apiKeyVisible 
                          }))}
                        >
                          {securitySettings.apiKeyVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                        <Button variant="outline" size="sm" className="border-[#E2E2E2]/30 text-[#F9F9F9]">
                          Regenerate
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Session Management */}
                <Card className="bg-[#1a1a1a] border-[#E2E2E2]/20 rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-[#F9F9F9]">Session Management</CardTitle>
                    <CardDescription className="text-[#F9F9F9]/70">
                      Control your active sessions and timeout settings
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-[#F9F9F9]">Session Timeout (hours)</Label>
                      <Select 
                        value={securitySettings.sessionTimeout}
                        onValueChange={(value) => 
                          setSecuritySettings(prev => ({ ...prev, sessionTimeout: value }))
                        }
                      >
                        <SelectTrigger className="bg-[#121212] border-[#E2E2E2]/30 text-[#F9F9F9]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1a1a1a] border-[#E2E2E2]/30">
                          <SelectItem value="1">1 hour</SelectItem>
                          <SelectItem value="8">8 hours</SelectItem>
                          <SelectItem value="24">24 hours</SelectItem>
                          <SelectItem value="168">1 week</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button variant="outline" className="border-[#E2E2E2]/30 text-[#F9F9F9] hover:bg-[#E2E2E2]/10">
                      Sign Out All Devices
                    </Button>
                  </CardContent>
                </Card>

                {/* Danger Zone */}
                <Card className="bg-red-500/10 border-red-500/30 rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-red-400 flex items-center">
                      <AlertTriangle className="h-5 w-5 mr-2" />
                      Danger Zone
                    </CardTitle>
                    <CardDescription className="text-red-300/70">
                      Irreversible and destructive actions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-[#F9F9F9] font-semibold mb-2">Delete Account</h4>
                        <p className="text-[#F9F9F9]/70 text-sm mb-4">
                          Once you delete your account, there is no going back. Please be certain.
                        </p>
                        <Button 
                          variant="destructive" 
                          onClick={handleDeleteAccount}
                          className="bg-red-600 hover:bg-red-700"
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete Account
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Settings;