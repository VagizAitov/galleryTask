import { useLayoutEffect, useState } from "react";

export default function useTheme(defaultTheme: string) {
  const [theme, setTheme] = useState(defaultTheme);
  useLayoutEffect(() => {
    document.documentElement.setAttribute("theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return { theme, setTheme };
}
