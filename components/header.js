import Link from "next/link";
import Image from "next/image";
import ThemeButton from "./themebutton";

const navigation = [
  { name: "Home", href: "/" },
  { name: "App", href: "/app" },
];

export default function Header() {
  return (
    <div className="sticky top-0 py-3 backdrop-blur-lg">
      <div className="flex items-center justify-between">
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
          <div className="flex px-2">
            {navigation.map((item) => (
              <Link href={item.href} key={item.name}>
                <a
                  className="text-slate-500 hover:bg-slate-400 hover:text-white dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white
                             py-2 px-3 rounded-md text-sm font-bold"
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
        <ThemeButton></ThemeButton>
      </div>
    </div>
  );
}
