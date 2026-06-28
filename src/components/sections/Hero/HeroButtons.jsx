import { Button, Stack } from "@mui/material";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { motion } from "framer-motion";

import { heroData } from "./heroData";
import { heroStyles } from "./heroStyles";

const HeroButtons = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={2}
    >
      {/* Appointment */}
      <Button
        component={motion.button}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        variant="contained"
        startIcon={<CalendarMonthRoundedIcon />}
        endIcon={<ArrowForwardRoundedIcon />}
        sx={{
          bgcolor: heroStyles.colors.secondary,
          px: 4,
          py: 1.5,
          borderRadius: heroStyles.radius.pill,
          boxShadow: heroStyles.shadow.button,

          "&:hover": {
            bgcolor: "#008765",
          },
        }}
      >
        {heroData.buttons.primary}
      </Button>

      {/* Emergency */}
      <Button
        component={motion.a}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        href={`tel:${heroData.buttons.phone}`}
        variant="outlined"
        startIcon={<PhoneRoundedIcon />}
        sx={{
          px: 4,
          py: 1.5,
          borderRadius: heroStyles.radius.pill,
          borderWidth: 2,
          borderColor: heroStyles.colors.primary,
          color: heroStyles.colors.primary,

          "&:hover": {
            borderWidth: 2,
            bgcolor: heroStyles.colors.primary,
            color: "#fff",
          },
        }}
      >
        {heroData.buttons.secondary}
      </Button>
    </Stack>
  );
};

export default HeroButtons;