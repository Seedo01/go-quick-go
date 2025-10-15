import { Card } from "@/components/ui/card";
import { Sprout, Shield, Users, TrendingUp } from "lucide-react";

const ImpactHighlights = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-trust/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Impact Highlights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Driving sustainable growth and financial inclusion across Nigeria's agricultural sector
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 bg-gradient-card border-0 shadow-medium hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="flex flex-col items-center text-center">
              <div className="bg-success/10 rounded-full p-4 mb-4">
                <Sprout className="w-8 h-8 text-success" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Climate-Smart Lending</h3>
              <p className="text-sm text-muted-foreground">
                Promoting loans for drought-resistant seeds and sustainable farming practices.
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card border-0 shadow-medium hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 rounded-full p-4 mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">National Food Security</h3>
              <p className="text-sm text-muted-foreground">
                Boosting local production to strengthen Nigeria's food supply.
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card border-0 shadow-medium hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="flex flex-col items-center text-center">
              <div className="bg-accent/10 rounded-full p-4 mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Financial Inclusion</h3>
              <p className="text-sm text-muted-foreground">
                Committed to 50%+ of loans for women and youth-led farms.
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card border-0 shadow-medium hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="flex flex-col items-center text-center">
              <div className="bg-trust/10 rounded-full p-4 mb-4">
                <TrendingUp className="w-8 h-8 text-trust" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Rural Prosperity</h3>
              <p className="text-sm text-muted-foreground">
                Enabling 30-50% higher yields and increased income for smallholder families.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ImpactHighlights;
