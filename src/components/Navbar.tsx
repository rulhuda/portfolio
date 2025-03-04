"use client";
import React, { useState } from "react";
import { Link } from "react-scroll/modules";
import { useTheme } from "next-themes";
import { RiSunLine, RiMoonFill } from "react-icons/ri";
import { IoMdClose, IoMdMenu } from "react-icons/io";
interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
  {
    label: "Contact",
    page: "contact",
  },
];

function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);
  return (
    <header className='w-full mx-auto px-4 bg-slate-100 shadow fixed top-0 z-50 sm:px-20 dark:bg-stone-950 dark:border-b dark:border-stone-600'>
      <div className='justify-between md:items-center md:flex'>
        <div>
          <div className='flex items-center justify-between py-3'>
            <div className='md:py-5 md:block'>
              <h2 className='text-2xl font-bold'>Nurul Huda</h2>
            </div>
            <div className='md:hidden'>
              <button>
                {navbar ? (
                  <IoMdClose
                    fillRule='nonzero'
                    size={25}
                    onClick={() => setNavbar(false)}
                  />
                ) : (
                  <IoMdMenu
                    fillRule='nonzero'
                    size={25}
                    onClick={() => setNavbar(true)}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justift-self-center pb-3 mt-4 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className='items-center space-y-6 md:space-y-0 justify-center md:flex md:space-x-6'>
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={item.page}
                    className={
                      "block cursor-pointer lg:inline-block text-neutral-900 hover:text-neutral-500 dark:text-neutral-100"
                    }
                    activeClass={"active"}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className='bg-slate-100 text-stone-900 dark:text-stone-900 p-2 rounded-xl'
                >
                  <RiSunLine fillRule='nonzero' size={20} />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className='bg-slate-100 text-stone-900 dark:text-stone-900 p-2 rounded-xl'
                >
                  <RiMoonFill fillRule='nonzero' size={20} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
