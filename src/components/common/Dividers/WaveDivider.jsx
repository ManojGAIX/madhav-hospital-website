import { Box } from "@mui/material";

const WaveDivider = ({ flip = false }) => {
  return (
    <Box
      sx={{
        lineHeight: 0,
        transform: flip ? "rotate(180deg)" : "none",
      }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{
          width: "100%",
          height: "80px",
          display: "block",
        }}
      >
        <path
          fill="#FFFFFF"
          d="M0,64L60,69.3C120,75,240,85,360,85.3C480,85,600,75,720,64C840,53,960,43,1080,48C1200,53,1320,75,1380,85.3L1440,96V120H0Z"
        />
      </svg>
    </Box>
  );
};

export default WaveDivider;