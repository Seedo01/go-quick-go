import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
      color: "text-primary",
      link: "/demo"
    },
    {
      icon: Shield,  
      title: "Digital Farmer IDs",
      description: "Comprehensive digital identity system with verifiable credentials, farming history, and financial profile for trusted lending.",
      color: "text-trust",
      link: "/demo"
    },
    {
      icon: BarChart3,
      title: "De-Risking Analytics",
      description: "Advanced algorithms reduce lending risk through multi-factor analysis of farm productivity, weather patterns, and market conditions.",
      color: "text-success",
      link: "/demo"
    },
    {
      icon: Users,
      title: "Cooperative Integration",
      description: "Seamless integration with agricultural cooperatives to leverage group guarantees and collective farming data.",
      color: "text-accent",
      link: "/partner"
    },
    {
      icon: Phone,
      title: "USSD Accessibility",
      description: "No-internet USSD technology ensures rural farmers can access credit services even in remote areas without smartphones.",
      color: "text-warning",
      link: "/partner"
    },
    {
      icon: Smartphone,
      title: "Lender Dashboard",
      description: "Comprehensive lending platform with portfolio management, risk assessment tools, and automated underwriting systems.",
      color: "text-trust",
      link: "/demo-access"
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
                <Button asChild variant="ghost" className="p-0 h-auto font-medium text-primary hover:text-primary/80 group-hover:translate-x-1 transition-transform duration-300">
                  <Link to={feature.link}>
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;