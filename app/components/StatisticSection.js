"use client"; // Marque ce composant comme un composant client

export default function StatisticSection() {
  return (
    <div className="flex flex-col items-center bg-white p-10 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
        Optimisez la gestion de votre entreprise avec nos services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <div className="bg-green-100 p-8 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow">
          <p className="text-4xl font-bold text-gray-900">10 000+</p>
          <p className="text-gray-700 mt-2">Entreprises utilisent notre solution pour gérer leurs opérations.</p>
        </div>
        <div className="bg-blue-100 p-8 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow">
          <p className="text-4xl font-bold text-gray-900">95%</p>
          <p className="text-gray-700 mt-2">de nos clients ont amélioré leur productivité en utilisant notre outil.</p>
        </div>
        <div className="bg-yellow-100 p-8 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow">
          <p className="text-gray-700">Une gestion simplifiée, un futur optimisé</p>
          <p className="text-gray-700">Essayez notre solution dès aujourd'hui !</p>
        </div>
        <div className="bg-red-100 p-8 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow">
          <p className="text-gray-700">Découvrez nos outils maintenant.</p>
          <button className="mt-4 px-6 py-2 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-all">
            14 jours d'Essai gratuit
          </button>
        </div>
      </div>
    </div>
  );
}