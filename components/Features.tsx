import React from 'react';
import { Search, Smartphone, Ticket, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';
import { Feature } from '../types';
import airtelLogo from '../assets/airtel_money.jpg';
import moovLogo from '../assets/moov_money.png';
import billetImg from '../assets/billet2.png';

export const Features: React.FC = () => {
  const features: Feature[] = [
    {
      id: 1,
      title: "Moteur de recherche intelligent",
      description: "Trouvez les correspondances bus, train et/ou bateau en une seule recherche. Notre algorithme scanne toutes les compagnies disponibles au Gabon pour vous offrir le meilleur itinéraire.",
      icon: <Search className="w-6 h-6" />,
      imagePosition: 'right',
      mockupType: 'search'
    },
    {
      id: 2,
      title: "Paiement mobile sécurisé",
      description: "Payez via Airtel Money ou Moov Money. Une transaction 100% sécurisée, sans espèces, avec une confirmation immédiate.",
      icon: <Smartphone className="w-6 h-6" />,
      imagePosition: 'left',
      mockupType: 'payment'
    },
    {
      id: 3,
      title: "Billet électronique instantané",
      description: "Votre billet est envoyé par email et SMS, prêt à être présenté. Plus besoin d'imprimer, votre téléphone est votre pass pour l'embarquement.",
      icon: <Ticket className="w-6 h-6" />,
      imagePosition: 'right',
      mockupType: 'ticket'
    }
  ];

  return (
    <section id="fonctionnalités" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Vos trajets en quelques clics</h2>
            <p className="text-slate-600 max-w-xl mx-auto">Un outil puissant conçu pour simplifier chaque étape de votre voyage en ligne.</p>
          </FadeIn>
        </div>

        <div className="space-y-24">
          {features.map((feature) => (
            <div key={feature.id} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${feature.imagePosition === 'left' ? 'lg:flex-row-reverse' : ''}`}>
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <FadeIn direction={feature.imagePosition === 'left' ? 'left' : 'right'}>
                  <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center text-sky-600 mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">{feature.title}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">{feature.description}</p>
                  <ul className="space-y-3 pt-4">
                    {['Disponible 24/7', 'Confirmation immédiate'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                        <CheckCircle2 size={20} className="text-sky-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {/* <button className="mt-8 flex items-center gap-2 text-sky-600 font-bold hover:gap-3 transition-all group">
                        En savoir plus <ArrowRight size={18} className="group-hover:text-sky-500" />
                    </button> */}
                </FadeIn>
              </div>

              {/* Visual Mockup Content */}
              <div className="flex-1 w-full flex justify-center">
                <FadeIn direction={feature.imagePosition === 'right' ? 'left' : 'right'} className="w-full max-w-lg">
                  {/* Abstract Representation of the Feature UI */}
                  <div className={`relative bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden aspect-[4/3] flex flex-col group hover:shadow-sky-500/10 transition-shadow duration-500`}>
                    {/* Header bar */}
                    <div className="h-4 bg-slate-100 w-full flex items-center gap-2 px-4">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>

                    {/* Internal UI Content based on type */}
                    <div className="p-8 flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-white relative">
                      {/* Decorative blurred blobs */}
                      <div className="absolute top-10 left-10 w-32 h-32 bg-sky-200 rounded-full blur-3xl opacity-30"></div>
                      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-30"></div>

                      {feature.mockupType === 'search' && (
                        <div className="w-full space-y-3 relative z-10">
                          {/* Route 1: Libreville - Tchibanga */}
                          <div className="bg-white p-3 rounded-xl shadow-lg border border-slate-100 flex items-center justify-between transform hover:scale-105 transition-transform duration-300 cursor-pointer group/card">
                            <div className="flex flex-col">
                              <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
                                <span>Libreville</span>
                                <ArrowRight size={14} className="text-sky-500" />
                                <span>Tchibanga</span>
                              </div>
                              <div className="text-xs text-slate-500 mt-1">Départ: 07:00 • Arriver: 17h:30</div>
                            </div>
                            <div className="bg-sky-50 text-sky-600 px-3 py-1.5 rounded-lg text-xs font-bold group-hover/card:bg-sky-500 group-hover/card:text-white transition-colors">
                              15 000 FCFA
                            </div>
                          </div>

                          {/* Route 2: Libreville - Mouila */}
                          <div className="bg-white p-3 rounded-xl shadow-md border border-slate-100 flex items-center justify-between transform hover:scale-105 transition-transform duration-300 cursor-pointer group/card opacity-90 hover:opacity-100">
                            <div className="flex flex-col">
                              <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
                                <span>Libreville</span>
                                <ArrowRight size={14} className="text-sky-500" />
                                <span>Mouila</span>
                              </div>
                              <div className="text-xs text-slate-500 mt-1">Départ: 06:30 • Arriver: 17h:00</div>
                            </div>
                            <div className="bg-sky-50 text-sky-600 px-3 py-1.5 rounded-lg text-xs font-bold group-hover/card:bg-sky-500 group-hover/card:text-white transition-colors">
                              12 000 FCFA
                            </div>
                          </div>

                          {/* Route 3: Libreville - Mayumba */}
                          <div className="bg-white p-3 rounded-xl shadow-md border border-slate-100 flex items-center justify-between transform hover:scale-105 transition-transform duration-300 cursor-pointer group/card opacity-80 hover:opacity-100">
                            <div className="flex flex-col">
                              <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
                                <span>Libreville</span>
                                <ArrowRight size={14} className="text-sky-500" />
                                <span>Mayumba</span>
                              </div>
                              <div className="text-xs text-slate-500 mt-1">Départ: 06:00 • Arriver: 18h:30</div>
                            </div>
                            <div className="bg-sky-50 text-sky-600 px-3 py-1.5 rounded-lg text-xs font-bold group-hover/card:bg-sky-500 group-hover/card:text-white transition-colors">
                              25 000 FCFA
                            </div>
                          </div>
                        </div>
                      )}

                      {feature.mockupType === 'payment' && (
                        <div className="relative w-48 h-full bg-slate-900 rounded-[2rem] p-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-slate-800">
                          <div className="h-full w-full bg-white rounded-[1.5rem] overflow-hidden flex flex-col items-center pt-6 px-3 relative">
                            {/* Status Bar */}
                            <div className="absolute top-3 w-16 h-1 bg-slate-100 rounded-full"></div>

                            <div className="mt-4 text-center w-full mb-6">
                              <div className="text-[10px] text-slate-400 font-medium mb-1">Méthode de paiement</div>
                              <div className="text-sm font-bold text-slate-800">Sélectionnez</div>
                            </div>

                            <div className="w-full space-y-3">
                              {/* Airtel Money */}
                              <div className="group/item flex items-center gap-3 p-2 rounded-xl border border-slate-100 bg-slate-50 hover:bg-red-50 hover:border-red-100 transition-all cursor-pointer">
                                <div className="w-8 h-8 rounded-full overflow-hidden bg-white shadow-sm shrink-0 p-0.5">
                                  <img src={airtelLogo} alt="Airtel Money" className="w-full h-full object-cover rounded-full" />
                                </div>
                                <div className="flex-1">
                                  <div className="text-[10px] font-bold text-slate-700 group-hover/item:text-red-600 transition-colors">Airtel Money</div>
                                </div>
                                <div className="w-2 h-2 rounded-full bg-slate-200 group-hover/item:bg-red-500 transition-colors"></div>
                              </div>

                              {/* Moov Money */}
                              <div className="group/item flex items-center gap-3 p-2 rounded-xl border border-slate-100 bg-slate-50 hover:bg-blue-50 hover:border-blue-100 transition-all cursor-pointer">
                                <div className="w-8 h-8 rounded-full overflow-hidden bg-white shadow-sm shrink-0 p-0.5">
                                  <img src={moovLogo} alt="Moov Money" className="w-full h-full object-cover rounded-full" />
                                </div>
                                <div className="flex-1">
                                  <div className="text-[10px] font-bold text-slate-700 group-hover/item:text-blue-600 transition-colors">Moov Money</div>
                                </div>
                                <div className="w-2 h-2 rounded-full bg-slate-200 group-hover/item:bg-blue-500 transition-colors"></div>
                              </div>
                            </div>

                            {/* Pay Button */}
                            <div className="mt-auto mb-4 w-full">
                              <div className="w-full py-2 bg-slate-900 text-white text-[10px] font-bold rounded-lg text-center shadow-lg shadow-slate-200">
                                Confirmer
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {feature.mockupType === 'ticket' && (
                        <div className="relative w-full max-w-sm mx-auto transform hover:scale-105 transition-transform duration-500">
                          <div className="absolute inset-0 bg-sky-500 blur-2xl opacity-20 rounded-full"></div>
                          <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
                            {/* Top decorative bar */}
                            <div className="h-2 bg-gradient-to-r from-sky-400 to-blue-500"></div>

                            {/* Image Container */}
                            <div className="p-1">
                              <div className="relative rounded-2xl overflow-hidden bg-slate-50 p-2">
                                <img
                                  src={billetImg}
                                  alt="Billet Électronique"
                                  className="w-full h-auto max-h-[400px] object-contain rounded-xl shadow-sm"
                                />
                              </div>
                            </div>

                            {/* Bottom details */}
                            <div className="px-6 py-4 bg-white">
                              <div className="flex items-center justify-between mb-2">
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Billet Confirmé</div>
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                              </div>
                              <div className="flex items-center gap-2 text-slate-700 text-sm font-medium">
                                <CheckCircle2 size={16} className="text-green-500" />
                                <span>Prêt à voyager</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};