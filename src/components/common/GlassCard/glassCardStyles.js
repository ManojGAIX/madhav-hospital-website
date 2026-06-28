export const glassCardStyles = {
  card: {
    position: "relative",

    overflow: "hidden",

    borderRadius: "24px",

    p: 4,

    background: "rgba(255,255,255,0.72)",

    backdropFilter: "blur(18px)",

    WebkitBackdropFilter: "blur(18px)",

    border: "1px solid rgba(255,255,255,0.35)",

    boxShadow: "0 12px 40px rgba(11,78,162,.08)",

    transition: "all .35s ease",

    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "0 20px 45px rgba(11,78,162,.15)",
    },
  },

  glow: {
    position: "absolute",

    width: 180,

    height: 180,

    borderRadius: "50%",

    background: "rgba(0,155,114,.08)",

    filter: "blur(50px)",

    top: -70,

    right: -70,

    pointerEvents: "none",
  },
};