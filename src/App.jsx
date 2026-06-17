// src/App.jsx
import About from "./components/About";
import Contact from "./components/Contact";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Transformations from "./components/Transformations";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-[#050505] text-white">
        <ScrollProgress />
        <Navbar />
        <Hero />
        <About />
        <Transformations />
        <Services />
        <Testimonials />
        <Contact />
        <FloatingWhatsApp />
      </main>
    </LanguageProvider>
  );
}

export default App;