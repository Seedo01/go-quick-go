import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Blocks, 
  Shield, 
  BarChart3, 
  Globe, 
  Database, 
  Smartphone,
  ArrowRight
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Blocks,
      title: "Blockchain Infrastructure",
      description: "Immutable records on distributed ledger technology ensuring data integrity and transparency across the entire agricultural ecosystem.",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Identity Verification",
      description: "Digital identity management for farmers with multi-factor authentication and biometric verification for secure access.",
      color: "text-trust"
    },
    {
      icon: BarChart3,
      title: "Trust Analytics",
      description: "Advanced algorithms analyze farming practices, supply chain data, and historical performance to generate trust scores.",
      color: "text-success"
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Connect with verified farmers, suppliers, and buyers worldwide through our decentralized trust network.",
      color: "text-accent"
    },
    {
      icon: Database,
      title: "Data Integrity",
      description: "Cryptographic proof of data authenticity with tamper-evident logging and real-time validation mechanisms.",
      color: "text-warning"
    },
    {
      icon: Smartphone,
      title: "Mobile Integration",
      description: "Field-ready mobile applications for real-time data collection, verification, and trust score monitoring.",
      color: "text-trust"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Comprehensive Trust Infrastructure
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built on blockchain technology, our platform provides the tools and infrastructure needed to establish, maintain, and verify trust in agricultural supply chains.
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
              Ready to Build Trust in Your Supply Chain?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of farmers and organizations already using FarmCred to establish transparent, verifiable agricultural practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90">
                Get Started Today
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10 bg-transparent">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;