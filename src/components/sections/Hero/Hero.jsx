import { Box, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";
import { heroStyles } from "./heroStyles";

const Hero = () => {
  return (
    <Box
      component="section"
      id="home"
      sx={{
        position: "relative",
        overflow: "hidden",
        background: heroStyles.background,
        minHeight: {
          xs: "auto",
          md: "100vh",
        },
        display: "flex",
        alignItems: "center",
        pt: { xs: 6, md: 8 },
        pb: { xs: 8, md: 10 },
      }}
    >
      {/* Background Decorative Circle */}
      <Box
        sx={{
          position: "absolute",
          top: -150,
          right: -150,
          width: 450,
          height: 450,
          borderRadius: "50%",
          bgcolor: heroStyles.colors.lightBlue,
          opacity: 0.5,
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />

      {/* Background Decorative Circle */}
      <Box
        sx={{
          position: "absolute",
          bottom: -120,
          left: -120,
          width: 350,
          height: 350,
          borderRadius: "50%",
          bgcolor: heroStyles.colors.lightGreen,
          opacity: 0.4,
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <Grid
          container
          spacing={{ xs: 6, md: 8 }}
          alignItems="center"
        >
          {/* Left Side */}
          <Grid
            size={{ xs: 12, md: 6 }}
            component={motion.div}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
            }}
          >
            <HeroContent />
          </Grid>

          {/* Right Side */}
          <Grid
            size={{ xs: 12, md: 6 }}
            component={motion.div}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
          >
            <HeroImage />
          </Grid>
        </Grid>

        {/* Statistics */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          sx={{
            mt: {
              xs: 8,
              md: 10,
            },
          }}
        >
          <HeroStats />
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;