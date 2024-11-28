import Image from "next/image";
import React from "react";
import pro31 from "/public/images/pro3-1.webp";
import pro32 from "/public/images/pro3-2.webp";
import pro33 from "/public/images/pro3-3.webp";
import pro34 from "/public/images/pro3-4.webp";
import pro21 from "/public/images/project-2-1.webp";
import pro22 from "/public/images/fonc1-2.webp";
import p11 from "/public/images/p1-1.webp";
import p22 from "/public/images/p2-2.webp";
import p33 from "/public/images/p3-3.webp";
import p44 from "/public/images/p4-4.webp";

const RelaisationTab = () => {
  return (
    <div>
      <div role="tablist" className="tabs tabs-bordered">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab tabHead"
          aria-label="Projet 1"
          defaultChecked
        />

        <div role="tabpanel" className="tab-content  pt-10">
          <h2 className="text-lg  font-semibold text-gray-700">
            Maison Individuelle à Lyon
          </h2>
          <div className="md:flex gap-5 mt-10 mb-5">
            <div className="md:w-1/2">
              <Image src={p11} className="w-full mb-5 md:mb-0" alt="" />
            </div>
            <div className="md:w-1/2">
              <Image src={p22} className="w-full mb-5 md:mb-0" alt="" />
            </div>
            <div className="md:w-1/2">
              <Image src={p33} className="w-full mb-5 md:mb-0" alt="" />
            </div>
            <div className="md:w-1/2">
              <Image src={p44} className="w-full mb-5 md:mb-0" alt="" />
            </div>
          </div>
          <div className="">
            <p className="mt-3 font-semibold accent-color">Description</p>
            <p className="mt-3 text-black text-justify">
              Pour cette maison à Lyon, un puits canadien a été installé avec
              des conduits enterrés dans un sol argileux, idéal pour une bonne
              inertie thermique. Ce système assure une régulation efficace de la
              température intérieure, réduisant les besoins en chauffage et en
              climatisation.
            </p>
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab tabHead"
          aria-label="Projet 2"
        />
        <div role="tabpanel" className="tab-content  pt-10">
          <h2 className="text-lg  font-semibold text-gray-700">
            Résidence Secondaire en Provence
          </h2>
          <div className="md:flex gap-5 my-10">
            <div className="md:w-1/2">
              <Image src={pro21} className="w-full mb-5 md:mb-0" alt="" />
            </div>
            <div className="md:w-1/2">
              <Image src={pro22} className="w-full mb-5 md:mb-0" alt="" />
            </div>
          </div>
          <div className="">
            <p className="mt-3 font-semibold accent-color">Description</p>
            <p className="mt-3 text-black text-justify">
              Dans cette résidence en Provence, le puits canadien optimise la
              fraîcheur durant l'été. Les conduits, installés dans un sol
              calcaire, permettent de maintenir une température intérieure
              agréable, limitant ainsi l'utilisation de la climatisation.
            </p>
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab tabHead"
          aria-label="Projet 3"
        />
        <div role="tabpanel" className="tab-content  pt-10">
          <h2 className="text-lg  font-semibold text-gray-700">
            Maison à Bordeaux
          </h2>
          <div className="md:flex gap-5 my-10">
            <div className="md:w-1/2">
              <Image src={pro31} className="w-full mb-5 md:mb-0" alt="" />
            </div>
            <div className="md:w-1/2">
              <Image src={pro32} className="w-full mb-5 md:mb-0" alt="" />
            </div>
            <div className="md:w-1/2">
              <Image src={pro33} className="w-full mb-5 md:mb-0" alt="" />
            </div>
            <div className="md:w-1/2">
              <Image src={pro34} className="w-full mb-5 md:mb-0" alt="" />
            </div>
          </div>
          <div className="">
            <p className="mt-3 font-semibold accent-color">Description</p>
            <p className="mt-3 text-black text-justify">
              À Bordeaux, le puits canadien installé dans un sol sableux régule
              efficacement la température tout au long de l'année. Le système,
              équipé d'un by-pass et de filtres, garantit une performance
              énergétique élevée en ajustant l'entrée d'air en fonction des
              conditions extérieures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelaisationTab;
