

import AboutUs from "./components/Aboutus";
import Afterbefore from "./components/Afterbefore";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Investor from "./components/Investor";

import Navbar from "./components/Navbar";
import Ourstory from "./components/Ourstory";
import Quote from "./components/Quote";
import Showcase from "./components/Showcase";
import Testimonials from "./components/Testimonials";
import TrustedPartners from "./components/TrustedPartners";
import WhyChoose from "./components/Whychoose";




export default function App() {
  return (
    <div >
    <Navbar />
      <Hero/>
      <WhyChoose/>
    <Afterbefore/>
    <Showcase/>
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
