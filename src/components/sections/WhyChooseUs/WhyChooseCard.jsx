import { Paper, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

import { whyChooseStyles } from "./whyChooseStyles";
import GlassCard from "../../common/GlassCard/GlassCard";

const WhyChooseCard = ({ item, index }) => {
  const Icon = item.icon;

  return (
    <GlassCard
      component={motion.div}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      elevation={0}
      sx={whyChooseStyles.card}
    >
      <Box sx={whyChooseStyles.iconBox}>
        <Icon fontSize="large" />
      </Box>

      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          mb: 2,
          color: "#15396A",
          fontSize: "1.3rem",
        }}
      >
        {item.title}
      </Typography>

      <Typography
        sx={{
          color: "#666",
          lineHeight: 1.8,
        }}
      >
        {item.description}
      </Typography>
    </GlassCard>
  );
};

export default WhyChooseCard;