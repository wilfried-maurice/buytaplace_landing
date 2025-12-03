import React, { useState } from 'react';
import { X, Building2, User, MapPin, Phone, CheckCircle2, Loader2, TrendingUp, Users, Globe } from 'lucide-react';
import logoImg from '../assets/logo_btp.png';

interface PartnerModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const PartnerModal: React.FC<PartnerModalProps> = ({ isOpen, onClose }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        agencyName: '',
        representativeName: '',
        location: '',
        phone: ''
    });

    if (!isOpen) return null;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Create JSON file and trigger download
        const dataStr = JSON.stringify(formData, null, 2);
        const blob = new Blob([dataStr], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `demande_partenaire_${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            // Reset form
            setFormData({
                agencyName: '',
                representativeName: '',
                location: '',
                phone: ''
            });
        }, 1500);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all animate-in zoom-in-95 slide-in-from-bottom-4 duration-500 flex flex-col md:flex-row max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-500 transition-colors z-20"
                >
                    <X size={20} />
                </button>

                {/* Left Section - Visual & Stats */}
                <div className="w-full md:w-2/5 bg-slate-900 text-white p-8 flex flex-col justify-between relative overflow-hidden">
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10 flex flex-col items-center text-center mt-8">
                        <div className="w-32 h-32 bg-white rounded-2xl p-4 mb-6 shadow-xl shadow-black/20 flex items-center justify-center">
                            <img src={logoImg} alt="Buytaplace Logo" className="w-full h-full object-contain" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Rejoignez le leader</h3>
                        <p className="text-slate-400 text-sm">Digitalisez vos ventes avec Buytaplace.</p>
                    </div>

                    <div className="relative z-10 space-y-6 mt-12">
                        <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                            <div className="w-10 h-10 bg-sky-500/20 rounded-lg flex items-center justify-center text-sky-400">
                                <TrendingUp size={20} />
                            </div>
                            <div>
                                <div className="text-xl font-bold">+3%</div>
                                <div className="text-xs text-slate-400">de chiffre d'affaires</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                            <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400">
                                <Users size={20} />
                            </div>
                            <div>
                                <div className="text-xl font-bold">+15</div>
                                <div className="text-xs text-slate-400">Voyageurs actifs</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400">
                                <Globe size={20} />
                            </div>
                            <div>
                                <div className="text-xl font-bold">National</div>
                                <div className="text-xs text-slate-400">Couverture complète</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section - Form */}
                <div className="w-full md:w-3/5 p-8 md:p-10 bg-white">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Devenir Partenaire</h2>
                        <p className="text-slate-600">Remplissez ce formulaire pour être contacté par notre équipe commerciale.</p>
                    </div>

                    {isSuccess ? (
                        <div className="h-full flex flex-col items-center justify-center text-center py-8 animate-in fade-in zoom-in duration-300">
                            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                <CheckCircle2 size={40} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Demande envoyée !</h3>
                            <p className="text-slate-600 mb-8 max-w-xs mx-auto">
                                Merci de votre intérêt. Un conseiller Buytaplace vous contactera sous 24h pour finaliser votre inscription.
                            </p>
                            <button
                                onClick={onClose}
                                className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20"
                            >
                                Fermer
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Nom de l'agence</label>
                                <div className="relative group">
                                    <Building2 className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-sky-500 transition-colors" size={20} />
                                    <input
                                        type="text"
                                        name="agencyName"
                                        value={formData.agencyName}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Ex: Transport Gabon Express"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-4 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all placeholder:text-slate-400"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Nom du représentant</label>
                                <div className="relative group">
                                    <User className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-sky-500 transition-colors" size={20} />
                                    <input
                                        type="text"
                                        name="representativeName"
                                        value={formData.representativeName}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Ex: Jean Michel"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-4 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all placeholder:text-slate-400"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-5">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Lieu</label>
                                    <div className="relative group">
                                        <MapPin className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-sky-500 transition-colors" size={20} />
                                        <input
                                            type="text"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="Ex: Libreville"
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-4 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all placeholder:text-slate-400"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Téléphone</label>
                                    <div className="relative group">
                                        <Phone className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-sky-500 transition-colors" size={20} />
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="074 00 00 00"
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-4 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all placeholder:text-slate-400"
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-sky-500 hover:bg-sky-400 text-white font-bold py-4 rounded-xl shadow-lg shadow-sky-500/25 hover:shadow-sky-500/50 transition-all mt-6 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-0.5 active:translate-y-0"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="animate-spin" size={20} />
                                        Traitement...
                                    </>
                                ) : (
                                    "Envoyer ma demande"
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};
