"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logotry.webp";

const CustomDropdown = ({ label, children, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className={`relative ${isMobile ? "w-full" : ""}`}>
      <button
        onClick={toggleDropdown}
        className={`px-4 py-2 text-gray-800 hover:text-gray-900 focus:outline-none ${
          isMobile ? "w-full text-left" : ""
        }`}
      >
        {label}
      </button>
      {isOpen && (
        <ul
          className={`${
            isMobile ? "relative" : "absolute"
          } top-full mt-2 bg-white shadow-md rounded w-48 z-10`}
        >
          {children}
        </ul>
      )}
    </div>
  );
};

const Header = () => {
  const [isRessourcesOpen, setRessourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const ressourcesRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      ressourcesRef.current &&
      !ressourcesRef.current.contains(event.target)
    ) {
      setRessourcesOpen(false);
    }
    if (
      isMobileMenuOpen &&
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target)
    ) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <section id="header" className="sticky top-0 z-50 w-full bg-white">
      <div className="border">
        <div className="container max-w-screen mx-auto px-5 md:px-0">
          <div className="navbar bg-white px-0 py-3 flex items-center justify-between">
            <div className="navbar-start flex items-center">
              <Link href="/" className="ps-0">
                <Image src={logo} width={120} height={150} alt="Logo" />
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="flex space-x-3">
                <li>
                  <Link href="/" className="navItem">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/produits" className="navItem">
                    Produits
                  </Link>
                </li>
                <li ref={ressourcesRef}>
                  <CustomDropdown
                    label="Ressources"
                    isOpen={isRessourcesOpen}
                    toggleDropdown={() => setRessourcesOpen((prev) => !prev)}
                  >
                    <li>
                      <Link href="/realisation" className="navItem">
                        Réalisations
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq" className="navItem">
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link href="/gallerie" className="navItem">
                        Gallerie
                      </Link>
                    </li>
                  </CustomDropdown>
                </li>
                <li>
                  <Link href="/tarif" className="navItem">
                    Tarif
                  </Link>
                </li>
                <li>
                  <Link href="/propos" className="navItem">
                    A propos
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="navItem">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="navbar-end flex items-center">
              <button
                className="lg:hidden p-2 text-gray-800 hover:text-gray-900 focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </button>
              <div className="hidden md:block">
                <Link href="/devis-gratuit">
                  <button className="bg-transparent border border-[#56c96f] text-[#56c96f] hover:bg-[#56c96f] hover:text-white px-6 py-2 rounded-md">
                    Devis gratuit
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden fixed top-[100px] left-0 right-0 bg-white shadow-md z-50"
        >
          <ul className="p-4">
            <li>
              <Link
                href="/"
                className="block py-2 navItem"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/produits"
                className="block py-2 navItem"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Produits
              </Link>
            </li>
            <li>
              <CustomDropdown label="Ressources" isMobile={true}>
                <li>
                  <Link
                    href="/realisation"
                    className="block py-2 navItem"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Réalisations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="block py-2 navItem"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallerie"
                    className="block py-2 navItem"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Gallerie
                  </Link>
                </li>
              </CustomDropdown>
            </li>
            <li>
              <Link
                href="/tarif"
                className="block py-2 navItem"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tarif
              </Link>
            </li>
            <li>
              <Link
                href="/propos"
                className="block py-2 navItem"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                A propos
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 navItem"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li className="mt-4">
              <Link href="/devis-gratuit">
                <button className="w-full bg-transparent border border-[#56c96f] text-[#56c96f] hover:bg-[#56c96f] hover:text-white px-4 py-2 rounded-md">
                  Devis gratuit
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default Header;
