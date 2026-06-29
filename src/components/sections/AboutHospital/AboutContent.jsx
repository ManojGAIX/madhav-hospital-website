import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import { motion } from "framer-motion";

import { aboutData } from "./aboutData";
import { aboutStyles } from "./aboutStyles";

const AboutContent = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Badge */}

      <Typography sx={aboutStyles.badge}>{aboutData.badge}</Typography>

      {/* Heading */}

      <Typography sx={aboutStyles.heading}>
        {aboutData.title.first}

        <br />

        <Box component="span" sx={aboutStyles.greenHeading}>
          {aboutData.title.second}
        </Box>
      </Typography>

      {/* Description */}

      <Typography sx={aboutStyles.description}>
        {aboutData.description}
      </Typography>

      {/* Features */}

      <Grid
        container
        spacing={2.5}
        sx={{
          mt: 1,
        }}
      >
        {aboutData.features.map((feature) => (
          <Grid
            size={{
              xs: 12,
              sm: 6,
            }}
            key={feature}
          >
            <Box sx={aboutStyles.featureCard}>
              <CheckCircleRoundedIcon
                sx={{
                  color: "#009B72",
                  fontSize: 22,
                }}
              />

              <Typography
                sx={{
                  fontWeight: 600,
                  color: "#334155",
                  lineHeight: 1.5,
                  fontSize: {
                    xs: ".9rem",
                    md: ".95rem",
                  },
                }}
              >
                {feature}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Button */}

      <Button
        component={Link}
        to="/treatments"
        variant="contained"
        endIcon={<ArrowForwardRoundedIcon />}
        sx={aboutStyles.button}
      >
        {aboutData.buttonText}
      </Button>
    </Box>
  );
};

export default AboutContent;
