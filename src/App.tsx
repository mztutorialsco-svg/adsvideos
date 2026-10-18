import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import InstagramSection from "./components/InstagramSection";
import WhyChooseMe from "./components/WhyChooseMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen bg-[#09090b] text-[#fafafa] selection:bg-purple-500/20 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <InstagramSection />
        <WhyChooseMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
