import React from 'react';
import { Clock, TrendingUp, Sliders } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export const ValueProps: React.FC = () => {
  const benefits = [
    {
      icon: <Clock size={32} />,
      title: "Gain de temps",
      description: "Fini les déplacements inutiles en agence. Réservez votre billet en moins de 2 minutes chrono depuis votre téléphone."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Transparence des prix",
      description: "Aucun frais caché. Comparez les offres de toutes les compagnies en temps réel et choisissez la meilleure."
    },
    {
      icon: <Sliders size={32} />,
      title: "Flexibilité Totale",
      description: "Bus, Bateau ou Train ? choisissez, enregistrez-vous, payez, recevez votre billet et votre réservation est prête."
    },

  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Fini le stress des files d'attente. <br />
              <span className="text-sky-500">Bonjour l'efficacité.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-slate-600 text-lg">
              Nous avons repensé l'expérience de réservation pour la rendre simple, sûre et accessible à tous les Gabonais.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, idx) => (
            <FadeIn key={idx} delay={idx * 150}>
              <div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-sky-500 shadow-sm mb-6 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};