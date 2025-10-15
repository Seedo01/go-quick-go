import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { ArrowLeft, Building2, Mail, Phone, User, Lock, MapPin, CreditCard, IdCard } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
import { verificationService } from "@/services/verificationService";

const Signup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    organization: "",
    bvn: "",
    nin: "",
    farmMappingId: "",
    password: "",
    confirmPassword: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password mismatch",
        description: "Passwords do not match. Please try again.",
        variant: "destructive"
      });
      return;
    }

    if (!verificationService.validateNigerianPhone(formData.phone)) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid Nigerian phone number (e.g., +234...)",
        variant: "destructive"
      });
      return;
    }

    if (!verificationService.validateBVN(formData.bvn)) {
      toast({
        title: "Invalid BVN",
        description: "BVN must be 11 digits",
        variant: "destructive"
      });
      return;
    }

    if (!verificationService.validateNIN(formData.nin)) {
      toast({
        title: "Invalid NIN",
        description: "NIN must be 11 digits",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      const [bvnResult, ninResult, farmResult] = await Promise.all([
        verificationService.verifyBVN({ bvn: formData.bvn }),
        verificationService.verifyNIN({ nin: formData.nin }),
        verificationService.verifyFarmMapping({ farmMappingId: formData.farmMappingId })
      ]);

      if (!bvnResult.success || !ninResult.success || !farmResult.success) {
        const failedVerifications = [];
        if (!bvnResult.success) failedVerifications.push('BVN');
        if (!ninResult.success) failedVerifications.push('NIN');
        if (!farmResult.success) failedVerifications.push('Farm Mapping');

        toast({
          title: "Verification Failed",
          description: `Incorrect details: ${failedVerifications.join(', ')}. Please check and try again.`,
          variant: "destructive"
        });
        setIsLoading(false);
        return;
      }

      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (authError) {
        toast({
          title: "Signup Error",
          description: authError.message,
          variant: "destructive"
        });
        setIsLoading(false);
        return;
      }

      if (authData.user) {
        const { error: profileError } = await supabase
          .from('user_profiles')
          .insert({
            id: authData.user.id,
            full_name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
            bvn: formData.bvn,
            nin: formData.nin,
            farm_mapping_id: formData.farmMappingId,
            organization: formData.organization,
            verification_status: 'verified',
            bvn_verified: true,
            nin_verified: true,
            farm_verified: true
          });

        if (profileError) {
          toast({
            title: "Profile Error",
            description: "Account created but profile setup failed. Please contact support.",
            variant: "destructive"
          });
          setIsLoading(false);
          return;
        }

        toast({
          title: "Account created successfully!",
          description: "All verifications passed. Welcome to FarmCred!",
        });

        setTimeout(() => {
          navigate("/lender-dashboard");
        }, 1500);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/demo" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Demo
          </Link>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Start Your Free Trial
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Get full access to FarmCred's lender platform for 30 days
          </p>
        </div>
      </div>

      {/* Signup Form */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 border-0 shadow-soft">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@organization.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+234 XXX XXX XXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Contact Address
                </Label>
                <Input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Lagos, Nigeria"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="organization" className="flex items-center">
                  <Building2 className="w-4 h-4 mr-2" />
                  Organization Name
                </Label>
                <Input
                  id="organization"
                  name="organization"
                  type="text"
                  placeholder="Your Financial Institution"
                  value={formData.organization}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bvn" className="flex items-center">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Bank Verification Number (BVN)
                </Label>
                <Input
                  id="bvn"
                  name="bvn"
                  type="text"
                  placeholder="12345678901"
                  maxLength={11}
                  value={formData.bvn}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="nin" className="flex items-center">
                  <IdCard className="w-4 h-4 mr-2" />
                  National Identification Number (NIN)
                </Label>
                <Input
                  id="nin"
                  name="nin"
                  type="text"
                  placeholder="12345678901"
                  maxLength={11}
                  value={formData.nin}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="farmMappingId" className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Farm Mapping ID
                </Label>
                <Input
                  id="farmMappingId"
                  name="farmMappingId"
                  type="text"
                  placeholder="FM-XXXX-XXXX"
                  value={formData.farmMappingId}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="flex items-center">
                  <Lock className="w-4 h-4 mr-2" />
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={8}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="flex items-center">
                  <Lock className="w-4 h-4 mr-2" />
                  Confirm Password
                </Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  minLength={8}
                />
              </div>

              <div className="pt-4">
                <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                  {isLoading ? "Verifying & Creating Account..." : "Create Account & Start Trial"}
                </Button>
              </div>

              <p className="text-sm text-muted-foreground text-center">
                By signing up, you agree to our Terms of Service and Privacy Policy
              </p>
            </form>
          </Card>

          {/* Features */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center border-0 shadow-soft">
              <div className="text-3xl font-bold text-primary mb-2">30 Days</div>
              <p className="text-sm text-muted-foreground">Free Trial Period</p>
            </Card>
            <Card className="p-6 text-center border-0 shadow-soft">
              <div className="text-3xl font-bold text-success mb-2">Full Access</div>
              <p className="text-sm text-muted-foreground">All Premium Features</p>
            </Card>
            <Card className="p-6 text-center border-0 shadow-soft">
              <div className="text-3xl font-bold text-trust mb-2">24/7</div>
              <p className="text-sm text-muted-foreground">Support Available</p>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Signup;
