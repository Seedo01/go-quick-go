import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Lock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const DemoAccess = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [accessCode, setAccessCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <main className="min-h-screen bg-secondary/10 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Link to="/demo" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Demo Info
        </Link>

        <Card className="p-8 border-0 shadow-medium">
          <div className="text-center mb-8">
            <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Secure Demo Access</h1>
            <p className="text-muted-foreground">
              Enter your demo access code to explore the lender dashboard
            </p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="accessCode">Access Code</Label>
              <Input
                id="accessCode"
                type="text"
                placeholder="Enter demo access code"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                required
              />
              <p className="text-xs text-muted-foreground">
                Hint: Try "demo2024" for quick access
              </p>
            </div>

            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={isLoading}
              onClick={(e) => {
                e.preventDefault();
                setIsLoading(true);
                setTimeout(() => {
                  if (accessCode.toLowerCase() === "demo2024" || accessCode.toLowerCase() === "farmcred") {
                    navigate("/lender-dashboard");
                  } else {
                    toast({
                      title: "Invalid Access Code",
                      description: "Please use the code provided in your demo invitation",
                      variant: "destructive",
                    });
                    setIsLoading(false);
                  }
                }, 500);
              }}
            >
              {isLoading ? "Verifying..." : "Access Dashboard"}
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-border text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Don't have an access code?
            </p>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => window.open('https://calendly.com/farmcred-demo', '_blank')}
            >
              Book Demo
            </Button>
          </div>
        </Card>
      </div>
    </main>
  );
};

export default DemoAccess;
