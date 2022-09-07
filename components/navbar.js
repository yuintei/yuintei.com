/* This example requires Tailwind CSS v2.0+ */
import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ThemeButton from "./themebutton";

const navigation = [
  { name: "Home", href: "/", current: "true" },
  { name: "About", href: "/about", current: "false" },
];

export default function Navbar() {
  return (
    <Disclosure as="nav" className=" sticky top-0 backdrop-blur-lg">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-4xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-slate-500 hover:bg-slate-400 hover:text-white dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    <Image
                      src="/profile.png"
                      alt="Profile"
                      className="block rounded-full cursor-pointer"
                      height={32}
                      width={32}
                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link href={item.href} key={item.name}>
                        <a
                          className="text-slate-500 hover:bg-slate-400 hover:text-white dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white
                            px-3 py-2 rounded-md text-sm font-medium"
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <ThemeButton></ThemeButton>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="text-slate-500 hover:bg-slate-400 hover:text-white dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white
                    block px-3 py-2 rounded-md text-base font-medium"
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
