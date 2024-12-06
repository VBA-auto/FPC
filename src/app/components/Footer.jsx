"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
  FaPhoneAlt,
  FaPinterest,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "/public/images/logotry.webp";
import { useState } from "react";

const Footer = () => {
  const [isError, setIsError] = useState(false);
  const [isOk, setIsOk] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/newsLetter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsOk(true);
        setFormData({ email: "" }); // Clear the input after successful submission
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <footer className="bg-gray-100 text-gray-700 px-5 md:px-0">
      <div className="container mx-auto py-12 ">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="md:mb-8 lg:mb-0 lg:w-1/4">
            {" "}
            {/* Adjusted width for consistent spacing */}
            <div className="mb-2 mt-1">
              {" "}
              {/* Added margin-bottom for spacing */}
              <Image src={logo} width={120} alt="Logo" />
            </div>
            <p className="mb-2">Abonnement à la newsletter</p>
            <form onSubmit={handleSubmit} className="flex md:mb-5">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="votre-adresse@mail.com"
                className="w-full px-3 py-2 rounded-l-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-5 py-2 accent-bg text-white rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Envoyer
              </button>
            </form>
            <p className="text-red-600">
              {isError && "Une erreur est survenue"}
            </p>
            <p className="text-[#56C96F]">
              {isOk && "Vous êtes bien abonné à la newsletter"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:w-3/4">
            {" "}
            {/* Adjusted width for consistent spacing */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Addresse</h2>
              <ul className="space-y-2">
                <li>
                  83 Av. Paul Doumer, <br />
                </li>
                <li>93330 Neuilly-sur-Marne</li>
                <li className="flex gap-2 items-center">
                  <FaPhoneAlt className="accent-color" />
                  07 57 83 12 03
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Produits</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/produits" className="hover:underline">
                    Fonctionnement
                  </Link>
                </li>
                <li>
                  <Link href="/produits" className="hover:underline">
                    Les différents types
                  </Link>
                </li>
                <li>
                  <Link href="/produits" className="hover:underline">
                    Avantages/inconvénients
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Ressources</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/realisation" className="hover:underline">
                    Réalisation
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:underline">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/gallerie" className="hover:underline">
                    Gallerie photos
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Informations</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/tarif" className="hover:underline">
                    Tarif
                  </Link>
                </li>
                <li>
                  <Link href="/propos" className="hover:underline">
                    Notre equipe
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mb-5 lg:mb-0 mt-5 md:mt-0">
          {" "}
          {/* Added margin-top for spacing */}
          <div className="p-3 border rounded-full">
            <Link href="https://maps.app.goo.gl/mG7HauTeGX3SRxiy9">
              <FaFacebookF className="md:text-xl text-sm accent-color" />
            </Link>
          </div>
          <div className="p-3 border rounded-full">
            <Link href="https://maps.app.goo.gl/mG7HauTeGX3SRxiy9">
              <FaInstagram className="md:text-xl text-sm accent-color" />
            </Link>
          </div>
          <div className="p-3 border rounded-full">
            <Link href="https://maps.app.goo.gl/mG7HauTeGX3SRxiy9">
              <FaLinkedinIn className="md:text-xl text-sm accent-color" />
            </Link>
          </div>
          <div className="p-3 border rounded-full">
            <Link href="https://maps.app.goo.gl/mG7HauTeGX3SRxiy9">
              <FaPinterest className="md:text-xl text-sm accent-color" />
            </Link>
          </div>
          <div className="p-3 border rounded-full">
            <Link href="https://maps.app.goo.gl/mG7HauTeGX3SRxiy9">
              <FaTiktok className="md:text-xl text-sm accent-color" />
            </Link>
          </div>
          <div className="p-3 border rounded-full">
            <Link href="https://maps.app.goo.gl/mG7HauTeGX3SRxiy9">
              <FaXTwitter className="md:text-xl text-sm accent-color" />
            </Link>
          </div>
          <div className="p-3 border rounded-full">
            <Link href="https://maps.app.goo.gl/mG7HauTeGX3SRxiy9">
              <FaYoutube className="md:text-xl text-sm accent-color" />
            </Link>
          </div>
        </div>
        <ul className="mt-5 flex justify-center gap-2 items-center">
          {" "}
          {/* Added margin-top for spacing */}
          <Link href="mailto:contact@france-puits-canadien.com">
            {" "}
            <li className="flex gap-2 items-center">
              <FaPaperPlane className="accent-color" />
              contact@france-puits-canadien.com
            </li>
          </Link>
        </ul>
        <div className="mt-8 border-t border-gray-200 pt-8 text-sm text-gray-500 text-center">
          <p>
            &copy; 2024 FRANCE PUITS CANADIEN.{" "}
            <Link href="/mention-legales" className="underline">
              Mention-legales
            </Link>
          </p>
          <p>
            Développé by{" "}
            <Link href="https://clickandtrust.fr/" className="hover:underline">
              Click & Trust
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
