"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

const products = [
  {
    name: "Salud y Medicamentos",
    description: "Get a better understanding of your traffic",
    href: "#",
  },
  {
    name: "Cosmética",
    description: "Speak directly to your customers",
    href: "#",
  },
  {
    name: "Higiene",
    description: "Your customers’ data will be safe and secure",
    href: "#",
  },
  {
    name: "Skincare",
    description: "Connect with third-party tools",
    href: "#",
  },
  {
    name: "Accesorios",
    description: "Build strategic funnels that will convert",
    href: "#",
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#367F8D]">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        {/* ******************************************* */}
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Farma Salud Global</span>
            <img
              alt=""
              src="./image/icono.png"
              className="h-8 w-auto lg:h-12"
            />
          </a>
        </div>
        {/* ******************************************* */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        {/* ******************************************* */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-md/6 font-semibold text-white">
            Inicio
          </a>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-md/6 font-semibold text-white cursor-pointer">
              Catálogo
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-white"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full -left-8 z-50 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-[#367F8D] shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-[#0BF7E0]"
                  >
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-white"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      {/* <p className="mt-1 text-gray-600">{item.description}</p> */}
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          {/* <a href="#" className="text-sm/6 font-semibold text-white">
            Cuentas x Cobrar
          </a> */}
          <a href="#" className="text-md/6 font-semibold text-white">
            Pedidos
          </a>
          <a href="#" className="text-md/6 font-semibold text-white">
            Descuentos para ti
          </a>
          <a href="#" className="text-md/6 font-semibold text-white">
            Seguimiento
          </a>
        </PopoverGroup>
        {/* ******************************************* */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a> */}
        </div>
        {/* ******************************************* */}
      </nav>
      {/* ******************************************* */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#367F8D] p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Farma Salud Global</span>
              <img alt="" src="./image/icono.png" className="h-8 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <a
                    href="#"
                    className="block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-[#0BF7E0]"
                  >
                    Inicio
                  </a>
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-white hover:bg-[#0BF7E0]">
                    Catálogo
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-white hover:bg-[#0BF7E0]"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-[#0BF7E0]"
                >
                  Pedidos
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-[#0BF7E0]"
                >
                  Descuentos para ti
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-[#0BF7E0]"
                >
                  Seguimiento
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
      {/* ******************************************* */}
    </header>
  );
};

export default Header;
