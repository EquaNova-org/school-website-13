import { LanguageProvider } from './context/LanguageContext';
import Header from './sections/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Achievements from './sections/Achievements';
import PathForward from './sections/PathForward';
import Values from './sections/Values';
import Gallery from './sections/Gallery';
import ContactFooter from './sections/ContactFooter';

export default function App() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <Achievements />
        <PathForward />
        <Values />
        <Gallery />
      </main>
      <ContactFooter />
    </LanguageProvider>
  );
}
