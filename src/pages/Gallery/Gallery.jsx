import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

import PageHero from "../../components/common/PageHero/PageHero";
import { GALLERY_IMAGES } from "../../constants/galleryData";

const Gallery = () => {
  return (
    <>
      <PageHero
        badge="Gallery"
        title="Our Hospital & Facilities"
        subtitle="A glimpse into our modern infrastructure, surgical facilities, and patient care environment."
      />

      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 12 },
          background: "#FFFFFF",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {GALLERY_IMAGES.map((item, index) => (
              <Grid key={item.title} size={{ xs: 12, sm: 6, md: 4 }}>
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  sx={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    bgcolor: "#F8FBFF",
                    border: "1px solid #E7EEF8",
                    height: "100%",
                  }}
                >
                  <Box
                    component="img"
                    src={item.src}
                    alt={item.alt}
                    sx={{
                      width: "100%",
                      height: { xs: 220, sm: 240, md: 260 },
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <Typography
                    sx={{
                      p: 2.5,
                      fontWeight: 700,
                      color: "#15396A",
                      fontSize: "1.05rem",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Gallery;
