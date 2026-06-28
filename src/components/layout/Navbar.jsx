import { useState } from "react";
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
  "Home",
  "About",
  "Treatments",
  "Doctors",
  "Gallery",
  "Contact",
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const activeMenu = {
    color: "#0B4EA2",
    fontWeight: 700,
    borderBottom: "3px solid #009B72",
    borderRadius: 0,
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
              sx={{
                flexGrow: { xs: 1, md: 0 },
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
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
              {menuItems.map((item, index) => (
                <Button
                  key={item}
                  color="inherit"
                  sx={{
                    ...(index === 0 ? activeMenu : {}),
                    fontFamily: "Poppins",
                    fontWeight: 600,
                    fontSize: 16,
                    textTransform: "none",
                    transition: ".3s",

                    "&:hover": {
                      color: "#0B4EA2",
                      transform: "translateY(-2px)",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>

            {/* Desktop Appointment Button */}
            <Button
              variant="contained"
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
              }}
            >
              Book Appointment
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box sx={{ width: 260 }}>
          <Box sx={{ textAlign: "center", py: 3 }}>
            <img
              src={logo}
              alt="Logo"
              style={{ width: 170 }}
            />
          </Box>

          <List>
            {menuItems.map((item) => (
              <ListItemButton
                key={item}
                onClick={() => setOpen(false)}
              >
                <ListItemText primary={item} />
              </ListItemButton>
            ))}
          </List>

          <Box p={2}>
            <Button
              fullWidth
              variant="contained"
              sx={{
                background: "#009B72",
                borderRadius: 3,
                textTransform: "none",
                fontWeight: 700,
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