import { Moon } from "react-ionicons";
import { useState, useEffect } from "react";

const DarkModeSwitcher = () => {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "light");
  }, []);

  useEffect(() => {
    const html = document.querySelector("html");
    if (!html) return;

    html.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    const currTheme = theme === "light" ? "dark" : "light";

    setTheme(currTheme);
    localStorage.setItem("theme", currTheme);
  };

  return (
    <button
      onClick={() => toggleTheme()}
      className="text-base font-semibold text-light-mode-text dark:text-dark-mode-text flex items-center gap-2"
    >
      <Moon
        cssClasses="!fill-light-mode-text dark:!fill-dark-mode-text"
        height="15px"
        width="15px"
      />
      Dark Mode
    </button>
  );
};

export default DarkModeSwitcher;
