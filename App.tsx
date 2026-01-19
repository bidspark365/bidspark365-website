import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WhoWeHelp from "./components/WhoWeHelp";
import Services from "./components/Services";
import Process from "./components/Process";
import Stats from "./components/Stats";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import OEMOnboarding from "./components/OEMOnboarding";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import GetStartedModal from "./components/GetStartedModal";

import Privacy from "./pages/Privacy";
import Terms from "./pages/terms";

function App() {
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);

  const openGetStarted = () => setIsGetStartedOpen(true);
  const closeGetStarted = () => setIsGetStartedOpen(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header stays common */}
      <Header onGetStarted={openGetStarted} />

      {/* ROUTES */}
      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <main>
              <Hero onGetStarted={openGetStarted} />
              <About />
              <WhoWeHelp />
              <Services />
              <Process />
              <Stats />
              <WhyChooseUs onGetStarted={openGetStarted} />
              <OEMOnboarding />
              <Testimonials />
              <CTA onGetStarted={openGetStarted} />
            </main>
          }
        />

        {/* LEGAL PAGES */}
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>

      {/* Footer stays common */}
      <Footer />

      {/* ONE GLOBAL MODAL */}
      <GetStartedModal
        isOpen={isGetStartedOpen}
        onClose={closeGetStarted}
      />
    </div>
  );
}

export default App;
