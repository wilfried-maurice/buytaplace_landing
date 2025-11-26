import React from 'react';
import { Star, Quote } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export const SocialProof: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Voyageuse fréquente",
      quote: "Buytaplace a changé ma façon de voyager entre Libreville et Mouila. En 5 minutes, mon billet de bus était dans ma boîte mail.",
      image: "https://picsum.photos/seed/sarah/100/100"
    },
    {
      name: "Jean-Pierre K.",
      role: "Entrepreneur",
      quote: "Une interface fluide et un service client réactif. J'apprécie particulièrement la possibilité de payer par Airtel Money.",
      image: "https://picsum.photos/seed/jean/100/100"
    },
    {
      name: "Marc O.",
      role: "Étudiant",
      quote: "Plus besoin de courir à la gare du PK8 à 5h du matin pour espérer avoir une place. C'est une révolution.",
      image: "https://picsum.photos/seed/marc/100/100"
    }
  ];

  return (
    <section id="partenaires" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Testimonials */}
        <div className="mb-24">
           <div className="text-center mb-16">
             <FadeIn>
               <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Ils voyagent avec nous</h2>
               <p className="text-slate-600">Découvrez les retours de nos utilisateurs satisfaits.</p>
             </FadeIn>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
             {testimonials.map((t, i) => (
               <FadeIn key={i} delay={i * 100} className="h-full">
                 <div className="bg-slate-50 p-8 rounded-3xl h-full flex flex-col relative group hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100">
                    <Quote className="absolute top-8 right-8 text-sky-200 w-10 h-10 group-hover:text-sky-500 transition-colors" />
                    <div className="flex gap-1 text-yellow-400 mb-6">
                        {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
                    </div>
                    <p className="text-slate-700 italic mb-8 flex-1 leading-relaxed">"{t.quote}"</p>
                    <div className="flex items-center gap-4 mt-auto">
                        <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md" />
                        <div>
                            <p className="font-bold text-slate-900">{t.name}</p>
                            <p className="text-xs text-slate-500 uppercase tracking-wide">{t.role}</p>
                        </div>
                    </div>
                 </div>
               </FadeIn>
             ))}
           </div>
        </div>

        {/* Partners / Companies */}
        <FadeIn direction="up" delay={200}>
            <div className="border-t border-slate-100 pt-16">
                <p className="text-center text-slate-400 font-medium mb-8 uppercase tracking-widest text-sm">Nos partenaires</p>
                <div className="flex flex-wrap justify-center gap-12 lg:gap-20 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {['BI-TECH', 'Ogooue Labs'].map((company, i) => (
                        <div key={i} className="text-xl lg:text-2xl font-black text-slate-800 flex items-center gap-2">
                             <div className="w-8 h-8 bg-slate-800 rounded-md"></div>
                             {company}
                        </div>
                    ))}
                </div>
            </div>
        </FadeIn>

      </div>
    </section>
  );
};