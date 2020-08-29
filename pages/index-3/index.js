import React from "react";
import HeaderTagline from "../../components/HeaderTagline/HeaderTagline";
import Navbar from "../../components/Navbar/Navbar_Page";
import Section from "./section";
import Client from "../../components/Client/Client";
import HowItWork from "../../components/How-It-Work/HowItWork";
import Services from "../../components/Services/Services";
import Achievement from "../../components/Achievement/Achievement";
import Pricing from "../../components/Pricing/Pricing";
import Testimonial from "../../components/Testimonial/Testimonial";
import Video from "../../components/Video/Video";
import Team from "../../components/Team/Team";
import Blogs from "../../components/Blogs/Blogs";
import ContactUs from "../../components/ContactUs/ContactUs";
import Footer from "../../components/Footer/Footer";
import HeadConfig from "../../components/Head/HeadConfig";

export default function index(props) {
  return (
    <>
      {/* Importing Head configure(meta,viweport) */}
      <HeadConfig />

      {/* Importing Header Tagline */}
      <HeaderTagline />

      {/* Importing Navbar */}
      <Navbar logoLight={true} navBarLight={true} />

      {/* Importing Section */}
      <Section />

      {/* Importing Client */}
      <Client />

      {/* Importing How It Work */}
      <HowItWork />

      {/* Importing Services */}
      <Services />

      {/* Importing Achievement */}
      <Achievement />

      {/* Importing Pricing */}
      <Pricing />

      {/* Importing Testimonial */}
      <Testimonial />

      {/* Importing Video */}
      <Video />

      {/* Importing Team */}
      <Team />

      {/* Importing Blogs */}
      <Blogs />

      {/* Importing ContactUs */}
      <ContactUs />

      {/* Importing Footer */}
      <Footer />
    </>
  );
}
