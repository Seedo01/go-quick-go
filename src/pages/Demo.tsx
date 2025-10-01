import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Play, 
  BarChart3, 
  Users, 
  Shield,
  CreditCard,
  CheckCircle,
  Calendar,
  Video
} from "lucide-react";

const Demo = () => {
  const navigate = useNavigate();
  
  const demoFeatures = [
    {
      icon: CreditCard,
      title: "Dynamic Credit Scoring",
      description: "See how our AI analyzes agricultural data for real-time creditworthiness"
    },
    {
      icon: Shield,
      title: "Risk Assessment Tools",
      description: "Explore multi-factor analysis reducing lending risk by up to 40%"
    },
    {
      icon: BarChart3,
      title: "Portfolio Analytics",
      description: "Comprehensive dashboard with performance metrics and insights"
    },
    {
      icon: Users,
      title: "Farmer Management",
      description: "Digital ID system with verifiable credentials and farming history"
    }
  ];

  const demoOptions = [
    {
      title: "Live Demo Session",
      duration: "30 minutes",
      description: "Interactive walkthrough with our product team",
      icon: Video,
      features: [
        "Personalized platform demo",
        "Q&A with product experts", 
        "Custom use case discussion",
        "Implementation roadmap"
      ]
    },
    {
      title: "Self-Guided Tour",
      duration: "15 minutes",
      description: "Explore the lender dashboard at your own pace",
      icon: Play,
      features: [
        "Interactive product tour",
        "Sample farmer profiles",
        "Demo credit assessments",
        "Feature documentation"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            FarmCred Lender Demo
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Experience how FarmCred transforms agricultural lending through verifiable data, dynamic credit scoring, and comprehensive risk management tools.
          </p>
        </div>
      </div>

      {/* Demo Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What You'll See in the Demo</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {demoFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="p-6 text-center border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                  <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Demo Options */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Demo Experience</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {demoOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <Card key={index} className="p-8 bg-background border-0 shadow-soft">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-primary/10 rounded-full mr-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{option.title}</h3>
                      <p className="text-sm text-muted-foreground">{option.duration}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">{option.description}</p>
                  <div className="space-y-3 mb-8">
                    {option.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-success mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant={index === 0 ? "default" : "outline"} 
                    className="w-full"
                    size="lg"
                    onClick={() => {
                      if (index === 0) {
                        window.open('https://calendly.com/farmcred-demo', '_blank');
                      } else {
                        navigate('/lender-dashboard');
                      }
                    }}
                  >
                    {index === 0 ? "Schedule Live Demo" : "Start Self-Guided Tour"}
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-card rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-8">Why Lenders Choose FarmCred</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">40%</div>
                <p className="text-muted-foreground">Reduction in Default Rates</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-success mb-2">350+</div>
                <p className="text-muted-foreground">Partner Cooperatives</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-trust mb-2">95%</div>
                <p className="text-muted-foreground">Rural Coverage via USSD</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Agricultural Lending?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join leading financial institutions using FarmCred to safely expand into agricultural finance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => window.open('https://calendly.com/farmcred-demo', '_blank')}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Live Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 bg-transparent"
              onClick={() => navigate('/signup')}
            >
              <Play className="w-4 h-4 mr-2" />
              Start Free Trial
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Demo;