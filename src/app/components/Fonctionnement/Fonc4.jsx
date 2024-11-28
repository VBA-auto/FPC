"use client";
import Image from "next/image";
import React from "react";
import { RxCross2 } from "react-icons/rx";
import t4banner from "/public/images/t4.webp";

const Fonc4 = () => {
  return (
    <section id="Fonc4" className="mb-8 md:mb-0">
      <div>
        <div
          onClick={() => document.getElementById("fonc4").showModal()}
          className="card card-compact   shadow-xl cursor-pointer"
        >
          <figure>
            <Image src={t4banner} width={400} height={250} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-normal text-[15px] accent-color">
              Puits Canadien à Eau
            </h2>
            <p>
              Le puits canadien à eau, également connu sous le nom de système
              géother ...
              <span className="accent-color"> lire plus</span>
            </p>
          </div>
        </div>
      </div>
      <dialog id="fonc4" className="modal">
        <div className="modal-box w-11/12 max-w-7xl bg-white">
          <div className="modal-action">
            <form method="dialog">
              <button className="">
                <p className="accent-color font-normal flex items-center">
                  <RxCross2 />
                  Fermer
                </p>
              </button>
            </form>
          </div>
          <div className="">
            <div className="">
              <h2 className="text-gray-700 text-2xl">Puits Canadien à Eau</h2>
            </div>
            <p className="mt-6 font-normal accent-color text-[15px]">
              Description
            </p>
            <p className="mt-3 text-gray-700 text-[15px] text-justify">
              Le puits canadien à eau, également connu sous le nom de système
              géothermique en boucle fermée, utilise un circuit d'eau pour
              améliorer l'échange thermique. Ce système consiste en des
              canalisations enterrées qui circulent de l'eau mélangée à un
              fluide caloporteur. Contrairement aux puits canadiens classiques
              et en spirale, ce type de système utilise l'eau pour transporter
              la chaleur entre la maison et le sol, offrant une efficacité
              thermique améliorée.
            </p>
            <p className="mt-3 text-gray-700 text-[15px] text-justify">
              Les canalisations sont enterrées horizontalement ou verticalement
              selon les contraintes du terrain et la disponibilité de l'espace.
              L'eau circule dans ces canalisations, échangeant de la chaleur
              avec le sol avant de retourner dans la maison pour être
              redistribuée.
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
                      Efficacité Thermique Améliorée
                    </span>{" "}
                    : Utilise l'eau comme fluide caloporteur, offrant une
                    meilleure capacité de transfert thermique comparée à l'air.
                  </p>
                </ol>
                <ol>
                  <p className="text-gray-700 my-3 text-[15px]">
                    <span className="underline">Polyvalence</span> : Peut être
                    installé dans divers types de sols et configurations,
                    horizontalement ou verticalement.
                  </p>
                </ol>
                <ol>
                  <p className="text-gray-700 my-3 text-[15px]">
                    <span className="underline">Stabilité de Performance</span>{" "}
                    : Moins affecté par les variations saisonnières de
                    température, offrant une performance constante tout au long
                    de l'année.
                  </p>
                </ol>
                <ol>
                  <p className="text-gray-700 my-3 text-[15px]">
                    <span className="underline">
                      Réduction des Coûts Énergétiques
                    </span>{" "}
                    : Permet de réaliser des économies significatives sur les
                    coûts de chauffage en hiver et de climatisation en été.
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
                    : Le coût initial est plus élevé en raison de la complexité
                    accrue du système et de la nécessité de forages plus
                    profonds pour les configurations verticales.
                  </p>
                </ol>
                <ol>
                  <p className="text-gray-700 my-3 text-[15px]">
                    <span className="underline">Complexité de Maintenance</span>{" "}
                    : La maintenance est plus complexe et peut nécessiter des
                    compétences spécialisées pour s'assurer que le système
                    fonctionne de manière optimale.
                  </p>
                </ol>
                <ol>
                  <p className="text-gray-700 my-3 text-[15px]">
                    <span className="underline">
                      Besoin de Gestion de l'Eau
                    </span>{" "}
                    : Nécessite une gestion efficace de l'eau, incluant des
                    systèmes pour éviter les fuites et la contamination.
                  </p>
                </ol>
              </ul>
            </div>
          </div>

          <div className="my-10">
            <p className="mt-3 text-gray-700 text-[15px] text-justify">
              Le puits canadien à eau est idéal pour les projets industriels et
              commerciaux de grande envergure. Il est particulièrement adapté
              aux sites nécessitant une efficacité thermique maximale et
              disposant de l'espace et des ressources nécessaires pour une
              installation plus complexe. Les grandes propriétés résidentielles
              avec des besoins énergétiques élevés peuvent également bénéficier
              de ce système, bien que ce soit moins courant pour les résidences
              individuelles. Cependant, cela reste coûteux en installation et en
              maintenance.
            </p>
          </div>
        </div>
      </dialog>
    </section>
  );
};

export default Fonc4;
