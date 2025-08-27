
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AIProject from "./pages/AIProject";
import WebScraperProject from "./pages/WebScraperProject";
import DataVisualizationProject from "./pages/DataVisualizationProject";
import MobileAppProject from "./pages/MobileAppProject";
import MachineLearningProject from "./pages/MachineLearningProject";
import GameDevelopmentProject from "./pages/GameDevelopmentProject";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ai-chatbot" element={<AIProject />} />
          <Route path="/web-scraper" element={<WebScraperProject />} />
          <Route path="/data-visualization" element={<DataVisualizationProject />} />
          <Route path="/mobile-app" element={<MobileAppProject />} />
          <Route path="/machine-learning" element={<MachineLearningProject />} />
          <Route path="/game-development" element={<GameDevelopmentProject />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
