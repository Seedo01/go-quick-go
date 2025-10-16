import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";
import {
  Users,
  Shield,
  TrendingUp,
  Search,
  UserPlus,
  FileCheck,
  AlertCircle,
  LogOut,
  Award,
  DollarSign
} from "lucide-react";

interface CooperativeMember {
  id: string;
  full_name: string;
  email: string;
  credit_score: number | null;
  verification_status: string;
  joined_date: string;
}

interface LoanGuarantee {
  id: string;
  farmer_name: string;
  amount: number;
  status: string;
  created_at: string;
}

const CooperativeDashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [members, setMembers] = useState<CooperativeMember[]>([]);
  const [guarantees, setGuarantees] = useState<LoanGuarantee[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
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
      const { data: adminData } = await supabase
        .from("cooperative_admins")
        .select("cooperative_id")
        .eq("user_id", user?.id)
        .maybeSingle();

      if (!adminData) {
        setLoading(false);
        return;
      }

      const { data: cooperativeData } = await supabase
        .from("cooperatives")
        .select("id")
        .eq("id", adminData.cooperative_id)
        .maybeSingle();

      if (cooperativeData) {
        const { data: membersData } = await supabase
          .from("cooperative_members")
          .select(`
            id,
            user_profiles!inner(
              full_name,
              email,
              verification_status
            )
          `)
          .eq("cooperative_id", cooperativeData.id);

        const { data: guaranteesData } = await supabase
          .from("loan_guarantees")
          .select("*")
          .eq("cooperative_id", cooperativeData.id)
          .order("created_at", { ascending: false });

        setMembers(membersData || []);
        setGuarantees(guaranteesData || []);
      }
    } catch (error) {
      console.error("Error fetching cooperative data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const filteredMembers = members.filter(member =>
    member.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = {
    totalMembers: members.length,
    verifiedMembers: members.filter(m => m.verification_status === "verified").length,
    activeGuarantees: guarantees.filter(g => g.status === "active").length,
    totalGuaranteedAmount: guarantees.reduce((sum, g) => sum + g.amount, 0)
  };

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
            Cooperative Dashboard
          </h1>
          <p className="text-gray-600">Manage your cooperative members and loan guarantees</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Members</CardTitle>
              <Users className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-700">{stats.totalMembers}</div>
              <p className="text-xs text-gray-500 mt-1">Registered farmers</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Verified Members</CardTitle>
              <Shield className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-700">{stats.verifiedMembers}</div>
              <p className="text-xs text-gray-500 mt-1">Fully verified</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Guarantees</CardTitle>
              <FileCheck className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-700">{stats.activeGuarantees}</div>
              <p className="text-xs text-gray-500 mt-1">Ongoing loans</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Guaranteed</CardTitle>
              <DollarSign className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-700">
                ₦{(stats.totalGuaranteedAmount / 1000000).toFixed(1)}M
              </div>
              <p className="text-xs text-gray-500 mt-1">Loan amount</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="members" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="members">Members</TabsTrigger>
            <TabsTrigger value="guarantees">Guarantees</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="members" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-green-600" />
                      Cooperative Members
                    </CardTitle>
                    <CardDescription>
                      Manage and monitor your cooperative members
                    </CardDescription>
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700 gap-2">
                    <UserPlus className="w-4 h-4" />
                    Add Member
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Search members..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {filteredMembers.length > 0 ? (
                  <div className="space-y-3">
                    {filteredMembers.map((member) => (
                      <div key={member.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                              <span className="text-green-700 font-semibold">
                                {member.full_name?.charAt(0) || "?"}
                              </span>
                            </div>
                            <div>
                              <h3 className="font-semibold">{member.full_name}</h3>
                              <p className="text-sm text-gray-600">{member.email}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            {member.credit_score && (
                              <div className="flex items-center gap-2 mb-1">
                                <Award className="w-4 h-4 text-green-600" />
                                <span className="font-semibold text-green-700">{member.credit_score}</span>
                              </div>
                            )}
                            <Badge
                              variant={member.verification_status === "verified" ? "default" : "secondary"}
                            >
                              {member.verification_status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">
                      {searchTerm ? "No members found" : "No members yet"}
                    </p>
                    {!searchTerm && (
                      <Button className="bg-green-600 hover:bg-green-700">
                        Invite Members
                      </Button>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="guarantees" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  Loan Guarantees
                </CardTitle>
                <CardDescription>
                  Track loans guaranteed by your cooperative
                </CardDescription>
              </CardHeader>
              <CardContent>
                {guarantees.length > 0 ? (
                  <div className="space-y-4">
                    {guarantees.map((guarantee) => (
                      <div key={guarantee.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-lg">{guarantee.farmer_name}</h3>
                            <p className="text-2xl font-bold text-green-600 my-1">
                              ₦{guarantee.amount.toLocaleString()}
                            </p>
                            <p className="text-sm text-gray-600">
                              Guaranteed: {new Date(guarantee.created_at).toLocaleDateString()}
                            </p>
                          </div>
                          <Badge
                            variant={
                              guarantee.status === "active"
                                ? "default"
                                : guarantee.status === "completed"
                                ? "secondary"
                                : "destructive"
                            }
                          >
                            {guarantee.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <FileCheck className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">No loan guarantees yet</p>
                    <Button className="bg-green-600 hover:bg-green-700">
                      Guarantee a Loan
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  Cooperative Analytics
                </CardTitle>
                <CardDescription>
                  Performance metrics and insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Verification Rate</h3>
                    <div className="text-3xl font-bold text-green-600 mb-1">
                      {stats.totalMembers > 0
                        ? Math.round((stats.verifiedMembers / stats.totalMembers) * 100)
                        : 0}%
                    </div>
                    <p className="text-sm text-gray-600">
                      {stats.verifiedMembers} of {stats.totalMembers} members verified
                    </p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Average Loan Size</h3>
                    <div className="text-3xl font-bold text-green-600 mb-1">
                      ₦{guarantees.length > 0
                        ? (stats.totalGuaranteedAmount / guarantees.length / 1000).toFixed(0)
                        : 0}K
                    </div>
                    <p className="text-sm text-gray-600">
                      Across {guarantees.length} guarantees
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-1">Cooperative Benefits</h4>
                      <p className="text-sm text-blue-800">
                        Your cooperative provides loan guarantees that help members access better credit terms.
                        Encourage members to complete verification for improved credit scores.
                      </p>
                    </div>
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

export default CooperativeDashboard;
