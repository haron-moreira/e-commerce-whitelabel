import Image from "next/image"
import styles from "@/styles/header.module.css"
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

const navigation = [
    { name: "Início", href: "/", current: false, sub_items: false, sub_links: [] },
    { name: "Planos", href: "/planos", current: false, sub_items: true, sub_links: [{ "href": "planos/pre-pago", "name": "Planos Pré Pago" }, { "href": "planos/controle", "name": "Planos Controle Inteligente" }] },
    { name: "E-Sim (chip virtual)", href: "/e-sim", current: false, sub_items: false, sub_links: [] },
    { name: "Portabilidade", href: "/portabilidade", current: false, sub_items: false, sub_links: [] },
    { name: "Dúvidas", href: "/duvidas", current: false, sub_items: true, sub_links: [{ "href": "duvidas/onde_comprar", "name": "Onde Comprar" }, { "href": "duvidas/cobertura", "name": "Cobertura" }, { "href": "duvidas/sobre_e_faq", "name": "Sobre e FAQ" }, { "href": "duvidas/termo_adesao", "name": "Termo de Adesão" }] },
];

const path = () => {
    const url = useRouter()
    return url.pathname
}


export default function Header(props) {

    const url_atual = path()

    return (
        <>
            <Disclosure as="nav" className="bg-[#FFBC07] shadow-xl w-full">
                {({ open }) => (
                    <>
                        <div className="w-full flex justify-between">
                            <div className="flex items-center sm:justify-between md:gap-4">
                                <Image
                                    src="/imgs/logo-correios-1.png"
                                    alt="correios-logo"
                                    width={250}
                                    height={250}
                                    priority
                                    className={`${styles.img}`}
                                />

                                <div className="flex items-center gap-x-2">
                                    <div className="hidden md:block">
                                        <Menu as="div" className="flex flex-row items-center md:text-sm md:gap-0 lg:gap-10 lg:text-lg xl:gap-20 xl:text-xl 2xl:gap-28">
                                            {navigation.map((item) => (
                                                <div key={item.name}>
                                                    <div className="ml-4 flex items-center md:ml-6">
                                                        {/* Profile dropdown */}
                        
                                                            {item.sub_items ? (
    
                                                            <Menu as="div">
                                                            <Menu.Button>
                                                                <div className="text-white text-xl pr-4 flex w-full items-center justify-between font-bold md:text-sm md:gap-0 lg:gap-10 lg:text-lg xl:gap-20 xl:text-xl 2xl:gap-28">
                                                                    {item.name}
                                                                </div>
                                                            </Menu.Button>
                                                            <Transition
                                                                enter="transition ease-out duration-100"
                                                                enterFrom="transform opacity-0 scale-95"
                                                                enterTo="transform opacity-100 scale-100"
                                                                leave="transition ease-in duration-75"
                                                                leaveFrom="transform opacity-100 scale-100"
                                                                leaveTo="transform opacity-0 scale-95"
                                                            >
                                                                <Menu.Items className="absolute flex flex-col gap-4 p-2 right-0 z-10 mt-2 w-56 origin-top-right rounded-md text-white bg-[#FFBC07] py-1 shadow-xl ring-2 ring-black ring-opacity-5 focus:outline-none">
                                                                {item.sub_links.map((subItem) => (
                                                                    <a href={subItem.href} key={subItem.href} className={`${styles.li}`}>
                                                                        {subItem.name}
                                                                    </a>
                                                                ))}
                                                                </Menu.Items>
                                                            </Transition>
                                                            </Menu>
                                                                                                      
                                                    ) : (
                                                        
                                                        <Menu.Button>
                                                        <div className={`${styles.li} ${url_atual === item.href ? "text-[#00416B]" : "text-white"}`}>
                                                            {item.name}
                                                        </div>
                                                        </Menu.Button>
                                                    )} 
                                                    </div>
                                                </div>
                                            ))}
                                            <div className="flex flex-row">
                                                <div className="ml-4 flex items-center md:ml-6">
                                                    <div className="">
                                                        <span className="flex flex-row text-base font-medium leading-none text-white mr-2">
                                                            <button className={`${styles.button_recarga} lg:text-lg md:text-sm`}>
                                                                Recarga
                                                            </button>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            </Menu>
                                    </div>
                                </div>
                            </div>


                            <div className="flex items-center md:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="inline-flex items-center mr-2 rounded-md bg-white-400 p-2 text-[#00416B] hover:bg-[#00416B] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#00416B]">
                                    <span className="sr-only">Ver Menu</span>
                                    {open ? (
                                        <XMarkIcon
                                            className="block h-10 w-10"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Bars3Icon
                                            className="block h-10 w-10"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>

                        <Disclosure.Panel className="flex md:hidden">
                            <div className="space-y-1 flex w-full flex-col gap-4 bg-[#0083CB] px-2 pb-3 pt-2 sm:px-3">
                                {navigation.map((item) => (
                                    <div key={item.name}>
                                        {item.sub_items ? (
                                            <Disclosure>
                                                {({ open }) => (
                                                    <>
                                                        <Disclosure.Button
                                                            className={"text-white text-xl pr-4 flex items-center w-full justify-between font-bold"}
                                                            aria-current={item.current ? "page" : undefined}
                                                        >
                                                            {item.name}
                                                            <span>
                                                                <ChevronDownIcon
                                                                    className="block h-6 w-6"
                                                                />
                                                            </span>
                                                        </Disclosure.Button>
                                                        <Disclosure.Panel className="flex flex-col">
                                                            <div className="pl-4 flex flex-col text-xl gap-4 mt-4 text-white">
                                                                {/* Links do submenu */}
                                                                {item.sub_links.map((subItem) => (
                                                                    <a href={subItem.href} key={subItem.href} className={`${styles.li}`}>
                                                                        {subItem.name}
                                                                    </a>
                                                                ))}
                                                            </div>
                                                        </Disclosure.Panel>
                                                    </>
                                                )}
                                            </Disclosure>
                                        ) : (
                                            <a
                                                href={item.href}
                                                className={`${styles.li} ${url_atual === item.href ? "text-[#00416B]" : "text-white"} text-xl`}
                                            >
                                                {item.name}
                                            </a>
                                        )}
                                    </div>
                                ))}

                            </div>
                        </Disclosure.Panel>
                    </>

                )}

            </Disclosure>
        </>
    )
}