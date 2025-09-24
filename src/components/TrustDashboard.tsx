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
    { id: 1, type: "Organic Certification", status: "verified", date: "2024-09-20" },
    { id: 2, type: "Fair Trade", status: "verified", date: "2024-09-15" },
    { id: 3, type: "Sustainable Practices", status: "pending", date: "2024-09-22" },
  ];

  const supplyChainData = [
    { location: "Green Valley Farm", status: "verified", distance: "0 km" },
    { location: "Processing Center A", status: "verified", distance: "45 km" },
    { location: "Distribution Hub", status: "in-transit", distance: "120 km" },
    { location: "Retail Partner", status: "pending", distance: "180 km" },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Trust Dashboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time insights into agricultural trust metrics, certifications, and supply chain transparency.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Trust Score Card */}
          <Card className="p-6 bg-gradient-card border-0 shadow-medium">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Trust Score</h3>
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
                  <span className="text-sm text-muted-foreground">Excellent</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Certifications</span>
                  <span className="font-medium">5/5</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Supply Chain</span>
                  <span className="font-medium">98%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Data Quality</span>
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
              Add Verification
            </Button>
          </Card>

          {/* Supply Chain Card */}
          <Card className="p-6 bg-gradient-card border-0 shadow-medium">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Supply Chain</h3>
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div className="space-y-4">
              {supplyChainData.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    item.status === "verified" ? "bg-success" :
                    item.status === "in-transit" ? "bg-warning" : "bg-muted"
                  }`} />
                  <div className="flex-1">
                    <p className="font-medium text-sm">{item.location}</p>
                    <p className="text-xs text-muted-foreground">{item.distance}</p>
                  </div>
                  <Badge variant={
                    item.status === "verified" ? "default" :
                    item.status === "in-transit" ? "secondary" : "outline"
                  }>
                    {item.status}
                  </Badge>
                </div>
              ))}
            </div>
            <Button variant="trust" className="w-full mt-4">
              Track Shipment
            </Button>
          </Card>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <Card className="p-6 text-center bg-gradient-card border-0 shadow-soft">
            <Users className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">2,847</div>
            <div className="text-sm text-muted-foreground">Verified Farmers</div>
          </Card>
          
          <Card className="p-6 text-center bg-gradient-card border-0 shadow-soft">
            <TrendingUp className="w-8 h-8 text-success mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">98.5%</div>
            <div className="text-sm text-muted-foreground">Trust Rating</div>
          </Card>
          
          <Card className="p-6 text-center bg-gradient-card border-0 shadow-soft">
            <CheckCircle className="w-8 h-8 text-trust mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">15,299</div>
            <div className="text-sm text-muted-foreground">Verified Products</div>
          </Card>
          
          <Card className="p-6 text-center bg-gradient-card border-0 shadow-soft">
            <Calendar className="w-8 h-8 text-accent mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">24/7</div>
            <div className="text-sm text-muted-foreground">Real-time Tracking</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrustDashboard;