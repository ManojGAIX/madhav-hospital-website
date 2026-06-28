import { Box } from "@mui/material";
import { motion } from "framer-motion";

import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import MedicalServicesRoundedIcon from "@mui/icons-material/MedicalServicesRounded";

import doctorImage from "../../../assets/hero/doctor.png";

import FloatingCard from "../../common/FloatingCard";

const HeroImage = () => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start", // ✅ KEY FIX (was center)
        minHeight: 650,
        mt: { xs: -2, md: -3 }, // optional fine lift
      }}
    >
      {/* Large Background Circle */}
      <Box
        sx={{
          position: "absolute",
          width: 520,
          height: 520,
          borderRadius: "50%",
          background: "linear-gradient(135deg,#EAF4FF,#FFFFFF)",
          zIndex: 0,
        }}
      />

      {/* Top Right Circle */}
      <Box
        sx={{
          position: "absolute",
          width: 100,
          height: 100,
          borderRadius: "50%",
          bgcolor: "#DDF8EF",
          top: 40,
          right: 40,
          zIndex: 0,
        }}
      />

      {/* Bottom Left Circle */}
      <Box
        sx={{
          position: "absolute",
          width: 70,
          height: 70,
          borderRadius: "50%",
          bgcolor: "#DCEBFF",
          bottom: 60,
          left: 40,
          zIndex: 0,
        }}
      />

      {/* Doctor Image */}
      <Box
        component={motion.img}
        src={doctorImage}
        alt="Orthopaedic Specialist"
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: 1,
          y: [0, -12, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        sx={{
          width: {
            xs: "105%",
            md: "95%",
          },
          maxWidth: 760,
          position: "relative",
          top: {
            xs: 0,
            md: -35,
          },
          right: {
            xs: 0,
            md: -15,
          },
          zIndex: 2,
          objectFit: "contain",
        }}
      />

      {/* Experience Card */}
      {/* <Box
        sx={{
          position: "absolute",
          top: 80,
          left: -20,
          display: { xs: "none", lg: "block" },
          zIndex: 5,
        }}
      >
        <FloatingCard
          icon={<WorkspacePremiumRoundedIcon />}
          title="200000+ Years"
          subtitle="Orthopaedic Experience"
        />
      </Box> */}

      <Box
        sx={{
          position: "absolute",
          right: -20,
          top: 260,
          display: { xs: "none", lg: "block" },
          zIndex: 5,
        }}
      >
        <FloatingCard
          icon={<GroupsRoundedIcon />}
          title="500+ Patients"
          subtitle="Successfully Treated"
          iconBg="#009B72"
        />
      </Box>

      {/* Advanced Care */}
      <Box
        sx={{
          position: "absolute",
          bottom: 30,
          left: 20,
          display: { xs: "none", lg: "block" },
          zIndex: 5,
        }}
      >
        <FloatingCard
          icon={<MedicalServicesRoundedIcon />}
          title="Advanced Care"
          subtitle="Modern Orthopaedic Technology"
          iconBg="#FF9800"
        />
      </Box>
    </Box>
  );
};

export default HeroImage;
