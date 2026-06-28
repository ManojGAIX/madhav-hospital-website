import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Stack,
  IconButton,
  Button,
  Divider,
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

import logo from "../../assets/logo/logo.png";

const MotionBox = motion(Box);

/* ---------------------- Navigation ---------------------- */

const quickLinks = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Treatments",
    href: "#treatments",
  },
  {
    title: "Doctors",
    href: "#doctors",
  },
  {
    title: "Gallery",
    href: "#gallery",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

/* ---------------------- Treatments ---------------------- */

const services = [
  "Knee Replacement",
  "Hip Replacement",
  "Spine Surgery",
  "Sports Injury",
  "Fracture Care",
  "Arthroscopy",
];

/* ---------------------- Social ---------------------- */

const socialLinks = [
  {
    icon: <FaFacebookF />,
    link: "#",
  },
  {
    icon: <FaInstagram />,
    link: "#",
  },
  {
    icon: <FaYoutube />,
    link: "#",
  },
  {
    icon: <FaWhatsapp />,
    link: "https://wa.me/917353820079",
  },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background:
          "linear-gradient(135deg,#0B3D91 0%,#0A2D68 55%,#06214E 100%)",
        color: "#fff",
        mt: 10,
        pt: {
          xs: 6,
          md: 8,
        },
        pb: 2,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={5}>
          {/* ================= LEFT ================= */}

          <Grid size={{ xs: 12, md: 4 }}>
            <MotionBox
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
            >
              {/* Logo */}

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  mb: 3,
                }}
              >
                <Box
                  component="img"
                  src={logo}
                  alt="Madhav Orthopedic Hospital"
                  sx={{
                    width: 82,
                    height: 82,
                    bgcolor: "#fff",
                    borderRadius: 3,
                    p: 1,
                    objectFit: "contain",
                  }}
                />

                <Box>
                  <Typography
                    variant="h5"
                    fontWeight={800}
                    letterSpacing={1}
                  >
                    MADHAV
                  </Typography>

                  <Typography
                    sx={{
                      color: "#25D366",
                      fontWeight: 700,
                    }}
                  >
                    ORTHOPEDIC HOSPITAL
                  </Typography>
                </Box>
              </Box>

              {/* Description */}

              <Typography
                sx={{
                  color: "rgba(255,255,255,.82)",
                  lineHeight: 1.9,
                  mb: 3,
                  textAlign: "justify",
                }}
              >
                Madhav Orthopedic Hospital provides advanced diagnosis,
                orthopaedic surgery, trauma care, joint replacement,
                sports injury treatment, and rehabilitation with
                compassionate care, experienced specialists, and modern
                medical technology.
              </Typography>

              {/* Tag Line */}

              <Typography
                sx={{
                  color: "#25D366",
                  fontWeight: 700,
                  fontStyle: "italic",
                  mb: 4,
                }}
              >
                Expert Orthopaedic Care For Every Step of Life
              </Typography>

              {/* CTA */}

              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "#16a34a",
                  borderRadius: "50px",
                  px: 4,
                  py: 1.4,
                  textTransform: "none",
                  fontWeight: 700,
                  fontSize: 16,
                  boxShadow:
                    "0 10px 30px rgba(22,163,74,.35)",

                  "&:hover": {
                    bgcolor: "#15803d",
                  },
                }}
              >
                Book Appointment
              </Button>
            </MotionBox>
          </Grid>

          {/* ================= QUICK LINKS ================= */}

          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography
              variant="h6"
              fontWeight={700}
              mb={3}
            >
              Quick Links
            </Typography>

            <Stack spacing={2}>
              {quickLinks.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  underline="none"
                  color="inherit"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: .5,
                    color: "rgba(255,255,255,.82)",
                    transition: ".3s",

                    "&:hover": {
                      color: "#25D366",
                      pl: 1,
                    },
                  }}
                >
                  <KeyboardArrowRight fontSize="small" />
                  {item.title}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* ================= TREATMENTS ================= */}

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              variant="h6"
              fontWeight={700}
              mb={3}
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
                    gap: .5,
                    color: "rgba(255,255,255,.82)",
                  }}
                >
                  <KeyboardArrowRight fontSize="small" />
                  {item}
                </Typography>
              ))}
            </Stack>
          </Grid>

                    {/* ================= CONTACT ================= */}

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography
              variant="h6"
              fontWeight={700}
              mb={3}
            >
              Contact Us
            </Typography>

            <Stack spacing={3}>

              {/* Phone */}

              <Link
                href="tel:+917353820079"
                underline="none"
                color="inherit"
                sx={{
                  "&:hover": {
                    color: "#25D366",
                  },
                }}
              >
                <Stack direction="row" spacing={2}>
                  <Phone sx={{ color: "#25D366" }} />

                  <Box>
                    <Typography fontWeight={600}>
                      Call Us
                    </Typography>

                    <Typography
                      variant="body2"
                      color="rgba(255,255,255,.75)"
                    >
                      +91 73538 20079
                    </Typography>
                  </Box>
                </Stack>
              </Link>

              {/* Email */}

              <Link
                href="mailto:info@madhavhospital.in"
                underline="none"
                color="inherit"
                sx={{
                  "&:hover": {
                    color: "#25D366",
                  },
                }}
              >
                <Stack direction="row" spacing={2}>
                  <Email sx={{ color: "#25D366" }} />

                  <Box>
                    <Typography fontWeight={600}>
                      Email
                    </Typography>

                    <Typography
                      variant="body2"
                      color="rgba(255,255,255,.75)"
                    >
                      info@madhavhospital.in
                    </Typography>
                  </Box>
                </Stack>
              </Link>

              {/* Address */}

              <Link
                href="https://maps.app.goo.gl/9PWoyM9rcByXkf5U8"
                target="_blank"
                underline="none"
                color="inherit"
                sx={{
                  "&:hover": {
                    color: "#25D366",
                  },
                }}
              >
                <Stack direction="row" spacing={2}>
                  <LocationOn sx={{ color: "#25D366" }} />

                  <Box>
                    <Typography fontWeight={600}>
                      Address
                    </Typography>

                    <Typography
                      variant="body2"
                      color="rgba(255,255,255,.75)"
                    >
                      Near Hotel Indi Palace, Railway Station Road
                      <br />
                      Indi, Karnataka - 586209
                    </Typography>
                  </Box>
                </Stack>
              </Link>

              {/* Timing */}

              <Stack direction="row" spacing={2}>
                <AccessTime sx={{ color: "#25D366" }} />

                <Box>
                  <Typography fontWeight={600}>
                    Working Hours
                  </Typography>

                  <Typography
                    variant="body2"
                    color="rgba(255,255,255,.75)"
                  >
                    Monday - Saturday
                    <br />
                    9:00 AM - 8:00 PM
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "#25D366",
                      mt: .5,
                    }}
                  >
                    24×7 Emergency Available
                  </Typography>
                </Box>
              </Stack>
            </Stack>

            {/* Social */}

            <Stack
              direction="row"
              spacing={2}
              mt={5}
              flexWrap="wrap"
            >
              {socialLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  target="_blank"
                  underline="none"
                >
                  <IconButton
                    sx={{
                      width: 48,
                      height: 48,
                      bgcolor: "rgba(255,255,255,.10)",
                      color: "#fff",
                      transition: ".35s",

                      "&:hover": {
                        bgcolor: "#25D366",
                        transform: "translateY(-4px) scale(1.08)",
                      },
                    }}
                  >
                    {item.icon}
                  </IconButton>
                </Link>
              ))}
            </Stack>
          </Grid>

        </Grid>

        <Divider
          sx={{
            my: 6,
            borderColor: "rgba(255,255,255,.12)",
          }}
        />

                {/* ================= Footer Bottom ================= */}

        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
            pb: 2,
            textAlign: {
              xs: "center",
              md: "left",
            },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255,255,255,.75)",
              lineHeight: 1.8,
            }}
          >
            © {new Date().getFullYear()}{" "}
            <strong>Madhav Orthopedic Hospital</strong>. All Rights Reserved.
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "rgba(255,255,255,.75)",
              lineHeight: 1.8,
            }}
          >
            Designed & Developed with ❤️ by{" "}
            <Typography
              component="span"
              sx={{
                color: "#25D366",
                fontWeight: 700,
              }}
            >
              Manoj Gurav
            </Typography>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;