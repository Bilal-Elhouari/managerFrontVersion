"use client";

import { useState } from 'react';

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Les mots de passe ne correspondent pas.");
            return;
        }
        console.log('Form submitted');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-100 flex items-center justify-center px-4 py-8">
            <div className="w-full max-w-md">
                <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
                    <div className="p-6 text-center bg-blue-50">
                        <a href="/">
                        <img
                src="/logo/logoblack.webp"
                alt="Logo"
                className="mx-auto max-h-20 object-contain"
              />
                        </a>
                        <h2 className="mt-4 text-2xl font-bold text-gray-800">Créez votre compte gratuitement</h2>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="p-6 space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Votre nom"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Votre prénom"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                required
                                placeholder="Votre email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label>
                            <input
                                type="password"
                                required
                                placeholder="Créez un mot de passe"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Confirmez le mot de passe</label>
                            <input
                                type="password"
                                required
                                placeholder="Répétez le mot de passe"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
                            />
                        </div>

                        <div className="flex items-center space-x-3">
                            <input 
                                type="checkbox" 
                                id="terms-checkbox" 
                                required 
                                className="rounded text-blue-600 focus:ring-blue-500"
                            />
                            <label htmlFor="terms-checkbox" className="text-sm text-gray-600">
                                J&apos;accepte les Conditions Générales et la Politique de Confidentialité
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            S&apos;inscrire
                        </button>
                    </form>

                    <div className="bg-gray-50 p-4 text-center">
                        <p className="text-sm text-gray-600">
                            Vous avez déjà un compte ? 
                            <a href="/login" className="text-blue-600 hover:text-blue-800 font-semibold ml-2">
                                Se connecter
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}