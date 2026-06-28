import Header from "../../components/layout/Header";
import Hero from "../../components/sections/Hero/Hero";
import WhyChooseUs from "../../components/sections/WhyChooseUs/WhyChooseUs";
import Specialities from "../../components/sections/Specialities/Specialities";
import WaveDivider from "../../components/common/Dividers/WaveDivider";
import CurveDivider from "../../components/common/Dividers/CurveDivider";
import Footer from "../../components/layout/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <WaveDivider />
      <WhyChooseUs />
      <WaveDivider fill="#F8FBFF" flip />
      <Specialities />
      <CurveDivider fill="#FFFFFF" />
      <Footer/>
    </>
  );
};

export default Home;
