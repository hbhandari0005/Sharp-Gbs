import { useEffect } from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import Services from "./components/Services";
import Contact from "./components/Contact";
import FinancialServices from "./components/FinancialServices";
import Development from "./components/Development";
// import DataAnalysis from "./components/DataAnalysis";
import ContentWriting from "./components/ContentWriting";
// import ConsultingServices from "./components/ConsultingServices";
import { AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/financialServices" element={<FinancialServices/>} />
          <Route path="/services/development" element={<Development/>}/>
          {/* <Route path="/services/dataAnalysis" element={<DataAnalysis />} /> */}
          <Route path="/services/contentWriting" element={<ContentWriting />} />
          {/* <Route path="/services/consultingServices" element={<ConsultingServices />}/> */}
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
