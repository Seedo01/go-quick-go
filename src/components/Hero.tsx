import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-farm-landscape.jpg";
import { Shield, CheckCircle, BarChart3 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Modern agricultural landscape with green fields and farming equipment" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Build Trust in
              <span className="block bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">
                Agricultural Supply Chains
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              FarmCred's blockchain-powered trust layer provides transparent, verifiable credentials for farmers, 
              supply chain tracking, and agricultural data integrity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Start Building Trust
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10">
                View Demo
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-accent mr-3" />
                <h3 className="text-xl font-semibold text-white">Trust Verification</h3>
              </div>
              <p className="text-white/80">
                Blockchain-verified farmer credentials and agricultural practices with immutable trust scores.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-8 h-8 text-success mr-3" />
                <h3 className="text-xl font-semibold text-white">Supply Chain Tracking</h3>
              </div>
              <p className="text-white/80">
                End-to-end traceability from farm to consumer with real-time verification and quality assurance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <BarChart3 className="w-8 h-8 text-trust mr-3" />
                <h3 className="text-xl font-semibold text-white">Data Analytics</h3>
              </div>
              <p className="text-white/80">
                Comprehensive analytics dashboard for agricultural performance and trust metrics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;