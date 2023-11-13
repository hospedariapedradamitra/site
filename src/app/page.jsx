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
import Booking from "./sections/Booking";
import Testimonials from "./sections/Testimonials";
import Address from "./sections/Address";
import Footer from "./sections/Footer";
import Credits from "./sections/Credits";
import FloatingWhatsAppButton from "./components/WhatsApp";

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
      <Testimonials />
      <Address />
      <Footer />
      <Credits />
      <FloatingWhatsAppButton />
    </main>
  );
}
