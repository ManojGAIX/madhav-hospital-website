import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

import { sectionTitleStyles } from "./sectionTitleStyles";

const SectionTitle = ({
  badge,
  title,
  subtitle,
  align = "center",
}) => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      sx={{
        ...sectionTitleStyles.wrapper,
        textAlign: align,
      }}
    >
      {badge && (
        <Typography sx={sectionTitleStyles.badge}>
          {badge}
        </Typography>
      )}

      <Typography sx={sectionTitleStyles.title}>
        {title}
      </Typography>

      {subtitle && (
        <Typography sx={sectionTitleStyles.subtitle}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionTitle;