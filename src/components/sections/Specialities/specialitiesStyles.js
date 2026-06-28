export const specialitiesStyles = {
  section: {
    py: { xs: 8, md: 12 },
    background: "linear-gradient(180deg,#F8FBFF 0%, #FFFFFF 100%)",
  },

  heading: {
    color: "#009B72",
    fontWeight: 700,
    letterSpacing: 2,
    textTransform: "uppercase",
    mb: 2,
    textAlign: "center",
  },

  title: {
    color: "#0B4EA2",
    fontWeight: 700,
    textAlign: "center",
    mb: 2,
    fontFamily: "Playfair Display",
    fontSize: {
      xs: "2rem",
      md: "3rem",
    },
  },

  subtitle: {
    color: "#666",
    textAlign: "center",
    maxWidth: 750,
    mx: "auto",
    mb: 8,
    lineHeight: 1.8,
    fontSize: "1.05rem",
  },

  card: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "24px",
    background: "#fff",
    boxShadow: "0 10px 35px rgba(11,78,162,.08)",
    transition: ".4s",

    "&:hover": {
      transform: "translateY(-10px)",
      boxShadow: "0 18px 45px rgba(11,78,162,.15)",
    },

    "&:hover .speciality-image": {
      transform: "scale(1.08)",
    },
  },

  imageContainer: {
    position: "relative",
    overflow: "hidden",
    height: 240,
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "0.5s ease",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to top, rgba(11,78,162,.65), rgba(11,78,162,.05))",
  },

  iconBox: {
    position: "absolute",
    top: 16,
    right: 16,

    width: 56,
    height: 56,

    borderRadius: "16px",

    bgcolor: "#009B72",

    color: "#fff",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    boxShadow: "0 8px 20px rgba(0,155,114,.35)",
  },

  content: {
    p: 3,
  },

  cardTitle: {
    color: "#15396A",
    fontWeight: 700,
    mb: 2,
    fontSize: "1.4rem",
  },

  description: {
    color: "#666",
    lineHeight: 1.8,
    mb: 3,
    minHeight: 90,
  },

  button: {
    color: "#009B72",
    fontWeight: 700,
    textTransform: "none",

    "&:hover": {
      bgcolor: "transparent",
      color: "#0B4EA2",
    },
  },
};