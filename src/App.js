import React from 'react';
import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Gallery from './components/Gallery';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import AIGreetingOrb from './components/AIGreetingOrb';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="App">
          <Navbar />
          <Hero />
          <Story />
          <Gallery />
          <Dashboard />
          <Footer />
          <AIGreetingOrb />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;