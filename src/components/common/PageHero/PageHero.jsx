import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

import { pageHeroStyles } from "./pageHeroStyles";

const PageHero = ({ badge, title, subtitle }) => {
  return (
    <Box component="section" sx={pageHeroStyles.section}>
      <Box sx={pageHeroStyles.glow} />

      <Container maxWidth="lg">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: "center", position: "relative", zIndex: 1 }}
        >
          {badge && (
            <Typography sx={pageHeroStyles.badge}>{badge}</Typography>
          )}

          <Typography component="h1" sx={pageHeroStyles.title}>
            {title}
          </Typography>

          {subtitle && (
            <Typography sx={pageHeroStyles.subtitle}>{subtitle}</Typography>
          )}

          <Box sx={pageHeroStyles.line} />
        </Box>
      </Container>
    </Box>
  );
};

export default PageHero;
