import React from 'react';
import { Search, Smartphone, Ticket, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';
import { Feature } from '../types';

export const Features: React.FC = () => {
  const features: Feature[] = [
    {
      id: 1,
      title: "Moteur de Recherche Intelligent",
      description: "Trouvez les correspondances bus et avion en une seule recherche. Notre algorithme scanne toutes les compagnies disponibles au Gabon pour vous offrir le meilleur itinéraire.",
      icon: <Search className="w-6 h-6" />,
      imagePosition: 'right',
      mockupType: 'search'
    },
    {
      id: 2,
      title: "Paiement Mobile Sécurisé",
      description: "Payez via Airtel Money, Moov Money ou carte bancaire. Une transaction 100% sécurisée, sans espèces, avec une confirmation immédiate.",
      icon: <Smartphone className="w-6 h-6" />,
      imagePosition: 'left',
      mockupType: 'payment'
    },
    {
      id: 3,
      title: "Billet Électronique Instantané",
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
              <p className="text-slate-600 max-w-xl mx-auto">Une suite d'outils puissants conçus pour simplifier chaque étape de votre voyage.</p>
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
                        {['Disponible 24/7', 'Confirmation immédiate', 'Support dédié'].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                <CheckCircle2 size={20} className="text-sky-500" />
                                {item}
                            </li>
                        ))}
                    </ul>
                    <button className="mt-8 flex items-center gap-2 text-sky-600 font-bold hover:gap-3 transition-all group">
                        En savoir plus <ArrowRight size={18} className="group-hover:text-sky-500" />
                    </button>
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
                                 <div className="w-full space-y-4 relative z-10">
                                     <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center justify-between animate-pulse">
                                         <div className="h-4 bg-slate-200 rounded w-1/3"></div>
                                         <div className="h-8 w-8 bg-sky-100 rounded-full"></div>
                                         <div className="h-4 bg-slate-200 rounded w-1/3"></div>
                                     </div>
                                     <div className="bg-white p-4 rounded-xl shadow-md border border-slate-100 opacity-60 scale-95">
                                         <div className="h-4 bg-slate-200 rounded w-2/3 mb-2"></div>
                                         <div className="h-3 bg-slate-100 rounded w-1/4"></div>
                                     </div>
                                     <div className="bg-white p-4 rounded-xl shadow-md border border-slate-100 opacity-40 scale-90">
                                         <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                                     </div>
                                 </div>
                             )}

                             {feature.mockupType === 'payment' && (
                                 <div className="relative w-48 h-full bg-slate-800 rounded-[2rem] p-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                     <div className="h-full w-full bg-white rounded-[1.5rem] overflow-hidden flex flex-col items-center pt-8 px-4">
                                         <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white mb-4">
                                             <CheckCircle2 />
                                         </div>
                                         <div className="h-3 bg-slate-200 rounded w-2/3 mb-2"></div>
                                         <div className="h-6 bg-slate-800 rounded w-1/2 mb-8"></div>
                                         <div className="w-full bg-slate-100 h-24 rounded-xl mb-2"></div>
                                     </div>
                                 </div>
                             )}

                             {feature.mockupType === 'ticket' && (
                                 <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-slate-200 relative overflow-hidden flex">
                                     <div className="flex-1 p-6 border-r border-dashed border-slate-300 relative">
                                         <div className="absolute -top-3 -right-3 w-6 h-6 bg-slate-50 rounded-full"></div>
                                         <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-slate-50 rounded-full"></div>
                                         <div className="space-y-3">
                                             <div className="h-4 bg-slate-800 w-24 rounded"></div>
                                             <div className="flex justify-between">
                                                 <div className="h-8 w-12 bg-slate-200 rounded"></div>
                                                 <div className="h-8 w-12 bg-slate-200 rounded"></div>
                                             </div>
                                             <div className="h-3 bg-slate-300 w-32 rounded"></div>
                                         </div>
                                     </div>
                                     <div className="w-24 bg-slate-50 flex items-center justify-center p-2">
                                         <div className="h-16 w-16 bg-slate-800 rounded-lg opacity-80"></div>
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