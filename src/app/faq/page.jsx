"use client";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Footer from "../components/Footer";
import SubHeader from "../components/SubHeader";
import Header from "../components/Header";

const AccordionItem = ({ title, content, image, isOpen, onClick }) => (
  <div className="mb-3">
    <button
      className="w-full px-[10px] py-[5px] border border-[#56C96F] text-[#56C96F] rounded-md text-left flex justify-between items-center focus:outline-none"
      onClick={onClick}
    >
      <p className="">{title}</p>
      <p className="text-xl">{isOpen ? "-" : "+"}</p>
    </button>
    {isOpen && (
      <div className="border-b border-gray-200 py-[10px] px-[10px] text-gray-700">
        {Array.isArray(content) ? (
          <ul>
            {content.map((item, index) => (
              <li key={index} className="mb-2">
                <span className="underline">{item.term}</span>:{" "}
                {item.definition}
              </li>
            ))}
          </ul>
        ) : (
          <p dangerouslySetInnerHTML={{ __html: content }}></p>
        )}
        {image && (
          <Image
            width={800}
            height={500}
            loading="lazy"
            className="my-3 mx-auto"
            src={image}
            alt=""
          />
        )}
      </div>
    )}
  </div>
);

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const pageDescription =
    "Trouvez des réponses à toutes vos questions sur le puits canadien. Découvrez son fonctionnement, les avantages, l'installation et l'entretien pour un projet réussi.";

  return (
    <section className="">
      <Head>
        <title>toutes questions réponses sur le puits canadien</title>
        <meta name="description" content={pageDescription} />
      </Head>
      <SubHeader />
      <Header />
      <section className="installation px-5 md:px-0">
        <div className="relative">
          {/* Texte au-dessus de l'image */}
          <main className="py-[60px]">
            <div className="container mx-auto">
              <div className=" mb-5 text-center">
                <p className="text-[24px] font-semibold text-[#374151]">
                  Foire aux questions
                </p>
              </div>
              <div className="md:flex md:gap-5 gap-5 mt-8 flexdirection">
                <div className="md:w-[78%] mx-auto">
                  {accordionData.map((item, index) => (
                    <AccordionItem
                      key={index}
                      title={item.title}
                      content={item.answer}
                      image={item.image}
                      isOpen={openIndex === index}
                      onClick={() => toggleAccordion(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
      <Footer />
    </section>
  );
};

const accordionData = [
  {
    title: "Économie entre un puits canadien et une pompe à chaleur",
    answer:
      "Le puits canadien, utilisant la géothermie passive, est environ 17 fois plus économique en termes de consommation énergétique comparé à une pompe à chaleur. Ce système tire parti de l'inertie thermique du sol, stable toute l'année, pour préchauffer ou rafraîchir l'air avec une consommation d'énergie minimale, principalement limitée à la ventilation. En revanche, une pompe à chaleur utilise un cycle thermodynamique nécessitant un compresseur énergivore, augmentant ainsi les coûts d'exploitation.",
  },
  {
    title: "Quel est le coût d'installation d'un puits canadien ?",
    answer:
      "Le coût d'installation d'un puits canadien dépend de plusieurs facteurs clés : la nature du sol (argileux, sableux), la profondeur d'enfouissement des conduits (généralement 1,5 à 2 mètres), et la longueur des tubes nécessaires. Le choix des matériaux, tels que le PVC ou le polyéthylène haute densité, ainsi que le dimensionnement correct du système pour maximiser l'efficacité énergétique, influencent également le budget total. Ces éléments sont essentiels pour optimiser l'investissement tout en garantissant des performances thermiques optimales.",
  },
  {
    title: "Comment fonctionne un puits canadien ?",
    answer:
      "Un puits canadien fonctionne en utilisant l'inertie thermique du sol pour réguler la température de l'air entrant dans une habitation. L'air extérieur circule à travers un conduit enterré, où il est soit préchauffé en hiver, soit rafraîchi en été avant d'être distribué dans la maison. Ce processus repose sur la température stable du sol, généralement entre 10 et 15 °C.",
  },
  {
    title:
      "Quelle est la différence entre un puits provençal et un puits canadien ?",
    answer:
      "Le puits provençal, originaire de la région chaude de Provence, est conçu pour rafraîchir l'air entrant, en particulier durant les étés chauds. À l'inverse, le puits canadien, adapté aux climats froids du Canada, vise à réchauffer l'air en hiver. Bien que ces termes spécifiques soient souvent utilisés, le terme exact pour décrire ces systèmes est \"puits climatique\" ou \"échangeur air-sol\", car ils exploitent tous deux l'inertie thermique du sol pour réguler la température de l'air.",
  },
  {
    title: "Quels sont les avantages et inconvénients d'un puits canadien ?",
    answer:
      "Le puits canadien offre plusieurs avantages, notamment une réduction significative des coûts énergétiques en exploitant la température stable du sol pour chauffer ou rafraîchir l'air, tout en assurant une ventilation naturelle qui améliore la qualité de l'air intérieur. Sa durabilité en fait un investissement rentable à long terme. Cependant, l'installation implique un coût initial élevé et nécessite un entretien régulier. De plus, l'efficacité du système varie en fonction du type de sol et des conditions climatiques. Enfin, il n'existe actuellement aucune aide financière de l'État pour soutenir son installation.",
  },
  {
    title: "Quelle est la durée de vie d'un puits canadien ?",
    answer:
      "Un puits canadien peut durer entre 20 et 30 ans, voire plus, à condition d'un entretien régulier. Il est essentiel de bien entretenir le système d'évacuation de la condensation et des impuretés déjà en place. Cela permet de prévenir les accumulations qui pourraient affecter le fonctionnement et la longévité du puits, garantissant ainsi une performance optimale sur le long terme.",
  },
  {
    title: "Sur quelles régions intervenez-vous ?",
    answer:
      "Nous intervenons principalement en Île-de-France, mais nous réalisons également des projets de puits climatique en province, notamment dans le Sud, autour de Montpellier, à Nantes, et dans le nord de la France. Pour l'instant, nous avons décidé de limiter nos interventions à la France, bien que nous recevions parfois des demandes d'Espagne et d'Italie. En raison des normes spécifiques à chaque pays, nous avons choisi de nous concentrer exclusivement sur le territoire français pour le moment.",
  },
  {
    title:
      "Quels types de bâtiments peuvent bénéficier d'un puits climatique ?",
    answer:
      "Les puits climatiques sont adaptés à divers types de bâtiments, comme les maisons individuelles, les bâtiments commerciaux, les constructions passives, et les bâtiments industriels, grâce à leur capacité à améliorer l'efficacité énergétique. Il est cependant nécessaire de disposer d'un espace suffisant pour installer la tour d'entrée et la canalisation. Actuellement, nous nous concentrons exclusivement sur l'installation de puits climatiques dans les maisons individuelles.",
  },
  {
    title: "Comment entretenir son puits canadien ?",
    answer:
      "L'entretien d'un puits canadien inclut la vérification du système d'évacuation de la condensation pour prévenir l'humidité, ainsi que le nettoyage ou le remplacement annuel du filtre sur la tour d'entrée. Le système de ventilation intérieure, qui contient également des filtres, est facile à entretenir chaque année, garantissant ainsi une circulation d'air optimale et une bonne qualité de l'air dans le bâtiment.",
  },
  {
    title: "Quels sont les matériaux utilisés pour un puits canadien ?",
    answer:
      "Les conduits d'un puits canadien sont généralement fabriqués en PVC, polyéthylène haute densité (PEHD), ou en inox. Le choix du matériau dépend de sa résistance à la corrosion, à l'écrasement sous la pression du sol, et à sa perméabilité. Le PVC et le PEHD sont souvent privilégiés pour leur durabilité et leur facilité d'installation, tandis que l'inox, bien que plus coûteux, offre une excellente résistance à la corrosion et à la déformation.",
  },
  {
    title: "Quel type de sol est le plus adapté pour un puits climatique ?",
    answer:
      "Les sols argileux et sableux sont idéaux pour un puits canadien en raison de leur bonne conductivité thermique. Les sols argileux, riches en eau, offrent une excellente stabilité thermique, optimisant les échanges de chaleur entre l'air et le sol. Les sols sableux, bien que plus drainants, permettent un transfert thermique efficace tout en minimisant les risques de stagnation d'eau autour des conduits. En général, ces sols permettent de maximiser l'efficacité du système, surtout lorsque les conduits sont enfouis à une profondeur optimale de 1,5 à 2 mètres.",
  },
  {
    title: "Combien de temps faut-il pour installer un puits canadien ?",
    answer:
      "L'installation d'un puits canadien prend généralement 2 semaines, en fonction de la complexité du projet et des conditions du terrain. Ce délai inclut le terrassement, la pose des conduits à la profondeur optimale de 1,5 à 2 mètres, et l'installation de la tour d'entrée et des systèmes de ventilation. Les sols faciles à travailler peuvent accélérer le processus, tandis que des conditions plus difficiles, comme des sols rocheux ou des terrains en pente, peuvent prolonger la durée des travaux.",
  },
  {
    title: "Peut-on installer un puits canadien dans une maison ancienne ?",
    answer:
      "L'installation d'un puits canadien dans une maison ancienne est tout à fait réalisable, mais elle nécessite une étude technique approfondie. Cette analyse évalue la compatibilité structurelle, l'espace disponible pour l'intégration des conduits, et les contraintes spécifiques liées à l'ancienneté de la construction. Les fondations, la configuration du terrain, et les systèmes existants doivent être pris en compte pour garantir une installation optimale sans compromettre l'efficacité thermique du puits canadien.",
  },
  {
    title: "Quelle est la surface minimale du jardin pour un puits canadien ?",
    answer:
      "La surface minimale du jardin pour installer un puits canadien est d'environ 100 à 200 m². Cette taille permet de déployer les conduits sur 40 à 50 mètres, garantissant un échange thermique efficace avec le sol.",
  },
  {
    title:
      "Est-il nécessaire d'avoir un sous-sol pour faire un puits canadien ?",
    answer:
      "Non, un sous-sol ou une cave ne sont pas nécessaires pour installer un puits canadien. Le système peut être installé tant qu'il y a un accès à l'extérieur pour l'entrée et la sortie de l'air. L'installation se fait en enterrant les conduits dans le jardin, ce qui permet de bénéficier du puits canadien sans avoir besoin d'un espace intérieur spécifique comme un sous-sol ou une cave.",
  },
  {
    title: "Lexique à connaître sur l'échangeur air-sol",
    answer: [
      {
        term: "Inertie thermique",
        definition:
          "Capacité du sol à maintenir une température stable, essentielle pour échanger la chaleur avec l'air.",
      },
      {
        term: "Condensation",
        definition:
          "Transformation de l'humidité en eau dans les conduits, nécessitant une évacuation efficace.",
      },
      {
        term: "By-pass",
        definition:
          "Dispositif permettant de contourner le puits selon les besoins thermiques.",
      },
      {
        term: "Échangeur thermique",
        definition:
          "Conduits souterrains qui permettent le transfert de chaleur entre l'air et le sol.",
      },
      {
        term: "Ventilation passive",
        definition:
          "Circulation naturelle de l'air dans le système, sans moteur.",
      },
      {
        term: "Profondeur d'enfouissement",
        definition:
          "Niveau auquel les conduits sont enterrés pour optimiser l'efficacité thermique.",
      },
      {
        term: "Système de filtration",
        definition:
          "Filtres à l'entrée du système pour purifier l'air entrant et empêcher les nuisibles.",
      },
      {
        term: "Radon",
        definition:
          "Gaz radioactif naturel du sol, à surveiller dans les installations.",
      },
      {
        term: "Air vicié",
        definition:
          "Air pollué ou contaminé évacué par le système de ventilation.",
      },
      {
        term: "Pente",
        definition:
          "Inclinaison des conduits pour assurer l'évacuation de la condensation.",
      },
      {
        term: "Rendement de l'échangeur",
        definition:
          "Efficacité avec laquelle l'échangeur thermique transfère la chaleur entre l'air et le sol.",
      },
    ],
  },
];

export default Faq;
