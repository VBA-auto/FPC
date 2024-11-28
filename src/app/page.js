// pages/page.js
import Head from "next/head";
import Hero from "./components/Hero";

const HomePage = () => {
  console.log(
    "FPCapp developed by Chowon Hasan via the company ClickAndTrust. and this is from vercel"
  );
  const pageDescription =
    "Réduisez vos coûts énergétiques avec un puits canadien. Ventilation naturelle efficace et économique pour une maison plus écologique et durable.";

  return (
    <>
      <Head>
        <title>spécaliste et expert en puits canadien en France</title>
        <meta name="description" content={pageDescription} />
      </Head>
      <div className="hidden">
        <h1>puits canadien </h1>
        <h2>puits provencal</h2>
        <h2>puits thermique</h2>
      </div>
      <Hero />
    </>
  );
};

export default HomePage;
