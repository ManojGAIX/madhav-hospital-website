import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

import { aboutData } from "./aboutData";
import { aboutStyles } from "./aboutStyles";

/* ---------------- Animated Counter ---------------- */

const AnimatedCounter = ({ value }) => {
  const numericValue = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/[0-9]/g, "");

  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 2200;

    const increment = numericValue / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [numericValue]);

  if (value === "24/7") {
    return <>24/7</>;
  }

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

/* ---------------- Component ---------------- */

const AboutStats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  return (
    <Box
      ref={ref}
      sx={{
        mt: {
          xs: 8,
          md: 10,
        },
      }}
    >
      <Grid container spacing={3}>
        {aboutData.stats.map((item, index) => (
          <Grid
            size={{
              xs: 6,
              md: 3,
            }}
            key={item.label}
          >
            <Box
              component={motion.div}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{
                once: true,
              }}
              sx={aboutStyles.statCard}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "2rem",
                    md: "3rem",
                  },
                  fontWeight: 800,
                  color: item.color,
                  lineHeight: 1,
                }}
              >
                {inView && (
                  <AnimatedCounter value={item.value} />
                )}
              </Typography>

              <Typography
                sx={{
                  mt: 1.5,
                  color: aboutStyles.colors.text,
                  fontWeight: 600,
                  fontSize: {
                    xs: ".95rem",
                    md: "1rem",
                  },
                }}
              >
                {item.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutStats;