import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
import { NAV_ITEMS } from "../../constants/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  const navButtonSx = (path) => ({
    color: isActive(path) ? "#0B4EA2" : "#334155",
    fontWeight: isActive(path) ? 700 : 600,
    borderBottom: isActive(path)
      ? "3px solid #009B72"
      : "3px solid transparent",
    borderRadius: 0,
    textTransform: "none",
    whiteSpace: "nowrap",

    px: {
      md: 1,
      lg: 1.5,
      xl: 2,
    },

    fontSize: {
      md: 14,
      lg: 15,
      xl: 16,
    },

    "&:hover": {
      color: "#0B4EA2",
      backgroundColor: "transparent",
    },
  });

  const handleNavClick = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <>
      <AppBar position="sticky" color="inherit" elevation={1}>
        <Container
          maxWidth="xl"
          disableGutters
          sx={{
            px: {
              xs: 2,
              sm: 3,
              md: 4,
              lg: 5,
            },
          }}
        >
          <Toolbar
            sx={{
              justifyContent: "space-between",
              height: { xs: 75, md: 90 },
            }}
          >
            <IconButton
              onClick={() => setOpen(true)}
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Box
              component={Link}
              to="/"
              sx={{
                cursor: "pointer",
                flexGrow: { xs: 1, md: 0 },
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
                textDecoration: "none",
              }}
            >
              <img
                src={logo}
                alt="Madhav Orthopedic Hospital"
                style={{ height: 70, objectFit: "contain" }}
              />
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                flex: 1,
                justifyContent: "center",
                gap: {
                  md: 1,
                  lg: 2,
                  xl: 3,
                },
              }}
            >
              {NAV_ITEMS.map((item) => (
                <Button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  color="inherit"
                  sx={navButtonSx(item.path)}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            <Button
              component={Link}
              to="/contact"
              variant="contained"
              sx={{
                display: { xs: "none", lg: "flex" }, // Only hide button on tablets
                whiteSpace: "nowrap",
                minWidth: 180,
                px: 3,
                py: 1.2,
                borderRadius: "50px",
                background: "#009B72",
                fontSize: 15,
                fontWeight: 700,
                textTransform: "none",
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

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260 }}>
          <Box sx={{ textAlign: "center", py: 3 }}>
            <img src={logo} alt="Logo" style={{ width: 170 }} />
          </Box>

          <List>
            {NAV_ITEMS.map((item) => (
              <ListItemButton
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                selected={isActive(item.path)}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: isActive(item.path) ? 700 : 500,
                    color: isActive(item.path) ? "#0B4EA2" : "#334155",
                  }}
                />
              </ListItemButton>
            ))}
          </List>

          <Box p={2}>
            <Button
              fullWidth
              variant="contained"
              onClick={() => handleNavClick("/contact")}
              sx={{
                background: "#009B72",
                borderRadius: "50px",
                py: 1.3,
                fontWeight: 700,
                textTransform: "none",
                fontSize: 16,
                "&:hover": { background: "#008463" },
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
