"use client";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SuccessGuidance() {
  React.useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS with a duration of 1200ms
  }, []);

  return (
    <section className="max-w-[1420px] overflow-hidden py-32 lg:py-[218px] mx-auto px-4">
      {/* Header section */}
      <header className="text-center mb-20">
        <h1
          data-aos="zoom-in"
          className="text-primary font-bold sm:text-4xl text-3xl md:text-5xl font-georgia"
        >
          Success Guidance
        </h1>
        <p
          data-aos="fade-up"
          className="text-2xl font-normal mt-8 font-montserrat text-secondary"
        >
          Comprehensive Guides to Navigate the Home Buying and Selling Process
          with Confidence
        </p>
      </header>

      <div className="grid grid-cols-1 shadow  items-center gap-16 lg:gap-0">
        {/* 1st card */}
        {/* flex lg:flex-none flex-col-reverse lg:grid grid-cols-2 */}
        <div className="flex lg:grid grid-cols-2  justify-between   flex-col ">
          <figure
            className="flex items-center justify-center"
            data-aos="fade-right" // AOS animation for the left side
          >
            <Image
              src="https://i.ibb.co/X7LPkHd/Rectangle-152.png"
              height="618"
              width="710"
              alt="Buying Home Guide"
              className="w-full h-auto"
            />
          </figure>
          <article
            className="lg:flex  justify-center items-start gap-6 p-6 lg:p-20 sm:p-x-10 sm:py-16"
            data-aos="fade-left"
          >
            <div className=" hidden lg:block md:w-96 mt-6 border border-primary"></div>
            <div>
              <h2 className="text-2xl md:text-[32px] text-primary font-bold font-georgia">
                Sell with Confidence
              </h2>
              <p className="my-6 text-secondary font-normal text-lg md:text-xl text-justify font-montserrat">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis, sapiente nisi. Delectus illo totam labore vitae odio
                doloribus maxime sint cupiditate, minima dolore sed
                necessitatibus dicta? Numquam voluptas iusto cum.
              </p>
              <a
                href="#"
                className="bg-primary py-[14px] w-full text-xl md:text-2xl text-white font-medium block text-center font-montserrat hover:bg-blue-900 focus:outline-none focus:ring active:bg-blue-900"
              >
                Seller’s Guideline
              </a>
            </div>
          </article>
        </div>
        {/* 2nd card */}
        <div className="flex lg:flex-none flex-col-reverse lg:grid grid-cols-2">
          <article
            className="lg:flex  justify-center items-start gap-6 p-6 lg:p-20 sm:p-x-10 sm:py-16"
            data-aos="fade-right" // AOS animation for the left side
          >
            <div className=" hidden lg:block md:w-96 mt-6 border border-primary"></div>
            <div>
              <h2 className="text-2xl md:text-[32px] text-primary font-bold font-georgia">
                The Keys For Buying
              </h2>
              <p className="my-6 text-secondary font-normal text-lg md:text-xl text-justify font-montserrat">
                Unlock the Door to Your Dream Home: Essential Tips, Expert
                Advice, and Comprehensive Resources to Guide You Through Every
                Step of the Home Buying Process with Confidence and Ease.
              </p>
              <a
                href="#"
                className="bg-primary py-[14px] w-full text-xl md:text-2xl text-white font-medium block text-center font-montserrat hover:bg-blue-900 focus:outline-none focus:ring active:bg-blue-900"
              >
                Buyer’s Guideline
              </a>
            </div>
          </article>

          <figure
            className="flex items-center justify-center"
            data-aos="fade-left"
          >
            <Image
              src="https://i.ibb.co/Mn04dwb/Rectangle-152-3.png"
              height="618"
              width="710"
              alt="Buying Home Guide"
              className="w-full h-auto"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
