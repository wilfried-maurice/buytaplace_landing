import React from 'react';
import { ArrowLeft, Search, CreditCard, Ticket, CheckCircle2, HelpCircle, UserCheck, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn } from './ui/FadeIn';

export const DocumentationPage: React.FC = () => {
    const steps = [
        {
            id: 1,
            title: "Recherchez votre trajet",
            description: "Entrez votre ville de départ et votre destination. Notre moteur intelligent compare instantanément les offres de bus, train et bateau.",
            icon: <Search className="w-8 h-8 text-sky-600" />,
            color: "bg-sky-100"
        },
        {
            id: 2,
            title: "Sélectionnez l'offre",
            description: "Choisissez l'horaire et le tarif qui vous conviennent le mieux parmi les résultats affichés. Filtrez par prix, durée ou compagnie.",
            icon: <CheckCircle2 className="w-8 h-8 text-blue-600" />,
            color: "bg-blue-100"
        },
        {
            id: 3,
            title: "Enregistrement des Passagers",
            description: "Remplissez le formulaire pour chaque passager. Ces informations sont obligatoires et doivent correspondre aux pièces d'identité.",
            details: [
                "Saisissez les Informations : Nom, Prénom, Téléphone, Email.",
                "Informations requises : Nom et Prénom (selon la pièce d'identité), Numéro de téléphone Mobile, Adresse E-mail.",
                "Vérifiez : Relisez attentivement toutes les informations saisies pour éviter tout problème à l'embarquement."
            ],
            icon: <UserCheck className="w-8 h-8 text-indigo-600" />,
            color: "bg-indigo-100"
        },
        {
            id: 4,
            title: "Payez en toute sécurité",
            description: "Réglez votre billet directement via Airtel Money ou Moov Money. La transaction est chiffrée et 100% sécurisée.",
            icon: <CreditCard className="w-8 h-8 text-violet-600" />,
            color: "bg-violet-100"
        },
        {
            id: 5,
            title: "Réception du Billet Électronique",
            description: "Votre billet est envoyé immédiatement par email.",
            details: [
                "Par E-mail : Envoyé à l'adresse fournie lors de l'enregistrement.",
                "Contenu du Billet : Nom du passager, détail du trajet, code-barres/référence.",
                "Préparation : Imprimez le billet (recommandé) ou enregistrez le PDF sur votre mobile."
            ],
            icon: <Ticket className="w-8 h-8 text-purple-600" />,
            color: "bg-purple-100"
        },
        {
            id: 6,
            title: "Jour du Voyage",
            description: "Préparez-vous pour le départ.",
            details: [
                "Rendez-vous à l'Agence : Au moins 30 minutes avant l'heure de convocation.",
                "Documents : Présentez votre pièce d'identité valide et votre billet électronique."
            ],
            icon: <MapPin className="w-8 h-8 text-rose-600" />,
            color: "bg-rose-100"
        }
    ];

    const faqs = [
        {
            q: "Est-ce que je dois imprimer mon billet ?",
            a: "Non, le billet électronique sur votre téléphone suffit pour l'embarquement."
        },
        {
            q: "Quels sont les frais supplémentaires ?",
            a: "les frais de service sont ajoutés au prix du billet dans les détails du billet avant le paiement."
        },
        {
            q: "Puis-je annuler ma réservation ?",
            a: "Oui, l'annulation est possible jusqu'à 24h avant le départ, selon les conditions de chaque agence."
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 text-slate-600 hover:text-sky-600 transition-colors font-medium group">
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Retour à l'accueil
                    </Link>
                    <div className="font-bold text-xl tracking-tight text-slate-900">
                        Buytaplace<span className="text-sky-500">.</span>
                    </div>
                </div>
            </header>

            <main>
                {/* Hero Section */}
                <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
                    <div className="absolute top-20 right-20 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"></div>

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <FadeIn>
                            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
                                <HelpCircle size={16} className="text-sky-400" />
                                <span className="text-sm font-medium text-sky-100">Guide d'utilisation</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                Comment ça <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">marche ?</span>
                            </h1>
                            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                                Réserver votre billet n'a jamais été aussi simple. Suivez ces étapes pour planifier votre prochain voyage au Gabon.
                            </p>
                        </FadeIn>
                    </div>
                </section>

                {/* Steps Section */}
                <section className="py-24">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                            {steps.map((step, index) => (
                                <FadeIn key={step.id} delay={index * 100}>
                                    <div className="flex gap-6 group h-full">
                                        <div className="flex-shrink-0 relative">
                                            <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                                                {step.icon}
                                            </div>
                                            {index !== steps.length - 1 && (
                                                <div className="absolute top-16 left-8 w-0.5 h-full bg-slate-200 -z-0 hidden md:block"></div>
                                            )}
                                        </div>
                                        <div className="pt-2 pb-8">
                                            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                                                <span className="text-slate-300 text-sm font-black uppercase tracking-widest">Étape 0{step.id}</span>
                                                {step.title}
                                            </h3>
                                            <p className="text-slate-600 leading-relaxed text-lg mb-4">
                                                {step.description}
                                            </p>
                                            {step.details && (
                                                <ul className="space-y-2">
                                                    {step.details.map((detail, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 shrink-0"></div>
                                                            <span>{detail}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-24 bg-white border-t border-slate-100">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Questions Fréquentes</h2>
                            <p className="text-slate-600">Tout ce que vous devez savoir avant de réserver.</p>
                        </div>

                        <div className="grid gap-6">
                            {faqs.map((faq, i) => (
                                <FadeIn key={i} delay={i * 100}>
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-sky-200 transition-colors">
                                        <h4 className="font-bold text-slate-900 mb-2 flex items-start gap-3">
                                            <HelpCircle size={20} className="text-sky-500 shrink-0 mt-0.5" />
                                            {faq.q}
                                        </h4>
                                        <p className="text-slate-600 ml-8">{faq.a}</p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-slate-900 text-white text-center">
                    <div className="container mx-auto px-6">
                        <FadeIn>
                            <h2 className="text-3xl md:text-4xl font-bold mb-8">Prêt à partir ?</h2>
                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-sky-500/25 hover:shadow-sky-500/50 hover:-translate-y-1"
                            >
                                Réserver mon billet maintenant
                            </Link>
                        </FadeIn>
                    </div>
                </section>
            </main>

            <footer className="bg-slate-950 py-12 text-center text-slate-500 text-sm border-t border-slate-900">
                <p>© 2024 Buytaplace. Tous droits réservés.</p>
            </footer>
        </div>
    );
};
