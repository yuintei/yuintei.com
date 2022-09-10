/* This example requires Tailwind CSS v2.0+ */
import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ThemeButton from "./themebutton";

const navigation = [
  { name: "Home", href: "/" },
  { name: "App", href: "/app" },
];

export default function Header() {
  return (
    <Disclosure as="nav" className="px-4 sticky top-0 backdrop-blur-lg">
      {({ open }) => (
        <>
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="p-2 flex flex-shrink-0 items-center">
                <Link href="/">
                  <Image
                    src="/profile.png"
                    alt="Profile"
                    className="block rounded-lg cursor-pointer"
                    height={32}
                    width={32}
                  />
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex">
                <div className="space-x-4">
                  {navigation.map((item) => (
                    <Link href={item.href} key={item.name}>
                      <a
                        className="text-slate-500 hover:bg-slate-400 hover:text-white dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white
                            px-3 py-2 rounded-md text-sm font-medium"
                      >
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-1 text-slate-500 hover:bg-slate-400 hover:text-white dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
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
                    block px-3 py-2 rounded-md text-base text-end font-medium"
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
