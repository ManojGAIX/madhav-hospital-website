import { Box, Grid, Paper, Typography } from "@mui/material";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import LocalHospitalRoundedIcon from "@mui/icons-material/LocalHospitalRounded";

import { heroData } from "./heroData";
import GlassCard from "../../common/GlassCard/GlassCard";

const icons = [
  <PeopleAltRoundedIcon fontSize="large" />,
  <WorkspacePremiumRoundedIcon fontSize="large" />,
  <LocalHospitalRoundedIcon fontSize="large" />,
];

const HeroStats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <Box ref={ref}>
      <Grid container spacing={3}>
        {heroData.stats.map((item, index) => (
          <Grid
            key={item.title}
            size={{ xs: 12, sm: 4 }}
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.2,
            }}
          >
            <GlassCard
              elevation={0}
              sx={{
                p: 4,
                textAlign: "center",
                borderRadius: "24px",
                background: "#fff",
                boxShadow: "0 15px 35px rgba(0,0,0,.06)",

                transition: ".3s",

                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 25px 45px rgba(11,78,162,.12)",
                },
              }}
            >
              <Box
                sx={{
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  bgcolor: "#EAF4FF",
                  color: "#0B4EA2",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mx: "auto",
                  mb: 3,
                }}
              >
                {icons[index]}
              </Box>

              <Typography
                sx={{
                  fontWeight: 800,
                  color: "#0B4EA2",
                  fontSize: {
                    xs: "2rem",
                    md: "3rem",
                  },
                }}
              >
                {item.value}
                {item.suffix}
              </Typography>

              <Typography
                sx={{
                  color: "#555",
                  mt: 1,
                  fontWeight: 600,
                }}
              >
                {item.title}
              </Typography>
            </GlassCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HeroStats;
