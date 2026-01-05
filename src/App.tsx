
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import WebScraperProject from "./pages/WebScraperProject";
import DataVisualizationProject from "./pages/DataVisualizationProject";
import MobileAppProject from "./pages/MobileAppProject";
import MachineLearningProject from "./pages/MachineLearningProject";
import GameDevelopmentProject from "./pages/GameDevelopmentProject";
import Hackathons from "./pages/Hackathons";
import Signifi from "./pages/Signifi";
import About from "./pages/About";
import Cattrax from "./pages/Cattrax";
import WorkExperience from "./pages/WorkExperience";
import Pluto from "./pages/Pluto";
import Neuroplay from "./pages/Neuroplay"
import Morganizer from "./pages/Morganizer"
import INITBuildLLM from "./pages/INITBuildLLM"


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/resume-analyzer" element={<ResumeAnalyzer />} />
          {/* <Route path="/web-scraper" element={<WebScraperProject />} /> */}
          {/* <Route path="/data-visualization" element={<DataVisualizationProject />} /> */}
          {/* <Route path="/mobile-app" element={<MobileAppProject />} /> */}
          {/* <Route path="/machine-learning" element={<MachineLearningProject />} /> */}
          {/* <Route path="/game-development" element={<GameDevelopmentProject />} /> */}
          <Route path="/hackathons" element={<Hackathons />} />
          <Route path="/signifi" element={<Signifi />} />
          <Route path="/about" element={<About />} />
          <Route path="/cattrax" element={<Cattrax />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/pluto" element={<Pluto />} />
          <Route path="/neuroplay" element={<Neuroplay />} />
          <Route path="/morganizer" element={<Morganizer />} />
          <Route path="/buildLLM" element={<INITBuildLLM />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
