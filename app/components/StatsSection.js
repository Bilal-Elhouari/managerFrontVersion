"use client"; // Marque ce composant comme un composant client

import Image from 'next/image';

export default function StatsSection() {
  const stats = [
    { data: "5K+", title: "Talents Recrutés" },
    { data: "500+", title: "Entreprises Partenaires" },
    { data: "5", title: "Services" },
    { data: "1k+", title: "Entreprises" },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex md:px-8">
        <div className="sm:hidden lg:block lg:max-w-xl">
          <Image
            src="https://images.unsplash.com/photo-1622675363311-3e1904dc1885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Recruitment"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
          <div className="max-w-2xl">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Nous faisons de notre mieux pour satisfaire nos clients
            </h3>
            <p className="mt-3 max-w-xl">
              Chez BH&AB MANAGER, nous nous engageons à fournir des services de haute qualité pour aider les sociétés à gérer efficacement leurs secteurs d’activité et à les faire prospérer.
            </p>
          </div>
          <div className="flex-none mt-6 md:mt-0 lg:mt-6">
            <ul className="inline-grid gap-y-8 gap-x-14 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 text-center">
              {stats.map((item, idx) => (
                <li key={idx} className="">
                  <h4 className="text-4xl text-indigo-600 font-semibold">{item.data}</h4>
                  <p className="mt-3 font-medium">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}