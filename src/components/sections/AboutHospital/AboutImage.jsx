import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import AddAlertRoundedIcon from "@mui/icons-material/AddAlertRounded";

import hospitalImage from "../../../assets/about/hospital.png";

import { aboutStyles } from "./aboutStyles";

const FloatingCard = ({
  icon,
  title,
  subtitle,
  color,
  sx,
  delay = 0,
}) => (
  <Box
    component={motion.div}
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    animate={{ y: [0, -10, 0] }}
    transition={{
      opacity: { duration: 0.8, delay },
      y: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }}
    viewport={{ once: true }}
    sx={{
      ...aboutStyles.floatingCard,
      ...sx,
    }}
  >
    <Box
      sx={{
        width: 64,
        height: 64,
        borderRadius: "50%",
        bgcolor: `${color}15`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mb: 2,
      }}
    >
      {icon}
    </Box>

    <Typography
      sx={{
        fontSize: "2rem",
        fontWeight: 800,
        color,
        lineHeight: 1,
      }}
    >
      {title}
    </Typography>

    <Typography
      align="center"
      sx={{
        mt: 1,
        fontSize: ".95rem",
        color: "#334155",
        fontWeight: 600,
      }}
    >
      {subtitle}
    </Typography>
  </Box>
);

const AboutImage = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: {
          xs: 520,
          md: 700,
        },
      }}
    >
      {/* Glow 1 */}
      <Box
        sx={{
          ...aboutStyles.glowCircle,
          width: 260,
          height: 260,
          bgcolor: "#00B894",
          top: 20,
          left: -60,
        }}
      />

      {/* Glow 2 */}
      <Box
        sx={{
          ...aboutStyles.glowCircle,
          width: 300,
          height: 300,
          bgcolor: "#0B4EA2",
          bottom: 70,
          right: -70,
        }}
      />

      {/* Decorative Dots */}
      <Box
        sx={{
          position: "absolute",
          top: 10,
          right: 40,
          width: 90,
          height: 90,
          backgroundImage:
            "radial-gradient(#0B4EA2 1.8px, transparent 1.8px)",
          backgroundSize: "12px 12px",
          opacity: 0.25,
          zIndex: 1,
        }}
      />

      {/* Image */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        sx={aboutStyles.imageWrapper}
      >
        <Box
          component="img"
          src={hospitalImage}
          alt="Madhav Orthopedic Hospital"
          sx={{
            width: "100%",
            display: "block",
            borderRadius: "34px",
          }}
        />
      </Box>

      {/* Experience */}
      <FloatingCard
        color="#16A34A"
        title="7+"
        subtitle="Years Experience"
        delay={0.2}
        icon={
          <EmojiEventsRoundedIcon
            sx={{
              color: "#16A34A",
              fontSize: 34,
            }}
          />
        }
        sx={{
          top: 50,
          left: {
            xs: 0,
            md: -25,
          },
        }}
      />

      {/* Happy Patients */}
      <FloatingCard
        color="#2563EB"
        title="5000+"
        subtitle="Happy Patients"
        delay={0.4}
        icon={
          <GroupsRoundedIcon
            sx={{
              color: "#2563EB",
              fontSize: 34,
            }}
          />
        }
        sx={{
          left: {
            xs: 0,
            md: -45,
          },
          bottom: 90,
        }}
      />

      {/* Emergency */}
      <FloatingCard
        color="#EF4444"
        title="24/7"
        subtitle="Emergency Care"
        delay={0.6}
        icon={
          <AddAlertRoundedIcon
            sx={{
              color: "#EF4444",
              fontSize: 34,
            }}
          />
        }
        sx={{
          right: {
            xs: 0,
            md: -20,
          },
          bottom: 25,
        }}
      />
    </Box>
  );
};

export default AboutImage;