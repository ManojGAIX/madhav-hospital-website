import Header from "../../components/layout/Header";
import Hero from "../../components/sections/Hero/Hero";
import WhyChooseUs from "../../components/sections/WhyChooseUs/WhyChooseUs";
import Specialities from "../../components/sections/Specialities/Specialities";
import WaveDivider from "../../components/common/Dividers/WaveDivider";
import CurveDivider from "../../components/common/Dividers/CurveDivider";
import Footer from "../../components/layout/Footer";
import AboutHospital from "../../components/sections/AboutHospital/AboutHospital";
import Doctors from "../../components/sections/Doctors/Doctors";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <WaveDivider />
      <Specialities />
      <WaveDivider fill="#F8FBFF" flip />
      <WhyChooseUs />
      <CurveDivider fill="#FFFFFF" />
      <AboutHospital />
      <CurveDivider fill="#FFFFFF" />
      <Doctors />


      {/* Doctors */}

      {/* Testimonials */}

      {/* Gallery */}

      {/* Contact */}
      <Footer />
    </>
  );
};

export default Home;
