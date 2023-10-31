import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
    { name: "Dashboard", href: "/dashboard", current: false },
    { name: "Envios físicos", href: "/envios", current: false },
    { name: "E-Sim", href: "/envios", current: false },
    { name: "Consultas", href: "/consultas", current: false },
    { name: "Administração", href: "/admin", current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

export default function Header(props) {
    return (
        <div className="min-h-full">
        <Disclosure as="nav" style={{ backgroundColor: "#0000F9" }}>
          {({ open }) => (
            <>
              <div className="max-w-full px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <img
                      className="h-8"
                      src="/assets/surf-logo.png"
                      alt="Surf Logo"
                    />
                    <div className="flex-shrink-0"></div>
                    <dd className="flex items-start gap-x-2">
                      <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? "bg-gray-900 text-white"
                                  : "text-gray-300 hover:bg-blue-800 hover:text-white",
                                "rounded-md px-3 py-2 text-sm font-medium"
                              )}
                              aria-current={item.current ? "page" : undefined}
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </dd>
                  </div>
                  <div className="flex flex-row">
                    <div className="ml-4 flex items-center md:ml-6">
                      <div className="">
                        <span className="flex flex-row text-base font-medium leading-none text-white mr-2">
                          AAAAAAAAAA
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => logout()}
                      className="flex items-center rounded-full p-2 bg-white text-sm"
                    >
                      <img
                        src="/assets/icons8-sair-64.png"
                        alt="logout"
                        className="h-6 w-6"
                      />
                    </button>
                  </div>



                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <div className="text-base font-medium leading-none text-white">
                        SAAAAAAAAAAAAA
                      </div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    <Disclosure.Button
                      
                      key={"logout"}
                      as="a"
                      href={"/"}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      logout
                    </Disclosure.Button>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <header className="bg-white">
          <div className="py-4 sm:p-6 border-2 sm:py">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 px-6 lg:px-0">
              {props.page}
            </h1>
          </div>
        </header>
      </div>
    )
}
