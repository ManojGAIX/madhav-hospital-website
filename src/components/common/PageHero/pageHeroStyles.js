export const pageHeroStyles = {
  section: {
    position: "relative",
    overflow: "hidden",
    pt: { xs: 8, md: 10 },
    pb: { xs: 6, md: 8 },
    background: "linear-gradient(135deg, #F8FBFF 0%, #FFFFFF 50%, #F0FAF6 100%)",
  },

  glow: {
    position: "absolute",
    top: -80,
    right: -80,
    width: 320,
    height: 320,
    borderRadius: "50%",
    bgcolor: "rgba(11,78,162,.06)",
    filter: "blur(60px)",
  },

  badge: {
    display: "inline-block",
    px: 2.5,
    py: 0.8,
    mb: 2,
    borderRadius: "999px",
    bgcolor: "rgba(0,155,114,.08)",
    color: "#009B72",
    fontWeight: 700,
    letterSpacing: 2,
    textTransform: "uppercase",
    fontSize: ".82rem",
  },

  title: {
    fontFamily: '"Playfair Display", serif',
    fontWeight: 700,
    color: "#15396A",
    lineHeight: 1.2,
    mb: 2,
    fontSize: { xs: "2.2rem", sm: "2.6rem", md: "3.2rem" },
  },

  subtitle: {
    color: "#5B6472",
    lineHeight: 1.85,
    fontSize: { xs: "1rem", md: "1.1rem" },
    maxWidth: 680,
    mx: "auto",
  },

  line: {
    width: 90,
    height: 4,
    borderRadius: 5,
    bgcolor: "#009B72",
    mx: "auto",
    mt: 3,
  },
};
