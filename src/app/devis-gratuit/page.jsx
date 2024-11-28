 "use client";
import Head from "next/head";
import { useState } from "react";
import SubHeader from "../components/SubHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";

const pageDescription =
  "Demandez un devis gratuit pour l'installation de votre puits canadien. Profitez de solutions personnalisées pour une ventilation naturelle et des économies d'énergie";

const Contact = () => {
  const [isError, setIsError] = useState(false);
  const [isTel, setIsTel] = useState(false);
  const [isOk, setIsOk] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    code: "",
    souhaite: "",
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
    e.preventDefault();
    // Validate phone number
    if (formData.phone.length !== 10) {
      setIsTel(true);
      return;
    }
    // Validate postal code
    if (formData.code.length !== 5) {
      setIsError(true);
      return;
    }

    try {
      const response = await fetch("/api/devisForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsOk(true);
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <div className="">
      <SubHeader />
      <Header />
      <section className="py-12">
        <div className="relative">
          <div className="flex flex-col items-center">
            <Head>
              <title>devis gratuit puits canadien en France</title>
              <meta name="description" content={pageDescription} />
            </Head>

            <div className=" md:w-[846px] text-center rounded-md">
              <h2 className="text-black text-2xl text-center">
                Demande de devis
              </h2>
            </div>

            <div className="md:w-[846px]">
              <form onSubmit={handleSubmit} className="w-full p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Nom et Prénom */}
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block pl-2 text-sm font-medium text-gray-600"
                    >
                      <p className="text-[14px] mb-1 accent-color">
                        Nom / Prénom *
                      </p>
                    </label>
                    <input
                      placeholder="Jean Dupont"
                      type="text"
                      id="name"
                      name="name"
                      className="bg-white border w-full px-2 py-2 rounded-md shadow-sm"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Adresse Email */}
                  <div className="mb-4">
                    <label
                      htmlFor="E-mail*"
                      className="block pl-2 text-sm font-medium text-gray-600"
                    >
                      <p className="text-[14px] mb-1 accent-color">E-mail*</p>
                    </label>
                    <input
                      placeholder="E-mail"
                      type="email"
                      id="email"
                      name="email"
                      className="bg-white border w-full px-2 py-2 rounded-md shadow-sm"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Téléphone */}
                  <div className="mb-4">
                    <label
                      htmlFor="phone"
                      className="block pl-2 text-sm font-medium text-gray-600"
                    >
                      <p className="text-[14px] mb-1 accent-color">
                        Téléphone*
                      </p>
                    </label>
                    <input
                      placeholder="Téléphone"
                      type="tel"
                      id="phone"
                      name="phone"
                      className="bg-white border w-full px-2 py-2 rounded-md shadow-sm"
                      onChange={handleChange}
                      value={formData.phone}
                      required
                    />
                  </div>

                  {/* Code postal */}
                  <div className="mb-4">
                    <label
                      htmlFor="code"
                      className="block pl-2 text-sm font-medium text-gray-600"
                    >
                      <p className="text-[14px] mb-1 accent-color">
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

                {/* Je souhaite* */}
                <div className="mb-6">
                  <label
                    htmlFor="souhaite"
                    className="block pl-2 text-sm font-medium text-gray-600"
                  >
                    <p className="text-[14px] mb-1 accent-color">
                      Je souhaite*
                    </p>
                  </label>
                  <select
                    id="souhaite"
                    name="souhaite"
                    className="bg-white border w-full px-2 py-2 rounded-md shadow-sm"
                    required
                    onChange={handleChange}
                  >
                    <option value="" disabled selected hidden>
                      Sélectionnez une option
                    </option>
                    <option value="avoir des informations par téléphone">
                      avoir des informations par téléphone
                    </option>
                    <option value="avoir un devis estimatif par téléphone">
                      avoir un devis estimatif par téléphone
                    </option>
                    <option value="Venir sur place directement">
                      Venir sur place directement
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div className="mt-4">
                  <label
                    htmlFor="message"
                    className="block pl-2 text-sm font-medium text-gray-600"
                  >
                    <p className="text-[14px] mb-1 accent-color">
                      Détail (facultatif)
                    </p>
                  </label>
                  <textarea
                    placeholder="Merci de bien vouloir préciser l’objet de votre demande. Réponse sous 24 heures."
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="bg-white border w-full px-2 py-2 rounded-md shadow-sm"
                    onChange={handleChange}
                  ></textarea>
                </div>

                <p className="text-red-500">
                  {isTel
                    ? "Erreur lors de l'envoi du formulaire, vérifier votre numéro de téléphone"
                    : ""}
                </p>
                <p className="text-red-500">
                  {isError ? "Erreur lors de l'envoi du formulaire" : ""}
                </p>
                <p className="text-green-500">
                  {isOk ? "Formulaire envoyé avec succès" : ""}
                </p>

                {/* Bouton Envoyer */}
                <div className="mt-4 text-center">
                  <button
                    type="submit"
                    className="bg-transparent border border-[#56c96f] text-[#56c96f] hover:bg-[#56c96f] hover:text-white  hover:border-0 px-9 py-2 rounded-md"
                  >
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
