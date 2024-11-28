"use client";
import React from "react";
import SubHeader from "../components/SubHeader";
import Header from "../components/Header";

import Footer from "../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

//
import img1 from "/public/images/1.webp";
import img2 from "/public/images/2.webp";
import img3 from "/public/images/3.webp";
import img4 from "/public/images/4.webp";
import img5 from "/public/images/5.webp";
import img6 from "/public/images/6.webp";
import img7 from "/public/images/7.webp";
import img8 from "/public/images/8.webp";
import img9 from "/public/images/9.webp";
import Realisation1 from "../components/Ressources/Realisation1";
import Head from "next/head";

const page = () => {
  const pageDescription =
    "Découvrez nos réalisations de puits canadien pour maisons individuelles et professionnels. Des installations performantes et sur mesure pour tous vos projets";

  const settings = {
    infinite: true,
    slidesToShow: 5,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrow: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };
  return (
    <section>
      <Head>
        <title>exemples de projets de France Puits Canadien </title>
        <meta name="description" content={pageDescription} />
      </Head>
      <SubHeader />
      <Header />

      <div className="container mx-auto px-5 md:px-0">
        <h2 className="text-black text-2xl text-center mt-12 mb-6">
          Réalisation
        </h2>
        <div className="slider-container">
          <Slider {...settings}>
            <div className="">
              <Image className="p-2" src={img1} alt="" />
            </div>
            <div>
              <Image className="p-2" src={img2} alt="" />
            </div>
            <div>
              <Image className="p-2" src={img3} alt="" />
            </div>
            <div>
              <Image className="p-2" src={img4} alt="" />
            </div>
            <div>
              <Image className="p-2" src={img5} alt="" />
            </div>
            <div>
              <Image className="p-2" src={img6} alt="" />
            </div>
            <div>
              <Image className="p-2" src={img7} alt="" />
            </div>
            <div>
              <Image className="p-2" src={img8} alt="" />
            </div>
            <div>
              <Image className="p-2" src={img9} alt="" />
            </div>
          </Slider>
        </div>
      </div>
      <Realisation1 />
      <Footer />
    </section>
  );
};

export default page;
