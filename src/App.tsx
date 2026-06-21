import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import UaeToSaudi from "./pages/services/UaeToSaudi";
import UaeToQatar from "./pages/services/UaeToQatar";
import UaeToOman from "./pages/services/UaeToOman";
import AirCargo from "./pages/services/AirCargo";
import SeaCargo from "./pages/services/SeaCargo";
import LandTransport from "./pages/services/LandTransport";
import ExpressDelivery from "./pages/services/ExpressDelivery";
import DubaiToQatarCargo from "./pages/DubaiToQatarCargo";
import DubaiToSaudiCargo from "./pages/DubaiToSaudiCargo";
import Contact from "./pages/Contact";
import Track from "./pages/Track";
import Quote from "./pages/Quote";
import Coverage from "./pages/Coverage";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ScrollToTopButton />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/uae-to-saudi" element={<UaeToSaudi />} />
            <Route path="/services/uae-to-qatar" element={<UaeToQatar />} />
            <Route path="/services/uae-to-oman" element={<UaeToOman />} />
            <Route path="/services/air-cargo" element={<AirCargo />} />
            <Route path="/services/sea-cargo" element={<SeaCargo />} />
            <Route path="/services/land-transport" element={<LandTransport />} />
            <Route path="/services/express-delivery" element={<ExpressDelivery />} />
            <Route path="/dubai-to-qatar-cargo" element={<DubaiToQatarCargo />} />
            <Route path="/dubai-to-saudi-cargo" element={<DubaiToSaudiCargo />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/track" element={<Track />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/coverage" element={<Coverage />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
