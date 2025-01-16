import { useTheme } from "../hooks/useTheme";
import { Sun, Moon } from "lucide-react";
const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => {
    toggleTheme();
  };

  return <bautton onClick={handleToggle}>{theme ? <Moon /> : <Sun />}</bautton>;
};

export default ThemeSwitcher;
