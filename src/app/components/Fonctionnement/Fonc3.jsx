"use client";
import Image from "next/image";
import React from "react";
import { RxCross2 } from "react-icons/rx";
import t3banner from "/public/images/t3.webp";

const Fonc3 = () => {
  return (
    <section id="Fonc3" className="mb-8 md:mb-0">
      <div>
        <div
          onClick={() => document.getElementById("fonc3").showModal()}
          className="card card-compact   shadow-xl cursor-pointer"
        >
          <figure>
            <Image src={t3banner} width={400} height={250} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-normal text-[15px] accent-color">
              Puits canadien vertical
            </h2>
            <p>
              Le puits canadien vertical est une solution de ventilation
              géothermique ...
              <span className="accent-color"> lire plus</span>
            </p>
          </div>
        </div>
      </div>
      <dialog id="fonc3" className="modal">
        <div className="modal-box w-11/12 max-w-7xl bg-white">
          <div className="modal-action">
            <form method="dialog">
              <button className="">
                <p className="accent-color font-normal flex items-center gap-2">
                  <RxCross2 />
                  Fermer
                </p>
              </button>
            </form>
          </div>
          <div className="">
            <div className="">
              <h2 className="text-gray-700 text-2xl">
                Puits Canadien vertical
              </h2>
            </div>
            <p className="mt-6 font-normal accent-color text-[15px]">
              Description
            </p>
            <p className="mt-3 text-gray-700 text-[15px] text-justify">
              Le puits canadien vertical est une solution de ventilation
              géothermique utilisant des forages verticaux pour exploiter les
              températures stables du sol. Contrairement au puits canadien
              classique qui nécessite une surface horizontale étendue, le puits
              vertical est particulièrement adapté aux terrains où l'espace est
              limité, mais il est principalement utilisé pour des projets
              industriels et de grande envergure plutôt que pour des résidences
              individuelles.
            </p>
            <p className="mt-3 text-gray-700 text-[15px] text-justify">
              Les canalisations, généralement en polyéthylène haute densité
              (PEHD), sont insérées dans des forages de 30 à 120 mètres de
              profondeur. Ces canalisations forment une boucle fermée remplie
              d'un fluide caloporteur qui circule pour échanger la chaleur avec
              le sol. L'air extérieur est aspiré, circule à travers ces
              canalisations et échange de la chaleur avec le sol avant d'être
              introduit dans le bâtiment.
            </p>
          </div>
          {/* <div className="md:flex gap-5 my-10">
            <Image src={noImages} alt="" />
            <Image src={noImages} alt="" />
          </div> */}
          <div className="">
            <p className="mt-3 font-normal accent-color text-[15px]">
              Avantages
            </p>
            <div className="">
              <ul>
                <ol>
                  <p className="text-gray-700 my-3 text-[15px]">
                    <span className="underline">
                      Efficacité Thermique Élevée
                    </span>{" "}
                    : Les forages profonds permettent un meilleur échange
                    thermique grâce à des températures plus stables en
                    profondeur.
                  </p>
                </ol>
                <ol>
                  <p className="text-gray-700 my-3 text-[15px]">
                    <span className="underline">Moins d'Espace Nécessaire</span>{" "}
                    : Idéal pour les terrains où l'espace horizontal est limité,
                    rendant ce système viable pour les environnements urbains et
                    industriels.
                  </p>
                </ol>
                <ol>
                  <p className="text-gray-700 my-3 text-[15px]">
                    <span className="underline">Performance Constante</span> :
                    Moins influencé par les variations de température de
                    surface, offrant une performance plus fiable et prévisible.
                  </p>
                </ol>
                <ol>
                  <p className="text-gray-700 my-3 text-[15px]">
                    <span className="underline">
                      Moins de Perturbation de Surface
                    </span>{" "}
                    : Ne nécessite pas de grandes tranchées horizontales, ce qui
                    réduit l'impact sur le paysage existant.
                  </p>
                </ol>
              </ul>
            </div>
          </div>
          <div className="mt-10">
            <p className="mt-3 font-normal accent-color text-[15px]">
              Inconvénients
            </p>
            <div className="">
              <ul>
                <ol>
                  <p className="text-gray-700 my-3 text-[15px]">
                    <span className="underline">Coût d'Installation Élevé</span>{" "}
                    : Le forage profond est plus coûteux et nécessite des
                    équipements spécialisés, augmentant ainsi les coûts
                    initiaux.
                  </p>
                </ol>
                <ol>
                  <p className="text-gray-700 my-3 text-[15px]">
                    <span className="underline">Complexité du Forage </span> :
                    La nature géologique du site peut compliquer le forage,
                    nécessitant des études géotechniques détaillées avant
                    l'installation.
                  </p>
                </ol>
                <ol>
                  <p className="text-gray-700 my-3 text-[15px]">
                    <span className="underline">Maintenance Plus Complexe</span>{" "}
                    : Les systèmes verticaux nécessitent une surveillance et une
                    maintenance régulières pour s'assurer de leur bon
                    fonctionnement, ce qui peut être plus complexe et coûteux
                    que pour les systèmes horizontaux.
                  </p>
                </ol>
                <ol>
                  <p className="text-gray-700 my-3 text-[15px]">
                    <span className="underline">
                      Moins Adapté aux Particuliers
                    </span>{" "}
                    : Principalement conçu pour les applications industrielles
                    et les grands projets, ce type de puits est rarement utilisé
                    pour les résidences individuelles en raison de son coût et
                    de sa complexité.
                  </p>
                </ol>
              </ul>
            </div>
          </div>

          <div className="my-10">
            <p className="mt-3 text-gray-700 text-[15px] text-justify">
              Le puits canadien vertical est idéal pour les projets industriels
              et commerciaux, ainsi que pour les bâtiments de grande envergure
              nécessitant un système de chauffage et de refroidissement efficace
              et durable. Il est particulièrement adapté aux sites urbains où
              l'espace est limité et où des forages profonds peuvent être
              réalisés sans perturber l'infrastructure existante.
            </p>
          </div>
        </div>
      </dialog>
    </section>
  );
};

export default Fonc3;
