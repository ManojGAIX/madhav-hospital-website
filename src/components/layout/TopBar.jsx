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
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const TopBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ✅ GLASS STICKY APPBAR */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "rgba(11, 78, 162, 0.75)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          transition: "all 0.3s ease",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              minHeight: 45,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* LEFT SIDE (Desktop) */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 3,
              }}
            >
              {/* Phone */}
              <Box sx={itemStyle}>
                <PhoneIcon sx={iconStyle} />
                <Typography sx={textStyle}>+91 73538 20079</Typography>
              </Box>

              {/* Email */}
              <Box sx={itemStyle}>
                <EmailIcon sx={iconStyle} />
                <Typography sx={textStyle}>
                  info@madhavhospital.in
                </Typography>
              </Box>
            </Box>

            {/* RIGHT SIDE (Desktop) */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 3,
              }}
            >
              {/* Location */}
              <Box sx={itemStyle}>
                <LocationOnIcon sx={iconStyle} />
                <Typography sx={textStyle}>
                  Railway Station Road, Indi
                </Typography>
              </Box>

              {/* Social */}
              <Box sx={{ display: "flex", gap: 1.5 }}>
                <FaFacebookF style={socialIcon} />
                <FaInstagram style={socialIcon} />
                <FaYoutube style={socialIcon} />
              </Box>
            </Box>

            {/* MOBILE MENU ICON */}
            <IconButton
              sx={{ display: { xs: "flex", md: "none" }, color: "white" }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* 📱 MOBILE DRAWER */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260, p: 2 }}>
          <Typography
            variant="h6"
            sx={{ mb: 2, fontWeight: 600, color: "#0B4EA2" }}
          >
            Contact Info
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <PhoneIcon />
              </ListItemIcon>
              <ListItemText primary="+91 73538 20079" />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary="info@madhavhospital.in" />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText primary="Railway Station Road, Indi" />
            </ListItem>
          </List>

          <Box sx={{ display: "flex", gap: 2, mt: 2, px: 2 }}>
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default TopBar;

/* 🔥 reusable styles */
const itemStyle = {
  display: "flex",
  alignItems: "center", // ✅ FIX: prevents 2-line icon/text issue
  gap: 0.6,
  whiteSpace: "nowrap",
};

const iconStyle = {
  fontSize: 16,
  color: "white",
};

const textStyle = {
  fontSize: 13,
  color: "white",
  lineHeight: 1,
};

const socialIcon = {
  fontSize: 14,
  cursor: "pointer",
  color: "white",
};  