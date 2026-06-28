import { Box, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";

import WhyChooseCard from "./WhyChooseCard";
import { whyChooseData } from "./whyChooseData";
import { whyChooseStyles } from "./whyChooseStyles";
import SectionTitle from "../../common/SectionTitle/SectionTitle";

const WhyChooseUs = () => {
  return (
    <Box component="section" id="why-us" sx={whyChooseStyles.section}>
      <Container maxWidth="xl">
        {/* Heading */}

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          sx={{
            textAlign: "center",
            mb: 8,
            maxWidth: 800,
            mx: "auto",
          }}
        >
          <SectionTitle
            badge="WHY CHOOSE US"
            title="Why Choose Madhav Hospital"
            subtitle="We combine experienced orthopaedic specialists, advanced technology, and compassionate care to provide the best treatment."
          />
        </Box>

        {/* Cards */}

        <Grid container spacing={4}>
          {whyChooseData.map((item, index) => (
            <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <WhyChooseCard item={item} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
