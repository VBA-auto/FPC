import Link from "next/link";
import SubHeader from "../components/SubHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Fonc1 from "../components/Fonctionnement/Fonc1";
import Fonc2 from "../components/Fonctionnement/Fonc2";
import Fonc3 from "../components/Fonctionnement/Fonc3";
import Fonc4 from "../components/Fonctionnement/Fonc4";
import FoncTable from "../components/Fonctionnement/FoncTable";
import Head from "next/head";

const Fonctionnement = () => {
  const pageDescription =
    "Choisissez parmi plusieurs types d'installations de puits canadien selon votre maison : neuf, rénovation, ou terrain particulier. Solutions adaptées à tous vos besoins";
  return (
    <section>
      <Head>
        <title>
          choisir son type de puits canadien en fonction de sa surface
        </title>
        <meta name="description" content={pageDescription} />
      </Head>
      <SubHeader />
      <Header />
      <section className="my-12 px-5 md:px-0">
        <div className="container mx-auto">
          <h2 className="text-gray-700 text-2xl mt-8 text-center">
            Les différents type de puits canadien
          </h2>
          <p className="accent-color text-center mt-2">
            Sélectionner le type pour plus d’information
          </p>
          <div className="md:flex gap-5 mt-16">
            {/* ///////////////////////////////// */}
            <div className="md:w-1/4">
              <Fonc1 />
            </div>

            {/* /////////////////////// */}
            <div className="md:w-1/4">
              <Fonc2 />
            </div>

            {/* ////////////////////////////// */}
            <div className="md:w-1/4">
              <Fonc3 />
            </div>

            {/* //////////////////////////////////////// */}
            <div className="md:w-1/4">
              <Fonc4 />
            </div>
          </div>

          <FoncTable />

          <div className="mt-12 md:block hidden">
            <h2 className="text-gray-700 text-[18px] italic mb-3">Sources :</h2>
            <div className="">
              <Link href="https://www.envirotechgeo.com/" target="_blank">
                <p className="accent-color underline italic">
                  {" "}
                  • Envirotech Geo - Difference Between Horizontal and Vertical
                  Geothermal Ground Loops
                </p>
              </Link>
              <Link href="https://www.familyhandyman.com/" target="_blank">
                <p className="accent-color underline my-3 italic">
                  {" "}
                  • Family Handyman - Geothermal Heat Pump Pros and Cons
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Fonctionnement;
