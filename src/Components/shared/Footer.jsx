"use client";
import Image from "next/image";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  React.useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <footer className="bg-[#112140] font-montserrat overflow-hidden">
      <div className="max-w-[1420px] py-[100px] mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-16 text-white">
          {/* Contact Information */}
          <section data-aos="fade-right">
            <h6 className=" font-semibold sm:text-4xl text-3xl lg:text-4xl font-georgia lg:mb-10 md:mb-7 mb-6">
              Robert Pattinson
            </h6>
            <p className="text-xl font-weight-400 text-[#FFFFFFCC]">
              Real Estate Professional
            </p>
            <h3 className="font-semibold text-2xl mt-20 font-open-sans">
              Contact Us
            </h3>
            <div className="mt-5 flex flex-col gap-4">
              <div className="flex items-center gap-x-4">
                <Image
                  src="https://i.ibb.co/0fB4qL5/Frame-456-1.png"
                  height="32"
                  width="32"
                  alt="Phone"
                />
                <p className="text-lg">(555) 123-4567</p>
              </div>
              <div className="flex items-center gap-x-4">
                <Image
                  src="https://i.ibb.co/6Wm0DmD/Frame-458-1.png"
                  height="32"
                  width="32"
                  alt="Email"
                />
                <p className="text-lg">robert.pattinson@xyzrealty.com</p>
              </div>
              <div className="flex items-center gap-x-4">
                <Image
                  src="https://i.ibb.co/Xb9xQJL/Frame-534.png"
                  height="32"
                  width="32"
                  alt="Address"
                />
                <p className="text-lg">1234 Broadway, New York, NY 10001</p>
              </div>
            </div>
          </section>

          {/* Useful Links */}
          <section data-aos="fade-up">
            <h6 className="font-semibold sm:text-4xl text-3xl lg:text-4xl font-georgia lg:mb-10 md:mb-7 mb-6">
              Useful Links
            </h6>
            <a
              href="#"
              className="block text-2xl font-weight-400 text-white mb-2"
            >
              Home
            </a>
            <a
              href="#"
              className="block text-2xl font-weight-400 text-white mb-2"
            >
              About Me
            </a>
            <a
              href="#"
              className="block text-2xl font-weight-400 text-white mb-2"
            >
              Jobs
            </a>
            <a href="#" className="block text-2xl font-weight-400 text-white">
              Press Kit
            </a>
          </section>

          {/* Additional Links */}
          <section data-aos="fade-left">
            <h6 className=" font-semibold sm:text-4xl text-3xl lg:text-4xl font-georgia lg:mb-10 md:mb-7 mb-6">
              Additional Links
            </h6>
            <a
              href="#"
              className="block text-2xl font-weight-400 text-white mb-2"
            >
              Terms of Use
            </a>
            <a
              href="#"
              className="block text-2xl font-weight-400 text-white mb-2"
            >
              Privacy Policy
            </a>
            <a href="#" className="block text-2xl font-weight-400 text-white">
              Cookie Policy
            </a>
          </section>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-[#C17767] py-4">
        <div className="max-w-[1420px] mx-auto px-4 grid-cols-1 grid lg:grid-cols-3 items-center lg:justify-between">
          <ul className="flex gap-x-2 px-1">
            <li>
              <a href="#" className="text-secondary text-xl">
                <Image
                  src="https://i.ibb.co/RcgMwDm/Frame-456.png"
                  height="32"
                  width="32"
                  alt="Facebook"
                />
              </a>
            </li>
            <li>
              <a href="#" className="text-secondary text-xl">
                <Image
                  src="https://i.ibb.co/NS9qWnT/Frame-457.png"
                  height="32"
                  width="32"
                  alt="Twitter"
                />
              </a>
            </li>
            <li>
              <a href="#" className="text-secondary text-xl">
                <Image
                  src="https://i.ibb.co/zs4RCS5/Frame-458.png"
                  height="32"
                  width="32"
                  alt="Instagram"
                />
              </a>
            </li>
          </ul>
          <div className="lg:text-center text-left mt-6 lg:mt-0">
            <p className="text-secondary text-base font-weight-400">
              Webflow Template by TECHPLATO.Inc
            </p>
            <p className="text-secondary text-base font-weight-400">
              All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
