import HealingIcon from "@mui/icons-material/Healing";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import AirlineSeatFlatAngledIcon from "@mui/icons-material/AirlineSeatFlatAngled";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import BiotechIcon from "@mui/icons-material/Biotech";

import kneeImage from "../../../assets/specialities/knee.jpg";
import hipImage from "../../../assets/specialities/hip.jpg";
import spineImage from "../../../assets/specialities/spine.jpg";
import traumaImage from "../../../assets/specialities/trauma.jpg";
import sportsImage from "../../../assets/specialities/sports.jpg";
import arthroscopyImage from "../../../assets/specialities/arthroscopy.jpg";

export const specialitiesData = [
  {
    id: 1,
    title: "Knee Replacement",
    image: kneeImage,
    icon: HealingIcon,
    description:
      "Advanced total and partial knee replacement procedures using modern surgical techniques for faster recovery and long-lasting results.",
  },

  {
    id: 2,
    title: "Hip Replacement",
    image: hipImage,
    icon: AccessibilityNewIcon,
    description:
      "Comprehensive hip replacement surgery designed to restore mobility, reduce pain, and improve quality of life.",
  },

  {
    id: 3,
    title: "Spine Surgery",
    image: spineImage,
    icon: AirlineSeatFlatAngledIcon,
    description:
      "Expert diagnosis and surgical treatment for spinal disorders including disc problems, deformities, and chronic back pain.",
  },

  {
    id: 4,
    title: "Trauma & Fracture Care",
    image: traumaImage,
    icon: MedicalServicesIcon,
    description:
      "24×7 emergency trauma services for fractures, accidents, sports injuries, and complex orthopaedic emergencies.",
  },

  {
    id: 5,
    title: "Sports Injury",
    image: sportsImage,
    icon: SportsKabaddiIcon,
    description:
      "Specialized treatment and rehabilitation for ligament injuries, tendon tears, muscle injuries, and athletic recovery.",
  },

  {
    id: 6,
    title: "Arthroscopy",
    image: arthroscopyImage,
    icon: BiotechIcon,
    description:
      "Minimally invasive arthroscopic procedures for accurate diagnosis and treatment of knee, shoulder, and joint conditions.",
  },
];