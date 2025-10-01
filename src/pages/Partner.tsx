import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Users, 
  TrendingUp, 
  Shield, 
  Globe,
  CheckCircle,
  Phone,
  Mail
} from "lucide-react";

const Partner = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Expand Your Reach",
      description: "Access thousands of previously unbankable farmers through our verified network"
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Our de-risking tools and credit scoring reduce default rates by up to 40%"
    },
    {
      icon: Users,
      title: "Cooperative Network", 
      description: "Leverage our 350+ cooperative partnerships for group guarantees and support"
    },
    {
      icon: Globe,
      title: "Rural Accessibility",
      description: "USSD technology ensures reach even in the most remote farming communities"
    }
  ];

  const partnerTypes = [
    {
      title: "Agricultural Cooperatives",
      description: "Join our network to provide credit access to your members",
      requirements: ["Active farmer membership", "Established governance", "Financial transparency"]
    },
    {
      title: "Financial Institutions",
      description: "Expand into agricultural lending with reduced risk",
      requirements: ["Banking license", "Credit portfolio management", "Digital infrastructure"]
    },
    {
      title: "Agribusiness for Input Supply",
      description: "Partner to provide inputs to farmers with flexible credit terms",
      requirements: ["Agricultural input supply chain", "Distribution network", "Quality assurance systems"]
    },
    {
      title: "Development Organizations",
      description: "Scale agricultural finance impact programs",
      requirements: ["Agricultural focus", "Impact measurement", "Community presence"]
    }
  ];

  const handleStartApplication = () => {
    window.location.href = "mailto:partnerships@farmcred.com?subject=Partnership Application&body=Hello, I would like to explore a partnership with FarmCred.%0D%0A%0D%0AOrganization Name:%0D%0APartner Type:%0D%0AContact Person:%0D%0APhone:%0D%0A%0D%0APlease tell us about your interest in partnering with FarmCred:";
  };

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
            Become a FarmCred Partner
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Join our mission to make smallholder farmers bankable. Partner with us to expand financial inclusion and strengthen agricultural value chains across rural communities.
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Partner With FarmCred?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="p-6 text-center border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                  <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Partnership Opportunities</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <Card key={index} className="p-8 bg-background border-0 shadow-soft">
                <h3 className="text-xl font-semibold mb-4">{type.title}</h3>
                <p className="text-muted-foreground mb-6">{type.description}</p>
                <div className="space-y-3">
                  <h4 className="font-medium text-sm text-foreground">Requirements:</h4>
                  {type.requirements.map((req, reqIndex) => (
                    <div key={reqIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-success mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{req}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Partner With Us?</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Let's discuss how we can work together to expand financial inclusion in agriculture
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 border-0 shadow-soft">
              <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Schedule a Call</h3>
              <p className="text-muted-foreground mb-4">Speak directly with our partnership team</p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => window.open('https://calendly.com/farmcred', '_blank')}
              >
                Book Meeting
              </Button>
            </Card>
            
            <Card className="p-8 border-0 shadow-soft">
              <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Send Details</h3>
              <p className="text-muted-foreground mb-4">Email us your partnership proposal</p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => window.location.href = 'mailto:partnerships@farmcred.com'}
              >
                Contact Us
              </Button>
            </Card>
          </div>

          <div className="bg-gradient-primary rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join 350+ Partners Already Making Impact
            </h3>
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90"
              onClick={handleStartApplication}
            >
              Start Partnership Application
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Partner;