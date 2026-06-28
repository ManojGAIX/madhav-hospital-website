import { Paper, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const FloatingCard = ({
  icon,
  title,
  subtitle,
  bgColor = "#ffffff",
  iconBg = "#0B4EA2",
  iconColor = "#ffffff",
  width = 240,
  delay = 0,
}) => {
  return (
    <Paper
      component={motion.div}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: [0, -8, 0] }}
      transition={{
        opacity: {
          duration: 0.6,
          delay,
        },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileHover={{
        scale: 1.05,
        y: -10,
      }}
      elevation={0}
      sx={{
        width,
        p: 2,
        display: "flex",
        alignItems: "center",
        gap: 2,
        borderRadius: "20px",
        background: bgColor,
        boxShadow: "0 20px 40px rgba(0,0,0,.08)",
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      <Box
        sx={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          bgcolor: iconBg,
          color: iconColor,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        {icon}
      </Box>

      <Box>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "1rem",
            color: "#15396A",
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "#666",
            mt: 0.5,
          }}
        >
          {subtitle}
        </Typography>
      </Box>
    </Paper>
  );
};

export default FloatingCard;