/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from "next/image";

const reviews = [
  {
    image: "https://i.ibb.co/n6zBPND/Rectangle-151.png",
    text: "As a first-time homebuyer, I was nervous about the whole process, but Alan Stephen provided expert guidance every step of the way. Their knowledge and patience made all the difference. Thank you!",
    author: "John & Emily S.",
  },
  {
    image: "https://i.ibb.co/n6zBPND/Rectangle-151.png",
    text: "Working With Alan Stephen Was An Absolute Pleasure. They Made The Process Of Selling Our Home Seamless And Stress-Free, Securing Us An Excellent Price In Record Time. Highly Recommend!",
    author: "Michael R.",
  },
  {
    image: "https://i.ibb.co/n6zBPND/Rectangle-151.png",
    text: "Alan Stephen Went Above And Beyond To Help Us Find Our Dream Home. Their Attention To Detail And Dedication Were Unmatched. We Couldn't Be Happier With The Service We Received!",
    author: "Linda K",
  },
  {
    image: "https://i.ibb.co/n6zBPND/Rectangle-151.png",
    text: "I Had A Fantastic Experience With Alan Stephen. Their Market Expertise And Negotiation Skills Helped Me Get A Great Deal On A Beautiful Property. I Would Definitely Work With Them Again In The Future.",
    author: "Patricio M",
  },
];

export default function Testimonial() {
  useEffect(() => {
    const splide = new Splide("#image-carousel", {
      type: "loop",
      autoplay: true,
      interval: 5000,
      padding: "1rem",
      gap: "1rem",
      perPage: 1,
      breakpoints: {
        1024: {
          perPage: 1,
        },
      },
    }).mount();
  }, []);

  const renderReviewGroup = (reviewGroup) =>
    reviewGroup.map((review, index) => (
      <div key={index} className="mx-2">
        <div className="group border border-primary md:flex hover:bg-primary hover:text-white text-secondary rounded-lg transition-all duration-300">
          <Image
            src={review.image}
            height="180"
            width="241"
            alt="client Image"
            className="lg:border-r-1 border-none w-full md:w-auto group-hover:border-white"
          />
          <div className="text-center my-auto px-10 py-5 group-hover:text-white group-hover:border-white  transition-all duration-300">
            <p className="text-xl font-normal md:border-x-2 md:border-primary group-hover:border-white transition-all duration-100 md:px-5 font-montserrat">
              {review.text}
            </p>
            <h2 className="text-2xl font-normal mt-8 pt-2 md:mt-4 border-t-1 border md:border-0 border-primary border-x-0 border-b-0 font-georgia group-hover:text-white group-hover:border-white">
              {review.author}
            </h2>
          </div>
        </div>
      </div>
    ));

  return (
    <div className="max-w-[1420px] overflow-hidden py-32 lg:py-[218px] mx-auto">
      <div className="text-center mb-8">
        <h1
          data-aos="zoom-in"
          className="text-primary font-bold sm:text-4xl text-3xl md:text-5xl font-georgia"
        >
          Testimonial
        </h1>
        <p
          data-aos="fade-up"
          className="text-2xl font-normal mt-8 font-montserrat text-secondary"
        >
          Genuine Reviews and Experiences of Those We've Helped Achieve Their
          Real Estate Goals
        </p>
      </div>
      <section
        id="image-carousel"
        className="splide"
        aria-label="Beautiful Images"
      >
        <div className="splide__track">
          <ul className="splide__list">
            {reviews.map((review, index) => (
              <li key={index} className="splide__slide py-20">
                <div className="grid grid-cols-1 gap-6">
                  {renderReviewGroup([review])}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
