import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/Screenshot (398).png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Farmer working in lush green agricultural fields"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="flex items-center justify-center">
          <div className="text-center max-w-4xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Derisking Agricultural
              <span className="block bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">
                Lending with Data
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              FarmCred delivers dynamic credit scoring to de-risk formal credit for smallholder farmers.
              Our USSD and cooperative-driven approach ensures rural accessibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg" className="text-lg px-8 py-4">
                <Link to="/signup">Get Credit Access</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10">
                <Link to="/demo-access">Lender Portal</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;