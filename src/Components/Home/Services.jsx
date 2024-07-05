"use client";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Services() {
  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section
      className="max-w-[1420px] overflow-hidden mx-auto py-32 lg:py-[218px] px-4"
      id="services"
    >
      <div className="text-center mb-20">
        <h1
          className="  font-georgia text-primary font-bold sm:text-4xl text-3xl md:text-5xl font-georgia mb-4"
          data-aos="zoom-in"
        >
          Services
        </h1>
        <p
          className="text-xl md:text-2xl font-normal mt-8 font-montserrat text-secondary"
          data-aos="fade-up"
        >
          Exceptional Services Tailored to Your Real Estate Needs
        </p>
      </div>
      <div className="grid grid-cols-1  service-shadow rounded-2xl lg:gap-0 gap-10 overflow-hidden">
        {/* card 1 */}
        <div className="flex flex-col lg:flex-row" data-aos="fade-right">
          <div className="lg:w-1/2">
            <Image
              src="https://i.ibb.co/4fLKmXN/Rectangle-147.png"
              height="566"
              width="710"
              className="w-full bg-cover"
              alt="Sell Your Property"
            />
          </div>
          <div
            className="flex flex-col justify-center items-start gap-6 p-6 lg:p-24 sm:p-x-10 sm:py-16 lg:w-1/2"
            data-aos="fade-left"
          >
            <h2 className="font-bold text-3xl sm:text-4xl  text-primary font-georgia">
              Sell Your Property
            </h2>
            <p className="md:text-justify text-lg md:text-xl font-normal text-secondary font-montserrat">
              Expert Guidance to Maximize Your Home's Value: Comprehensive
              Marketing, Skilled Negotiation, and Seamless Transactions to
              Ensure a Successful Sale.
            </p>
            <a
              href="#"
              className="sm:w-auto rounded-md lg:rounded-xl bg-primary px-4 md:px-8 py-2 md:py-4 text-lg md:text-2xl font-medium md:font-semibold text-white shadow hover:bg-blue-900 focus:outline-none focus:ring active:bg-blue-900 hover:shadow-md font-open-sans"
            >
              List Your Property
            </a>
          </div>
        </div>

        {/* card 2 */}
        <div
          className="flex flex-col  lg:flex-row-reverse"
          data-aos="fade-right"
        >
          <div className="lg:w-1/2">
            <Image
              src="https://i.ibb.co/6gDh298/Rectangle-147-1.png"
              height="566"
              width="710"
              className="w-full bg-cover"
              alt="Sell Your Property"
            />
          </div>
          <div
            className="flex flex-col justify-center items-start gap-6 p-6 lg:p-24 sm:p-x-10 sm:py-16 lg:w-1/2"
            data-aos="fade-left"
          >
            <h2 className="font-bold  sm:text-4xl text-3xl text-primary font-georgia">
              Sell Your Property
            </h2>
            <p className="md:text-justify text-lg md:text-xl font-normal text-secondary font-montserrat">
              Expert Guidance to Maximize Your Home's Value: Comprehensive
              Marketing, Skilled Negotiation, and Seamless Transactions to
              Ensure a Successful Sale.
            </p>
            <a
              href="#"
              className="sm:w-auto rounded-md lg:rounded-xl bg-primary px-4 md:px-8 py-2 md:py-4 text-lg md:text-2xl font-medium md:font-semibold text-white shadow hover:bg-blue-900 focus:outline-none focus:ring active:bg-blue-900 hover:shadow-md font-open-sans"
            >
              List Your Property
            </a>
          </div>
        </div>

        {/* card 3 */}
        <div className="flex flex-col lg:flex-row" data-aos="fade-right">
          <div className="lg:w-1/2">
            <Image
              src="https://i.ibb.co/M5rF2sz/Rectangle-147-2.png"
              height="566"
              width="710"
              className="w-full bg-cover"
              alt="Sell Your Property"
            />
          </div>
          <div
            className="flex flex-col justify-center items-start gap-6 p-6 lg:p-24 sm:p-x-10 sm:py-16 lg:w-1/2"
            data-aos="fade-left"
          >
            <h2 className="font-bold text-3xl sm:text-4xl text-3xl text-primary font-georgia">
              Sell Your Property
            </h2>
            <p className="md:text-justify text-lg md:text-xl font-normal text-secondary font-montserrat">
              Expert Guidance to Maximize Your Home's Value: Comprehensive
              Marketing, Skilled Negotiation, and Seamless Transactions to
              Ensure a Successful Sale.
            </p>
            <a
              href="#"
              className="sm:w-auto rounded-md lg:rounded-xl bg-primary px-4 md:px-8 py-2 md:py-4 text-lg md:text-2xl font-medium md:font-semibold text-white shadow hover:bg-blue-900 focus:outline-none focus:ring active:bg-blue-900 hover:shadow-md font-open-sans"
            >
              List Your Property
            </a>
          </div>
        </div>

        {/* card 4 */}
        <div
          className="flex flex-col lg:flex-row-reverse"
          data-aos="fade-right"
        >
          <div className="lg:w-1/2">
            <Image
              src="https://i.ibb.co/Y7pXSy8/Rectangle-147-3.png"
              height="566"
              width="710"
              className="w-full bg-cover rounded-r-2xl rounded-t-none"
              alt="Sell Your Property"
            />
          </div>
          <div
            className="flex flex-col justify-center items-start gap-6 p-6 lg:p-24 sm:p-x-10 sm:py-16 lg:w-1/2"
            data-aos="fade-left"
          >
            <h2 className="font-bold text-3xl sm:text-4xl text-3xl text-primary font-georgia">
              Sell Your Property
            </h2>
            <p className="md:text-justify text-lg md:text-xl font-normal text-secondary font-montserrat">
              Expert Guidance to Maximize Your Home's Value: Comprehensive
              Marketing, Skilled Negotiation, and Seamless Transactions to
              Ensure a Successful Sale.
            </p>
            <a
              href="#"
              className="sm:w-auto rounded-md lg:rounded-xl bg-primary px-4 md:px-8 py-2 md:py-4 text-lg md:text-2xl font-medium md:font-semibold text-white shadow hover:bg-blue-900 focus:outline-none focus:ring active:bg-blue-900 hover:shadow-md font-open-sans"
            >
              List Your Property
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
