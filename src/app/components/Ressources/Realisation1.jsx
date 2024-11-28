import React from "react";
import RelaisationTab from "./RelaisationTab";

const Realisation1 = () => {
  return (
    <div>
      <section className="my-20 px-5 md:px-0">
        <div className="container mx-auto">
          {/* <div className="">
            <h2 className="text-white text-2xl">Réalisation</h2>
          </div> */}
          <div className="">
            <div className="">
              <h2 className="text-black text-2xl">Chaque projet est unique</h2>
              <p className="mt-3 text-black text-justify">
                Nous avons réalisé trois projets de puits canadiens, chacun
                optimisé pour son environnement spécifique. À Lyon, en Provence,
                et à Bordeaux, les installations ont été conçues pour maximiser
                l'efficacité thermique grâce à une intégration précise des
                conduits et des systèmes de ventilation.
              </p>
              <p className="mt-3 text-black text-justify">
                Ces réalisations démontrent notre expertise technique dans la
                mise en œuvre de puits canadiens, en assurant une régulation
                thermique naturelle et efficace, tout en s'adaptant aux
                contraintes de chaque site.
              </p>
            </div>
          </div>
          <div className="mt-16">
            <RelaisationTab />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Realisation1;
