import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Stack,
  IconButton,
  Button,
} from "@mui/material";

import {
  Phone,
  Email,
  LocationOn,
  AccessTime,
  KeyboardArrowRight,
} from "@mui/icons-material";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

import { motion } from "framer-motion";

const MotionBox = motion(Box);

const quickLinks = [
  "Home",
  "About",
  "Treatments",
  "Doctors",
  "Gallery",
  "Contact",
];

const services = [
  "Knee Replacement",
  "Hip Replacement",
  "Spine Surgery",
  "Sports Injury",
  "Fracture Care",
  "Arthroscopy",
];

const Footer = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg,#0B3D91 0%,#0A2D68 55%,#06214E 100%)",
        color: "#fff",
        pt: 8,
        pb: 2,
        mt: 10,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={5}>
          {/* Hospital */}
          <Grid item xs={12} md={4}>
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h4"
                fontWeight={800}
                sx={{ color: "#ffffff", mb: 1 }}
              >
                MADHAV
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  color: "#19b67d",
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                ORTHOPEDIC HOSPITAL
              </Typography>

              <Typography
                sx={{
                  color: "rgba(255,255,255,.8)",
                  lineHeight: 1.9,
                  mb: 3,
                }}
              >
                Providing advanced orthopaedic treatment with compassionate
                care, experienced specialists, and modern technology to help
                patients regain mobility and lead pain-free lives.
              </Typography>

              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "#16a34a",
                  borderRadius: "40px",
                  px: 4,
                  py: 1.5,
                  textTransform: "none",
                  fontWeight: 700,
                  "&:hover": {
                    bgcolor: "#15803d",
                  },
                }}
              >
                Book Appointment
              </Button>
            </MotionBox>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2.5}>
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{ mb: 3 }}
            >
              Quick Links
            </Typography>

            <Stack spacing={2}>
              {quickLinks.map((item) => (
                <Link
                  key={item}
                  href="#"
                  underline="none"
                  color="inherit"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "rgba(255,255,255,.8)",
                    transition: ".3s",
                    "&:hover": {
                      color: "#19b67d",
                      pl: 1,
                    },
                  }}
                >
                  <KeyboardArrowRight fontSize="small" />
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Treatments */}
          <Grid item xs={12} sm={6} md={2.5}>
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{ mb: 3 }}
            >
              Treatments
            </Typography>

            <Stack spacing={2}>
              {services.map((item) => (
                <Typography
                  key={item}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "rgba(255,255,255,.8)",
                  }}
                >
                  <KeyboardArrowRight fontSize="small" />
                  {item}
                </Typography>
              ))}
            </Stack>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{ mb: 3 }}
            >
              Contact Us
            </Typography>

            <Stack spacing={2.5}>
              <Stack direction="row" spacing={2}>
                <Phone sx={{ color: "#19b67d" }} />
                <Typography>+91 73538 20079</Typography>
              </Stack>

              <Stack direction="row" spacing={2}>
                <Email sx={{ color: "#19b67d" }} />
                <Typography>info@madhavhospital.in</Typography>
              </Stack>

              <Stack direction="row" spacing={2}>
                <LocationOn sx={{ color: "#19b67d" }} />
                <Typography>
                  Railway Station Road,
                  <br />
                  Indi - 586209
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2}>
                <AccessTime sx={{ color: "#19b67d" }} />
                <Typography>
                  24/7 Emergency
                  <br />
                  Monday - Sunday
                </Typography>
              </Stack>
            </Stack>

            <Stack direction="row" spacing={1.5} mt={4}>
              {[
                <FaFacebookF />,
                <FaInstagram />,
                <FaYoutube />,
                <FaWhatsapp />,
              ].map((icon, index) => (
                <IconButton
                  key={index}
                  sx={{
                    bgcolor: "rgba(255,255,255,.12)",
                    color: "#fff",
                    width: 46,
                    height: 46,
                    transition: ".3s",
                    "&:hover": {
                      bgcolor: "#19b67d",
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  {icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>
        </Grid>

        {/* Bottom */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,.15)",
            mt: 7,
            pt: 3,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography color="rgba(255,255,255,.75)">
            © {new Date().getFullYear()} Madhav Orthopedic Hospital. All Rights
            Reserved.
          </Typography>

          <Typography color="rgba(255,255,255,.75)">
            Designed & Developed By ❤️ Manoj Gurav
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;