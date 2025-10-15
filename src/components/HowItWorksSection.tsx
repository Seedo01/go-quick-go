import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { UserPlus, Shield, TrendingUp, Building2, CheckCircle, ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple, data-driven approach to connecting farmers with lenders
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center md:text-left">For Farmers</h3>
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-card border-0 shadow-medium hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <UserPlus className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">Register</h4>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Sign up via USSD or web. No smartphone needed.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card border-0 shadow-medium hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-trust text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-5 h-5 text-trust" />
                      <h4 className="font-semibold text-foreground">Build Credit Profile</h4>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Update farming activities and get cooperative verification.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card border-0 shadow-medium hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-success text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-success" />
                      <h4 className="font-semibold text-foreground">Access Credit</h4>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Browse loan offers and apply with fast approval.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center md:text-left">For Lenders</h3>
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-card border-0 shadow-medium hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <Building2 className="w-10 h-10 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Access Verified Data</h4>
                    <p className="text-muted-foreground text-sm">
                      Get instant access to comprehensive farmer profiles with digital IDs and production history.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card border-0 shadow-medium hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <Shield className="w-10 h-10 text-trust flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Assess Risk Accurately</h4>
                    <p className="text-muted-foreground text-sm">
                      Use dynamic credit scoring based on real farming data and cooperative standing.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card border-0 shadow-medium hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-10 h-10 text-success flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Make Fast Decisions</h4>
                    <p className="text-muted-foreground text-sm">
                      Reduce processing time with instant creditworthiness data and confident approvals.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center md:text-left">For Cooperatives</h3>
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-card border-0 shadow-medium hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <Building2 className="w-10 h-10 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Register Members</h4>
                    <p className="text-muted-foreground text-sm">
                      Onboard your farmer members and help them build verified credit profiles.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card border-0 shadow-medium hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <Shield className="w-10 h-10 text-trust flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Verify & Vouch</h4>
                    <p className="text-muted-foreground text-sm">
                      Strengthen member applications by providing verification and cooperative standing.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card border-0 shadow-medium hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-10 h-10 text-success flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Grow Together</h4>
                    <p className="text-muted-foreground text-sm">
                      Increase member success rates and strengthen your cooperative's reputation.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <div className="bg-primary/5 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of farmers and lenders already using FarmCred to facilitate agricultural credit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/how-it-works">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <Card className="p-6 text-center bg-gradient-card border-0 shadow-soft">
            <div className="text-2xl font-bold text-foreground">18,500+</div>
            <div className="text-sm text-muted-foreground">Bankable Farmers</div>
          </Card>

          <Card className="p-6 text-center bg-gradient-card border-0 shadow-soft">
            <div className="text-2xl font-bold text-foreground">$12.4M</div>
            <div className="text-sm text-muted-foreground">Credit Facilitated</div>
          </Card>

          <Card className="p-6 text-center bg-gradient-card border-0 shadow-soft">
            <div className="text-2xl font-bold text-foreground">94.2%</div>
            <div className="text-sm text-muted-foreground">Repayment Rate</div>
          </Card>

          <Card className="p-6 text-center bg-gradient-card border-0 shadow-soft">
            <div className="text-2xl font-bold text-foreground">350+</div>
            <div className="text-sm text-muted-foreground">Partner Cooperatives</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
