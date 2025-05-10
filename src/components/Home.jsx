import React from "react";
import TopBanner from "./TopBanner";
import SliderContent from "./SliderContent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./Header";
import Overview from "./Overview";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  const heroContent = [
    {
      url: "/images/house-project.jpg",
      heading: "Built to Last. Maintained for Life.",
      paragraph:
        "At LKK Construction and Maintenance, we don't just build — we build with purpose. Whether it's constructing from the ground up or keeping your assets in peak condition, our expert team delivers quality craftsmanship, reliability, and pride in every project.",
    },
    {
      url: "/images/tools.jpg",
      heading: "Strength in Every Structure. Care in Every Corner.",
      paragraph:
        "With the power of experience and the precision of professionals, LKK Construction and Maintenance Pty Ltd brings solid results and seamless service. We turn your vision into durable, high-quality reality.",
    },
    {
      url: "/images/glasses.jpg",
      heading: "Your Trusted Partner in Building and Beyond.",
      paragraph:
        "From construction to ongoing maintenance, LKK is the name clients trust across South Africa. We combine hands-on skill, innovation, and dedication to provide end-to-end solutions that last. Let's build something strong together.",
    },
  ];

  return (
    <>
      <div className="w-full z-10 top-0 left-0 ">
        <TopBanner />
      </div>

      <div className="top-0 z-10">
        <Header />
      </div>

      <div className="relative w-full z-0 overflow-hidden">
        <SliderContent slides={heroContent} />
      </div>

      <Overview />

      <Services />

      <Contact />

      <Footer />
    </>
  );
};

export default Home;
