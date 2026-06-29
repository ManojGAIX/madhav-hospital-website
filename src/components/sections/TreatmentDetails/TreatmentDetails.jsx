import { Box, Container } from "@mui/material";
import { motion } from "framer-motion";

import SectionTitle from "../../common/SectionTitle/SectionTitle";
import TreatmentDetailItem from "./TreatmentDetailItem";
import { treatmentDetailsData } from "./treatmentDetailsData";
import { treatmentDetailsStyles } from "./treatmentDetailsStyles";

const TreatmentDetails = () => {
  return (
    <Box component="section" id="treatments" sx={treatmentDetailsStyles.section}>
      <Container maxWidth="xl">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          sx={{ mb: { xs: 6, md: 8 } }}
        >
          <SectionTitle
            badge="TREATMENT DETAILS"
            title="In-Depth Orthopaedic Care"
            subtitle="Explore our comprehensive treatment options — from diagnosis and surgery to rehabilitation — designed to restore mobility and improve your quality of life."
          />
        </Box>

        {treatmentDetailsData.map((treatment, index) => (
          <TreatmentDetailItem
            key={treatment.id}
            treatment={treatment}
            index={index}
          />
        ))}
      </Container>
    </Box>
  );
};

export default TreatmentDetails;
