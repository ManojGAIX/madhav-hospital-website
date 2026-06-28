import { Box } from "@mui/material";

const ZigzagDivider = ({
  fill = "#F7FBFF",
  height = 70,
  flip = false,
}) => {
  return (
    <Box
      sx={{
        lineHeight: 0,
        transform: flip ? "rotate(180deg)" : "none",
      }}
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        style={{
          width: "100%",
          height,
          display: "block",
        }}
      >
        <polyline
          fill={fill}
          points="0,100 120,40 240,100 360,40 480,100 600,40 720,100 840,40 960,100 1080,40 1200,100 1320,40 1440,100 1440,100 0,100"
        />
      </svg>
    </Box>
  );
};

export default ZigzagDivider;