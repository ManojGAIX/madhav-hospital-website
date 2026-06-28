import { Paper, Box } from "@mui/material";
import { motion } from "framer-motion";

import { glassCardStyles } from "./glassCardStyles";

const GlassCard = ({
  children,
  sx = {},
  animation = true,
  delay = 0,
}) => {
  const content = (
    <Paper
      elevation={0}
      sx={{
        ...glassCardStyles.card,
        ...sx,
      }}
    >
      <Box sx={glassCardStyles.glow} />

      {children}
    </Paper>
  );

  if (!animation) return content;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
        delay,
      }}
    >
      {content}
    </motion.div>
  );
};

export default GlassCard;