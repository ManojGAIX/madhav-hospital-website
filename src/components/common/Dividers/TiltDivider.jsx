import { Box } from "@mui/material";

const TiltDivider = ({
  fill = "#FFFFFF",
  height = 80,
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
        <polygon
          fill={fill}
          points="0,100 1440,0 1440,100"
        />
      </svg>
    </Box>
  );
};

export default TiltDivider;