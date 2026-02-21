import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Showreel from './components/Showreel';
import Gallery from './components/Gallery';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WelcomePopup from './components/WelcomePopup';

function App() {
  return (
    <div className="app-container">
      <WelcomePopup />
      <Navbar />
      <Hero />
      <Expertise />
      <Showreel />
      <Gallery />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
