import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

import SpecialityCard from "./SpecialityCard";
import { specialitiesData } from "./specialitiesData";
import { specialitiesStyles } from "./specialitiesStyles";
import SectionTitle from "../../common/SectionTitle/SectionTitle";

const Specialities = () => {
  return (
    <Box component="section" id="specialities" sx={specialitiesStyles.section}>
      <Container maxWidth="xl">
        {/* Section Heading */}

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          sx={{ mb: 8 }}
        >
          <SectionTitle
            badge="OUR SPECIALITIES"
            title="Comprehensive Orthopaedic Treatments"
            subtitle="Advanced diagnosis, surgery, rehabilitation and trauma care under one roof."
          />
        </Box>

        {/* Cards */}

        <Grid container spacing={4}>
          {specialitiesData.map((speciality, index) => (
            <Grid
              key={speciality.id}
              size={{
                xs: 12,
                sm: 6,
                lg: 4,
              }}
            >
              <SpecialityCard speciality={speciality} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Specialities;
