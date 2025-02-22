"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isClient, setIsClient] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Empêcher le défilement du body quand le menu est ouvert
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navigation = [
    { title: "Accueil", path: "/" },
    { title: "Tarif", path: "/tarif" },
    { title: "Service", path: "/service" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 overflow-hidden">
      {/* Animated Background */}
      {isClient && (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50 opacity-75 animate-gradient-shift"></div>
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(5)].map((_, index) => (
              <div 
                key={index} 
                className={`absolute bg-blue-600 rounded-full mix-blend-screen opacity-10 animate-blob 
                  ${index % 2 === 0 ? 'animate-delay-500' : 'animate-delay-1000'}
                  ${index === 0 ? 'top-0 right-0 w-64 h-64' : 
                    index === 1 ? 'bottom-0 left-0 w-72 h-72' : 
                    index === 2 ? 'top-1/3 left-1/4 w-48 h-48' : 
                    index === 3 ? 'bottom-1/4 right-1/3 w-56 h-56' : 
                    'top-1/2 right-1/2 w-40 h-40'}`}
              ></div>
            ))}
          </div>
        </>
      )}

      <header className="relative container mx-auto px-4 py-6 z-20">
        <nav className="flex items-center justify-between">
          <Link 
            href="/" 
            className="flex-shrink-0 transform transition-all duration-300 hover:scale-105 hover:rotate-3"
          >
            <Image
              src="/logo/bh&abmanager.png"
              alt="Logo"
              width={96}
              height={96}
              className="h-24 object-contain shadow-lg rounded-lg hover:animate-pulse"
            />
          </Link>
          
          {/* Bouton hamburger amélioré */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden z-50 relative w-10 h-10 flex items-center justify-center"
            aria-label="Menu"
          >
            <div className="relative flex overflow-hidden items-center justify-center w-8 h-8">
              <div className={`transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              } absolute w-8 h-0.5 bg-white rounded-lg transform transition-transform duration-300`}></div>
              <div className={`transform transition-all duration-200 ease-in-out ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              } absolute w-8 h-0.5 bg-white rounded-lg`}></div>
              <div className={`transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              } absolute w-8 h-0.5 bg-white rounded-lg transform transition-transform duration-300`}></div>
            </div>
          </button>

          {/* Menu mobile amélioré */}
          <div className={`md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}>
            <div className={`fixed inset-y-0 right-0 w-full max-w-sm bg-gradient-to-b from-indigo-900 to-blue-900 transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
              <div className="flex flex-col h-full pt-24 pb-6 px-6">
                <ul className="space-y-6 mb-8">
                  {navigation.map((item, idx) => (
                    <li key={idx} className="transform transition-all duration-300">
                      <Link 
                        href={item.path} 
                        className="text-2xl font-medium text-white hover:text-blue-300 transition-colors block"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto space-y-6">
                  <Link 
                    href="/login" 
                    className="block text-xl text-white hover:text-blue-300 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Connexion
                  </Link>
                  
                  <Link 
                    href="/register" 
                    className="flex items-center justify-center space-x-2 bg-white text-gray-900 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>Inscription</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      className="h-5 w-5"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M12 14c4.418 0 8 1.79 8 4v2H4v-2c0-2.21 3.582-4 8-4zm0-10a4 4 0 110 8 4 4 0 010-8z" 
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Menu desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex flex-row items-center space-x-8">
              {navigation.map((item, idx) => (
                <li key={idx} className="transform transition-transform hover:-translate-y-1 hover:scale-105">
                  <Link 
                    href={item.path} 
                    className="text-gray-200 hover:text-white transition-all duration-300 hover:tracking-wider"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center space-x-4">
              <Link 
                href="/login" 
                className="text-gray-200 hover:text-white transition-colors duration-300 hover:tracking-wider transform hover:scale-105"
              >
                Connexion
              </Link>
              
              <Link 
                href="/register" 
                className="flex items-center space-x-2 text-white bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:animate-bounce"
              >
                <span>Inscription</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  className="h-5 w-5"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 14c4.418 0 8 1.79 8 4v2H4v-2c0-2.21 3.582-4 8-4zm0-10a4 4 0 110 8 4 4 0 010-8z" 
                  />
                </svg>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Rest of the component remains the same */}
      <section className="relative container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center z-10">
        <div className="space-y-6 text-center md:text-left animate-fade-in-up">
          <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
            Créez et gérez votre entreprise,
            <span className="block text-blue-300 mt-2 animate-pulse">
              Devis professionnels en quelques clics
            </span>
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto md:mx-0 text-lg">
            Solution intuitive pour simplifier votre gestion d&apos;entreprise et générer des devis professionnels.
          </p>
          <div className="pt-6">
            <Link 
              href="#" 
              className="inline-block px-10 py-3.5 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:animate-wiggle"
            >
              Commencer
            </Link>
          </div>
        </div>
        <div className="hidden md:block">
          <Image 
            src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png" 
            alt="Illustration" 
            width={500}
            height={300}
            className="w-full mx-auto transform transition-transform hover:scale-105 animate-float" 
          />
        </div>
      </section>
    </div>
  );
}