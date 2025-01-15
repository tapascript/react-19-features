import { ThemeContext } from "../context";
import { use } from "react";

export const useTheme = () => {
  const context = use(ThemeContext);
  if (context === null) {
    throw new Error("Context must be used within a context provider");
  }
  return context;
};
