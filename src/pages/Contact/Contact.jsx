import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Stack,
  Link,
} from "@mui/material";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import { motion } from "framer-motion";

import PageHero from "../../components/common/PageHero/PageHero";
import { HOSPITAL } from "../../constants/hospital";

const contactCards = [
  {
    icon: PhoneRoundedIcon,
    title: "Call Us",
    detail: HOSPITAL.phone,
    href: HOSPITAL.phoneTel,
    action: "Call Now",
  },
  {
    icon: EmailRoundedIcon,
    title: "Email Us",
    detail: HOSPITAL.email,
    href: `mailto:${HOSPITAL.email}`,
    action: "Send Email",
  },
  {
    icon: LocationOnRoundedIcon,
    title: "Visit Us",
    detail: HOSPITAL.address,
    href: HOSPITAL.mapsUrl,
    action: "Get Directions",
  },
  {
    icon: AccessTimeRoundedIcon,
    title: "Working Hours",
    detail: HOSPITAL.workingHours,
    extra: HOSPITAL.emergencyNote,
  },
];

const Contact = () => {
  return (
    <>
      <PageHero
        badge="Contact Us"
        title="Get In Touch"
        subtitle="Book an appointment, ask a question, or reach our emergency team — we are here to help you every step of the way."
      />

      <Box
        component="section"
        id="contact"
        sx={{
          py: { xs: 8, md: 12 },
          background: "#FFFFFF",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {contactCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <Grid key={card.title} size={{ xs: 12, sm: 6, lg: 3 }}>
                  <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    sx={{
                      height: "100%",
                      p: 3.5,
                      borderRadius: "24px",
                      bgcolor: "#F8FBFF",
                      border: "1px solid #E7EEF8",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: "14px",
                        bgcolor: "#009B72",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 2.5,
                      }}
                    >
                      <Icon />
                    </Box>

                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: "1.15rem",
                        color: "#15396A",
                        mb: 1,
                      }}
                    >
                      {card.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#5B6472",
                        lineHeight: 1.8,
                        flexGrow: 1,
                        mb: card.href ? 2.5 : 0,
                      }}
                    >
                      {card.detail}
                    </Typography>

                    {card.extra && (
                      <Typography
                        sx={{
                          color: "#009B72",
                          fontWeight: 600,
                          mt: 1,
                        }}
                      >
                        {card.extra}
                      </Typography>
                    )}

                    {card.href && (
                      <Button
                        component={Link}
                        href={card.href}
                        target={card.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          card.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        variant="outlined"
                        sx={{
                          mt: "auto",
                          borderColor: "#0B4EA2",
                          color: "#0B4EA2",
                          borderRadius: "50px",
                          textTransform: "none",
                          fontWeight: 600,
                          "&:hover": {
                            bgcolor: "#0B4EA2",
                            color: "#fff",
                            borderColor: "#0B4EA2",
                          },
                        }}
                      >
                        {card.action}
                      </Button>
                    )}
                  </Box>
                </Grid>
              );
            })}
          </Grid>

          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            sx={{
              mt: 6,
              p: { xs: 4, md: 5 },
              borderRadius: "24px",
              background:
                "linear-gradient(135deg, #0B4EA2 0%, #0A2D68 100%)",
              color: "#fff",
              textAlign: "center",
            }}
          >
            <CalendarMonthRoundedIcon sx={{ fontSize: 48, mb: 2 }} />
            <Typography
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
                fontSize: { xs: "1.6rem", md: "2rem" },
                mb: 1.5,
              }}
            >
              Book Your Appointment Today
            </Typography>
            <Typography
              sx={{
                color: "rgba(255,255,255,.85)",
                maxWidth: 560,
                mx: "auto",
                mb: 3,
                lineHeight: 1.8,
              }}
            >
              Schedule a consultation with our orthopaedic specialists. Call us
              directly or visit the hospital during working hours.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
            >
              <Button
                component={Link}
                href={HOSPITAL.phoneTel}
                variant="contained"
                startIcon={<PhoneRoundedIcon />}
                sx={{
                  bgcolor: "#009B72",
                  borderRadius: "50px",
                  px: 4,
                  py: 1.3,
                  fontWeight: 700,
                  textTransform: "none",
                  "&:hover": { bgcolor: "#008463" },
                }}
              >
                Call {HOSPITAL.phone}
              </Button>

              <Button
                component={Link}
                href={`mailto:${HOSPITAL.email}`}
                variant="outlined"
                startIcon={<EmailRoundedIcon />}
                sx={{
                  borderColor: "#fff",
                  color: "#fff",
                  borderRadius: "50px",
                  px: 4,
                  py: 1.3,
                  fontWeight: 700,
                  textTransform: "none",
                  borderWidth: 2,
                  "&:hover": {
                    borderWidth: 2,
                    bgcolor: "rgba(255,255,255,.12)",
                    borderColor: "#fff",
                  },
                }}
              >
                Email Us
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Contact;
