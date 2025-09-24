import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  CreditCard, 
  Shield, 
  BarChart3, 
  Users, 
  Phone, 
  Smartphone,
  ArrowRight
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: CreditCard,
      title: "Dynamic Credit Scoring",
      description: "Real-time creditworthiness assessment using agricultural data, payment history, and cooperative membership for accurate risk evaluation.",
      color: "text-primary"
    },
    {
      icon: Shield,  
      title: "Digital Farmer IDs",
      description: "Comprehensive digital identity system with verifiable credentials, farming history, and financial profile for trusted lending.",
      color: "text-trust"
    },
    {
      icon: BarChart3,
      title: "De-Risking Analytics",
      description: "Advanced algorithms reduce lending risk through multi-factor analysis of farm productivity, weather patterns, and market conditions.",
      color: "text-success"
    },
    {
      icon: Users,
      title: "Cooperative Integration",
      description: "Seamless integration with agricultural cooperatives to leverage group guarantees and collective farming data.",
      color: "text-accent"
    },
    {
      icon: Phone,
      title: "USSD Accessibility",
      description: "No-internet USSD technology ensures rural farmers can access credit services even in remote areas without smartphones.",
      color: "text-warning"
    },
    {
      icon: Smartphone,
      title: "Lender Dashboard",
      description: "Comprehensive lending platform with portfolio management, risk assessment tools, and automated underwriting systems.",
      color: "text-trust"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Complete Credit Infrastructure
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform makes smallholder farmers bankable through verifiable data, de-risking tools, and accessible technology that creates win-win outcomes for lenders and cooperatives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="p-6 bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-secondary rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {feature.description}
                </p>
                <Button variant="ghost" className="p-0 h-auto font-medium text-primary hover:text-primary/80 group-hover:translate-x-1 transition-transform duration-300">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Make Your Farmers Bankable?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join 350+ cooperatives and thousands of farmers already using FarmCred to access formal credit and strengthen agricultural financing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90">
                Become a Partner
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10 bg-transparent">
                Lender Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;