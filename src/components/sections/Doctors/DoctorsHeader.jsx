import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

import { doctorsData } from "./doctorsData";
import { doctorStyles } from "./doctorStyles";

const DoctorsHeader = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      sx={{
        textAlign: "center",
        mb: {
          xs: 6,
          md: 8,
        },
      }}
    >
      {/* Badge */}

      <Typography sx={doctorStyles.badge}>
        {doctorsData.badge}
      </Typography>

      {/* Heading */}

      <Typography sx={doctorStyles.heading}>
        {doctorsData.title.first}

        <br />

        <Box
          component="span"
          sx={doctorStyles.greenHeading}
        >
          {doctorsData.title.second}
        </Box>
      </Typography>

      {/* Decorative Line */}

      <Box
        sx={{
          width: 90,
          height: 4,
          borderRadius: 5,
          bgcolor: "#009B72",
          mx: "auto",
          mb: 4,
        }}
      />

      {/* Description */}

      <Typography sx={doctorStyles.description}>
        {doctorsData.description}
      </Typography>
    </Box>
  );
};

export default DoctorsHeader;