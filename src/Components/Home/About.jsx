"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section
      className="max-w-[1420px] overflow-hidden mx-auto py-32 lg:py-[218px] "
      id="about"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-24 lg:gap-x-10 mx-4">
        <div>
          <div className="relative mr-4" data-aos="fade-right">
            {/* Primary Image */}
            <Image
              height="624"
              width="527"
              className=""
              src="https://i.ibb.co/dg8kg97/Rectangle-144.png"
              alt="Owner Image"
            />
            {/* Secondary Image */}
            <Image
              height="624"
              width="527"
              className="absolute top-4 left-4"
              src="https://i.ibb.co/gmtGJg2/Rectangle-145.png"
              alt="Owner Image"
            />
          </div>
        </div>
        <div>
          <h1
            className="text-primary font-bold sm:text-4xl text-3xl md:text-5xl font-georgia"
            data-aos="fade-left"
          >
            About Alan Stephen
          </h1>
          <p
            className="text-xl md:text-2xl text-justify font-normal font-montserrat text-secondary my-10 lg:my-12"
            data-aos="fade-up"
          >
            Hi, I’m Alan Stephen, a Senior Broker at Lifespring Realty with 15
            years of NYC real estate experience.
            <br />
            <br />
            Specializing in luxury residential and commercial real estate, I
            offer expertise in high-end homes and in-depth market analysis to
            help clients make informed buying or selling decisions. My roles
            include client representation, negotiation, transaction management,
            and marketing. I offer extensive NYC real estate knowledge, strong
            communication, industry connections, and meticulous transaction
            attention. <br />
            <br />
            Recognized as a top broker with awards for sales excellence, high
            client satisfaction, and active community involvement through
            charity events and real estate associations.
          </p>
          <div data-aos="zoom-in">
            <a
              href="#contact"
              className="sm:w-auto rounded-md lg:rounded-xl bg-primary px-4 md:px-8 py-2 md:py-4 text-lg md:text-2xl font-medium md:font-semibold text-white shadow hover:bg-blue-900 focus:outline-none focus:ring active:bg-blue-900 hover:shadow-md font-open-sans"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
