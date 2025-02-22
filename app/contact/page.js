'use client';

import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, ArrowLeft } from 'lucide-react';

export default function ContactSection() {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      contact: "Support@Bh&Abmanager.com",
      description: "Notre équipe vous répondra sous 24-48h"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      contact: "+212 (681) 920-0786",
      description: "Lun-Ven de 9h à 18h"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Adresse",
      contact: "Pays-ville, Fês, Maroc",
      description: "Venez nous rencontrer"
    },
  ];

  const [phonePlaceholder, setPhonePlaceholder] = useState('+1 (555) 000-000');

  const handleCountryChange = (e) => {
    const country = e.target.value;
    switch (country) {
      case 'US':
        setPhonePlaceholder('+1 (555) 000-000');
        break;
      case 'MA':
        setPhonePlaceholder('+212 (600) 000-000');
        break;
      case 'FR':
        setPhonePlaceholder('+33 (6) 00 00 00 00');
        break;
      default:
        setPhonePlaceholder('+1 (555) 000-000');
    }
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950">
      {/* Bouton Retour */}
      <a 
        href="/"
        className="absolute top-6 left-6 flex items-center gap-2 text-white hover:text-blue-400 transition-colors duration-200 z-20 group"
      >
        <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-200" />
      </a>

      <div className="relative z-10 max-w-screen-xl mx-auto text-gray-600 px-4 md:px-8">
        <div className="max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
          <h3 className="text-blue-400 font-semibold tracking-wider uppercase">
            Contact
          </h3>
          <p className="text-white text-4xl font-bold sm:text-5xl">
            Prenons contact
          </p>
          <p className="text-gray-400 text-lg">
            Notre équipe est là pour vous aider et répondre à toutes vos questions.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contactMethods.map((item, idx) => (
            <div key={idx} className="relative flex flex-col items-center p-8 rounded-xl bg-gray-900/50 border border-gray-800 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300">
              <div className="p-3 rounded-full bg-blue-500/10 text-blue-400">
                {item.icon}
              </div>
              <h4 className="mt-4 text-lg font-semibold text-white">{item.title}</h4>
              <p className="mt-2 text-blue-400">{item.contact}</p>
              <p className="mt-2 text-sm text-gray-400 text-center">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 mx-auto p-8 bg-gray-900/50 border border-gray-800 backdrop-blur-sm sm:max-w-lg rounded-xl">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="font-medium text-white">
                  Nom
                </label>
                <input
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-2 text-white bg-gray-950/50 outline-none border border-gray-800 focus:border-blue-500 rounded-lg transition-colors duration-200"
                />
              </div>
              <div>
                <label className="font-medium text-white">
                  Prénom
                </label>
                <input
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-2 text-white bg-gray-950/50 outline-none border border-gray-800 focus:border-blue-500 rounded-lg transition-colors duration-200"
                />
              </div>
            </div>
            <div>
              <label className="font-medium text-white">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-white bg-gray-950/50 outline-none border border-gray-800 focus:border-blue-500 rounded-lg transition-colors duration-200"
              />
            </div>
            <div>
              <label className="font-medium text-white">
                Téléphone
              </label>
              <div className="relative mt-2">
                <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r border-gray-800 pr-2">
                  <select onChange={handleCountryChange} className="text-sm bg-transparent outline-none rounded-lg h-full text-white">
                    <option value="US" className="text-gray-900">US</option>
                    <option value="MA" className="text-gray-900">MA</option>
                    <option value="FR" className="text-gray-900">FR</option>
                  </select>
                </div>
                <input
                  type="text"
                  placeholder={phonePlaceholder}
                  required
                  className="w-full pl-[4.5rem] pr-3 py-2 text-white bg-gray-950/50 outline-none border border-gray-800 focus:border-blue-500 rounded-lg transition-colors duration-200"
                />
              </div>
            </div>
            <div>
              <label className="font-medium text-white">
                Message
              </label>
              <textarea 
                required 
                className="w-full mt-2 h-36 px-3 py-2 resize-none text-white bg-gray-950/50 outline-none border border-gray-800 focus:border-blue-500 rounded-lg transition-colors duration-200"
              ></textarea>
            </div>
            <button
              className="w-full px-4 py-3 text-white font-medium bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 active:from-blue-800 active:to-blue-950 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
            >
              Envoyer
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
      <div className='absolute inset-0 blur-[118px] max-w-lg h-full w-full mx-auto sm:max-w-3xl sm:h-full' style={{ 
        background: "linear-gradient(106.89deg, rgba(59, 130, 246, 0.1) 15.73%, rgba(14, 165, 233, 0.15) 15.74%, rgba(30, 64, 175, 0.1) 56.49%, rgba(17, 24, 39, 0.2) 115.91%)" 
      }}></div>
    </main>
  );
}