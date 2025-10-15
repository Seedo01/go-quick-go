import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
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
  Award,
  LogOut,
  User as UserIcon
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

const LenderDashboard = () => {
  const [selectedApplication, setSelectedApplication] = useState<typeof recentApplications[0] | null>(null);
  const { user, profile, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/signup');
    }
  }, [user, loading, navigate]);

  const handleSignOut = async () => {
    await signOut();
    toast({
      title: "Signed out",
      description: "You have been signed out successfully."
    });
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  if (!user || !profile) {
    return null;
  }
  
  const stats = [
    { label: "Active Loans", value: "₦1,234,000", change: "+12%", icon: DollarSign, trend: "up" },
    { label: "Total Farmers", value: "5,678", change: "+8%", icon: Users, trend: "up" },
    { label: "Pending Applications", value: "89", change: "-5%", icon: Clock, trend: "down" },
    { label: "Default Rate", value: "2.3%", change: "-40%", icon: AlertTriangle, trend: "down" }
  ];

  const recentApplications = [
    {
      id: "F-1234",
      name: "Chukwudi Okafor",
      cooperative: "Lagos Farmers Cooperative",
      amount: "₦500,000",
      score: 82,
      status: "approved",
      landSize: "2.5 hectares",
      crop: "Cassava"
    },
    {
      id: "F-1235",
      name: "Aisha Mohammed",
      cooperative: "Kano Agricultural Society",
      amount: "₦850,000",
      score: 75,
      status: "pending",
      landSize: "4.0 hectares",
      crop: "Rice"
    },
    {
      id: "F-1236",
      name: "Ngozi Eze",
      cooperative: "Enugu Farmers Union",
      amount: "₦320,000",
      score: 68,
      status: "under-review",
      landSize: "1.8 hectares",
      crop: "Vegetables"
    },
    {
      id: "F-1237",
      name: "Ibrahim Bello",
      cooperative: "Plateau State Co-op",
      amount: "₦1,200,000",
      score: 88,
      status: "approved",
      landSize: "6.5 hectares",
      crop: "Maize"
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
              <div className="text-right mr-4">
                <p className="text-sm font-semibold">{profile.full_name}</p>
                <p className="text-xs text-muted-foreground">{profile.organization || 'FarmCred User'}</p>
              </div>
              <Button variant="outline" size="sm" onClick={handleSignOut}>
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome, {profile.full_name}</h1>
            <p className="text-muted-foreground">
              {profile.address} | {profile.phone}
            </p>
            <div className="mt-2 flex gap-2">
              {profile.bvn_verified && (
                <span className="text-xs bg-success/20 text-success px-2 py-1 rounded">
                  BVN Verified
                </span>
              )}
              {profile.nin_verified && (
                <span className="text-xs bg-success/20 text-success px-2 py-1 rounded">
                  NIN Verified
                </span>
              )}
              {profile.farm_verified && (
                <span className="text-xs bg-success/20 text-success px-2 py-1 rounded">
                  Farm Verified
                </span>
              )}
            </div>
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
                    <Button variant="outline" size="sm" onClick={() => setSelectedApplication(app)}>
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
                  <div className="text-2xl font-bold text-primary">₦240M</div>
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
                  <div className="text-2xl font-bold text-warning">₦15.6M</div>
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

      {/* Farmer Details Dialog */}
      <Dialog open={!!selectedApplication} onOpenChange={() => setSelectedApplication(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">Farmer Application Details</DialogTitle>
            <DialogDescription>
              Complete profile and credit assessment for {selectedApplication?.name}
            </DialogDescription>
          </DialogHeader>
          
          {selectedApplication && (
            <div className="space-y-6">
              {/* Status Badge */}
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium w-fit ${getStatusBadge(selectedApplication.status)}`}>
                {getStatusIcon(selectedApplication.status)}
                {selectedApplication.status.replace("-", " ").toUpperCase()}
              </div>

              {/* Basic Information */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Basic Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-secondary/30 rounded-lg">
                    <span className="text-sm text-muted-foreground">Farmer ID</span>
                    <p className="font-semibold">{selectedApplication.id}</p>
                  </div>
                  <div className="p-3 bg-secondary/30 rounded-lg">
                    <span className="text-sm text-muted-foreground">Full Name</span>
                    <p className="font-semibold">{selectedApplication.name}</p>
                  </div>
                  <div className="p-3 bg-secondary/30 rounded-lg">
                    <span className="text-sm text-muted-foreground">Cooperative</span>
                    <p className="font-semibold">{selectedApplication.cooperative}</p>
                  </div>
                  <div className="p-3 bg-secondary/30 rounded-lg">
                    <span className="text-sm text-muted-foreground">Primary Crop</span>
                    <p className="font-semibold">{selectedApplication.crop}</p>
                  </div>
                </div>
              </div>

              {/* Financial Information */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Financial Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-secondary/30 rounded-lg">
                    <span className="text-sm text-muted-foreground">Loan Amount</span>
                    <p className="text-xl font-bold text-primary">{selectedApplication.amount}</p>
                  </div>
                  <div className="p-3 bg-secondary/30 rounded-lg">
                    <span className="text-sm text-muted-foreground">Credit Score</span>
                    <p className="text-xl font-bold text-success">{selectedApplication.score}</p>
                  </div>
                  <div className="p-3 bg-secondary/30 rounded-lg">
                    <span className="text-sm text-muted-foreground">Farm Size</span>
                    <p className="font-semibold">{selectedApplication.landSize}</p>
                  </div>
                  <div className="p-3 bg-secondary/30 rounded-lg">
                    <span className="text-sm text-muted-foreground">Risk Level</span>
                    <p className="font-semibold text-success">Low</p>
                  </div>
                </div>
              </div>

              {/* Additional Details */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Credit Assessment</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-secondary/30 rounded-lg">
                    <span className="text-sm">Payment History</span>
                    <span className="text-sm font-semibold text-success">Excellent</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary/30 rounded-lg">
                    <span className="text-sm">Cooperative Standing</span>
                    <span className="text-sm font-semibold text-success">Active Member</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary/30 rounded-lg">
                    <span className="text-sm">Farm Productivity</span>
                    <span className="text-sm font-semibold text-success">High</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Button className="flex-1" variant={selectedApplication.status === "approved" ? "default" : "outline"}>
                  {selectedApplication.status === "approved" ? "Approved" : "Approve Application"}
                </Button>
                <Button className="flex-1" variant="outline">
                  Request More Info
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default LenderDashboard;
