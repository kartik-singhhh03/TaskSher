import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  Code, 
  Copy,
  ExternalLink,
  Key,
  Shield,
  Zap,
  Book,
  Terminal,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

const ApiDocs = () => {
  const endpoints = [
    {
      method: "GET",
      path: "/api/automations",
      description: "List all user automations",
      auth: "Required",
      response: "Array of automation objects"
    },
    {
      method: "POST",
      path: "/api/automations",
      description: "Create a new automation",
      auth: "Required",
      response: "Created automation object"
    },
    {
      method: "PUT",
      path: "/api/automations/:id",
      description: "Update an existing automation",
      auth: "Required",
      response: "Updated automation object"
    },
    {
      method: "DELETE",
      path: "/api/automations/:id",
      description: "Delete an automation",
      auth: "Required",
      response: "Success confirmation"
    },
    {
      method: "GET",
      path: "/api/tasks",
      description: "List automation execution history",
      auth: "Required",
      response: "Array of task objects"
    },
    {
      method: "POST",
      path: "/api/tasks/trigger",
      description: "Manually trigger an automation",
      auth: "Required",
      response: "Task execution result"
    }
  ];

  const codeExamples = {
    javascript: `// Initialize TaskSher API client
const TaskSher = require('tasksher-api');

const client = new TaskSher({
  apiKey: 'your-api-key',
  baseURL: 'https://api.tasksher.com'
});

// Create a new automation
const automation = await client.automations.create({
  name: 'Thank You Email',
  type: 'email_reply',
  configuration: {
    template: 'professional',
    delay: 300,
    triggers: ['payment_received']
  }
});

console.log('Automation created:', automation.id);`,
    
    python: `# TaskSher Python SDK
import tasksher

client = tasksher.Client(api_key='your-api-key')

# Create a new automation
automation = client.automations.create(
    name='Thank You Email',
    type='email_reply',
    configuration={
        'template': 'professional',
        'delay': 300,
        'triggers': ['payment_received']
    }
)

print(f'Automation created: {automation.id}')`,
    
    curl: `# Create automation with cURL
curl -X POST https://api.tasksher.com/api/automations \\
  -H "Authorization: Bearer your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Thank You Email",
    "type": "email_reply",
    "configuration": {
      "template": "professional",
      "delay": 300,
      "triggers": ["payment_received"]
    }
  }'`
  };

  const webhookExample = `{
  "event": "automation.completed",
  "data": {
    "automation_id": "auto_1234567890",
    "task_id": "task_0987654321",
    "status": "completed",
    "execution_time": 1250,
    "timestamp": "2024-01-15T10:30:00Z",
    "result": {
      "email_sent": true,
      "recipient": "customer@example.com",
      "template_used": "professional"
    }
  }
}`;

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'POST': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'PUT': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'DELETE': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
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
              <Code className="h-8 w-8 text-[#D4AF37]" />
              <div>
                <h1 className="text-2xl font-bold">API Documentation</h1>
                <p className="text-muted-foreground">Integrate TaskSher into your applications</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link to="/auth">
              <Button className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#121212] font-semibold">
                Get API Key
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <Badge className="mb-6 bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/30 px-4 py-2">
            🔧 Developer Tools
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Powerful API for Developers</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Build custom integrations and automate your workflows programmatically with our RESTful API.
          </p>
        </section>

        {/* Quick Start */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Key className="h-5 w-5 text-[#D4AF37]" />
                  <span>Authentication</span>
                </CardTitle>
                <CardDescription>
                  Secure your API requests with bearer token authentication
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-accent/50 rounded-lg p-4">
                  <code className="text-sm">
                    Authorization: Bearer your-api-key
                  </code>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Get your API key from dashboard</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Include in Authorization header</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Keep your key secure</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-[#D4AF37]" />
                  <span>Rate Limits</span>
                </CardTitle>
                <CardDescription>
                  API usage limits to ensure optimal performance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Free Plan:</span>
                    <Badge variant="secondary">100 requests/hour</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Pro Plan:</span>
                    <Badge className="bg-[#D4AF37]/20 text-[#D4AF37]">1000 requests/hour</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Enterprise:</span>
                    <Badge className="bg-green-500/20 text-green-400">Unlimited</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* API Reference */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8">API Reference</h3>
          
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Endpoints</CardTitle>
              <CardDescription>
                Complete list of available API endpoints
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {endpoints.map((endpoint, index) => (
                  <div key={index} className="border border-border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <Badge className={getMethodColor(endpoint.method)}>
                          {endpoint.method}
                        </Badge>
                        <code className="text-sm font-mono">{endpoint.path}</code>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {endpoint.auth}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm mb-2">{endpoint.description}</p>
                    <p className="text-xs text-muted-foreground">Returns: {endpoint.response}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Code Examples */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8">Code Examples</h3>
          
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>SDK Examples</CardTitle>
              <CardDescription>
                Get started quickly with our official SDKs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="javascript" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                  <TabsTrigger value="python">Python</TabsTrigger>
                  <TabsTrigger value="curl">cURL</TabsTrigger>
                </TabsList>
                
                {Object.entries(codeExamples).map(([language, code]) => (
                  <TabsContent key={language} value={language}>
                    <div className="relative">
                      <pre className="bg-accent/50 rounded-lg p-4 overflow-x-auto">
                        <code className="text-sm">{code}</code>
                      </pre>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-2 right-2"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </section>

        {/* Webhooks */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8">Webhooks</h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Webhook Events</CardTitle>
                <CardDescription>
                  Real-time notifications for automation events
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">automation.created</span>
                    <Badge variant="secondary">New automation</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">automation.completed</span>
                    <Badge variant="secondary">Task finished</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">automation.failed</span>
                    <Badge variant="secondary">Error occurred</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">user.credits_low</span>
                    <Badge variant="secondary">Credits warning</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Webhook Payload</CardTitle>
                <CardDescription>
                  Example webhook payload structure
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <pre className="bg-accent/50 rounded-lg p-4 overflow-x-auto text-xs">
                    <code>{webhookExample}</code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* SDKs and Tools */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8">SDKs & Tools</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <Terminal className="h-8 w-8 text-[#D4AF37] mx-auto mb-4" />
                <h4 className="font-semibold mb-2">JavaScript SDK</h4>
                <p className="text-muted-foreground text-sm mb-4">Official Node.js library</p>
                <Button variant="outline" size="sm" className="w-full">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <Terminal className="h-8 w-8 text-[#D4AF37] mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Python SDK</h4>
                <p className="text-muted-foreground text-sm mb-4">Official Python package</p>
                <Button variant="outline" size="sm" className="w-full">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <Book className="h-8 w-8 text-[#D4AF37] mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Postman Collection</h4>
                <p className="text-muted-foreground text-sm mb-4">Ready-to-use API collection</p>
                <Button variant="outline" size="sm" className="w-full">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Import
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <Shield className="h-8 w-8 text-[#D4AF37] mx-auto mb-4" />
                <h4 className="font-semibold mb-2">OpenAPI Spec</h4>
                <p className="text-muted-foreground text-sm mb-4">Complete API specification</p>
                <Button variant="outline" size="sm" className="w-full">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-[#D4AF37]/20 to-[#B8941F]/20 border-[#D4AF37]/30">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4">Ready to Build?</h3>
              <p className="text-xl text-muted-foreground mb-8">
                Get your API key and start integrating TaskSher into your applications today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/auth">
                  <Button size="lg" className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#121212] font-semibold px-8 py-4">
                    Get API Key
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-accent px-8 py-4">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Examples
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default ApiDocs;