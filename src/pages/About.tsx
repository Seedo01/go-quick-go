import { Card } from "@/components/ui/card";
import { Target, Users, Zap, Heart } from "lucide-react";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About FarmCred
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're on a mission to transform agricultural lending by making every smallholder farmer bankable through data-driven insights.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-4">
                FarmCred exists to bridge the gap between smallholder farmers and formal financial institutions. We believe that lack of credit history shouldn't be a barrier to agricultural financing.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Through digital farmer IDs and dynamic credit scoring, we're creating a new paradigm where farming data becomes the foundation for creditworthiness, enabling farmers to access the capital they need to grow.
              </p>
              <p className="text-lg text-muted-foreground">
                Our USSD-first approach ensures that even farmers in remote areas with basic feature phones can participate in the formal financial system.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground mb-4">
                We envision a world where every farmer, regardless of their location or resources, has access to fair and transparent credit that helps them invest in their future.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                By leveraging technology and data, we're building an ecosystem where lenders can confidently extend credit to farmers, and farmers can build credit histories that unlock opportunities for growth and prosperity.
              </p>
              <p className="text-lg text-muted-foreground">
                Together with our cooperative partners, we're creating a sustainable model that benefits everyone in the agricultural value chain.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <Card className="p-6 text-center bg-gradient-card border-0 shadow-medium">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Data-Driven</h3>
              <p className="text-muted-foreground">
                Using real farming data to assess creditworthiness accurately
              </p>
            </Card>

            <Card className="p-6 text-center bg-gradient-card border-0 shadow-medium">
              <Users className="w-12 h-12 text-trust mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Inclusive</h3>
              <p className="text-muted-foreground">
                USSD accessibility for farmers with basic phones
              </p>
            </Card>

            <Card className="p-6 text-center bg-gradient-card border-0 shadow-medium">
              <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Efficient</h3>
              <p className="text-muted-foreground">
                Real-time credit scoring and instant risk assessment
              </p>
            </Card>

            <Card className="p-6 text-center bg-gradient-card border-0 shadow-medium">
              <Heart className="w-12 h-12 text-success mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Impactful</h3>
              <p className="text-muted-foreground">
                Creating win-win solutions for farmers and lenders
              </p>
            </Card>
          </div>

          <div className="bg-primary/5 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Impact</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">18,500+</div>
                <p className="text-muted-foreground">Farmers Made Bankable</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-trust mb-2">$12.4M</div>
                <p className="text-muted-foreground">Credit Facilitated</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-success mb-2">94.2%</div>
                <p className="text-muted-foreground">Repayment Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default About;
