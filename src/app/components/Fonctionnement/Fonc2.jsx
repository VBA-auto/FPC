"use client";
import Image from "next/image";
import React from "react";
import { RxCross2 } from "react-icons/rx";
import t2banner from "/public/images/t2.webp";

const Fonc2 = () => {
  return (
    <section id="Fonc2" className="mb-8 md:mb-0">
      <div>
        <div
          onClick={() => document.getElementById("fonc2").showModal()}
          className="card card-compact   shadow-xl cursor-pointer"
        >
          <figure>
            <Image src={t2banner} width={400} height={400} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-normal text-[15px] accent-color">
              Puits Canadien en Spirale
            </h2>
            <p>
              Le puits canadien en spirale est une variante du puits canadien
              classique où les ...
              <span className="accent-color"> lire plus</span>
            </p>
          </div>
        </div>
      </div>
      <dialog id="fonc2" className="modal">
        <div className="modal-box w-11/12 max-w-7xl bg-white">
          <div className="modal-action">
            <form method="dialog">
              <button className="">
                <p className="accent-color font-normal border-none flex items-center gap-2">
                  <RxCross2 />
                  Fermer
                </p>
              </button>
            </form>
          </div>
          <div className="">
            <div className="">
              <h2 className="text-gray-700 text-2xl">
                {" "}
                Puits canadien en spirale
              </h2>
            </div>
            <p className="mt-6 font-normal accent-color text-[15px]">
              Description
            </p>
            <p className="mt-3 text-gray-700 text-[15px] text-justify">
              Le puits canadien en spirale est une variante du puits canadien
              classique où les canalisations sont disposées en spirale sous
              terre. Cette configuration maximise le contact avec le sol,
              permettant un échange thermique plus efficace. Contrairement au
              puits classique qui utilise des canalisations horizontales, le
              puits en spirale est particulièrement adapté aux terrains
              restreints ou de petite taille.
            </p>
            <p className="mt-3 text-gray-700 text-[15px] text-justify">
              Les canalisations, souvent en PVC ou PEHD, sont enterrées à
              environ 2 mètres de profondeur. L'air extérieur, aspiré à travers
              une entrée d'air équipée d'un filtre, circule dans ces
              canalisations en spirale où il échange de la chaleur avec le sol
              avant d'être introduit dans la maison. Cette disposition en
              spirale augmente l'efficacité thermique, permettant de mieux
              préchauffer l'air en hiver et de le refroidir en été.
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
                    : La disposition en spirale maximise le contact avec le sol,
                    améliorant l'efficacité de l'échange thermique.
                  </p>
                </ol>
                <ol>
                  <p className="text-gray-700 my-3 text-[15px]">
                    <span className="underline">
                      Adapté aux Terrains Restreints{" "}
                    </span>{" "}
                    : Idéal pour les terrains de petite taille où une
                    installation horizontale classique n'est pas possible.
                  </p>
                </ol>
                <ol>
                  <p className="text-gray-700 my-3 text-[15px]">
                    <span className="underline">
                      Réduction des Coûts Énergétiques{" "}
                    </span>{" "}
                    : Permet de réduire les coûts de chauffage en hiver et de
                    climatisation en été.
                  </p>
                </ol>
                <ol>
                  <p className="text-gray-700 my-3 text-[15px]">
                    <span className="underline"> Polyvalence</span> : Peut être
                    installé dans divers types de sols, y compris les sols
                    argileux et sableux.
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
                    <span className="underline">
                      Installation Plus Complexe{" "}
                    </span>{" "}
                    : La configuration en spirale nécessite une conception et
                    une installation plus précises, ce qui peut augmenter les
                    coûts de main-d'œuvre et de matériaux.
                  </p>
                </ol>
                <ol>
                  <p className="text-gray-700 my-3 text-[15px]">
                    <span className="underline">Coût Initial Élevé</span> : Le
                    coût initial de l'installation peut être plus élevé par
                    rapport aux systèmes horizontaux classiques en raison de la
                    complexité accrue.
                  </p>
                </ol>
                <ol>
                  <p className="text-gray-700 my-3 text-[15px]">
                    <span className="underline">
                      Maintenance Plus Compliquée{" "}
                    </span>{" "}
                    : La maintenance est plus complexe en raison de la
                    disposition en spirale, nécessitant des inspections
                    régulières pour s'assurer que les canalisations restent
                    dégagées et fonctionnelles. Cela peut entraîner des coûts de
                    maintenance plus élevés et des difficultés supplémentaires
                    pour accéder aux conduits enterrés.
                  </p>
                </ol>
              </ul>
            </div>
          </div>

          <div className="my-10">
            <p className="mt-3 text-gray-700 text-[15px] text-justify">
              Le puits canadien en spirale est idéal pour les propriétaires de
              terrains de petite taille ou avec des restrictions d'espace. Il
              convient aux personnes recherchant une solution géothermique
              efficace et prêtes à investir dans une installation légèrement
              plus coûteuse et complexe pour bénéficier d'une efficacité
              thermique maximale.
            </p>
          </div>
        </div>
      </dialog>
    </section>
  );
};

export default Fonc2;
