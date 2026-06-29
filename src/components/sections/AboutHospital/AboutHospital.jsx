import { Box, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";

import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";
import AboutStats from "./AboutStats";

import { aboutStyles } from "./aboutStyles";

const AboutHospital = () => {
  return (
    <Box
      component="section"
      id="about"
      sx={aboutStyles.section}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={{
            xs: 8,
            md: 10,
          }}
          alignItems="center"
        >
          {/* LEFT IMAGE */}

          <Grid
            size={{
              xs: 12,
              lg: 6,
            }}
          >
            <Box
              component={motion.div}
              initial={{
                opacity: 0,
                x: -60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{
                once: true,
              }}
            >
              <AboutImage />
            </Box>
          </Grid>

          {/* RIGHT CONTENT */}

          <Grid
            size={{
              xs: 12,
              lg: 6,
            }}
          >
            <Box
              component={motion.div}
              initial={{
                opacity: 0,
                x: 60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              viewport={{
                once: true,
              }}
            >
              <AboutContent />
            </Box>
          </Grid>
        </Grid>

        {/* Statistics */}

        <AboutStats />
      </Container>
    </Box>
  );
};

export default AboutHospital;