"use client";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";

const Page = () => {
  const [codes, setCodes] = useState([]);
  useEffect(() => {
    const scrollToMain = () => {
      const mainSection = document.getElementById("main");
      if (mainSection) {
        mainSection.scrollIntoView({ behavior: "smooth" });
      }
    };

    const scrollTimeout = setTimeout(scrollToMain, 1000);

    return () => clearTimeout(scrollTimeout);
  }, []);

  useEffect(() => {
    fetch("/defCode.json")
      .then((res) => res.json())
      .then((data) => {
        setCodes(data);
      });
  }, []);

  const generateH2Tags = () => {
    return codes.map((code, index) => (
      <h2 className="hidden" key={index}>
        {code.code}
      </h2>
    ));
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCodes, setFilteredCodes] = useState([]);
  const [noMatch, setNoMatch] = useState(false);

  const handleSearch = () => {
    const searchTermLowerCase = searchTerm.toLowerCase().trim();
    const exactMatch = codes.find(
      (code) => code.code.toLowerCase() === searchTermLowerCase
    );
    if (exactMatch) {
      setFilteredCodes([exactMatch]);
      setNoMatch(false);
    } else {
      setFilteredCodes([]);
      setNoMatch(true);
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClickSearch = () => {
    handleSearch();
  };

  const [selectedCode, setSelectedCode] = useState(null);

  const toggleRecommendation = (code) => {
    setSelectedCode(selectedCode === code ? null : code);
  };

  return (
    <section>
      <Head>
        <title>Automatic Transformation</title>
      </Head>
      <div className="relative mx-auto">
        <video
          className="md:h-screen w-screen object-cover videoOverlay relative"
          src="/images/aide.mp4"
          autoPlay
          muted
          loop
        ></video>
        <h1 className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 positionTitle">
          Aide En Ligne
        </h1>
      </div>
      <div id="main" className="container mx-auto">
        <div className="md:flex flexDirection md:h-[700px]  py-16 gap-14">
          <div className="md:w-1/2">
            <h1 className="titlesFonts">Aide En Ligne</h1>
            <p className="text-justify my-2">
              Bienvenue sur notre page d'aide en ligne.
            </p>
            <p className="text-justify">
              Entrez le code défaut indiqué sur votre valise diagnostic. Vous
              trouverez une description du défaut et des indications pour le
              résoudre. Ce système (à titre indicatif) vous aide à identifier la
              source du problème et peut éventuellement vous guider pour
              effectuer les réparations nécessaires.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="">
              <p className="">Chercher un code default</p>
              <div className="">
                <input
                  type="text"
                  placeholder="example code : P0700"
                  value={searchTerm}
                  onChange={handleChange}
                  className="w-full py-3 px-2 bg-transparent border border-[#f1b04e] mt-5"
                />

                <div className="mt-7">
                  <button
                    onClick={handleClickSearch}
                    className="bg-[#f1b04e]  text-white py-2.5 px-8 rounded-md hover:bg-[#f1b04ea6] hover:text-white"
                  >
                    Rechercher
                  </button>
                </div>
                <div className="">
                  <div className="">
                    {filteredCodes.length > 0 ? (
                      <div className="bg-white mt-5 p-4 rounded-lg shadow-xl  text-lg ">
                        {filteredCodes.map((code) => (
                          <div
                            key={code.code}
                            className=" p-4 border rounded-lg border-orangevba"
                          >
                            <p className="font-bold text-md text-[15px] text-[#374151]">
                              {code.code}
                            </p>
                            <p
                              className="mb-2 mt-1 text-[15px] "
                              style={{ lineHeight: "22px" }}
                            >
                              {code.description}
                            </p>
                            {/* <p className="mb-2 italic text-[14px] text-gray-500">
                              {code.subTitle}
                            </p> */}
                            {/* <span className="text-[15px]">
                              Cliquer{" "}
                              <button
                                className=" font-semibold text-[#f1b04e]"
                                onClick={() => toggleRecommendation(code.code)}
                              >
                                ici
                              </button>{" "}
                              pour obtenir de l'aide
                            </span> */}

                            {selectedCode === code.code && (
                              <span className="text-[14px]">
                                <br />
                                <p
                                  style={{
                                    lineHeight: "22px",
                                    marginTop: "5px",
                                  }}
                                >
                                  {code.aide}
                                </p>
                              </span>
                            )}
                            <div className="flex items-center mt-5">
                              <Link
                                href="/contact"
                                className="text-sm bg-[#f1b04e]  text-white py-2.5 px-5 rounded-md hover:bg-[#f1b04ea6] hover:text-white"
                              >
                                Contactez - nous
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : noMatch ? (
                      <div className="bg-white mt-5 p-4 rounded-lg shadow-xl">
                        <p className=" mb-2">CODE DÉFAUT INCONNU</p>
                        <p>Le code défaut saisi est inconnu</p>
                        <p className="mb-4">
                          Pour plus d'informations, merci de nous contacter
                        </p>
                        <Link
                          href="/contact"
                          className="text-sm bg-[#f1b04e]  text-white py-2.5 px-5 rounded-md hover:bg-[#f1b04ea6] hover:text-white"
                        >
                          Contactez - nous
                        </Link>
                        {generateH2Tags()}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Page;
