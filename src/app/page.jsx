"use client";
import React from "react";
import TopContacts from "./sections/TopContacts";
import Menu from "./sections/Menu";
import Slideshow from "./sections/Slider";
import Citation1 from "./sections/Citation1";
import OurPlace from "./sections/OurPlace";
import Attractions from "./sections/Attractions";
import Videos from "./sections/Videos";
import Bedrooms from "./sections/Bedrooms";

import Address from "./sections/Address";
import Booking from "./sections/Booking";
import Footer from "./sections/Footer";
import Testimonials from "./sections/Testimonials";

export default function Home() {
  return (
    <main>
      <TopContacts />
      <Menu />
      <Slideshow />
      <Citation1 />
      <OurPlace />
      <Attractions />
      <Videos />
      <Bedrooms />
      <Booking />
      {/* <Testimonials />
            <Address />
            <Footer /> */}
    </main>
  );
}
