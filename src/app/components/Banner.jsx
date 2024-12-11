"use client";
import React from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import AnimateButton from "./AnimateButton";

const Banner = () => {
  return (
    <section className="">
      <div className="">
        <div className="md:mt-7 mt-5">
          <div className="mx-auto relative">
            <div className="md:w-[1270px] relative mx-auto px-5 md:px0">
              <h2 className=" text-2xl text-center text-gray-700 mb-5">
                Bienvenue chez{""} <br className="block md:hidden " />
                <span className="accent-color">FRANCE PUITS CANADIEN</span>
              </h2>
              <video
                preload="metadata"
                autoPlay
                loop
                muted
                className="mx-auto videos md:w-[1000px] md:h-[550px] w-auto h-[230px] object-cover rounded-md"
              >
                <source src="/images/bannervideo.webm" type="video/webm" />
                {/* <source src="/public/images/Banvideo.webm" type="video/webm" /> */}
              </video>
              <Link
                href="https://api.whatsapp.com/send?phone=0757831203"
                target="_blank"
              >
                <div className="absolute md:right-40 right-6 md:bottom-8 bottom-2 accent-bg p-3 rounded-full">
                  <FaWhatsapp className="text-2xl  rounded-md  text-white" />
                </div>
              </Link>

              <div>
                <AnimateButton />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 md:px-0">
        <div id="video" className="container mx-auto my-6 ">
          <p className="text-[18px] text-center text-gray-700">
            Experts en puits canadiens (échangeur air sol) pour un confort
            thermique <strong>écologique</strong> et <strong>économique</strong>
            .
          </p>
        </div>
        <div className="md:w-[1000px] mx-auto ">
          <div className="video-wrapper">
            <iframe
              className="video-iframe"
              src="https://www.youtube.com/embed/O3tVm6ekO5c?si=8mUFwu4b4UYMYZu8"
              title="YouTube video player"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="md:flex gap-5 my-12">
            <div className="">
              <h2 className=" text-[15px] accent-color underline mb-2">
                {/* Use an anchor tag for the scrollable link */}
                <Link href="/produits/#FoncTable">
                  <p className="text-normal">
                    <span className="">{">"}</span> Avantages et inconvénients
                    du puits climatique
                  </p>
                </Link>
              </h2>
              <p className="text-gray-700 text-justify">
                Contactez-nous dès aujourd'hui pour un devis gratuit pour un air
                pur et pour un confort thermique optimal toute l'année.
              </p>
              <div className="mt-5">
                <Link href="/contact" className=" ">
                  <button className="bg-transparent border border-[#56c96f] text-[#56c96f] hover:bg-[#56c96f] hover:text-white  hover:border-0 px-3 py-2 rounded-md">
                    Nous contacter
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
