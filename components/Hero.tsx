import React from 'react';
import { Search, ShieldCheck, CreditCard, Headphones } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export const Hero: React.FC = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Background Image / Abstract Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/gabonlandscape/1920/1080"
          alt="Gabon Landscape"
          className="w-full h-full object-cover opacity-50 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/40"></div>
        {/* Decorative Circles */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-white space-y-8">
          <FadeIn delay={100}>
            <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-1.5 backdrop-blur-sm">
              <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></span>
              <span className="text-sky-300 text-sm font-medium tracking-wide uppercase">Le futur du voyage au Gabon</span>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
              Le voyage, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">enfin simplifié.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="text-lg text-slate-300 max-w-lg leading-relaxed">
              Billets de Bus, de Train et d'Avion. Réservez, Payez, Voyagez. Tout est là.
              Fini les files d'attente, découvrez la liberté de réserver depuis votre canapé.
            </p>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://buytaplace.ga/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sky-500 hover:bg-sky-400 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-sky-500/25 hover:shadow-sky-500/50 hover:-translate-y-1 text-center"
              >
                Réserver mon voyage
              </a>
              <a
                href="https://drive.google.com/file/d/1wA5H7v-4J0YMg3GJrJGlVGwXM08XGoRH/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl font-bold text-lg text-white border border-slate-600 hover:bg-white/5 transition-all flex items-center justify-center gap-2"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-1"></div>
                </div>
                Voir comment ça marche
              </a>
            </div>
          </FadeIn>

          {/* Feature Bar */}
          <FadeIn delay={500}>
            <div className="pt-8 border-t border-slate-700/50 flex flex-wrap gap-8 text-sm text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-sky-400" size={18} />
                <span>Paiement 100% Sécurisé</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="text-sky-400" size={18} />
                <span>Mobile Money</span>
              </div>
              <div className="flex items-center gap-2">
                <Headphones className="text-sky-400" size={18} />
                <span>Support Client 24/7</span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Abstract App Visualization */}
        <FadeIn delay={300} direction="left" className="relative hidden lg:block">
          {/* Mockup Container */}
          <div className="relative w-full max-w-md mx-auto rounded-[2.5rem] shadow-2xl border-8 border-slate-800 overflow-hidden bg-slate-800">
            {/* Status Bar Mockup */}
            <div className="h-6 bg-slate-900 w-full flex items-center justify-end gap-1 px-4 py-1">
              <div className="w-3 h-3 bg-white/20 rounded-full"></div>
              <div className="w-3 h-3 bg-white/20 rounded-full"></div>
            </div>

            {/* App Header */}
            <div className="bg-sky-500 p-6 pb-8">
              <div className="flex justify-between items-center mb-6">
                <div className="text-white font-bold text-lg">Buytaplace</div>
                <div className="w-8 h-8 bg-white/20 rounded-full"></div>
              </div>
              <div className="space-y-3">
                <div className="h-10 bg-white/10 rounded-lg flex items-center px-3 text-white/60 text-sm border border-white/10">
                  <span className="mr-2">📍</span> Départ...
                </div>
                <div className="h-10 bg-white/10 rounded-lg flex items-center px-3 text-white/60 text-sm border border-white/10">
                  <span className="mr-2">🏳️</span> Destination...
                </div>
                <div className="h-12 bg-white text-sky-600 font-bold rounded-xl flex items-center justify-center shadow-lg mt-2">
                  Rechercher
                </div>
              </div>
            </div>

            {/* App Body - Results List */}
            <div className="bg-slate-50 min-h-[300px] p-4 space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center text-xl">🚌</div>
                  <div className="flex-1 space-y-2">
                    <div className="h-2 bg-slate-200 rounded w-20"></div>
                    <div className="h-2 bg-slate-100 rounded w-12"></div>
                  </div>
                  <div className="text-sky-500 font-bold text-sm">FCFA</div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Elements behind phone */}
          <div className="absolute -top-10 -right-10 bg-white p-4 rounded-2xl shadow-xl animate-bounce duration-[3000ms]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold">Statut</p>
                <p className="text-slate-800 font-bold">Confirmé</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-20 -left-12 bg-white p-4 rounded-2xl shadow-xl animate-bounce duration-[4000ms]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                <Search size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold">Recherche</p>
                <p className="text-slate-800 font-bold">Ultra rapide</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};