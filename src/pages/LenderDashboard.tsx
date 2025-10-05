import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  TrendingUp, 
  Users, 
  DollarSign, 
  AlertTriangle,
  CheckCircle,
  Clock,
  FileText,
  BarChart3,
  CreditCard,
  Shield,
  Target,
  Award
} from "lucide-react";

const LenderDashboard = () => {
  const stats = [
    { label: "Active Loans", value: "1,234", change: "+12%", icon: DollarSign, trend: "up" },
    { label: "Total Farmers", value: "5,678", change: "+8%", icon: Users, trend: "up" },
    { label: "Pending Applications", value: "89", change: "-5%", icon: Clock, trend: "down" },
    { label: "Default Rate", value: "2.3%", change: "-40%", icon: AlertTriangle, trend: "down" }
  ];

  const recentApplications = [
    { 
      id: "F-1234", 
      name: "Jane Doe", 
      cooperative: "Green Valley Co-op", 
      amount: "$5,000", 
      score: 82, 
      status: "approved",
      landSize: "2.5 acres",
      crop: "Coffee"
    },
    { 
      id: "F-1235", 
      name: "John Smith", 
      cooperative: "Highland Farmers", 
      amount: "$8,500", 
      score: 75, 
      status: "pending",
      landSize: "4.0 acres",
      crop: "Tea"
    },
    { 
      id: "F-1236", 
      name: "Mary Johnson", 
      cooperative: "Sunrise Agricultural", 
      amount: "$3,200", 
      score: 68, 
      status: "under-review",
      landSize: "1.8 acres",
      crop: "Vegetables"
    },
    { 
      id: "F-1237", 
      name: "David Wilson", 
      cooperative: "Valley View Co-op", 
      amount: "$12,000", 
      score: 88, 
      status: "approved",
      landSize: "6.5 acres",
      crop: "Coffee"
    }
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      approved: "bg-success/20 text-success border-success/30",
      pending: "bg-warning/20 text-warning border-warning/30",
      "under-review": "bg-trust/20 text-trust border-trust/30"
    };
    return styles[status as keyof typeof styles] || "";
  };

  const getStatusIcon = (status: string) => {
    if (status === "approved") return <CheckCircle className="w-4 h-4" />;
    if (status === "pending") return <Clock className="w-4 h-4" />;
    return <FileText className="w-4 h-4" />;
  };

  return (
    <main className="min-h-screen bg-secondary/10">
      {/* Header */}
      <div className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-6">
            <Link to="/demo" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Demo Info
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Demo Mode</span>
              <Button variant="outline" size="sm">
                Exit Demo
              </Button>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">Lender Dashboard</h1>
            <p className="text-muted-foreground">
              Interactive demo - Explore FarmCred's credit infrastructure platform
            </p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="p-6 border-0 shadow-soft">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <span className={`text-sm font-semibold ${
                      stat.trend === "up" ? "text-success" : "text-primary"
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Applications */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Recent Credit Applications</h2>
            <Button variant="outline">
              <BarChart3 className="w-4 h-4 mr-2" />
              View All Analytics
            </Button>
          </div>
          
          <div className="space-y-4">
            {recentApplications.map((app) => (
              <Card key={app.id} className="p-6 border-0 shadow-soft hover:shadow-medium transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-lg font-semibold">{app.name}</h3>
                      <span className="text-sm text-muted-foreground">ID: {app.id}</span>
                      <div className={`flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-medium ${getStatusBadge(app.status)}`}>
                        {getStatusIcon(app.status)}
                        {app.status.replace("-", " ").toUpperCase()}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Cooperative:</span>
                        <p className="font-medium">{app.cooperative}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Loan Amount:</span>
                        <p className="font-medium text-primary">{app.amount}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Credit Score:</span>
                        <p className="font-bold text-lg">{app.score}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Farm Size:</span>
                        <p className="font-medium">{app.landSize}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Primary Crop:</span>
                        <p className="font-medium">{app.crop}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="ml-6">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Platform Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Dynamic Credit Scoring */}
            <Card className="p-6 border-0 shadow-soft">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full mr-4">
                  <CreditCard className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Dynamic Credit Scoring</h3>
                  <p className="text-sm text-muted-foreground">AI-powered creditworthiness analysis</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-secondary/30 rounded-lg">
                  <span className="text-sm">Agricultural Data Integration</span>
                  <CheckCircle className="w-4 h-4 text-success" />
                </div>
                <div className="flex justify-between items-center p-3 bg-secondary/30 rounded-lg">
                  <span className="text-sm">Real-time Score Updates</span>
                  <CheckCircle className="w-4 h-4 text-success" />
                </div>
                <div className="flex justify-between items-center p-3 bg-secondary/30 rounded-lg">
                  <span className="text-sm">Multi-factor Analysis</span>
                  <CheckCircle className="w-4 h-4 text-success" />
                </div>
              </div>
            </Card>

            {/* Risk Assessment Tools */}
            <Card className="p-6 border-0 shadow-soft">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full mr-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Risk Assessment Tools</h3>
                  <p className="text-sm text-muted-foreground">Comprehensive risk evaluation</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-secondary/30 rounded-lg">
                  <span className="text-sm">Weather & Climate Risk</span>
                  <span className="text-xs font-semibold text-success">Low Risk</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-secondary/30 rounded-lg">
                  <span className="text-sm">Market Price Volatility</span>
                  <span className="text-xs font-semibold text-warning">Medium Risk</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-secondary/30 rounded-lg">
                  <span className="text-sm">Repayment History</span>
                  <span className="text-xs font-semibold text-success">Low Risk</span>
                </div>
              </div>
            </Card>

            {/* Portfolio Analytics */}
            <Card className="p-6 border-0 shadow-soft">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full mr-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Portfolio Analytics</h3>
                  <p className="text-sm text-muted-foreground">Performance metrics and insights</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-secondary/30 rounded-lg">
                  <div className="text-2xl font-bold text-primary">$2.4M</div>
                  <div className="text-xs text-muted-foreground">Total Portfolio</div>
                </div>
                <div className="p-3 bg-secondary/30 rounded-lg">
                  <div className="text-2xl font-bold text-success">92%</div>
                  <div className="text-xs text-muted-foreground">Repayment Rate</div>
                </div>
                <div className="p-3 bg-secondary/30 rounded-lg">
                  <div className="text-2xl font-bold text-trust">45</div>
                  <div className="text-xs text-muted-foreground">Active Loans</div>
                </div>
                <div className="p-3 bg-secondary/30 rounded-lg">
                  <div className="text-2xl font-bold text-warning">$156K</div>
                  <div className="text-xs text-muted-foreground">Avg Loan Size</div>
                </div>
              </div>
            </Card>

            {/* Farmer Management */}
            <Card className="p-6 border-0 shadow-soft">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full mr-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Farmer Management</h3>
                  <p className="text-sm text-muted-foreground">Digital ID and verification system</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                  <div className="flex items-center">
                    <Award className="w-4 h-4 text-primary mr-2" />
                    <span className="text-sm">Verified Credentials</span>
                  </div>
                  <span className="text-xs font-semibold">5,234</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                  <div className="flex items-center">
                    <Target className="w-4 h-4 text-success mr-2" />
                    <span className="text-sm">Active Farmers</span>
                  </div>
                  <span className="text-xs font-semibold">4,892</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-trust mr-2" />
                    <span className="text-sm">Complete Profiles</span>
                  </div>
                  <span className="text-xs font-semibold">96%</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Notice */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-primary text-white p-8 border-0">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Enjoying the Demo?</h3>
              <p className="text-white/90 mb-6">
                This is sample data. Start your free trial to access real farmer profiles and credit scoring tools.
              </p>
              <div className="flex gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/signup">Start Free Trial</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 bg-transparent" asChild>
                  <Link to="/partner">Become a Partner</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default LenderDashboard;
