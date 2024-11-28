import React from "react";

const FoncTable = () => {
  return (
    <div id="FoncTable" className="mt-16 md:block hidden">
      <h2 className="card-title text-[18px] accent-color mb-8">
        Avantages / inconvénients
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <p className="text-[14px] accent-color font-normal">
                  Type de Puits Canadien
                </p>
              </th>
              <th>
                <p className="text-[14px] accent-color font-normal">
                  Description
                </p>
              </th>
              <th>
                <p className="text-[14px] accent-color font-normal">
                  Avantages
                </p>
              </th>
              <th>
                <p className="text-[14px] accent-color font-normal">
                  Inconvénients
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th className="">
                <p className="text-[14px] text-gray-700 font-normal">
                  Puits Classique
                </p>
              </th>
              <td>
                <p className="text-[14px] text-gray-700 font-normal">
                  Canalisations enterrées horizontalement à environ 2 mètres de
                  profondeur, avec une pente légère pour évacuer la
                  condensation.
                </p>
              </td>
              <td>
                <p className="text-[14px] text-gray-700 font-normal">
                  Installation simple et rapide - Coût initial bas - Méthode
                  éprouvée utilisée dans 90% des installations - Adapté aux
                  particuliers
                </p>
              </td>
              <td>
                <p className="text-[14px] text-gray-700 font-normal">
                  Nécessite un espace extérieur suffisant - Moins efficace dans
                  les sols très secs ou rocheux - Peut nécessiter une
                  maintenance plus fréquente dans certaines conditions de sol
                </p>
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>
                <p className="text-[14px] text-gray-700 font-normal">
                  Puits Spirale
                </p>
              </th>
              <td>
                <p className="text-[14px] text-gray-700 font-normal">
                  Les canalisations sont disposées en spirale sous terre,
                  maximisant le contact avec le sol.
                </p>
              </td>
              <td>
                <p className="text-[14px] text-gray-700 font-normal">
                  Efficacité thermique élevée grâce à la disposition en spirale
                  - Idéal pour les terrains de petite taille
                </p>
              </td>
              <td>
                <p className="text-[14px] text-gray-700 font-normal">
                  Installation plus complexe - Conception précise nécessaire
                  pour garantir l'efficacité - Peut être plus coûteux en termes
                  de main-d'œuvre et de matériaux
                </p>
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>
                <p className="text-[14px] text-gray-700 font-normal">
                  Puits à Eau
                </p>
              </th>
              <td>
                <p className="text-[14px] text-gray-700 font-normal">
                  Utilise un circuit d'eau pour améliorer l'échange thermique.
                  L'eau circule dans des tuyaux enterrés et échange de la
                  chaleur avec le sol avant de réchauffer ou refroidir l'air
                  entrant.
                </p>
              </td>
              <td>
                <p className="text-[14px] text-gray-700 font-normal">
                  Améliore l'efficacité thermique - Idéal pour les sols secs ou
                  rocailleux - Stabilité de performance - Réduction des coûts
                  énergétiques
                </p>
              </td>
              <td>
                <p className="text-[14px] text-gray-700 font-normal">
                  Coût d'installation élevé - Maintenance plus complexe
                  nécessitant des compétences spécialisées - Nécessite une
                  gestion efficace de l'eau
                </p>
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>
                <p className="text-[14px] text-gray-700 font-normal">
                  Puits Vertical
                </p>
              </th>
              <td>
                <p className="text-[14px] text-gray-700 font-normal">
                  Utilise des forages verticaux profonds pour exploiter les
                  températures stables du sol.
                </p>
              </td>
              <td>
                <p className="text-[14px] text-gray-700 font-normal">
                  Nécessite moins de surface au sol - Efficace en milieu urbain
                  où l'espace horizontal est limité - Exploite les températures
                  stables à des profondeurs importantes
                </p>
              </td>
              <td>
                <p className="text-[14px] text-gray-700 font-normal">
                  Coût d'installation plus élevé en raison du forage profond -
                  Nécessite des permis spécifiques - Maintenance plus complexe
                  en raison de la profondeur des forages
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FoncTable;
