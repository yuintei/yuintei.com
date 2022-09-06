import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";

export default function Darkmode() {
  const { theme, setTheme } = useTheme();
  const handleSetTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <button className="block p-1" onClick={handleSetTheme}>
      {theme === "light" ? (
        <MoonIcon className="w-5 h-5 text-yellow-300" />
      ) : (
        <SunIcon className="w-5 h-5 text-yellow-300" />
      )}
    </button>
  );
}
