import {
  Box,
  Grid,
  Typography,
  Button,
  Chip,
  Stack,
} from "@mui/material";

import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";

import { motion } from "framer-motion";

import { doctorsData } from "./doctorsData";
import { doctorStyles } from "./doctorStyles";

const FeaturedDoctor = () => {
  const doctor = doctorsData.featuredDoctor;

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      sx={doctorStyles.featuredCard}
    >
      <Grid
        container
        spacing={5}
        alignItems="center"
      >
        {/* Doctor Image */}

        <Grid item xs={12} md={5}>
          <Box sx={doctorStyles.imageWrapper}>
            <Box
              component="img"
              src={doctor.image}
              alt={doctor.name}
              sx={doctorStyles.doctorImage}
            />

            <Box sx={doctorStyles.floatingBadge}>
              <Typography
                sx={{
                  color: "#009B72",
                  fontWeight: 700,
                  fontSize: "1rem",
                }}
              >
                ⭐ {doctor.experience}
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Doctor Details */}

        <Grid item xs={12} md={7}>
          <Typography
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
              color: "#0F172A",
              fontSize: {
                xs: "2rem",
                md: "3rem",
              },
            }}
          >
            {doctor.name}
          </Typography>

          <Typography
            sx={{
              color: "#009B72",
              fontWeight: 700,
              mt: 1,
              mb: 3,
              fontSize: "1.15rem",
            }}
          >
            {doctor.designation}
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            flexWrap="wrap"
            mb={3}
          >
            {doctor.qualification.map((item) => (
              <Chip
                key={item}
                label={item}
                sx={doctorStyles.qualificationChip}
              />
            ))}
          </Stack>

          <Typography
            sx={{
              color: "#475569",
              lineHeight: 1.9,
              fontSize: "1rem",
            }}
          >
            {doctor.about}
          </Typography>

          <Box mt={3}>
            {doctor.achievements.map((item) => (
              <Box
                key={item}
                sx={doctorStyles.featureItem}
              >
                <CheckCircleRoundedIcon
                  sx={{
                    color: "#009B72",
                  }}
                />

                <Typography
                  sx={{
                    color: "#334155",
                    fontWeight: 600,
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>

          <Stack
            direction="row"
            spacing={2}
            mt={5}
            flexWrap="wrap"
          >
            <Button
              variant="contained"
              startIcon={<CalendarMonthRoundedIcon />}
              sx={doctorStyles.buttonPrimary}
            >
              Book Appointment
            </Button>

            <Button
              variant="outlined"
              startIcon={<WorkspacePremiumRoundedIcon />}
              sx={doctorStyles.buttonSecondary}
            >
              View Profile
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeaturedDoctor;