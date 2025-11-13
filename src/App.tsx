import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import BackToTop from "./components/ui/BackToTop";
import LoadingScreen from "./components/ui/LoadingScreen";
import ExperiencePage from "./pages/ExperiencePage";
import EducationPage from "./pages/EducationPage";
import SkillsPage from "./pages/SkillsPage";
import CertificationsPage from "./pages/CertificationsPage";
import PortfolioPage from "./pages/PortfolioPage";

export default function App() {
  return (
    <Router>
      <div
        id="top"
        className="min-h-screen flex flex-col bg-gray-900 text-white"
      >
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <LoadingScreen />
                <Main />
              </>
            }
          />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}
