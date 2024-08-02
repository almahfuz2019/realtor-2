"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Featured() {
  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const properties = [
    {
      id: 1,
      image: "/Images/Featured/Featured_image1.webp",
      address: "45/A, Kennedy Road, NY",
      price: "$23,20,545",
      beds: 3,
      baths: 2,
      area: 430,
      status: "For Sale",
      type: "Residential",
      community: "Indo-african",
    },
    {
      id: 2,
      image: "/Images/Featured/Featured_image2.webp",
      address: "45/A, Kennedy Road, NY",
      price: "$2,406",
      beds: 3,
      baths: 2,
      area: 430,
      status: "For Rent",
      type: "Residential",
      community: "Indo-african",
    },
    {
      id: 3,
      image: "/Images/Featured/Featured_image3.webp",
      address: "45/A, Kennedy Road, NY",
      price: "$10,545",
      beds: 3,
      baths: 2,
      area: 430,
      status: "For Lease",
      type: "Office",
      community: "Indo-african",
    },
  ];

  return (
    <section
      className="max-w-[1420px] overflow-hidden mx-auto py-32 lg:py-[210px] px-4"
      id="listing"
    >
      <div className="text-center mb-20">
        <h1
          className=" font-georgia text-primary font-bold sm:text-4xl text-3xl md:text-5xl font-georgia mb-4"
          data-aos="zoom-in"
        >
          Featured Listings
        </h1>
        <p
          className="text-xl md:text-2xl font-normal mt-8 font-montserrat text-secondary"
          data-aos="fade-up"
        >
          Handpicked Listings of the Finest Homes and Estates Available in the
          Market
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {properties.map((property) => (
          <div
            key={property.id}
            className="border rounded-lg shadow-md"
            data-aos="fade-up"
          >
            <div className="relative w-full">
              <Image
                src={property.image}
                alt={`Image of ${property.address}`}
                width="449"
                height="250"
                className="rounded-t-lg w-full"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between">
                <p className="text-lg font-normal mb-2 py-2 font-montserrat">
                  {property.address}
                </p>
                <p className="text-[#FF0000] font-bold text-lg font-georgia">
                  {property.price}
                </p>
              </div>
              <div className="mb-2 flex justify-between border border-x-0 py-2 border-secondary font-montserrat">
                <p className="flex items-center gap-2 text-lg md:text-xl font-normal">
                  <Image
                    src="/Images/Featured/bed.webp"
                    alt="bed"
                    height="24"
                    width="24"
                  />
                  {property.beds} Beds
                </p>
                <p className="flex items-center gap-2 text-lg md:text-xl font-normal">
                  <Image
                    src="/Images/Featured/bath.webp"
                    alt="bath"
                    height="24"
                    width="24"
                  />
                  {property.baths} Baths
                </p>
                <p className="flex items-center gap-2 text-lg md:text-xl font-normal">
                  <Image
                    src="/Images/Featured/measurement.webp"
                    alt="area"
                    height="24"
                    width="24"
                  />
                  {property.area} Sq/Ft
                </p>
              </div>
              <p className="mb-2 mt-7 text-lg md:text-xl">
                <span className="font-normal font-montserrat">Status:</span>
                <span className="font-light font-open-sans">
                  {" "}
                  {property.status}
                </span>
              </p>
              <p className="mb-2 text-lg md:text-xl">
                <span className="font-normal font-montserrat">Type:</span>
                <span className="font-light font-open-sans">
                  {" "}
                  {property.type}
                </span>
              </p>
              <p className="mb-2 text-lg md:text-xl">
                <span className="font-normal font-montserrat">Community:</span>
                <span className="font-light font-open-sans">
                  {" "}
                  {property.community}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <a
          href="#all-listings"
          className="sm:w-auto rounded-md lg:rounded-xl bg-primary px-4 md:px-8 py-2 md:py-4 text-lg md:text-2xl font-medium md:font-semibold text-white shadow hover:bg-blue-900 focus:outline-none focus:ring active:bg-blue-900 hover:shadow-md font-open-sans mt-6"
          data-aos="zoom-in"
        >
          See All
        </a>
      </div>
    </section>
  );
}
