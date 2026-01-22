import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SapServices from './pages/SapServices';
import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import AiInnovationServices from './pages/AiInnovationServices';
import SapDataManagement from './pages/SapDataManagement';
import SoftwareEngineeringServices from './pages/SoftwareEngineeringServices';

import Services from './pages/Services';
import ServicesPage from './pages/ServicesPage';
import SolutionDetail from './pages/SolutionDetail';
import MasterDataManagement from './pages/MasterDataManagement';
import CloudDigitalTransformation from './pages/CloudDigitalTransformation';
import S4HanaMigration from './pages/S4HanaMigration';
import DataArchiving from './pages/DataArchiving';
import DataIntegration from './pages/DataIntegration';
import SapImplementation from './pages/SapImplementation';
import SapIntegration from './pages/SapIntegration';
import SapConsulting from './pages/SapConsulting';
import SapSecurityServices from './pages/SapSecurityServices';
import SapAms from './pages/SapAms';
import RiseWithSap from './pages/RiseWithSap';
import GrowWithSap from './pages/GrowWithSap';
import SapFiori from './pages/SapFiori';
import SapLicenses from './pages/SapLicenses';
import SapManagedServices from './pages/SapManagedServices';
import SapRollout from './pages/SapRollout';
import SapOnCloud from './pages/SapOnCloud';
import DotNetDevelopment from './pages/DotNetDevelopment';
import AiDevelopment from './pages/AiDevelopment';
import ComputerVision from './pages/ComputerVision';
import AspNetDevelopment from './pages/AspNetDevelopment';
import WebDevelopment from './pages/WebDevelopment';
import MobileDevelopment from './pages/MobileDevelopment';
import CustomSoftware from './pages/CustomSoftware';
import DroneRnd from './pages/DroneRnd';
import MedicalDeviceIntegration from './pages/MedicalDeviceIntegration';
import AiAgentDevelopment from './pages/AiAgentDevelopment';
import About from './pages/About';

import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router basename='/zoratech'>
      <ScrollToTop />
      <div className="bg-grid">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/sap-services" element={<SapServices />} />
          <Route path="/services/ai-innovation-services" element={<AiInnovationServices />} />
          <Route path="/services/sap-data-management-hub" element={<SapDataManagement />} />
          <Route path="/services/software-engineering-hub" element={<SoftwareEngineeringServices />} />
          <Route path="/solution/:id" element={<SolutionDetail />} />
          <Route path="/services/master-data-management" element={<MasterDataManagement />} />
          <Route path="/services/cloud-digital-transformation" element={<CloudDigitalTransformation />} />
          <Route path="/services/s4-hana-migration" element={<S4HanaMigration />} />
          <Route path="/services/data-archiving" element={<DataArchiving />} />
          <Route path="/services/data-integration" element={<DataIntegration />} />
          <Route path="/services/sap-on-cloud" element={<SapOnCloud />} />
          <Route path="/services/sap-implementation" element={<SapImplementation />} />
          <Route path="/services/sap-integration" element={<SapIntegration />} />
          <Route path="/services/sap-consulting" element={<SapConsulting />} />
          <Route path="/services/sap-security" element={<SapSecurityServices />} />
          <Route path="/services/sap-ams" element={<SapAms />} />
          <Route path="/services/rise-with-sap" element={<RiseWithSap />} />
          <Route path="/services/grow-with-sap" element={<GrowWithSap />} />
          <Route path="/services/sap-fiori" element={<SapFiori />} />
          <Route path="/services/sap-licenses" element={<SapLicenses />} />
          <Route path="/services/sap-managed-services" element={<SapManagedServices />} />
          <Route path="/services/sap-rollout" element={<SapRollout />} />
          <Route path="/services/dotnet-development" element={<DotNetDevelopment />} />
          <Route path="/services/ai-development" element={<AiDevelopment />} />
          <Route path="/services/computer-vision" element={<ComputerVision />} />
          <Route path="/services/asp-net-development" element={<AspNetDevelopment />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/mobile-development" element={<MobileDevelopment />} />
          <Route path="/services/custom-software" element={<CustomSoftware />} />
          <Route path="/services/drone-rnd" element={<DroneRnd />} />
          <Route path="/services/medical-device-integration" element={<MedicalDeviceIntegration />} />
          <Route path="/services/ai-agent-development" element={<AiAgentDevelopment />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Fallback for other sections if we had them, or anchor scrolls on home */}
        </Routes>
        <Footer />
        <CustomCursor />
      </div>
    </Router>
  )
}

export default App
