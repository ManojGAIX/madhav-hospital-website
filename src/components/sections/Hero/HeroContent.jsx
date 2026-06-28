import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

import HeroButtons from "./HeroButtons";
import HeroFeatures from "./HeroFeatures";
import { heroData } from "./heroData";
import { heroStyles } from "./heroStyles";

const MotionTypography = motion(Typography);
const MotionSpan = motion(Box);

const HeroContent = () => {
  return (
    <Box
      sx={{
        maxWidth: { xs: "100%", md: "650px" },
        textAlign: { xs: "center", md: "left" },
      }}
    >
      {/* Badge */}
      <MotionTypography
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{
          color: heroStyles.colors.secondary,
          fontWeight: 700,
          letterSpacing: 2,
          textTransform: "uppercase",
          mb: 2,
          fontSize: "0.9rem",
        }}
      >
        {heroData.badge}
      </MotionTypography>

      {/* Heading */}
      {/* Heading (2 Lines Like Screenshot) */}
      <MotionTypography
        variant="h1"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        sx={{
          fontFamily: '"Playfair Display", serif',
          color: heroStyles.colors.heading,
          fontWeight: 700,
          lineHeight: 1.1,
          fontSize: {
            xs: "2.2rem",
            sm: "3rem",
            md: "4.2rem",
          },
          mb: 3,
        }}
      >
        {/* Line 1 */}
        Expert Orthopaedic Care
        <br />
        {/* Line 2 (styled like screenshot) */}
        <Box
          component="span"
          sx={{
            color: heroStyles.colors.secondary,
            fontStyle: "italic",
            fontWeight: 600,
            display: "inline-block",
            mt: 1,
          }}
        >
          For Every Step of Life
        </Box>
      </MotionTypography>

      {/* Description */}
      <MotionTypography
        component="p"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        sx={{
          color: heroStyles.colors.text,
          fontSize: "1.05rem",
          lineHeight: 1.8,
          maxWidth: 550,
          mx: { xs: "auto", md: 0 },
        }}
      >
        {heroData.description}
      </MotionTypography>

      {/* Features */}
      <Box mt={4}>
        <HeroFeatures />
      </Box>

      {/* Buttons */}
      <Box mt={4}>
        <HeroButtons />
      </Box>
    </Box>
  );
};

export default HeroContent;
