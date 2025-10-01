import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-farm.jpg";
import { Shield, CheckCircle, BarChart3 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Farmer working in lush green agricultural fields" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Making Farmers
              <span className="block bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">
                Bankable
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              FarmCred delivers digital farmer IDs and dynamic credit scoring to de-risk formal credit for smallholder farmers. 
              Our USSD and cooperative-driven approach ensures rural accessibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Get Credit Access
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10">
                Lender Portal
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-accent mr-3" />
                <h3 className="text-xl font-semibold text-white">Digital Farmer IDs</h3>
              </div>
              <p className="text-white/80">
                Verifiable digital identities with comprehensive farmer profiles and agricultural history for credit assessment.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-8 h-8 text-success mr-3" />
                <h3 className="text-xl font-semibold text-white">Dynamic Credit Scoring</h3>
              </div>
              <p className="text-white/80">
                Real-time credit assessment based on farming data, production history, and cooperative membership.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <BarChart3 className="w-8 h-8 text-trust mr-3" />
                <h3 className="text-xl font-semibold text-white">De-Risking Tools</h3>
              </div>
              <p className="text-white/80">
                USSD accessibility and cooperative integration creating win-win solutions for lenders and farmers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;