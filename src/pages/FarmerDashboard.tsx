import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";
import {
  TrendingUp,
  Leaf,
  FileText,
  CheckCircle2,
  AlertCircle,
  Clock,
  Award,
  BarChart3,
  LogOut
} from "lucide-react";

interface UserProfile {
  full_name: string;
  email: string;
  phone: string;
  bvn_verified: boolean;
  nin_verified: boolean;
  farm_verified: boolean;
  verification_status: string;
}

interface CreditScore {
  score: number;
  grade: string;
  last_updated: string;
}

interface LoanApplication {
  id: string;
  amount: number;
  purpose: string;
  status: string;
  created_at: string;
}

const FarmerDashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [creditScore, setCreditScore] = useState<CreditScore | null>(null);
  const [loans, setLoans] = useState<LoanApplication[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate("/signup");
      return;
    }
    fetchDashboardData();
  }, [user, navigate]);

  const fetchDashboardData = async () => {
    try {
      const { data: profileData } = await supabase
        .from("user_profiles")
        .select("*")
        .eq("id", user?.id)
        .maybeSingle();

      const { data: scoreData } = await supabase
        .from("credit_scores")
        .select("*")
        .eq("user_id", user?.id)
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();

      const { data: loansData } = await supabase
        .from("loan_applications")
        .select("*")
        .eq("farmer_id", user?.id)
        .order("created_at", { ascending: false });

      setProfile(profileData);
      setCreditScore(scoreData);
      setLoans(loansData || []);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const verificationProgress = profile
    ? ((profile.bvn_verified ? 1 : 0) + (profile.nin_verified ? 1 : 0) + (profile.farm_verified ? 1 : 0)) / 3 * 100
    : 0;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="text-2xl font-bold text-green-800">FarmCredit</span>
            </Link>
            <Button variant="outline" onClick={handleSignOut} className="gap-2">
              <LogOut className="w-4 h-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-green-800 mb-2">
            Welcome back, {profile?.full_name}!
          </h1>
          <p className="text-gray-600">Manage your credit profile and loan applications</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-green-600" />
                Credit Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              {creditScore ? (
                <div className="text-center">
                  <div className="text-6xl font-bold text-green-600 mb-2">
                    {creditScore.score}
                  </div>
                  <Badge className="mb-4 bg-green-100 text-green-800">
                    Grade {creditScore.grade}
                  </Badge>
                  <p className="text-sm text-gray-500">
                    Last updated: {new Date(creditScore.last_updated).toLocaleDateString()}
                  </p>
                </div>
              ) : (
                <div className="text-center py-8">
                  <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600 mb-4">No credit score yet</p>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    Generate Score
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                Verification Status
              </CardTitle>
              <CardDescription>
                Complete all verifications to improve your credit score
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Overall Progress</span>
                    <span className="text-sm text-gray-600">{Math.round(verificationProgress)}%</span>
                  </div>
                  <Progress value={verificationProgress} className="h-2" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    {profile?.bvn_verified ? (
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    ) : (
                      <AlertCircle className="w-6 h-6 text-orange-500" />
                    )}
                    <div>
                      <p className="font-medium text-sm">BVN</p>
                      <p className="text-xs text-gray-600">
                        {profile?.bvn_verified ? "Verified" : "Pending"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    {profile?.nin_verified ? (
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    ) : (
                      <AlertCircle className="w-6 h-6 text-orange-500" />
                    )}
                    <div>
                      <p className="font-medium text-sm">NIN</p>
                      <p className="text-xs text-gray-600">
                        {profile?.nin_verified ? "Verified" : "Pending"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    {profile?.farm_verified ? (
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    ) : (
                      <AlertCircle className="w-6 h-6 text-orange-500" />
                    )}
                    <div>
                      <p className="font-medium text-sm">Farm Mapping</p>
                      <p className="text-xs text-gray-600">
                        {profile?.farm_verified ? "Verified" : "Pending"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="loans" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="loans">Loan Applications</TabsTrigger>
            <TabsTrigger value="farming">Farming Data</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="loans" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-green-600" />
                  Your Loan Applications
                </CardTitle>
                <CardDescription>
                  Track the status of your loan applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                {loans.length > 0 ? (
                  <div className="space-y-4">
                    {loans.map((loan) => (
                      <div key={loan.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-lg">₦{loan.amount.toLocaleString()}</h3>
                            <p className="text-sm text-gray-600 mb-2">{loan.purpose}</p>
                            <p className="text-xs text-gray-500">
                              Applied: {new Date(loan.created_at).toLocaleDateString()}
                            </p>
                          </div>
                          <Badge
                            variant={
                              loan.status === "approved"
                                ? "default"
                                : loan.status === "pending"
                                ? "secondary"
                                : "destructive"
                            }
                          >
                            {loan.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">No loan applications yet</p>
                    <Button className="bg-green-600 hover:bg-green-700">
                      Apply for a Loan
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="farming" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-green-600" />
                  Farming Data
                </CardTitle>
                <CardDescription>
                  Your agricultural information and productivity metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <BarChart3 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">Upload your farming data to improve your credit score</p>
                  <Button className="bg-green-600 hover:bg-green-700">
                    Add Farming Data
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>
                  Your personal and verification details
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Full Name</label>
                    <p className="text-base">{profile?.full_name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <p className="text-base">{profile?.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Phone</label>
                    <p className="text-base">{profile?.phone}</p>
                  </div>
                  <div className="pt-4">
                    <Button variant="outline" className="w-full">
                      Edit Profile
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default FarmerDashboard;
