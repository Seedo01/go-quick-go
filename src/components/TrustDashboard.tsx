import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Shield, 
  Award, 
  Users, 
  MapPin, 
  Calendar,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const TrustDashboard = () => {
  const trustScore = 94;
  const verifications = [
    { id: 1, type: "Digital Farmer ID", status: "verified", date: "2024-09-20" },
    { id: 2, type: "Cooperative Membership", status: "verified", date: "2024-09-15" },
    { id: 3, type: "Income Verification", status: "pending", date: "2024-09-22" },
  ];

  const loanApplications = [
    { lender: "Community Bank", amount: "$2,500", status: "approved", rate: "8.5%" },
    { lender: "Agricultural Coop", amount: "$1,800", status: "approved", rate: "7.2%" },
    { lender: "Microfinance Ltd", amount: "$3,200", status: "under-review", rate: "9.1%" },
    { lender: "Rural Credit Union", amount: "$1,500", status: "pending", rate: "6.8%" },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Credit Dashboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time insights into farmer creditworthiness, financial profiles, and lending opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Credit Score Card */}
          <Card className="p-6 bg-gradient-card border-0 shadow-medium">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Credit Score</h3>
              <Shield className="w-6 h-6 text-trust" />
            </div>
            <div className="text-center">
              <div className="relative inline-flex items-center justify-center w-32 h-32 mb-4">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                  <circle 
                    cx="60" 
                    cy="60" 
                    r="50" 
                    stroke="hsl(var(--muted))" 
                    strokeWidth="8" 
                    fill="none"
                  />
                  <circle 
                    cx="60" 
                    cy="60" 
                    r="50" 
                    stroke="hsl(var(--trust))" 
                    strokeWidth="8" 
                    fill="none"
                    strokeDasharray={`${trustScore * 3.14} 314`}
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-3xl font-bold text-trust">{trustScore}</span>
                  <span className="text-sm text-muted-foreground">Highly Bankable</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Payment History</span>
                  <span className="font-medium">98%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Farm Productivity</span>
                  <span className="font-medium">92%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Cooperative Standing</span>
                  <span className="font-medium">96%</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Verifications Card */}
          <Card className="p-6 bg-gradient-card border-0 shadow-medium">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Verifications</h3>
              <Award className="w-6 h-6 text-accent" />
            </div>
            <div className="space-y-4">
              {verifications.map((verification) => (
                <div key={verification.id} className="flex items-center justify-between p-3 bg-background rounded-lg">
                  <div className="flex items-center space-x-3">
                    {verification.status === "verified" ? (
                      <CheckCircle className="w-5 h-5 text-success" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-warning" />
                    )}
                    <div>
                      <p className="font-medium text-sm">{verification.type}</p>
                      <p className="text-xs text-muted-foreground">{verification.date}</p>
                    </div>
                  </div>
                  <Badge variant={verification.status === "verified" ? "default" : "secondary"}>
                    {verification.status}
                  </Badge>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              Update Profile
            </Button>
          </Card>

          {/* Loan Applications Card */}
          <Card className="p-6 bg-gradient-card border-0 shadow-medium">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Loan Applications</h3>
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div className="space-y-4">
              {loanApplications.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    item.status === "approved" ? "bg-success" :
                    item.status === "under-review" ? "bg-warning" : "bg-muted"
                  }`} />
                  <div className="flex-1">
                    <p className="font-medium text-sm">{item.lender}</p>
                    <p className="text-xs text-muted-foreground">{item.amount} at {item.rate}</p>
                  </div>
                  <Badge variant={
                    item.status === "approved" ? "default" :
                    item.status === "under-review" ? "secondary" : "outline"
                  }>
                    {item.status}
                  </Badge>
                </div>
              ))}
            </div>
            <Button variant="trust" className="w-full mt-4">
              Apply for Credit
            </Button>
          </Card>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <Card className="p-6 text-center bg-gradient-card border-0 shadow-soft">
            <Users className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">18,500</div>
            <div className="text-sm text-muted-foreground">Bankable Farmers</div>
          </Card>
          
          <Card className="p-6 text-center bg-gradient-card border-0 shadow-soft">
            <TrendingUp className="w-8 h-8 text-success mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">$12.4M</div>
            <div className="text-sm text-muted-foreground">Credit Facilitated</div>
          </Card>
          
          <Card className="p-6 text-center bg-gradient-card border-0 shadow-soft">
            <CheckCircle className="w-8 h-8 text-trust mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">94.2%</div>
            <div className="text-sm text-muted-foreground">Repayment Rate</div>
          </Card>
          
          <Card className="p-6 text-center bg-gradient-card border-0 shadow-soft">
            <Calendar className="w-8 h-8 text-accent mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">350+</div>
            <div className="text-sm text-muted-foreground">Partner Cooperatives</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrustDashboard;