"use client";

import { useState } from 'react';
import { Check, X, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const pricingPlans = [
  {
    name: "Starter",
    price: 19.99,
    description: "Idéal pour les petites entreprises et entrepreneurs individuels",
    features: [
      "Création de 5 devis par mois",
      "Gestion de base des clients",
      "Support par email",
      "Modèles de devis personnalisables",
      "Exportation en PDF"
    ],
    unavailableFeatures: [
      "Facturation avancée",
      "Intégration bancaire",
      "Rapports détaillés",
      "Support prioritaire"
    ],
    recommended: false
  },
  {
    name: "Pro",
    price: 49.99,
    description: "Pour les entreprises en croissance avec des besoins plus avancés",
    features: [
      "Création illimitée de devis",
      "Gestion avancée des clients",
      "Support par email et chat",
      "Modèles de devis personnalisables",
      "Exportation en PDF",
      "Facturation avancée",
      "Intégration bancaire de base"
    ],
    unavailableFeatures: [
      "Comptabilité complète",
      "Support téléphonique",
      "Rapports personnalisés"
    ],
    recommended: true
  },
  {
    name: "Entreprise",
    price: 99.99,
    description: "Solution complète pour les grandes entreprises et organisations",
    features: [
      "Création illimitée de devis",
      "Gestion avancée des clients",
      "Support prioritaire (email, chat, téléphone)",
      "Modèles de devis personnalisables",
      "Exportation en PDF",
      "Facturation avancée",
      "Intégration bancaire complète",
      "Comptabilité intégrée",
      "Rapports personnalisés et détaillés",
      "Tableau de bord analytique"
    ],
    unavailableFeatures: [],
    recommended: false
  }
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const calculatePrice = (basePrice) => {
    return billingCycle === 'monthly' 
      ? basePrice 
      : basePrice * 10 * 0.8; // Réduction de 20% pour l'abonnement annuel
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 py-12 px-4">
      <div className="container mx-auto">
        {/* Flèche de retour à la page principale */}
        <div className="mb-8">
          <Link href="/" className="text-white hover:text-gray-300 transition-colors duration-300 flex items-center">
            <ArrowLeft size={24} className="mr-2" />
           
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nos Tarifs
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Trouvez le plan qui correspond parfaitement aux besoins de votre entreprise
          </p>
        </div>

        {/* Toggle de cycle de facturation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 rounded-full p-1 flex items-center space-x-2">
            <button 
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                billingCycle === 'monthly' 
                  ? 'bg-white text-gray-900' 
                  : 'text-white hover:bg-white/20'
              }`}
            >
              Mensuel
            </button>
            <button 
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                billingCycle === 'yearly' 
                  ? 'bg-white text-gray-900' 
                  : 'text-white hover:bg-white/20'
              }`}
            >
              Annuel
              <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Cartes de tarification */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={plan.name} 
              className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                plan.recommended 
                  ? 'border-2 border-blue-500 ring-4 ring-blue-300/50' 
                  : 'border border-white/20'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                  Le plus populaire
                </div>
              )}
              <h2 className="text-2xl font-bold text-white mb-4">{plan.name}</h2>
              <p className="text-gray-300 mb-6">{plan.description}</p>
              
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-extrabold text-white">
                  {calculatePrice(plan.price).toFixed(2)} €
                </span>
                <span className="text-gray-400 ml-2">
                  / {billingCycle === 'monthly' ? 'mois' : 'an'}
                </span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-white">
                    <Check className="text-green-500 mr-2" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
                
                {plan.unavailableFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-500">
                    <X className="text-red-500 mr-2" size={20} />
                    <span className="line-through">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full transition-colors duration-300">
                Choisir {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}