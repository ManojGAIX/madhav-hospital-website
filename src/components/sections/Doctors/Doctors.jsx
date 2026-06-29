import { Box, Container } from "@mui/material";

import DoctorsHeader from "./DoctorsHeader";
import FeaturedDoctor from "./FeaturedDoctor";
import { doctorStyles } from "./doctorStyles";

const Doctors = () => {
  return (
    <Box
      component="section"
      id="doctors"
      sx={{
        py: {
          xs: 8,
          md: 12,
        },
        background: doctorStyles.colors.background,
      }}
    >
      <Container maxWidth="xl">
        <DoctorsHeader />

        <FeaturedDoctor />
      </Container>
    </Box>
  );
};

export default Doctors;