import HomePage from "@/Pages/HomePage";
import { Montserrat, Open_Sans } from "next/font/google";
import React from "react";
const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const openSans = Open_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});
export default function page() {
  return (
    <div className={`${montserrat.className} ${openSans.className}`}>
      <HomePage />
    </div>
  );
}
