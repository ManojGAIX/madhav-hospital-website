import { Box, Grid, Typography } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { motion } from "framer-motion";

import { treatmentDetailsStyles } from "./treatmentDetailsStyles";

const TreatmentDetailItem = ({ treatment, index }) => {
  const Icon = treatment.icon;
  const isReversed = index % 2 !== 0;

  return (
    <Box
      id={treatment.slug}
      sx={treatmentDetailsStyles.item}
    >
      <Grid
        container
        spacing={{ xs: 4, md: 6 }}
        alignItems="center"
        direction={isReversed ? "row-reverse" : "row"}
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: isReversed ? 60 : -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            sx={treatmentDetailsStyles.imageWrapper}
          >
            <Box
              component="img"
              src={treatment.image}
              alt={treatment.title}
              sx={treatmentDetailsStyles.image}
            />
            <Box sx={treatmentDetailsStyles.imageOverlay} />
            <Box sx={treatmentDetailsStyles.iconBadge}>
              <Icon sx={{ fontSize: 22 }} />
              <Typography sx={{ fontWeight: 700, fontSize: "0.95rem" }}>
                {treatment.title}
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: isReversed ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            sx={treatmentDetailsStyles.content}
          >
            <Typography sx={treatmentDetailsStyles.title}>
              {treatment.title}
            </Typography>

            <Typography sx={treatmentDetailsStyles.overview}>
              {treatment.overview}
            </Typography>

            <Typography sx={treatmentDetailsStyles.highlightsTitle}>
              Key Highlights
            </Typography>

            {treatment.highlights.map((point) => (
              <Box key={point} sx={treatmentDetailsStyles.highlightItem}>
                <CheckCircleRoundedIcon sx={treatmentDetailsStyles.checkIcon} />
                <Typography component="span">{point}</Typography>
              </Box>
            ))}

            <Box sx={treatmentDetailsStyles.recoveryBox}>
              <Typography sx={treatmentDetailsStyles.recoveryLabel}>
                Recovery Timeline
              </Typography>
              <Typography sx={treatmentDetailsStyles.recoveryText}>
                {treatment.recovery}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TreatmentDetailItem;
