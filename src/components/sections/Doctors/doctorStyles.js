export const doctorStyles = {
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
    py: {
      xs: 8,
      md: 12,
      lg: 14,
    },

    background:
      "linear-gradient(180deg,#FFFFFF 0%,#F8FBFF 100%)",

    overflow: "hidden",
  },

  badge: {
    color: "#009B72",

    fontWeight: 700,

    letterSpacing: "2px",

    textTransform: "uppercase",

    fontSize: {
      xs: ".8rem",
      md: ".9rem",
    },

    mb: 2,
  },

  heading: {
    fontFamily: '"Playfair Display", serif',

    fontWeight: 700,

    color: "#0F172A",

    lineHeight: 1.15,

    mb: 2,

    fontSize: {
      xs: "2rem",
      sm: "2.5rem",
      md: "3.3rem",
      lg: "3.8rem",
    },
  },

  greenHeading: {
    color: "#009B72",
  },

  description: {
    color: "#475569",

    maxWidth: 700,

    mx: "auto",

    lineHeight: 1.8,

    fontSize: {
      xs: ".95rem",
      md: "1.05rem",
    },

    mb: {
      xs: 5,
      md: 7,
    },
  },

  featuredCard: {
    position: "relative",

    overflow: "hidden",

    borderRadius: "30px",

    background: "#FFFFFF",

    border: "1px solid #E7EEF8",

    boxShadow: "0 20px 60px rgba(15,23,42,.08)",

    p: {
      xs: 3,
      md: 5,
    },
  },

  imageWrapper: {
    position: "relative",

    borderRadius: "24px",

    overflow: "hidden",

    boxShadow: "0 20px 50px rgba(11,78,162,.15)",
  },

  doctorImage: {
    width: "100%",

    display: "block",

    objectFit: "cover",

    borderRadius: "24px",
  },

  floatingBadge: {
    position: "absolute",

    top: 20,

    left: 20,

    bgcolor: "rgba(255,255,255,.95)",

    backdropFilter: "blur(12px)",

    borderRadius: "18px",

    px: 2,

    py: 1,

    boxShadow: "0 10px 25px rgba(0,0,0,.12)",
  },

  qualificationChip: {
    display: "inline-flex",

    alignItems: "center",

    px: 2,

    py: .8,

    borderRadius: "30px",

    bgcolor: "#EAF7F3",

    color: "#009B72",

    fontWeight: 600,

    fontSize: ".9rem",

    mr: 1,

    mb: 1,
  },

  featureItem: {
    display: "flex",

    alignItems: "center",

    gap: 1.5,

    mt: 2,
  },

  buttonPrimary: {
    mt: 4,

    px: 4,

    py: 1.4,

    borderRadius: "50px",

    textTransform: "none",

    fontWeight: 700,

    background:
      "linear-gradient(90deg,#009B72,#0B4EA2)",

    boxShadow: "0 12px 30px rgba(0,155,114,.25)",

    "&:hover": {
      background:
        "linear-gradient(90deg,#008765,#0A428B)",
    },
  },

  buttonSecondary: {
    mt: 4,

    ml: 2,

    px: 4,

    py: 1.4,

    borderRadius: "50px",

    textTransform: "none",

    fontWeight: 700,

    border: "2px solid #0B4EA2",

    color: "#0B4EA2",

    "&:hover": {
      bgcolor: "#0B4EA2",
      color: "#fff",
    },
  },

  doctorCard: {
    borderRadius: "24px",

    overflow: "hidden",

    background: "#FFFFFF",

    border: "1px solid #E7EEF8",

    boxShadow: "0 15px 40px rgba(15,23,42,.06)",

    transition: ".35s",

    "&:hover": {
      transform: "translateY(-10px)",

      boxShadow: "0 25px 55px rgba(11,78,162,.15)",
    },
  },

  doctorImageSmall: {
    width: "100%",

    height: 320,

    objectFit: "cover",
  },

  socialButton: {
    width: 42,

    height: 42,

    borderRadius: "50%",

    bgcolor: "#F1F5F9",

    color: "#0B4EA2",

    transition: ".3s",

    "&:hover": {
      bgcolor: "#009B72",
      color: "#FFFFFF",
    },
  },
};