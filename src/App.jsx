// src/App.jsx
import { lazy, Suspense } from "react";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import { LanguageProvider } from "./context/LanguageContext";

const About = lazy(() => import("./components/About"));
const Transformations = lazy(() => import("./components/Transformations"));
const Services = lazy(() => import("./components/Services"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-[#050505] text-white">
        <ScrollProgress />
        <Navbar />
        <Hero />

        <Suspense fallback={null}>
          <About />
          <Transformations />
          <Services />
          <Testimonials />
          <Contact />
        </Suspense>

        <FloatingWhatsApp />
      </main>
    </LanguageProvider>
  );
}

export default App;