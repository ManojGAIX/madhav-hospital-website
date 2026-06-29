import PageHero from "../../components/common/PageHero/PageHero";
import Specialities from "../../components/sections/Specialities/Specialities";
import TreatmentDetails from "../../components/sections/TreatmentDetails/TreatmentDetails";
import WaveDivider from "../../components/common/Dividers/WaveDivider";

const Treatments = () => {
  return (
    <>
      <PageHero
        badge="Our Treatments"
        title="Comprehensive Orthopaedic Care"
        subtitle="From joint replacement and spine surgery to trauma care and sports injury rehabilitation — explore our full range of treatments."
      />
      <Specialities showTitle={false} />
      <WaveDivider fill="#FFFFFF" />
      <TreatmentDetails />
    </>
  );
};

export default Treatments;
