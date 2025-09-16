import { Link } from "react-router-dom";
import { Briefcase, BarChart, FileText, Pencil, Settings } from "lucide-react";
import { List, ListItemButton } from "@mui/material";

const services = [
  {
    title: "Financial Services",
    description: "Maintain accurate financial records and reports.",
    icon: <Briefcase className="w-6 h-6 text-indigo-600" />,
    link: "/services/financialServices",
  },
  {
    title: "Development",
    description: "Handle website updates, themes, and plugins efficiently.",
    icon: <Settings className="w-6 h-6 text-indigo-600" />,
    link: "/services/development",
  },
  // {
  //   title: "Data Analysis",
  //   description: "Uncover insights through professional data analysis.",
  //   icon: <BarChart className="w-6 h-6 text-indigo-600" />,
  //   link: "/services/dataAnalysis",
  // },
  // {
  //   title: "Content Writing",
  //   description: "Engaging and SEO-friendly content creation.",
  //   icon: <Pencil className="w-6 h-6 text-indigo-600" />,
  //   link: "/services/contentWriting",
  // },
  // {
  //   title: "Consulting Services",
  //   description: "Get expert guidance tailored to your business goals.",
  //   icon: <FileText className="w-6 h-6 text-indigo-600" />,
  //   link: "/services/consultingServices",
  // },
];

export default function ServicesGrid() {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-4">
      <List className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {services.map((service, idx) => (
          <ListItemButton
            key={idx}
            component={Link}
            to={service.link}
            className="!flex !flex-col !items-center !text-center !bg-white !p-6 !rounded-xl !shadow-md hover:shadow-lg hover:scale-[1.02] !transition-all !duration-300"
          >
            <div className="mb-3">{service.icon}</div>
            <div className="font-semibold text-gray-800 text-lg">{service.title}</div>
            <p className="text-sm text-gray-500 mt-2">{service.description}</p>
          </ListItemButton>
        ))}
      </List>
    </div>
  );
}
