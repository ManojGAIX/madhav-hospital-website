import { Box } from "@mui/material";

const CurveDivider = ({
  fill = "#F8FBFF",
  height = 90,
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
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{
          width: "100%",
          height,
          display: "block",
        }}
      >
        <path
          fill={fill}
          d="M0,32C240,96,480,96,720,64C960,32,1200,0,1440,32V120H0Z"
        />
      </svg>
    </Box>
  );
};

export default CurveDivider;