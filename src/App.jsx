import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;