import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueProps } from './components/ValueProps';
import { Features } from './components/Features';
import { SocialProof } from './components/SocialProof';
import { Footer } from './components/Footer';
import { DocumentationPage } from './components/DocumentationPage';

const LandingPage: React.FC = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <ValueProps />
      <Features />
      <SocialProof />
    </main>
    <Footer />
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-sky-500 selection:text-white">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/comment-ca-marche" element={<DocumentationPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;