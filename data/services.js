import service1 from "@/assets/services-images/service1.jpeg";
import service2 from "@/assets/services-images/service2.jpeg";
import service3 from "@/assets/services-images/service3.jpeg";
import service4 from "@/assets/services-images/service4.jpeg";

export const services = [
  {
    name: "S/4 HANA Data Migration",
    description:
      "Seamless migration to SAP S/4 HANA ensuring data integrity and compliance.",
    bulletPoints: [
      "End-to-end migration process",
      "Full data validation and reconciliation",
    ],
    href: "/services/s4-hana",
    src: service1.src,
  },
  {
    name: "Data Archiving",
    description:
      "Efficient data storage and management for legacy and inactive data.",
    bulletPoints: [
      "Optimize storage costs",
      "Ensure data security and compliance",
    ],
    href: "/services/data-archiving",
    src: service2.src,
  },
  {
    name: "Master Data Management",
    description:
      "Maintain consistent, accurate, and centralized master data across the organization.",
    bulletPoints: [
      "Single source of truth for critical data",
      "Data governance and quality control",
    ],
    href: "/services/master-data-management",
    src: service3.src,
  },
  {
    name: "Data Integration",
    description:
      "Connect and unify data from multiple systems to enhance decision-making.",
    bulletPoints: [
      "Seamless system connectivity",
      "Improve data flow and collaboration",
    ],
    href: "/services/data-integration",
    src: service4.src,
  },
];
