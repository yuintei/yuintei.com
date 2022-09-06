import { HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "next-themes";

export default function Darkmode() {
  const { theme, setTheme } = useTheme();
  const handleSetTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <button className="block p-1" onClick={handleSetTheme}>
      {theme === "light" ? (
        <HiMoon className="w-5 h-5 text-yellow-300" />
      ) : (
        <HiSun className="w-5 h-5 text-yellow-300" />
      )}
    </button>
  );
}
