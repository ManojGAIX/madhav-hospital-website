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

export const treatmentDetailsData = [
  {
    id: 1,
    slug: "knee-replacement",
    title: "Knee Replacement",
    image: kneeImage,
    icon: HealingIcon,
    overview:
      "Knee replacement surgery replaces damaged cartilage and bone in the knee joint with high-quality prosthetic components. Our surgeons use advanced techniques to restore pain-free movement and improve daily function.",
    highlights: [
      "Total and partial knee replacement options",
      "Computer-assisted alignment for precise implant placement",
      "Minimally invasive approaches when suitable",
      "Dedicated physiotherapy for faster recovery",
    ],
    recovery: "Most patients walk with support within 24–48 hours and resume daily activities in 4–6 weeks.",
  },
  {
    id: 2,
    slug: "hip-replacement",
    title: "Hip Replacement",
    image: hipImage,
    icon: AccessibilityNewIcon,
    overview:
      "Hip replacement restores mobility for patients suffering from arthritis, avascular necrosis, or hip fractures. We focus on stable implant fixation, leg-length correction, and smooth joint movement.",
    highlights: [
      "Cemented and uncemented implant options",
      "Anterior and posterior surgical approaches",
      "Pain relief and improved walking ability",
      "Long-lasting results with modern implants",
    ],
    recovery: "Hospital stay is typically 3–5 days; full recovery and return to routine activities in 6–8 weeks.",
  },
  {
    id: 3,
    slug: "spine-surgery",
    title: "Spine Surgery",
    image: spineImage,
    icon: AirlineSeatFlatAngledIcon,
    overview:
      "Our spine specialists treat disc herniation, spinal stenosis, deformities, and chronic back pain using both conservative and surgical options tailored to each patient's condition.",
    highlights: [
      "Micro-discectomy and decompression procedures",
      "Spinal fusion for stability and pain relief",
      "Treatment for slipped disc and nerve compression",
      "Post-operative spine rehabilitation programs",
    ],
    recovery: "Recovery varies by procedure; many patients notice relief within days and return to light work in 2–4 weeks.",
  },
  {
    id: 4,
    slug: "fracture-care",
    title: "Trauma & Fracture Care",
    image: traumaImage,
    icon: MedicalServicesIcon,
    overview:
      "Our 24×7 trauma team handles road accidents, falls, workplace injuries, and complex fractures with rapid diagnosis, surgical fixation, and coordinated rehabilitation.",
    highlights: [
      "Round-the-clock emergency orthopaedic care",
      "Open reduction and internal fixation (ORIF)",
      "Treatment for compound and comminuted fractures",
      "Casting, splinting, and follow-up monitoring",
    ],
    recovery: "Healing time depends on fracture type; simple fractures heal in 6–8 weeks, complex cases may take longer.",
  },
  {
    id: 5,
    slug: "sports-injury",
    title: "Sports Injury",
    image: sportsImage,
    icon: SportsKabaddiIcon,
    overview:
      "From ACL tears to rotator cuff injuries, we provide specialized diagnosis, surgical repair, and sport-specific rehabilitation to help athletes return to peak performance safely.",
    highlights: [
      "ACL, PCL, and meniscus injury treatment",
      "Rotator cuff and shoulder instability repair",
      "Ligament reconstruction and tendon repair",
      "Structured return-to-sport rehabilitation",
    ],
    recovery: "Minor injuries recover in 2–4 weeks; ligament reconstruction typically requires 6–9 months for full return to sport.",
  },
  {
    id: 6,
    slug: "arthroscopy",
    title: "Arthroscopy",
    image: arthroscopyImage,
    icon: BiotechIcon,
    overview:
      "Arthroscopy is a minimally invasive keyhole procedure that allows direct visualization and treatment of joint problems with smaller incisions, less pain, and quicker recovery.",
    highlights: [
      "Knee and shoulder arthroscopy",
      "Meniscus repair and cartilage treatment",
      "Diagnostic and therapeutic in one procedure",
      "Day-care surgery for selected cases",
    ],
    recovery: "Most patients return home the same day or next morning and resume normal activities within 1–3 weeks.",
  },
];
