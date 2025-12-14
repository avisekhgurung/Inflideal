import { useAuth } from "@/lib/auth-context";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, ArrowRight, TrendingUp, FileCheck, CreditCard } from "lucide-react";

export default function LoginPage() {
  const { login } = useAuth();
  const [, setLocation] = useLocation();

  const handleLogin = () => {
    login();
    setLocation("/");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm space-y-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-4">
              <Sparkles className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">InfluDeal</h1>
            <p className="text-muted-foreground text-base leading-relaxed">
              Manage brand deals, contracts & billing professionally
            </p>
          </div>

          <div className="space-y-3">
            <Card className="border-0 bg-muted/50">
              <CardContent className="flex items-center gap-4 p-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                  <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <p className="font-medium text-sm">Track Deals</p>
                  <p className="text-xs text-muted-foreground">Manage all brand partnerships</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-muted/50">
              <CardContent className="flex items-center gap-4 p-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-violet-100 dark:bg-violet-900/30">
                  <FileCheck className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                </div>
                <div>
                  <p className="font-medium text-sm">Sign Contracts</p>
                  <p className="text-xs text-muted-foreground">Exclusive contract management</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-muted/50">
              <CardContent className="flex items-center gap-4 p-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                  <CreditCard className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-medium text-sm">Get Paid</p>
                  <p className="text-xs text-muted-foreground">Professional invoicing</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Button 
            onClick={handleLogin}
            data-testid="button-continue-influencer"
            className="w-full h-14 text-base font-semibold rounded-xl gap-2"
          >
            Continue as Influencer
            <ArrowRight className="w-5 h-5" />
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            No subscription. Pay only per contract.
          </p>
        </div>
      </div>
    </div>
  );
}
