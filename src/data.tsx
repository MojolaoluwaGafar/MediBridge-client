import { Heart, Brain, Baby, Bone, Venus, Eye, Activity, Stethoscope } from 'lucide-react';
import Tooth from "./assets/Container (1).svg";
import firstAid from "./assets/Icon (2).svg";
import icon from "./assets/Icon (1).svg";
import type { IDepCard } from './types/department';
import type { ViewDeparmentModal } from "./types/department"


export const departments : IDepCard[] = [
  {
    id: 1,
    icon: Heart,
    iconBgColor: "#FFF4F3",
    iconColor: "#FC0707",
    availableSpecialist: 5,
    field: "Cardiology",
    category: "Medical",
    summary: "Heart and cardiovascular care. Specialized diagnostics and treatment for heart health."
  },
  {
    id: 2,
    icon: Brain,
    iconBgColor: "#E0E7FF",
    iconColor: "#4338CA",
    availableSpecialist: 5,
    field: "Neurology",
    category: "Medical",
    summary: "Brain and nervous system care. Advanced neurological assessment and management."
  },
  {
    id: 3,
    icon: Baby,
    iconBgColor: "#FEF9C3",
    iconColor: "#CA8A04",
    availableSpecialist: 5,
    field: "Pediatrics",
    category: "Women & Children",
    summary: "Healthcare for children and adolescents. Compassionate care for our youngest patients."
  },
  {
    id: 4,
    icon: function ToothIcon() {
      return <img src={Tooth} alt="Dentistry" />;
    },
    iconBgColor: "#E0F2FE",
    iconColor: "#0284C7",
    availableSpecialist: 5,
    field: "Dentistry",
    category: "Medical",
    summary: "Dental care and oral health. Routine checkups and specialized dental procedures."
  },
  {
    id: 5,
    icon: Eye,
    iconBgColor: "#F0FDF4",
    iconColor: "#16A34A",
    availableSpecialist: 5,
    field: "Ophthalmology",
    category: "Diagnostics",
    summary: "Diagnosis and treatment of eye and vision problems."
  },
  {
    id: 6,
    icon: Bone,
    iconBgColor: "#FFF7ED",
    iconColor: "#EA580C",
    availableSpecialist: 5,
    field: "Orthopedics",
    category: "Surgical",
    summary: "Bones, joints, and mobility care. Advanced orthopedic surgery and rehabilitation."
  },
  {
    id: 7,
    icon: Venus,
    iconBgColor: "#FDF2F8",
    iconColor: "#DB2777",
    availableSpecialist: 5,
    field: "OB-GYN",
    category: "Women & Children",
    summary: "Women’s reproductive health and pregnancy care."
  },
  {
    id: 8,
    icon: function FirstAidIcon() {
      return <img src={firstAid} alt="General Practice" />;
    },
    iconBgColor: "#F3F4F6",
    iconColor: "#374151",
    availableSpecialist: 5,
    field: "General Practice",
    category: "Medical",
    summary: "Primary and preventive care. Your first point of contact for total health management."
  },
  {
    id: 9,
    icon: function MentalHealthIcon() {
      return <img src={icon} alt="Mental Health" />;
    },
    iconBgColor: "#CFDFE0",
    iconColor: "#00454B",
    availableSpecialist: 5,
    field: "Mental Health",
    category: "Mental Health",
    summary: "Support for emotional and psychological well-being."
  }
];


export const departmentDetails : ViewDeparmentModal[] = [
  {
    id: 1,
    icon: Heart,
    field: "Cardiology",
    image: "/images/cardiology.jpg",
    overview: "Our cardiology department provides comprehensive care for heart and vascular conditions.",
    services: ["ECG", "Echocardiogram", "Stress Test", "Cardiac Catheterization"]
  },
  {
    id: 2,
    icon: Brain,
    field: "Neurology",
    image: "/images/neurology.jpg",
    overview: "We diagnose and treat disorders of the brain, spinal cord, and nerves.",
    services: ["EEG", "MRI Scan", "Stroke Management", "Epilepsy Treatment"]
  },
  {
    id: 3,
    icon: Activity,
    field: "General Surgery",
    image: "/images/surgery.jpg",
    overview: "Our surgical team performs a wide range of procedures with modern techniques.",
    services: ["Appendectomy", "Gallbladder Removal", "Hernia Repair", "Biopsies"]
  },
  {
    id: 4,
    icon: Baby,
    field: "Pediatrics",
    image: "/images/pediatrics.jpg",
    overview: "We provide specialized care for infants, children, and adolescents.",
    services: ["Child Wellness Checkups", "Vaccinations", "Growth Monitoring", "Nutritional Counseling"]
  },
  {
    id: 5,
    icon: Stethoscope,
    field: "Diagnostics",
    image: "/images/diagnostics.jpg",
    overview: "Our diagnostics department offers advanced imaging and laboratory services.",
    services: ["X-Ray", "Ultrasound", "Blood Tests", "CT Scan"]
  }
]
