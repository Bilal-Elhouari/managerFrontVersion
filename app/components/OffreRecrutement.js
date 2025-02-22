'use client'
import Link from 'next/link';
import { useState } from "react"

export default function OffreRecrutement() {
 
    const [pages, setPages] = useState(["1", "2", "3", , "...", "8", "9", "10",])
const [currentPage, setCurrentPage] = useState("1")

    const offers = [
        {
            title: "Développeur Front-End",
            desc: "Je recherche un poste en développement front-end je suis expérimenté avec une solide connaissance de React.js et Next.js.",
            img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            companyLogo: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            location: "Fes, Maroc",
            href: "javascript:void(0)"
        },
        {
            title: "Chef de Projet IT",
            desc: "Un chef de projet IT est recherché pour gérer les projets de développement logiciel de bout en bout.",
            img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            companyLogo: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg",
            companyName: "Innovatech",
            location: "Rabat, Maroc",
            href: "javascript:void(0)"
        },
        {
            title: "Data Scientist",
            desc: "Nous recherchons un data scientist pour analyser de grandes quantités de données et aider à la prise de décision basée sur les données.",
            img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            companyLogo: "https://randomuser.me/api/portraits/men/46.jpg",
            companyName: "DataCorp",
            location: "Marrakech, Maroc",
            href: "javascript:void(0)"
        },
        {
            title: "Ingénieur DevOps",
            desc: "Nous recherchons un ingénieur DevOps pour améliorer l'efficacité et la fiabilité de notre infrastructure.",
            img: "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            companyLogo: "https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg",
            companyName: "WebSolutions",
            location: "Fès, Maroc",
            href: "javascript:void(0)"
        },
        {
            title: "Architecte Logiciel",
            desc: "Nous recherchons un architecte logiciel pour concevoir et superviser nos projets logiciels.",
            img: "https://miro.medium.com/v2/resize:fit:1400/0*zt4LuPzoS_vNr_f8.png",
            companyLogo: "https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg",
            companyName: "WebSolutions",
            location: "Fès, Maroc",
            href: "javascript:void(0)"
        },
      
        
        {
            title: "Consultant IT",
            desc: "Nous recherchons un consultant IT pour fournir des conseils stratégiques et techniques à nos clients.",
            img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            companyLogo: "https://randomuser.me/api/portraits/men/40.jpg",
            companyName: "ConsultCorp",
            location: "Meknès, Maroc",
            href: "javascript:void(0)"
        },
     
    ];

    return (
        <section className="mx-auto px-4 max-w-screen-xl md:px-8 my-12">
              <br/><br/><br/><br/><br/><br/>
            <div className="text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    Profiles Disponible
                </h1>
                <p className="mt-3 text-gray-500">
                    Découvrez les dernières offres et les disponibiliter des profiles au Maroc.
                </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-4 lg:grid-cols-3">
                {offers.map((offer, key) => (
                    <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm" key={key}>
                        <Link href={offer.href}>
                            <img src={offer.img} loading="lazy" alt={offer.title} className="w-full h-48 rounded-t-md object-cover" />
                            <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                                <div className="flex-none w-10 h-10 rounded-full">
                                    <img src={offer.companyLogo} className="w-full h-full rounded-full object-cover" alt={offer.companyName} />
                                </div>
                                <div className="ml-3">
                                    <span className="block text-gray-900">{offer.companyName}</span>
                                    <span className="block text-gray-400 text-sm">{offer.location}</span>
                                </div>
                            </div>
                            <div className="pt-3 ml-4 mr-2 mb-3">
                                <h3 className="text-xl text-gray-900">{offer.title}</h3>
                                <p className="text-gray-400 text-sm mt-1">{offer.desc}</p>
                            </div>
                        </Link>
                    </article>
                ))}
            </div>

     
  

        <div className="max-w-screen-xl mx-auto mt-12 px-4 text-gray-600 md:px-8">
            <div className="hidden justify-between text-sm md:flex">
                <div>
                Afficher 1-10 SUR 120
                </div>
                <div className="flex items-center gap-12" aria-label="Pagination">
                    <a href="javascript:void(0)" className="hover:text-indigo-600">
                        Precedent
                    </a>
                    <ul className="flex items-center gap-1">
                        {
                            pages.map((item, idx) => (
                                <li key={item}>
                                    {
                                        item == "..." ? (
                                            <div>
                                                {item}
                                            </div>
                                        ) : (

                                            <a href="javascript:void(0)" aria-current={currentPage == item ? "page" : false} className={`px-3 py-2 rounded-lg duration-150 hover:text-white hover:bg-indigo-600 ${currentPage == item ? "bg-indigo-600 text-white font-medium" : ""}`}>
                                                {item}
                                            </a>
                                        )
                                    }
                                </li>
                            ))
                        }
                    </ul>
                    <a href="javascript:void(0)" className="hover:text-indigo-600">
                       Suivante
                    </a>
                </div>
            </div>
            {/* On mobile version */}
            <div className="flex items-center justify-between text-sm text-gray-600 font-medium md:hidden">
                <a href="javascript:void(0)" className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50">Previous</a>
                <div className="font-medium">
                    SHOWING 1-10 OF 120
                </div>
                <a href="javascript:void(0)" className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50">Next</a>
            </div>
        </div>


        </section>
    );
}
