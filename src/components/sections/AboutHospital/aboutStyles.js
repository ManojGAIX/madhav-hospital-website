export const aboutStyles = {
  colors: {
    primary: "#0B4EA2",
    secondary: "#009B72",
    heading: "#0F172A",
    text: "#475569",
    lightText: "#64748B",
    white: "#FFFFFF",
    background: "#F8FBFF",
    border: "#E7EEF8",
  },

  section: {
    position: "relative",

    overflow: "hidden",

    py: {
      xs: 8,
      md: 12,
      lg: 14,
    },

    background:
      "linear-gradient(180deg,#F8FBFF 0%,#FFFFFF 55%,#F8FBFF 100%)",
  },

  badge: {
  color: "#009B72",
  fontWeight: 700,
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  fontSize: {
    xs: ".75rem",
    md: ".82rem",
  },
  mb: 1.5,

    display: "inline-block",

    position: "relative",

    "&::after": {
      content: '""',

      position: "absolute",

      bottom: -10,

      left: 0,

      width: 50,

      height: 3,

      borderRadius: 50,

      bgcolor: "#009B72",
    },
  },

 heading: {
  fontFamily: '"Playfair Display", serif',
  fontWeight: 700,
  color: "#0F172A",
  lineHeight: 1.15,
  mb: 2.5,

  fontSize: {
    xs: "2rem",
    sm: "2.4rem",
    md: "2.9rem",
    lg: "3.3rem",
  },
},

  greenHeading: {
    color: "#009B72",
  },

  description: {
  maxWidth: 600,
  color: "#475569",
  fontSize: {
    xs: ".95rem",
    md: "1rem",
  },
  lineHeight: 1.8,
  mb: 3.5,
},

  featureCard: {
  display: "flex",
  alignItems: "center",
  gap: 1.5,

  p: 1.8,

  minHeight: 70,

  borderRadius: "16px",

  background: "#fff",

  border: "1px solid #EEF3FA",

  boxShadow: "0 10px 25px rgba(15,23,42,.05)",

  transition: ".3s",

  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 18px 35px rgba(11,78,162,.10)",
  },
},

  button: {
  mt: 4,

  px: 4,

  py: 1.3,

  borderRadius: "50px",

  textTransform: "none",

  fontWeight: 700,

  fontSize: ".95rem",

  background:
    "linear-gradient(90deg,#009B72,#0B4EA2)",

  boxShadow: "0 15px 35px rgba(0,155,114,.25)",

  "&:hover": {
    background:
      "linear-gradient(90deg,#008765,#0A428B)",
  },
},

  statCard: {
    background: "#FFFFFF",

    borderRadius: "24px",

    py: 4.5,

    px: 3,

    textAlign: "center",

    border: "1px solid #EEF3FA",

    boxShadow: "0 18px 45px rgba(15,23,42,.06)",

    transition: ".35s",

    "&:hover": {
      transform: "translateY(-10px)",

      boxShadow: "0 25px 55px rgba(11,78,162,.15)",
    },
  },

  floatingCard: {
    position: "absolute",

    width: 140,

    height: 165,

    borderRadius: "24px",

    bgcolor: "rgba(255,255,255,.94)",

    backdropFilter: "blur(15px)",

    display: "flex",

    flexDirection: "column",

    justifyContent: "center",

    alignItems: "center",

    boxShadow: "0 20px 45px rgba(11,78,162,.18)",

    zIndex: 5,
  },

  imageWrapper: {
    position: "relative",

    borderRadius: "34px",

    overflow: "hidden",

    boxShadow:
      "0 45px 90px rgba(11,78,162,.18)",
  },

  glowCircle: {
    position: "absolute",

    borderRadius: "50%",

    filter: "blur(25px)",

    opacity: 0.45,

    zIndex: 0,
  },
};