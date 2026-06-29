import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Link,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const TopBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "rgba(11,78,162,0.82)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,.1)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              minHeight: 48,
              justifyContent: "space-between",
              px: { xs: 1, md: 0 },
            }}
          >
            {/* ================= Desktop Left ================= */}

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 3,
              }}
            >
              <Link
                href="tel:+916362695499"
                underline="none"
                color="inherit"
                sx={itemStyle}
              >
                <PhoneIcon sx={iconStyle} />
                <Typography sx={textStyle}>+91 73538 20079</Typography>
              </Link>

              <Link
                href="mailto:info@madhavhospital.in"
                underline="none"
                color="inherit"
                sx={itemStyle}
              >
                <EmailIcon sx={iconStyle} />
                <Typography sx={textStyle}>info@madhavhospital.in</Typography>
              </Link>
            </Box>

            {/* ================= Mobile ================= */}

            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                alignItems: "center",
                gap: 1,
              }}
            >
              <Link
                href="tel:+916362695499"
                underline="none"
                color="inherit"
                sx={itemStyle}
              >
                <PhoneIcon sx={iconStyle} />
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: 13,
                    fontWeight: 500,
                  }}
                >
                  Call Now
                </Typography>
              </Link>
            </Box>

            {/* ================= Desktop Right ================= */}

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 3,
              }}
            >
              <Link
                href="https://maps.app.goo.gl/9PWoyM9rcByXkf5U8"
                target="_blank"
                underline="none"
                color="inherit"
                sx={itemStyle}
              >
                <LocationOnIcon sx={iconStyle} />

                <Typography sx={textStyle}>
                  Near Hotel Indi Palace, Indi
                </Typography>
              </Link>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <SocialLink href="#">
                  <FaFacebookF />
                </SocialLink>

                <SocialLink href="#">
                  <FaInstagram />
                </SocialLink>

                <SocialLink href="#">
                  <FaYoutube />
                </SocialLink>
              </Box>
            </Box>

            {/* ================= Mobile Menu ================= */}

            <IconButton
              onClick={() => setOpen(true)}
              sx={{
                display: { xs: "flex", md: "none" },
                color: "#fff",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* ================= Drawer ================= */}

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: 290,
          }}
        >
          <Box
            sx={{
              bgcolor: "#0B4EA2",
              color: "#fff",
              py: 3,
              textAlign: "center",
            }}
          >
            <Typography variant="h6" fontWeight={700}>
              Madhav Orthopedic Hospital
            </Typography>

            <Typography variant="body2">Expert Orthopaedic Care</Typography>
          </Box>

          <List>
            <ListItemButton component="a" href="tel:+916362695499">
              <ListItemIcon>
                <PhoneIcon color="primary" />
              </ListItemIcon>

              <ListItemText primary="+91 73538 20079" />
            </ListItemButton>

            <ListItemButton component="a" href="mailto:info@madhavhospital.in">
              <ListItemIcon>
                <EmailIcon color="primary" />
              </ListItemIcon>

              <ListItemText primary="info@madhavhospital.in" />
            </ListItemButton>

            <ListItemButton
              component="a"
              href="https://maps.google.com/?q=Railway+Station+Road,+Indi"
              target="_blank"
            >
              <ListItemIcon>
                <LocationOnIcon color="primary" />
              </ListItemIcon>

              <ListItemText primary="Railway Station Road, Indi" />
            </ListItemButton>
          </List>

          <Divider />

          <Box
            sx={{
              p: 3,
            }}
          >
            <Typography fontWeight={600} mb={2}>
              Follow Us
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 2,
              }}
            >
              <SocialLink href="#">
                <FaFacebookF />
              </SocialLink>

              <SocialLink href="#">
                <FaInstagram />
              </SocialLink>

              <SocialLink href="#">
                <FaYoutube />
              </SocialLink>
            </Box>
          </Box>

          <Box p={3}>
            <Button
              fullWidth
              startIcon={<WhatsAppIcon />}
              variant="contained"
              sx={{
                bgcolor: "#25D366",
                borderRadius: 5,
                py: 1.3,
                fontWeight: 700,
                textTransform: "none",
                fontSize: 15,

                "&:hover": {
                  bgcolor: "#1ebe5d",
                },
              }}
            >
              WhatsApp Us
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default TopBar;

/* ----------------------- Styles ----------------------- */

const itemStyle = {
  display: "flex",
  alignItems: "center",
  gap: 0.7,
  color: "#fff",
  transition: ".3s",

  "&:hover": {
    color: "#6EE7B7",
  },
};

const iconStyle = {
  fontSize: 16,
};

const textStyle = {
  fontSize: 13,
  fontWeight: 500,
};

const SocialLink = ({ href, children }) => (
  <Link
    href={href}
    target="_blank"
    underline="none"
    color="inherit"
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 30,
      height: 30,
      borderRadius: "50%",
      color: "#fff",
      transition: ".3s",

      "&:hover": {
        bgcolor: "rgba(255,255,255,.15)",
        transform: "translateY(-2px)",
        color: "#6EE7B7",
      },
    }}
  >
    {children}
  </Link>
);
