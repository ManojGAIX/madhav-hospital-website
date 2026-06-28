import { motion } from "framer-motion";

const animationVariants = {
  up: {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },

  down: {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },

  left: {
    hidden: {
      opacity: 0,
      x: -60,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  },

  right: {
    hidden: {
      opacity: 0,
      x: 60,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  },

  zoom: {
    hidden: {
      opacity: 0,
      scale: 0.85,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  },

  fade: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  },
};

const AnimatedContainer = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  once = true,
  ...props
}) => {
  return (
    <motion.div
      variants={animationVariants[direction]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContainer;