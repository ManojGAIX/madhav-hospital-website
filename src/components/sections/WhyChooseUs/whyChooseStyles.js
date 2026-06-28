export const whyChooseStyles = {
  section: {
    py: {
      xs: 8,
      md: 12,
    },

    background:
      "linear-gradient(180deg,#FFFFFF 0%,#F8FBFF 100%)",
  },

  title: {
    color: "#15396A",
  },

  subtitle: {
    color: "#666",
  },

  card: {
    borderRadius: "24px",

    p: 4,

    height: "100%",

    transition: ".35s",

    background: "#FFFFFF",

    border: "1px solid #EEF4FF",

    boxShadow: "0 12px 30px rgba(11,78,162,.06)",

    "&:hover": {
      transform: "translateY(-10px)",

      boxShadow: "0 22px 45px rgba(11,78,162,.12)",
    },
  },

  iconBox: {
    width: 72,

    height: 72,

    borderRadius: "18px",

    display: "flex",

    justifyContent: "center",

    alignItems: "center",

    bgcolor: "#EAF4FF",

    color: "#0B4EA2",

    mb: 3,
  },
};  