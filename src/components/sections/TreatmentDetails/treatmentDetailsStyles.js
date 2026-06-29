export const treatmentDetailsStyles = {
  section: {
    py: { xs: 8, md: 12 },
    background: "#FFFFFF",
  },

  item: {
    mb: { xs: 6, md: 8 },
  },

  imageWrapper: {
    position: "relative",
    borderRadius: "24px",
    overflow: "hidden",
    height: { xs: 260, sm: 320, md: 380 },
    boxShadow: "0 20px 50px rgba(11,78,162,.12)",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  imageOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to top, rgba(11,78,162,.55), rgba(11,78,162,.05))",
  },

  iconBadge: {
    position: "absolute",
    bottom: 20,
    left: 20,
    display: "flex",
    alignItems: "center",
    gap: 1.5,
    bgcolor: "#009B72",
    color: "#fff",
    px: 2.5,
    py: 1.2,
    borderRadius: "14px",
    boxShadow: "0 8px 24px rgba(0,155,114,.35)",
  },

  content: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  title: {
    color: "#15396A",
    fontWeight: 700,
    fontSize: { xs: "1.6rem", md: "2rem" },
    mb: 2,
    fontFamily: '"Playfair Display", serif',
  },

  overview: {
    color: "#5B6472",
    lineHeight: 1.85,
    mb: 3,
    fontSize: "1.02rem",
  },

  highlightsTitle: {
    color: "#0B4EA2",
    fontWeight: 700,
    fontSize: "0.95rem",
    textTransform: "uppercase",
    letterSpacing: 1,
    mb: 1.5,
  },

  highlightItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: 1.2,
    mb: 1.2,
    color: "#475569",
    lineHeight: 1.7,
  },

  checkIcon: {
    color: "#009B72",
    fontSize: 20,
    mt: 0.3,
    flexShrink: 0,
  },

  recoveryBox: {
    mt: 3,
    p: 2.5,
    borderRadius: "16px",
    bgcolor: "#F0FAF6",
    border: "1px solid rgba(0,155,114,.15)",
  },

  recoveryLabel: {
    color: "#009B72",
    fontWeight: 700,
    fontSize: "0.85rem",
    textTransform: "uppercase",
    letterSpacing: 1,
    mb: 0.5,
  },

  recoveryText: {
    color: "#334155",
    lineHeight: 1.7,
    fontSize: "0.98rem",
  },
};
