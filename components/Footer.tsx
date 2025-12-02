import React from 'react';
import { Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10">
            <div className="container mx-auto px-6">

                {/* Main Footer Content */}
                <div className="grid md:grid-cols-2 gap-12 mb-16 border-b border-slate-800 pb-16 justify-between">

                    {/* Brand Column */}
                    <div className="space-y-6 max-w-lg">
                        <div className="flex items-center gap-1">
                            <span className="text-2xl font-extrabold tracking-tight text-white">
                                Buy<span className="text-sky-500">ta</span>place
                            </span>
                        </div>
                        <p className="text-slate-400 leading-relaxed text-lg">
                            Plateforme officiel de réservation de billets de Bus, de Bateau et de Train au Gabon, simple, rapide et sécurisé.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/share/18oHFaLwCq/" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-sky-500 transition-colors">
                                <Facebook size={18} />
                            </a>
                            <a href="https://www.linkedin.com/in/buytaplace-officiel-8094a535a/" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-sky-500 transition-colors">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="md:text-right">
                        <h4 className="font-bold text-lg mb-6">Nous contacter</h4>
                        <ul className="space-y-4 text-slate-400 flex flex-col md:items-end">
                            <li className="flex items-center gap-3">
                                <span>Libreville, Gabon<br />Quartier Charbonnages</span>
                                <MapPin size={20} className="text-sky-500 shrink-0" />
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="flex flex-col">
                                    <span>+241 74 78 77 39</span>
                                    <span>+241 65 37 55 20</span>
                                </div>
                                <Phone size={20} className="text-sky-500 shrink-0" />
                            </li>
                            <li className="flex items-center gap-3">
                                <span>buytaplace@gmail.com</span>
                                <Mail size={20} className="text-sky-500 shrink-0" />
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 text-sm">© 2024 Buytaplace. Tous droits réservés.</p>

                    {/* Final CTA in Footer */}
                    <div className="bg-slate-800 rounded-2xl p-6 w-full md:w-auto flex flex-col md:flex-row items-center gap-6">
                        <div>
                            <p className="font-bold text-white">Prêt pour l'aventure ?</p>
                            <p className="text-slate-400 text-sm">Réservez votre prochain voyage maintenant.</p>
                        </div>
                        <a
                            href="https://buytaplace.ga/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-sky-500 hover:bg-sky-400 text-white px-6 py-2 rounded-xl font-bold transition-all shadow-lg shadow-sky-500/20 whitespace-nowrap"
                        >
                            Réserver
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};