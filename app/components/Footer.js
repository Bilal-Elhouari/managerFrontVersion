import Link from 'next/link';


export default function Footer () {



    const footerNavs = [
        {
            label: "Resources",
            items: [
                {
                    href: '#',
                    name: 'Contact'
                },
                {
                    href: '#',
                    name: 'Support'
                },
                {
                    href: '#',
                    name: 'item'
                },
                {
                    href: '#',
                    name: 'Offres'
                },
            ],
        },
        {
            label: "À propos",
            items: [
                {
                    href: '#',
                    name: 'item'
                },
                {
                    href: '#',
                    name: 'item'
                },
                {
                    href: '#',
                    name: 'Privacy'
                },
                {
                    href: '#',
                    name: 'Qui-sommes nous'
                },
            ]
        },
        {
            label: "Explorer",
            items: [
                {
                    href: '#',
                    name: 'item'
                },
                {
                    href: '#',
                    name: 'item'
                },
                {
                    href: '#',
                    name: 'item'
                },
                {
                    href: '#',
                    name: 'Blog'
                },
            ]
        },
        {
            label: "Entreprises",
            items: [
                {
                    href: '#',
                    name: 'Partenaires'
                },
                {
                    href: '#',
                    name: 'Équipes'
                },
                {
                    href: '#',
                    name: 'Metiers'
                },
            ],
        }
    ]

    return (
        <footer className="pt-10 bg-gray-800">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="justify-between items-center gap-12 md:flex">
                    <div className="flex-1 max-w-lg">
                        <h3 className="text-white text-2xl font-bold">
                            Recevez notre newsletter directement dans votre boîte mail.
                        </h3>
                    </div>
                    <div className="flex-1 mt-6 md:mt-0">
                        <form /* onSubmit={(e) => e.preventDefault()} */ className="flex items-center gap-x-3 md:justify-end">
                            <div className="relative">
                                <svg className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                                <input
                                    type="email"
                                    required
                                    placeholder="Entrez votre adresse email"
                                    className="w-full pl-12 pr-3 py-2 text-gray-500 bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <button className="block w-auto py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow">
                                S'abonner
                            </button>
                        </form>
                    </div>
                </div>
                <div className="flex-1 mt-16 space-y-6 justify-between sm:flex md:space-y-0">
                    {
                        footerNavs.map((item, idx) => (
                            <ul
                                className="space-y-4 text-gray-300"
                                key={idx}
                            >
                                <h4 className="text-gray-200 font-semibold sm:pb-2">
                                    {item.label}
                                </h4>
                                {
                                    item.items.map(((el, idx) => (
                                        <li key={idx}>
                                            <a
                                                href={el.href}
                                                className="duration-150 hover:text-gray-400"

                                            >
                                                {el.name}
                                            </a>
                                        </li>
                                    )))
                                }
                            </ul>
                        ))
                    }
                </div>
                <div className="mt-10 py-10 border-t border-gray-700 items-center justify-between sm:flex">
                    <p className="text-gray-300">© 2024 Jobs4Talents. Tous droits réservés.</p>
                    <div className="flex items-center gap-x-6 text-gray-400 mt-6">
                        <a href="#">
                            <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="currentColor" viewBox="0 0 48 48"><g clip-path="url(#a)"><path fill="currentColor" d="M48 24C48 10.745 37.255 0 24 0S0 10.745 0 24c0 11.979 8.776 21.908 20.25 23.708v-16.77h-6.094V24h6.094v-5.288c0-6.014 3.583-9.337 9.065-9.337 2.625 0 5.372.469 5.372.469v5.906h-3.026c-2.981 0-3.911 1.85-3.911 3.75V24h6.656l-1.064 6.938H27.75v16.77C39.224 45.908 48 35.978 48 24z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                        </a>
                        <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
    </svg>
                        </a>
                        <a href="#">
                            <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="currentColor" viewBox="0 0 48 48"><g fill="currentColor" clip-path="url(#clip0_910_44)"><path fill-rule="evenodd" d="M24 1A24.086 24.086 0 008.454 6.693 23.834 23.834 0 00.319 21.044a23.754 23.754 0 003.153 16.172 23.98 23.98 0 0012.938 10.29c1.192.221 1.641-.518 1.641-1.146 0-.628-.024-2.45-.032-4.442-6.676 1.443-8.087-2.817-8.087-2.817-1.089-2.768-2.665-3.507-2.665-3.507-2.181-1.49.166-1.46.166-1.46 2.414.17 3.683 2.485 3.683 2.485 2.145 3.677 5.626 2.615 7.003 1.999.218-1.542.843-2.616 1.533-3.215-5.37-.608-11.003-2.686-11.003-11.912 0-2.633.943-4.783 2.492-6.47-.25-.608-1.078-3.06.234-6.373 0 0 2.018-.646 6.605 2.47a23.082 23.082 0 016.015-.812c2.043.02 4.099.275 6.015.812 4.585-3.116 6.602-2.47 6.602-2.47 1.313 3.313.485 5.765.235 6.373 1.552 1.687 2.492 3.837 2.492 6.47 0 9.244-5.642 11.298-11.03 11.9.867.746 1.637 2.217 1.637 4.457 0 3.221-.03 5.815-.03 6.607 0 .634.438 1.375 1.655 1.144a23.982 23.982 0 0012.932-10.289A23.759 23.759 0 0047.681 21.04a23.818 23.818 0 00-8.133-14.351A24.099 24.099 0 0024 1z" /></g><defs><clipPath id="clip0_910_44"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                        </a>
                        <a href="#">
                            <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="currentColor" viewBox="0 0 48 48"><g clip-path="url(#clip0_1480_40)"><path fill="currentColor" d="M38.998 0H8.003C3.582 0 0 3.582 0 8.003v30.995C0 44.418 3.582 48 8.003 48h30.995C44.418 48 48 44.418 48 39.998V8.003C48 3.582 44.418 0 39.998 0zM45 39.998c0 2.76-2.24 5-5 5H8.003c-2.76 0-5-2.24-5-5V8.003c0-2.76 2.24-5 5-5h30.995c2.76 0 5 2.24 5 5V39.998zM24 13c-4.1 0-7.4 3.3-7.4 7.4s3.3 7.4 7.4 7.4 7.4-3.3 7.4-7.4-3.3-7.4-7.4-7.4zm10.2 22H13.8V20h7.4v3.7c0 .3.1.6.4.8.2.2.5.4.8.4h.3c.3 0 .6-.1.8-.4.2-.2.4-.5.4-.8V20h7.4v15z" /></g><defs><clipPath id="clip0_1480_40"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
