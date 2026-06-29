import {
  Card,
  CardContent,
  CardMedia,
  Box,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import { motion } from "framer-motion";

import { specialitiesStyles } from "./specialitiesStyles";

const SpecialityCard = ({ speciality, index }) => {
  const Icon = speciality.icon;

  return (
    <Card
      component={motion.div}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      elevation={0}
      sx={specialitiesStyles.card}
    >
      {/* Image */}
      <Box sx={specialitiesStyles.imageContainer}>
        <CardMedia
          component="img"
          image={speciality.image}
          alt={speciality.title}
          className="speciality-image"
          sx={specialitiesStyles.image}
        />

        {/* Overlay */}
        <Box sx={specialitiesStyles.overlay} />

        {/* Floating Icon */}
        <Box sx={specialitiesStyles.iconBox}>
          <Icon sx={{ fontSize: 30 }} />
        </Box>
      </Box>

      {/* Content */}
      <CardContent sx={specialitiesStyles.content}>
        <Typography sx={specialitiesStyles.cardTitle}>
          {speciality.title}
        </Typography>

        <Typography sx={specialitiesStyles.description}>
          {speciality.description}
        </Typography>

        <Button
          component={Link}
          to={`/treatments#${speciality.slug}`}
          endIcon={<ArrowForwardRoundedIcon />}
          sx={specialitiesStyles.button}
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default SpecialityCard;