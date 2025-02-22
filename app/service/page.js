"use client";

import { useState } from 'react';
import { 
  FileText, 
  Calculator, 
  BarChart2, 
  Users, 
  Clock, 
  Shield, 
  X,
  Check,
  ArrowLeft // Import de l'icône ArrowLeft
} from 'lucide-react';
import Link from 'next/link'; // Import de Link pour la navigation

const services = [
  {
    icon: FileText,
    title: "Génération de Devis Professionnels",
    description: "Transformez la création de devis en un processus simple, rapide et professionnel. Notre solution vous permet de générer des documents sur mesure qui reflètent l'excellence de votre entreprise.",
    longDescription: "La génération de devis est souvent un processus chronophage et complexe. Notre plateforme révolutionne cette étape en proposant une expérience utilisateur intuitive et personnalisable. Conçue pour les entrepreneurs, artisans, freelances et petites entreprises, notre solution simplifie la création de documents professionnels.",
    keyBenefits: [
      "Économisez jusqu'à 3 heures par semaine en automatisant la création de devis",
      "Personnalisez entièrement vos documents avec votre charte graphique",
      "Suivez en temps réel l'état de vos devis"
    ],
    details: [
      "Modèles personnalisables",
      "Génération rapide de documents",
      "Sauvegarde et historique des devis",
      "Exportation en PDF",
      "Suivi des devis envoyés",
      "Authentification des documents",
      "Calculs automatiques"
    ]
  },
  {
    icon: Calculator,
    title: "Facturation Automatisée",
    description: "Rationalisez votre processus de facturation avec notre système intelligent qui transforme la gestion financière en une tâche simple et efficace.",
    longDescription: "La facturation peut être un cauchemar administratif pour de nombreuses entreprises. Notre solution automatisée élimine les tâches répétitives, réduit les erreurs manuelles et vous permet de vous concentrer sur le développement de votre activité. Un système conçu pour optimiser votre flux de trésorerie et professionnaliser votre gestion financière.",
    keyBenefits: [
      "Réduisez vos délais de paiement de 40%",
      "Générez des factures en moins de 2 minutes",
      "Améliorez votre suivi financier"
    ],
    details: [
      "Création de factures en un clic",
      "Suivi des paiements",
      "Relances automatiques",
      "Intégration bancaire",
      "Gestion des échéances",
      "Génération de reçus",
      "Compatibilité comptable"
    ]
  },
  {
    icon: BarChart2,
    title: "Rapports et Analytics",
    description: "Transformez vos données brutes en insights stratégiques grâce à nos outils d'analyse puissants et intuitifs.",
    longDescription: "La data est le carburant de toute entreprise moderne. Nos rapports et outils analytiques vous offrent une vision 360° de votre activité. Comprenez vos performances, anticipez les tendances et prenez des décisions éclairées en quelques clics.",
    keyBenefits: [
      "Visualisez vos performances en temps réel",
      "Détectez rapidement les opportunités de croissance",
      "Prenez des décisions stratégiques basées sur des données"
    ],
    details: [
      "Tableaux de bord personnalisables",
      "Analyse des revenus",
      "Suivi des performances",
      "Prévisions financières",
      "Exports de données",
      "Comparaisons historiques",
      "Alertes et notifications"
    ]
  },
  {
    icon: Users,
    title: "Gestion de Clients",
    description: "Centralisez et optimisez vos relations clients avec un outil complet de gestion et de communication.",
    longDescription: "Chaque client est unique et mérite une attention personnalisée. Notre système de gestion client vous permet de créer des relations durables, de comprendre les besoins individuels et de personnaliser votre approche. Un CRM intelligent qui devient votre allié dans la satisfaction client.",
    keyBenefits: [
      "Augmentez votre taux de fidélisation de 30%",
      "Réduisez le temps de traitement des demandes",
      "Personnalisez l'expérience client"
    ],
    details: [
      "Annuaire client complet",
      "Historique des interactions",
      "Segmentation des clients",
      "Notes et étiquettes",
      "Communication centralisée",
      "Suivi des projets",
      "Alertes de relance"
    ]
  },
  {
    icon: Clock,
    title: "Gestion du Temps et Projets",
    description: "Optimisez votre productivité et maîtrisez la gestion de vos projets grâce à des outils de suivi précis et intuitifs.",
    longDescription: "Le temps est votre ressource la plus précieuse. Notre système de gestion de temps et de projets vous permet de planifier, suivre et optimiser chaque minute. Maximisez l'efficacité de votre équipe, facturez précisément et gardez une vue d'ensemble de vos projets.",
    keyBenefits: [
      "Augmentez votre productivité de 25%",
      "Réduisez les dépassements de budget",
      "Améliorez la communication d'équipe"
    ],
    details: [
      "Suivi du temps par projet",
      "Création de tâches",
      "Planification des ressources",
      "Rapports de temps détaillés",
      "Intégration des devis/factures",
      "Collaboration en temps réel",
      "Gestion des échéances"
    ]
  },
  {
    icon: Shield,
    title: "Sécurité et Conformité",
    description: "Protégez vos données sensibles et respectez les réglementations avec nos fonctionnalités de sécurité avancées.",
    longDescription: "Dans un monde numérique en constante évolution, la sécurité des données est cruciale. Notre système offre plusieurs couches de protection pour garantir la confidentialité, l'intégrité et la disponibilité de vos informations stratégiques. Conformité RGPD, chiffrement avancé et surveillance continue.",
    keyBenefits: [
      "Sécurisez 100% de vos données sensibles",
      "Restez conforme aux réglementations",
      "Gagnez la confiance de vos clients"
    ],
    details: [
      "Chiffrement des données",
      "Authentification à deux facteurs",
      "Conformité RGPD",
      "Sauvegardes automatiques",
      "Audit de sécurité régulier",
      "Gestion des accès",
      "Journaux de sécurité détaillés"
    ]
  }
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div 
      className="min-h-screen py-12 px-4 relative overflow-hidden"
      style={{
        background: "linear-gradient(106.89deg, rgb(48, 2, 49) 15.73%, rgb(82, 4, 66) 15.74%, rgb(4, 4, 45) 56.49%, rgb(12, 12, 128) 115.91%)"
      }}
    >
      {/* Flèche de retour à la page principale */}
      <div className="mb-8">
        <Link href="/" className="text-white hover:text-gray-300 transition-colors duration-300 flex items-center">
          <ArrowLeft size={24} className="mr-2" />
        
        </Link>
      </div>

      {/* Effets de particules */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, index) => (
          <div 
            key={index} 
            className={`absolute bg-white/10 rounded-full mix-blend-overlay animate-blob 
              ${index % 2 === 0 ? 'animate-delay-500' : 'animate-delay-1000'}
              ${index === 0 ? 'top-0 right-0 w-64 h-64' : 
                index === 1 ? 'bottom-0 left-0 w-72 h-72' : 
                index === 2 ? 'top-1/3 left-1/4 w-48 h-48' : 
                index === 3 ? 'bottom-1/4 right-1/3 w-56 h-56' : 
                'top-1/2 right-1/2 w-40 h-40'}`}
          ></div>
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nos Services
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Des solutions complètes et intelligentes pour transformer la gestion de votre entreprise
          </p>
        </div>

        {/* Grille des services */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              onClick={() => setSelectedService(service)}
              className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              <div className="flex items-center mb-4">
                <service.icon 
                  className="text-white/80 group-hover:text-white transition-colors duration-300" 
                  size={40} 
                />
                <h2 className="text-xl font-bold text-white ml-4">
                  {service.title}
                </h2>
              </div>
              <p className="text-white/70 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Modal de détails de service */}
        {selectedService && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white/20 backdrop-blur-2xl rounded-2xl max-w-4xl w-full p-8 relative my-8">
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="flex items-center mb-6">
                <selectedService.icon 
                  className="text-white/80" 
                  size={40} 
                />
                <h2 className="text-3xl font-bold text-white ml-4">
                  {selectedService.title}
                </h2>
              </div>

              <p className="text-white/80 mb-6 text-lg">
                {selectedService.longDescription}
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-4">Principaux avantages</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {selectedService.keyBenefits.map((benefit, idx) => (
                    <div 
                      key={idx} 
                      className="bg-white/10 rounded-lg p-4 text-white/80"
                    >
                      <p>{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Fonctionnalités Détaillées</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedService.details.map((detail, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center text-white/80 space-x-2"
                    >
                      <Check className="text-green-500" size={20} />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}