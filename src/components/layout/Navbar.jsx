import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import logo from "../../assets/logo/logo.png";

const menuItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Treatments", id: "treatments" },
  { label: "Doctors", id: "doctors" },
  { label: "Gallery", id: "gallery" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = menuItems.map((item) => document.getElementById(item.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
        rootMargin: "-120px 0px -40% 0px",
      },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const activeMenu = {
    color: "#0B4EA2",
    fontWeight: 700,
    borderBottom: "3px solid #009B72",
    borderRadius: 0,
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    const navbarHeight = 90;

    const top =
      section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    setActiveSection(id);
  };

  return (
    <>
      <AppBar position="sticky" color="inherit" elevation={1}>
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              justifyContent: "space-between",
              height: { xs: 75, md: 90 },
            }}
          >
            {/* Mobile Menu Icon */}
            <IconButton
              onClick={() => setOpen(true)}
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              <MenuIcon />
            </IconButton>

            {/* Logo */}
            <Box
              onClick={() => scrollToSection("home")}
              sx={{
                cursor: "pointer",
                flexGrow: { xs: 1, md: 0 },
                display: "flex",
                justifyContent: {
                  xs: "center",
                  md: "flex-start",
                },
              }}
            >
              <img
                src={logo}
                alt="Madhav Orthopedic Hospital"
                style={{
                  height: 70,
                  objectFit: "contain",
                }}
              />
            </Box>

            {/* Desktop Menu */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 3,
              }}
            >
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  color="inherit"
                  sx={{
                    color: activeSection === item.id ? "#0B4EA2" : "#334155",

                    fontWeight: activeSection === item.id ? 700 : 600,

                    borderBottom:
                      activeSection === item.id
                        ? "3px solid #009B72"
                        : "3px solid transparent",

                    borderRadius: 0,

                    fontFamily: "Poppins",

                    fontSize: 16,

                    textTransform: "none",

                    transition: ".3s",

                    "&:hover": {
                      color: "#0B4EA2",
                      backgroundColor: "transparent",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Desktop Appointment Button */}
            <Button
              variant="contained"
              onClick={() => scrollToSection("appointment")}
              sx={{
                display: { xs: "none", md: "flex" },
                background: "#009B72",
                borderRadius: "50px",
                px: 4,
                py: 1.3,
                fontWeight: 700,
                textTransform: "none",
                fontSize: 17,
                boxShadow: "0 8px 20px rgba(0,155,114,.3)",

                "&:hover": {
                  background: "#008463",
                },
              }}
            >
              Book Appointment
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260 }}>
          <Box sx={{ textAlign: "center", py: 3 }}>
            <img src={logo} alt="Logo" style={{ width: 170 }} />
          </Box>

          <List>
            {menuItems.map((item) => (
              <ListItemButton
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setOpen(false);
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: activeSection === item.id ? 700 : 500,
                    color: activeSection === item.id ? "#0B4EA2" : "#334155",
                  }}
                />
              </ListItemButton>
            ))}
          </List>

          <Box p={2}>
            <Button
              fullWidth
              variant="contained"
              onClick={() => {
                scrollToSection("appointment");
                setOpen(false);
              }}
              sx={{
                background: "#009B72",
                borderRadius: "50px",
                py: 1.3,
                fontWeight: 700,
                textTransform: "none",
                fontSize: 16,

                "&:hover": {
                  background: "#008463",
                },
              }}
            >
              Book Appointment
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
