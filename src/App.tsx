import { Analytics } from "@vercel/analytics/react"; // ✅ use `/react` instead of `/next`
import { BrowserRouter as Router } from "react-router-dom";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Reels from "./components/Reels";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-bg font-poppins">
        <Analytics />
        <Navigation />
        <main>
          <Hero />
          <Services />
          <WhyChoose />
          <Portfolio />
          <Testimonials />
          <Contact />
          <Reels />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
