

import AboutUs from "./components/Aboutus";
import Afterbefore from "./components/Afterbefore";
import Footer from "./components/Footer";
import FourCards from "./components/FourCards";
import Hero from "./components/Hero";
import Investor from "./components/Investor";

import Navbar from "./components/Navbar";
import Ourstory from "./components/Ourstory";
import Quote from "./components/Quote";
import Showcase from "./components/Showcase";
import Testimonials from "./components/Testimonials";
import TrustedPartners from "./components/TrustedPartners";
import TwoImages from "./components/TwoImages";
import WhyChoose from "./components/Whychoose";




export default function App() {
  return (
    <div >
    <Navbar />
      <Hero/>
      <WhyChoose/>
      <TwoImages/>
    <Afterbefore/>
    <Showcase/>
    <FourCards/>
      <Testimonials/>
      <Quote/>
      <Investor/>
      <Ourstory/>
      <AboutUs/>
      <TrustedPartners/>
      <Footer/>
    </div>
  );
}
