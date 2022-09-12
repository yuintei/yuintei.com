import { HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "next-themes";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const switchTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <button className=" p-1" onClick={switchTheme}>
      {theme === "light" ? (
        <HiMoon className="w-6 h-6 text-slate-700" />
      ) : (
        <HiSun className="w-6 h-6 text-yellow-400" />
      )}
    </button>
  );
}
