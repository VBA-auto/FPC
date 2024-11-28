"use client";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import SubHeader from "../components/SubHeader";
import Header from "../components/Header";
import Link from "next/link";

const page = () => {
  const pageDescription =
    "Consultez nos tarifs pour l'installation de puits canadien. Des solutions sur mesure et économiques pour optimiser le confort thermique de votre maison ou entreprise";
  return (
    <section className="">
      <Head>
        <title>tarifs installation puits canadien travaux</title>
        <meta name="description" content={pageDescription} />
      </Head>
      <SubHeader />
      <Header />

      <div id="main" className="container mx-auto px-5 md:px-0">
        <div className="my-12">
          <div className="">
            <h2 className="text-gray-700 text-2xl text-center">Tarifs</h2>
            <p className="accent-color mt-8 font-normal text-[15px]">
              Dépendance des Coûts à la Puissance et à la Surface
            </p>
            <p className="mt-3 text-gray-600 text-justify">
              Le coût d'installation d'un puits canadien varie en fonction de
              plusieurs facteurs clés, notamment la puissance nécessaire pour
              chauffer ou refroidir l'espace et la surface à traiter. Plus la
              puissance exigée est élevée, plus l'installation sera coûteuse. De
              même, une grande surface nécessitera une installation plus
              étendue, augmentant ainsi les coûts. Par exemple, pour une maison
              de 100 m², les besoins énergétiques standard influenceront
              différemment les coûts par rapport à une maison de 200 m² ou plus.
              Il est essentiel de dimensionner correctement le système pour
              garantir une efficacité optimale et maximiser les économies
              d'énergie.
            </p>
          </div>
          <div className="mt-12">
            <p className="accent-color mt-8 font-normal text-[15px]">
              Influence des Matériaux Utilisés
            </p>
            <p className="mt-3 text-gray-600 text-justify">
              Les matériaux utilisés dans la construction des puits canadiens
              ont un impact significatif sur le coût total. Lors de notre visite
              sur place, nous vous proposons plusieurs types de matériaux avec
              leurs avantages et inconvénients respectifs, vous permettant de
              faire un choix éclairé. Les canalisations en PVC, par exemple,
              sont plus abordables mais peuvent être moins durables que celles
              en polyéthylène haute densité (PEHD), qui, bien que plus
              coûteuses, offrent une meilleure résistance et une durée de vie
              plus longue. Le choix des matériaux doit être adapté aux besoins
              spécifiques du projet et au budget disponible, tout en assurant la
              meilleure performance thermique possible.
            </p>
          </div>

          <div className="mt-12">
            <p className="accent-color mt-8 font-normal text-[15px]">
              Variabilité Selon le Type de Puits Canadien
            </p>
            <p className="mt-3 text-gray-600 text-justify">
              Le type de puits canadien choisi influence également le coût. Les
              puits canadiens classiques, en spirale, verticaux et à eau
              présentent chacun des coûts d'installation et de maintenance
              différents. Les puits classiques sont généralement les moins
              coûteux et les plus simples à installer, tandis que les puits
              verticaux, nécessitant des forages profonds, sont plus onéreux et
              complexes. Les puits à eau, bien que très efficaces, impliquent
              des coûts additionnels liés à la gestion de l'eau et à la
              maintenance. Il est important de choisir le type de puits en
              fonction des contraintes du terrain, des besoins énergétiques et
              du budget.
            </p>
          </div>
          <div className="mt-12">
            <p className="mt-3 text-gray-600 text-justify">
              Pour obtenir un devis personnalisé et détaillé, cliquez sur le
              bouton ci-dessous. Notre équipe se déplace gratuitement pour
              évaluer vos besoins et vous proposer la solution la plus adaptée.
            </p>
            <div className="mt-8">
              <Link href="/contact">
                <button className="bg-transparent border border-[#56c96f] text-[#56c96f] hover:bg-[#56c96f] hover:text-white  hover:border-0 px-3 py-2 rounded-md">
                  Nous contacter
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default page;
