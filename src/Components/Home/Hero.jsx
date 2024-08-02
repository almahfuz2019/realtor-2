"use client";
import Image from "next/image";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  React.useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS with a duration of 1200ms
  }, []);

  return (
    <section className="relative lg:px-0 -mt-28 overflow-hidden">
      {/* Hero section background */}
      <div
        className="relative bg-[url('/Images/Home/nackground.png')] bg-cover bg-center bg-no-repeat"
        data-aos="fade-in"
      >
        {/* <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div> */}

        <div className="relative mx-auto max-w-[1420px] px-4 h-[64vh] sm:h-[70vh] lg:h-screen flex flex-col items-start justify-center ">
          <div className="lg:max-w-xl text-center sm:text-left flex flex-col items-center sm:items-start mt-20 2xl:mt-0">
            <h1
              className="sm:text-4xl text-3xl md:text-5xl md:leading-[55px] font-bold text-secondary font-georgia text-left"
              data-aos="fade-up"
            >
              Unlocking the door to your perfect home
            </h1>

            <div className="mt-10 sm:mt-20 flex gap-3 md:gap-8 justify-start w-full">
              <a
                href="#"
                className="sm:w-auto rounded-md lg:rounded-xl bg-primary px-4 md:px-8 py-2 md:py-4 text-lg md:text-2xl font-medium md:font-semibold text-white shadow hover:bg-blue-900 focus:outline-none focus:ring active:bg-blue-900 hover:shadow-md font-open-sans"
                data-aos="fade-right"
              >
                Explore Listing
              </a>

              <a
                href="#"
                className="sm:w-auto rounded-md lg:rounded-xl px-4 md:px-8 py-2 md:py-4 text-lg md:text-2xl border border-secondary font-medium md:font-semibold text-secondary shadow flex items-center justify-center gap-2 lg:gap-4 hover:shadow-md hover:border-primary focus:outline-none focus:ring font-open-sans"
                data-aos="fade-left"
              >
                <Image
                  src="/Images/Home/call.webp"
                  height="24"
                  width="24"
                  alt="Call Icon"
                  className="h-auto w-auto"
                />
                Book A Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
