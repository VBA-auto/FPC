"use client";
import Image from "next/image";
import React from "react";
import noImages1 from "/public/images/fonc1.webp";
import noImages2 from "/public/images/fonc1-2.webp";
import t1banner from "/public/images/p1.webp";
import { RxCross2 } from "react-icons/rx";

const Fonc1 = () => {
  return (
    <section id="Fonc1" className="mb-8 md:mb-0">
      <div>
        <div
          onClick={() => document.getElementById("fonc1").showModal()}
          className="card card-compact  shadow-xl cursor-pointer"
        >
          <figure>
            <Image
              src={t1banner}
              width={400}
              height={400}
              alt="product image"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-normal text-[15px] accent-color">
              Puits canadien classique
            </h2>
            <p>
              Le puits canadien classique est le type de puits le plus
              couramment utilisé ...{" "}
              <span className="accent-color">lire plus</span>
            </p>
          </div>
        </div>
      </div>

      <dialog id="fonc1" className="modal">
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
                {" "}
                Puits canadien classique
              </h2>
            </div>
            <p className="mt-6 font-normal accent-color text-[15px]">
              Description
            </p>
            <p className="mt-3 text-gray-700 text-justify text-[15px]">
              Le puits canadien classique est le type de puits le plus
              couramment utilisé, représentant environ 90 % des installations.
              Il utilise des canalisations enterrées horizontalement pour
              échanger de la chaleur avec le sol, permettant ainsi de
              préchauffer l'air en hiver et de le rafraîchir en été. Ce système
              est réputé pour être le plus économique et le plus rapide à mettre
              en place.
            </p>
            <p className="mt-3 text-gray-700 text-justify text-[15px]">
              Les canalisations, généralement en PVC ou PEHD, sont enterrées à
              environ 2 mètres de profondeur avec une légère pente pour
              faciliter l'évacuation de la condensation. L'air extérieur, aspiré
              à travers une entrée d'air équipée d'un filtre, circule dans les
              canalisations où il échange de la chaleur avec le sol avant d'être
              introduit dans la maison.
            </p>
          </div>
          <div className="md:flex gap-5 my-10">
            <Image src={noImages1} alt="" />
            <Image src={noImages2} alt="" />
          </div>
          <div className="">
            <p className="mt-3 font-normal accent-color text-[15px]">
              Avantages
            </p>
            <div className="">
              <ul className="">
                <ol>
                  <p className="text-gray-700 my-3 text-[15px]">
                    <span className="underline">Économique</span> : C'est la
                    méthode la moins coûteuse à mettre en place.
                  </p>
                </ol>
                <ol>
                  <p className="text-gray-700 my-3 text-[15px]">
                    <span className="underline">Simple à installer</span> :
                    L'installation est rapide et ne nécessite pas d'équipements
                    spécialisés.
                  </p>
                </ol>
                <ol>
                  <p className="text-gray-700 my-3 text-[15px]">
                    <span className="underline">Efficace</span> : Fonctionne
                    bien pour la majorité des maisons, fournissant un chauffage
                    et un refroidissement passifs et économes en énergie.
                  </p>
                </ol>
                <ol>
                  <p className="text-gray-700 my-3 text-[15px]">
                    <span className="underline">
                      Réduction des coûts énergétiques{" "}
                    </span>{" "}
                    : Réduit les dépenses de chauffage en hiver et de
                    climatisation en été.
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
                    <span className="underline">Nécessite un jardin</span> : Un
                    espace extérieur suffisant est obligatoire pour
                    l'installation des canalisations.
                  </p>
                </ol>
                <ol>
                  <p className="text-gray-700 my-3 text-[15px]">
                    <span className="underline">
                      Efficacité limitée dans certains types de sol{" "}
                    </span>{" "}
                    : Moins efficace dans les sols très secs ou rocheux, ce qui
                    peut nécessiter une maintenance plus fréquente.
                  </p>
                </ol>
              </ul>
            </div>
          </div>

          <div className="my-10">
            <p className="mt-3 text-gray-700 text-[15px] text-justify">
              Le puits canadien classique est une solution pratique et
              économique pour la ventilation géothermique des maisons
              individuelles. Il offre un excellent rapport qualité-prix et une
              installation relativement simple, à condition de disposer de
              suffisamment d'espace extérieur pour les canalisations. En résumé,
              c'est une option idéale pour ceux qui cherchent à réduire leurs
              coûts énergétiques tout en adoptant une approche durable pour le
              chauffage et la climatisation de leur maison.
            </p>
          </div>
        </div>
      </dialog>
    </section>
  );
};

export default Fonc1;
