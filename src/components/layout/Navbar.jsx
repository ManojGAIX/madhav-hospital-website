import { AppBar, Toolbar, Button, Box, Container } from "@mui/material";

import logo from "../../assets/logo/logo.png";

const Navbar = () => {
  const activeMenu = {
    color: "#0B4EA2",
    fontWeight: 700,
    borderBottom: "3px solid #009B72",
    borderRadius: 0,
  };
  return (
    <AppBar position="sticky" color="inherit" elevation={1}>
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            justifyContent: "space-between",
            height: 90,
          }}
        >
          <img
            src={logo}
            alt="Madhav Orthopedic Hospital"
            style={{
              height: 85,
              objectFit: "contain",
            }}
          />

          <Box display="flex" gap={3}>
            <Button
              color="inherit"
              sx={{
                activeMenu,
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: 16,
                textTransform: "none",
                transition: "0.3s",

                "&:hover": {
                  color: "#0B4EA2",
                  transform: "translateY(-2px)",
                  backgroundColor: "transparent",
                },
              }}
            >
              Home
            </Button>

            <Button
              color="inherit"
              sx={{
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: 16,
                textTransform: "none",
                transition: "0.3s",

                "&:hover": {
                  color: "#0B4EA2",
                  transform: "translateY(-2px)",
                  backgroundColor: "transparent",
                },
              }}
            >
              About
            </Button>

            <Button
              color="inherit"
              sx={{
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: 16,
                textTransform: "none",
                transition: "0.3s",

                "&:hover": {
                  color: "#0B4EA2",
                  transform: "translateY(-2px)",
                  backgroundColor: "transparent",
                },
              }}
            >
              Treatments
            </Button>

            <Button
              color="inherit"
              sx={{
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: 16,
                textTransform: "none",
                transition: "0.3s",

                "&:hover": {
                  color: "#0B4EA2",
                  transform: "translateY(-2px)",
                  backgroundColor: "transparent",
                },
              }}
            >
              Doctors
            </Button>

            <Button
              color="inherit"
              sx={{
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: 16,
                textTransform: "none",
                transition: "0.3s",

                "&:hover": {
                  color: "#0B4EA2",
                  transform: "translateY(-2px)",
                  backgroundColor: "transparent",
                },
              }}
            >
              Gallery
            </Button>

            <Button
              color="inherit"
              sx={{
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: 16,
                textTransform: "none",
                transition: "0.3s",

                "&:hover": {
                  color: "#0B4EA2",
                  transform: "translateY(-2px)",
                  backgroundColor: "transparent",
                },
              }}
            >
              Contact
            </Button>
          </Box>

          <Button
            variant="contained"
            sx={{
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
  );
};

export default Navbar;
