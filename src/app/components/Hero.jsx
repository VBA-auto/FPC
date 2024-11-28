import Head from "next/head";

import Header from "./Header";
import SubHeader from "./SubHeader";
import Banner from "./Banner";
import Footer from "./Footer";

const Hero = () => {
  return (
    <section className="">
      <Head>
        <title>Automatic Transformation</title>
        {/* <meta name="description" content={pageDescription} /> */}
      </Head>
      <main>
        <div className="">
          <SubHeader />
          <Header />
          <div className="">
            <Banner />
          </div>
          <Footer />
        </div>
      </main>
    </section>
  );
};

export default Hero;
