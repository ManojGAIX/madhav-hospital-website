import { Grid, Box, Typography } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { motion } from "framer-motion";

import { heroData } from "./heroData";
import { heroStyles } from "./heroStyles";

const HeroFeatures = () => {
  return (
    <Grid container spacing={2}>
      {heroData.features.map((feature, index) => (
        <Grid
          key={feature}
          size={{ xs: 12, sm: 6 }}
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              p: 2,
              bgcolor: "#fff",
              borderRadius: heroStyles.radius.medium,
              boxShadow: heroStyles.shadow.card,
              transition: "0.3s",

              "&:hover": {
                transform: "translateY(-5px)",
              },
            }}
          >
            <CheckCircleRoundedIcon
              sx={{
                color: heroStyles.colors.secondary,
                fontSize: 28,
              }}
            />

            <Typography
              fontWeight={600}
              color={heroStyles.colors.heading}
            >
              {feature}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default HeroFeatures;