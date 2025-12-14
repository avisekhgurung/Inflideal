import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider, useAuth } from "@/lib/auth-context";
import LoginPage from "@/pages/login";
import DashboardPage from "@/pages/dashboard";
import DealsPage from "@/pages/deals";
import CreateDealPage from "@/pages/create-deal";
import DealDetailsPage from "@/pages/deal-details";
import ContractConfirmationPage from "@/pages/contract-confirmation";
import ContractsPage from "@/pages/contracts";
import ContractDetailsPage from "@/pages/contract-details";
import BillingPage from "@/pages/billing";
import InvoiceDetailsPage from "@/pages/invoice-details";
import NotFound from "@/pages/not-found";

function ProtectedRoute({ component: Component }: { component: () => JSX.Element }) {
  const { isLoggedIn } = useAuth();
  
  if (!isLoggedIn) {
    return <Redirect to="/login" />;
  }
  
  return <Component />;
}

function Router() {
  const { isLoggedIn } = useAuth();

  return (
    <Switch>
      <Route path="/login">
        {isLoggedIn ? <Redirect to="/" /> : <LoginPage />}
      </Route>
      <Route path="/">
        <ProtectedRoute component={DashboardPage} />
      </Route>
      <Route path="/deals">
        <ProtectedRoute component={DealsPage} />
      </Route>
      <Route path="/deals/new">
        <ProtectedRoute component={CreateDealPage} />
      </Route>
      <Route path="/deals/:id">
        <ProtectedRoute component={DealDetailsPage} />
      </Route>
      <Route path="/deals/:id/contract">
        <ProtectedRoute component={ContractConfirmationPage} />
      </Route>
      <Route path="/contracts">
        <ProtectedRoute component={ContractsPage} />
      </Route>
      <Route path="/contracts/:id">
        <ProtectedRoute component={ContractDetailsPage} />
      </Route>
      <Route path="/billing">
        <ProtectedRoute component={BillingPage} />
      </Route>
      <Route path="/billing/:id">
        <ProtectedRoute component={InvoiceDetailsPage} />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <div className="min-h-screen bg-background text-foreground">
            <Router />
          </div>
          <Toaster />
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
