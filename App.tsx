import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueProps } from './components/ValueProps';
import { Features } from './components/Features';
import { SocialProof } from './components/SocialProof';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-sky-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <Features />
        <SocialProof />
      </main>
      <Footer />
    </div>
  );
};

export default App;