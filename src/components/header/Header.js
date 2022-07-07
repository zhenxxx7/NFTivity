import React from "react";
import { Navbar, DarkThemeToggle } from "flowbite-react";

export default function Header() {
    return(
        <div className="backdrop-blur-sm bg-opacity-80 drop-shadow-md shadow-sm bg-light dark:bg-dark dark:bg-opacity-80 fixed z-10 w-full top-0">
            <Navbar
            fluid={false}
            rounded={true}
            >
            <Navbar.Brand href="https://flowbite.com/">
                <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ">
                NFTivity
                </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                <div className="block md:hidden flex md:order-2">
                      <DarkThemeToggle />
                      
                </div>
                <button
                type="button"
                className="text-slate-700  bg-gradient-to-r from-[#FDAE8F] to-[#FD1C68] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Connect Wallet
                </button>
              </div>
                <Navbar.Toggle />
              <Navbar.Collapse>
                  <Navbar.Link
                  href="/navbars"
                  active={true}
                  >
                  Home
                  </Navbar.Link>
                  <Navbar.Link href="/navbars">
                  About
                  </Navbar.Link>
                  <Navbar.Link href="/navbars">
                  Explore
                  </Navbar.Link>
                  <Navbar.Link href="/navbars">
                  Pages
                  </Navbar.Link>
                  <Navbar.Link href="/navbars">
                  Contact us
                  </Navbar.Link>
                  <div className="hidden md:block">
                    <DarkThemeToggle />
                  </div>
              </Navbar.Collapse>
            </Navbar>
        </div>
    )
};
