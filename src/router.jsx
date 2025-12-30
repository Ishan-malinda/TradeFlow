import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Academy from './pages/Academy';
import ModuleLesson from './pages/ModuleLesson';
import Journal from './pages/Journal';
import JournalDashboard from './pages/JournalDashboard';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Foundations from './pages/Foundations';
import MarketAnalysis from './pages/MarketAnalysis';
import TradingPsychology from './pages/TradingPsychology';
import RiskManagement from './pages/RiskManagement';
import NicheAlgoStrategies from './pages/NicheAlgoStrategies';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/academy" element={<Academy />} />
      <Route path="/academy/:moduleSlug" element={<ModuleLesson />} />
      <Route path="/academy/:moduleSlug/:lessonId" element={<ModuleLesson />} />
      <Route path="/foundations" element={<Foundations />} />
      <Route path="/market-analysis" element={<MarketAnalysis />} />
      <Route path="/trading-psychology" element={<TradingPsychology />} />
      <Route path="/risk-management" element={<RiskManagement />} />
      <Route path="/niche-algo-strategies" element={<NicheAlgoStrategies />} />
      <Route path="/journal" element={<Journal />} />
      <Route path="/journal/dashboard" element={<JournalDashboard />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;


