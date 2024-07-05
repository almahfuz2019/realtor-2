import About from "@/Components/Home/About";
import Contact from "@/Components/Home/Contact";
import Featured from "@/Components/Home/Featured";
import Hero from "@/Components/Home/Hero";
import Services from "@/Components/Home/Services";
import SuccessGuidance from "@/Components/Home/SuccessGuidance";
import Testimonial from "@/Components/Home/Testimonial";
import Image from "next/image";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <a
        href="your-target-page.html"
        class="fixed bottom-0 right-0 mb-4 mr-4 z-50"
      >
        <Image
          height="60"
          width="60"
          src="https://i.ibb.co/Z1hgg8v/Frame-550-1.png"
          alt="Navigation Image"
          className="relative  animate-bounce h-[32px] w-auto lg:h-auto"
        />
      </a>
      <Hero />
      <About />
      <div>
        <Image
          src="https://i.ibb.co/2SD3x9L/Line-25.png"
          width="1920"
          height="15"
          alt="line"
          className="relative z-10"
        />
      </div>
      <Services />
      <div>
        <Image
          src="https://i.ibb.co/2SD3x9L/Line-25.png"
          width="1920"
          height="15"
          alt="line"
          className="relative z-10"
        />
      </div>
      <Featured />
      <Contact />
      <div>
        <Image
          src="https://i.ibb.co/2SD3x9L/Line-25.png"
          width="1920"
          height="15"
          alt="line"
          className="relative z-10"
        />
      </div>
      <Testimonial />
      <div>
        <Image
          src="https://i.ibb.co/2SD3x9L/Line-25.png"
          width="1920"
          height="15"
          alt="line"
          className="relative z-10"
        />
      </div>
      <SuccessGuidance />
    </div>
  );
}
