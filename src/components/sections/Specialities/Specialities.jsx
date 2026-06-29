import { Box, Container, Grid, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import SpecialityCard from "./SpecialityCard";
import { specialitiesData } from "./specialitiesData";
import { specialitiesStyles } from "./specialitiesStyles";
import SectionTitle from "../../common/SectionTitle/SectionTitle";

const Specialities = ({ showTitle = true, showViewAll = false }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <Box component="section" id="specialities" sx={specialitiesStyles.section}>
      <Container maxWidth="xl">
        {showTitle && (
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            sx={{ mb: 8 }}
          >
            <SectionTitle
              badge="OUR SPECIALITIES"
              title="Comprehensive Orthopaedic Treatments"
              subtitle="Advanced diagnosis, surgery, rehabilitation and trauma care under one roof."
            />
          </Box>
        )}

        <Grid container spacing={4}>
          {specialitiesData.map((speciality, index) => (
            <Grid
              key={speciality.id}
              size={{
                xs: 12,
                sm: 6,
                lg: 4,
              }}
            >
              <SpecialityCard speciality={speciality} index={index} />
            </Grid>
          ))}
        </Grid>

        {(showViewAll || isHome) && (
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            sx={{ textAlign: "center", mt: 6 }}
          >
            <Button
              component={Link}
              to="/treatments"
              variant="contained"
              endIcon={<ArrowForwardRoundedIcon />}
              sx={{
                bgcolor: "#009B72",
                borderRadius: "50px",
                px: 4,
                py: 1.4,
                fontWeight: 700,
                textTransform: "none",
                fontSize: 16,
                boxShadow: "0 8px 20px rgba(0,155,114,.3)",
                "&:hover": { bgcolor: "#008463" },
              }}
            >
              View All Treatments
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Specialities;
