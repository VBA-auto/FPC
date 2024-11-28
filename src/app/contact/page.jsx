"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import SubHeader from "../components/SubHeader";
import Header from "../components/Header";

export default function Contact() {
  const pageDescription =
    "Contactez-nous pour en savoir plus sur l'installation de puits canadien. Notre équipe est à votre disposition pour répondre à vos questions et fournir un devis gratuit";

  const [isError, setIsError] = useState(false);
  const [isOk, setIsOk] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    name: "",
    code: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone" || name === "code") {
      if (/^\d*$/.test(value)) {
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      }
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    console.log(formData);
    e.preventDefault();

    try {
      const response = await fetch("/api/contactForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsOk(true);
      } else {
        const errorMessage = await response.text();
        console.error(`Error: ${response.status} - ${errorMessage}`);
        setIsError(true);
      }
    } catch (error) {
      console.error("Error sending the form:", error);
      setIsError(true);
    }
  };

  return (
    <section className="">
      <Head>
        <title>Contact France puits canadien</title>
        <meta name="description" content={pageDescription} />
      </Head>
      <SubHeader />
      <Header />
      <h2 className="text-black text-2xl text-center mt-12">
        Contactez-nous
      </h2>
      <div id="main" className="container mx-auto pb-16">
        <div className="md:flex ">
          <div className="md:w-[846px] mx-auto  rounded p-4">
           
            <form
              onSubmit={handleSubmit}
              method="post"
              action="/api/contactForm"
            >
              <div className="md:flex gap-5">
                <div className="w-full">
                  <label
                    htmlFor="name"
                    className="block pl-2 text-sm font-medium text-gray-600"
                  >
                    <p className="text-[14px] mb-1 accent-color font-normal">
                      Nom / Prénom *
                    </p>
                  </label>
                  <input
                    className="bg-white border w-full px-2 py-2 mb-3 rounded-md shadow-sm"
                    type="text"
                    name="name"
                    placeholder="Jean Dupont"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="name"
                    className="block pl-2 text-sm font-medium text-gray-600"
                  >
                    <p className="text-[14px] mb-1 accent-color font-normal">
                      E-mail*
                    </p>
                  </label>
                  <input
                    className="bg-white border w-full px-2 py-2 mb-3 rounded-md shadow-sm"
                    type="email"
                    name="email"
                    placeholder=" E-mail"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="md:flex gap-5 mt-5">
                <div className="w-full">
                  <label
                    htmlFor="phone"
                    className="block pl-2 text-sm font-medium text-gray-600"
                  >
                    <p className="text-[14px] mb-1 accent-color font-normal">
                      Téléphone*
                    </p>
                  </label>
                  <input
                    className="bg-white border w-full px-2 py-2 mb-3 rounded-md shadow-sm"
                    type="tel"
                    placeholder="Téléphone"
                    name="phone"
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="code"
                    className="block pl-2 text-sm font-medium text-gray-600"
                  >
                    <p className="text-[14px] mb-1 accent-color font-normal">
                      Code postal*
                    </p>
                  </label>
                  <input
                    placeholder="Entrez votre code postal"
                    type="text"
                    id="code"
                    name="code"
                    maxLength="5"
                    pattern="^\d{5}$" // Ensures exactly 5 digits
                    title="Le code postal doit être exactement 5 chiffres"
                    className="bg-white border w-full px-2 py-2 rounded-md shadow-sm"
                    onChange={handleChange}
                    value={formData.code}
                    required
                    onInvalid={(e) =>
                      e.target.setCustomValidity(
                        "Le code postal doit comporter exactement 5 chiffres"
                      )
                    }
                    onInput={(e) => e.target.setCustomValidity("")} // Reset custom message on input
                  />
                </div>
              </div>
              <label
                htmlFor="message"
                className="block pl-2 mt-5 text-sm font-medium text-gray-600"
              >
                <p className="text-[14px] mb-1 accent-color font-normal">
                  {" "}
                  Message (facultatif)
                </p>
              </label>

              <textarea
                className="bg-white border w-full px-2 py-2 rounded-md shadow-sm"
                placeholder="Décrivez nous en quelques lignes votre projet. Merci "
                rows="4"
                name="message"
                onChange={handleChange}
                required
              ></textarea>

              <p className="text-red-500">
                {isError ? "Erreur lors de l'envoi du formulaire" : ""}
              </p>
              <p className="text-green-500">
                {isOk ? "Formulaire envoyé avec succès" : ""}
              </p>

              <div className=" mt-4 text-center">
                <button
                  className="bg-transparent border border-[#56c96f] text-[#56c96f] hover:bg-[#56c96f] hover:text-white  hover:border-0 px-9 py-2 rounded-md"
                  type="submit"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
