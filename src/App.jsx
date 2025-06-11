import { useState } from "react";

// applayout
import Page from "./components/sections/Page";
// header
import Header from "./components/sections/Header";
import Navigation from "./components/sections/Navigation/Navigation";
import Hero from "./components/sections/Hero";

// main
import Main from "./components/sections/Main";
import Dashboard from "./components/sections/Dashboard";
import AppStatistics from "./components/sections/AppStatistics";
import Feature from "./components/sections/Feature";
import Pricing from "./components/sections/Pricing/Pricing";
import Testimonials from "./components/sections/Testimonials/Testimonials";
import CTA from "./components/sections/CTA";
import ModalContent from "./components/UI/ModalContent";

// UI
import Modal from "./components/UI/Modal";

// footer
import Footer from "./components/sections/Footer";

function App() {
  const [currentModal, setCurrentModal] = useState("more-information");

  return (
    <Page>
      <Header>
        <Navigation />
        <Hero />
      </Header>

      <Main>
        <Dashboard />
        <AppStatistics />
        <Feature />
        <Pricing />
        <Testimonials />
        <CTA setcurrentModal={setCurrentModal} />
      </Main>

      <Footer />

      {currentModal === "more-information" && (
        <Modal
          modalName="more-information"
          currentModal={currentModal}
          setcurrentModal={setCurrentModal}
        >
          <ModalContent />
        </Modal>
      )}
    </Page>
  );
}

export default App;
