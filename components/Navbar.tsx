import React, { useState, useEffect } from 'react';
import { Menu, X, Plane, Bus } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Representation based on description */}
        <a href="#" className="flex items-center gap-1 group">
          <div className="relative">
             <span className={`text-2xl font-extrabold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900 lg:text-white'} group-hover:opacity-90 transition-colors`}>
               Buy<span className="text-sky-500">ta</span>place
             </span>
             {/* Abstract droplet accent */}
             <div className="absolute -top-1 left-[3.1rem] w-2 h-2 bg-sky-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-ping"></div>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="https://buytaplace.ga/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <span>Réserver</span>
            <div className="flex gap-1 text-xs opacity-80">
                <Bus size={12} />
                <Plane size={12} />
            </div>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className={isScrolled ? 'text-slate-900' : 'text-white'} /> : <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl py-4 px-6 flex flex-col space-y-4">
          <a 
            href="https://buytaplace.ga/" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-500 text-white w-full py-3 rounded-xl font-bold text-center"
          >
            Réserver maintenant
          </a>
        </div>
      )}
    </nav>
  );
};