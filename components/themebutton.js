import { HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "next-themes";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className="block p-1"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <HiMoon className="w-5 h-5 text-slate-700" />
      ) : (
        <HiSun className="w-5 h-5 text-yellow-400" />
      )}
    </button>
  );
}
