import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { Layout } from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Pasadias from "@/pages/Pasadias";
import Botes from "@/pages/Botes";
import Jetskis from "@/pages/Jetskis";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/pasadias" component={Pasadias} />
        <Route path="/botes" component={Botes} />
        <Route path="/jetskis" component={Jetskis} />
        <Route path="/contacto" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
