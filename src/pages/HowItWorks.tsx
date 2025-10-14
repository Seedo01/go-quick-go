import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Smartphone,
  UserPlus,
  Shield,
  TrendingUp,
  CheckCircle,
  Building2,
  ArrowRight
} from "lucide-react";

const HowItWorks = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              How FarmCred Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A simple, three-step process that connects farmers with lenders through data-driven credit assessment
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">For Farmers</h2>

            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto md:mx-0 mb-4">
                    <UserPlus className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <Card className="md:w-2/3 p-8 bg-gradient-card border-0 shadow-medium">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">Register & Create Profile</h3>
                      <p className="text-muted-foreground mb-4">
                        Sign up through USSD (works on any phone) or our web platform. Provide basic information about your farm, crops, and cooperative membership. No smartphone needed.
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-success" />
                          Works with basic feature phones
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-success" />
                          Simple registration process
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-success" />
                          Cooperative verification available
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3 order-2 md:order-1">
                  <Card className="md:w-full p-8 bg-gradient-card border-0 shadow-medium">
                    <div className="flex items-start gap-4">
                      <div className="bg-trust text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-3">Build Your Credit Profile</h3>
                        <p className="text-muted-foreground mb-4">
                          Update your farming activities, production records, and financial transactions. Your cooperative can verify your membership and track record.
                        </p>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-success" />
                            Track farm productivity
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-success" />
                            Record sales and income
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-success" />
                            Get cooperative endorsements
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Card>
                </div>
                <div className="md:w-1/3 order-1 md:order-2">
                  <div className="bg-trust/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto md:mx-0 mb-4">
                    <Shield className="w-10 h-10 text-trust" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-success/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto md:mx-0 mb-4">
                    <TrendingUp className="w-10 h-10 text-success" />
                  </div>
                </div>
                <Card className="md:w-2/3 p-8 bg-gradient-card border-0 shadow-medium">
                  <div className="flex items-start gap-4">
                    <div className="bg-success text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">Access Credit Opportunities</h3>
                      <p className="text-muted-foreground mb-4">
                        Once your credit score is established, browse available loan offers from verified lenders. Apply directly and receive fast decisions based on your data.
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-success" />
                          Compare multiple loan offers
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-success" />
                          Fast approval process
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-success" />
                          Fair interest rates
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/signup">Get Started as a Farmer</Link>
              </Button>
            </div>
          </div>

          <div className="border-t-2 border-muted pt-20 mt-20">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">For Lenders</h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-6 text-center bg-gradient-card border-0 shadow-medium">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Access Verified Data</h3>
                <p className="text-muted-foreground">
                  Get instant access to comprehensive farmer profiles with verified digital IDs, production history, and cooperative endorsements.
                </p>
              </Card>

              <Card className="p-6 text-center bg-gradient-card border-0 shadow-medium">
                <div className="bg-trust/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-trust" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Assess Risk Accurately</h3>
                <p className="text-muted-foreground">
                  Use our dynamic credit scoring system based on real farming data, payment history, and cooperative standing to make informed decisions.
                </p>
              </Card>

              <Card className="p-6 text-center bg-gradient-card border-0 shadow-medium">
                <div className="bg-success/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-success" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Make Fast Decisions</h3>
                <p className="text-muted-foreground">
                  Reduce loan processing time with instant access to creditworthiness data. Approve or decline applications with confidence.
                </p>
              </Card>
            </div>

            <div className="text-center">
              <Button asChild size="lg" variant="outline" className="text-lg px-8">
                <Link to="/demo-access">Access Lender Portal</Link>
              </Button>
            </div>
          </div>

          <div className="mt-20 bg-primary/5 rounded-2xl p-12">
            <div className="text-center mb-8">
              <Smartphone className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-4">USSD Accessibility</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our USSD system ensures that farmers with basic feature phones can access all FarmCred services without internet connectivity.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <ArrowRight className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Dial a Simple Code</h4>
                  <p className="text-muted-foreground">Access FarmCred by dialing our USSD short code from any mobile phone</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <ArrowRight className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Follow Menu Prompts</h4>
                  <p className="text-muted-foreground">Navigate through simple menu options to register, update profile, or check loan status</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <ArrowRight className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">No Internet Required</h4>
                  <p className="text-muted-foreground">Works in remote areas with basic GSM network coverage</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <ArrowRight className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Available in Local Languages</h4>
                  <p className="text-muted-foreground">Multiple language support for better accessibility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HowItWorks;
