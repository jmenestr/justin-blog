import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "next-themes";
import Nav from "../Nav";
import { GithubIcon } from "../Icons/Github";
import { LinkedIn } from "../Icons/LinkedIn";

export const Layout: React.FC<{}> = ({ children }) => {
  return (
    <div className="w-full min-h-screen dark:bg-gray-700 dark:text-white">
      <div className="max-w-screen-sm px-7 md:px-4 py-12 mx-auto antialiased font-body">
        <ThemeSelector />
        <Nav />
        <main>{children}</main>
        <footer className="text-md text-gray-600 flex dark:text-gray-200 justify-between">
          <div>
            © {new Date().getFullYear()} Justin Menestrina

          </div>
          <div className='flex'>
            <a href="https://github.com/jmenestr" className="hover:text-neon-orange dark:hover:text-yellow-400">
              <GithubIcon />
            </a>
            <a href="https://www.linkedin.com/in/justinmenestrina/" className='ml-3 hover:text-neon-orange dark:hover:text-yellow-400'>
              <LinkedIn />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

const ThemeSelector = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleDarkMode = (checked: boolean) => {
    const isDarkMode = checked;

    if (isDarkMode) setTheme("dark");
    else setTheme("light");
  };

  const isDarkMode = resolvedTheme === "dark";

  return (
    <div
      className={clsx("flex items-center justify-between mb-2")}
    >
      {mounted && (
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          className="24"
        />
      )}
    </div>
  );
};
