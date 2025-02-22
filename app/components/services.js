"use client"; // Marque ce composant comme un composant client

import Link from 'next/link';
import Image from 'next/image';

export default function ServicesSection() {
  const services = [
    {
      icon: "/logo/contact.webp",
      name: "Contacts",
      title: "Gestion des Contacts",
      desc: "Centralisez et gérez vos contacts pour améliorer votre relation client.",
      link: "/services/Contact",
    },
    {
      icon: "/logo/product.png",
      name: "Produits",
      title: "Gestion des Stocks",
      desc: "Optimisez votre chaîne d'approvisionnement.",
      link: "/services/Product",
    },
    {
      icon: "/logo/project.png",
      name: "Projets",
      title: "Gestion des Tâches",
      desc: "Planifiez et suivez vos projets efficacement.",
      link: "/services/Project",
    },
    {
      icon: "/logo/vente.png",
      name: "Ventes & Achats",
      title: "Gestion Commerciale",
      desc: "Automatisez votre cycle de vente et d'achat.",
      link: "/services/Sale",
    },
    {
      icon: "/logo/compa.png",
      name: "Comptabilité",
      title: "Gestion Financière",
      desc: "Suivez et optimisez vos finances.",
      link: "/services/Accounting",
    }
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl mb-10">
          <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Nos Services
          </h2>
          <p className="text-gray-600 mt-2">
            Découvrez nos solutions pour transformer et optimiser votre entreprise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow group"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gray-100 p-3 mr-4">
                  <Image
                    src={service.icon}
                    alt={service.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {service.name}
                </h3>
              </div>
              <h4 className="text-gray-700 text-lg font-medium mb-2">
                {service.title}
              </h4>
              <p className="text-gray-600 mb-4">
                {service.desc}
              </p>
              <Link 
                href={service.link} 
                aria-label={`En savoir plus sur ${service.name}`}
                className="inline-flex items-center text-indigo-600 hover:text-indigo-500 font-medium"
              >
                En savoir plus
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 ml-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}