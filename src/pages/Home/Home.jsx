import Hero from "../../components/sections/Hero/Hero";
import WhyChooseUs from "../../components/sections/WhyChooseUs/WhyChooseUs";
import Specialities from "../../components/sections/Specialities/Specialities";
import WaveDivider from "../../components/common/Dividers/WaveDivider";
import CurveDivider from "../../components/common/Dividers/CurveDivider";

const Home = () => {
  return (
    <>
      <Hero />
      <WaveDivider />
      <Specialities />
      <WaveDivider fill="#FFFFFF" flip />
      <WhyChooseUs />
      <CurveDivider fill="#FFFFFF" />
    </>
  );
};

export default Home;
