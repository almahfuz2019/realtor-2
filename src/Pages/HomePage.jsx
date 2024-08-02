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
        href="#home"
        class="fixed bottom-0 right-0 mb-4 mr-4 z-50"
      >
        <Image
          height="60"
          width="60"
          src="/Images/up_arrow.webp"
          alt="Navigation Image"
          className="relative  h-[46px] w-auto md:h-auto"
        />
      </a>
      <Hero />
      <About />
      <div>
        <Image
          src="/Images/line.webp"
          width="1920"
          height="15"
          alt="line"
          className="relative z-10"
        />
      </div>
      <Services />
      <div>
        <Image
          src="/Images/line.webp"
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
          src="/Images/line.webp"
          width="1920"
          height="15"
          alt="line"
          className="relative z-10"
        />
      </div>
      <Testimonial />
      <div>
        <Image
          src="/Images/line.webp"
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
