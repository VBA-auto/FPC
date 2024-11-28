"use client";
import Head from "next/head";
import team from "/public/images/team.webp";
import Footer from "../components/Footer";
import SubHeader from "../components/SubHeader";
import Header from "../components/Header";
import Image from "next/image";

const page = () => {
  const pageDescription =
    "Rencontrez notre équipe de spécialistes en construction avec plus de 10 ans d'expertise dans l'installation de puits canadien. Experts en solutions de ventilation naturelle pour projets résidentiels et professionnels.";
  return (
    <section className="">
      <Head>
        <title>Equipe spécialsite france puits canadien</title>
        <meta name="description" content={pageDescription} />
      </Head>
      <SubHeader />
      <Header />

      <div id="main" className="container mx-auto px-5 md:px-0">
        <div className="my-12">
          <div className="">
            <h2 className="text-black text-2xl text-center">Qui sommes nous</h2>
            <p className="accent-color mt-8 font-normal">Notre Équipe</p>
            <p className="mt-3 text-gray-600 text-justify">
              Nous sommes une équipe dévouée de sept personnes, chacune
              apportant une expertise unique dans le domaine des puits canadiens
              et de la rénovation énergétique. Nous intervenons partout en
              France pour offrir nos services et garantir des installations de
              qualité, adaptées aux besoins spécifiques de chaque client.
            </p>
          </div>
          <div className="my-12">
            <Image width={450} src={team} alt="" className="mx-auto" />
          </div>
          <div className="mt-12">
            <p className="accent-color mt-8 font-normal">Notre Histoire</p>
            <p className="mt-3 text-gray-600 text-justify">
              Depuis plus de cinq ans, nous nous spécialisons dans
              l'installation de puits canadiens, forts d'une expérience de plus
              de vingt ans dans le domaine du bâtiment et de la rénovation
              énergétique. Basée en Île-de-France, notre entreprise a évolué
              pour se concentrer sur les puits canadiens, convaincue que cette
              technologie représente l'avenir du chauffage et de la
              climatisation écologique.
            </p>
          </div>
          <div className="mt-12">
            <p className="accent-color mt-8 font-normal">Notre Engagement</p>
            <p className="mt-3 text-gray-600 text-justify">
              Nous nous engageons à rester à la pointe des nouvelles
              technologies en suivant régulièrement des formations spécialisées.
              Cela nous permet d'offrir à nos clients les solutions les plus
              innovantes et efficaces disponibles sur le marché. Notre équipe
              est composée de sept professionnels, chacun expert dans un domaine
              spécifique, garantissant un service complet et de haute qualité.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default page;
