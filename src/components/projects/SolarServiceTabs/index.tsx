import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

const services = [
  {
    src: "images/roof.jpg",
    alt: "Tile & Metal Roof",
    heading: "Installations",
    title: "Tile & Metal Roof",
    subtitle: "Installations",
  },
  {
    src: "images/solarinspection.jpg",
    alt: "Commercial Solar",
    heading: "Consulting",
    title: "Commercial Solar",
    subtitle: "Inspections",
  },
  {
    src: "images/solarResearchDeveloperment.jpg",
    alt: "Solar Research",
    heading: "Case Studies",
    title: "Solar Research",
    subtitle: "Development",
  },
  {
    src: "images/solarpanelinstallation.jpg",
    alt: "Solar Panel",
    heading: "Installations",
    title: "Solar Panel",
    subtitle: "Installation",
  },
  {
    src: "images/image5.jpg",
    alt: "Sample Image 5",
    heading: "Case Studies",
    title: "Innovation Study",
    subtitle: "Testing",
  },
  {
    src: "images/image6.jpg",
    alt: "Sample Image 6",
    heading: "Consulting",
    title: "Sample Project 6",
    subtitle: "Energy Audit",
  },
];

const tabs = ["All", "Case Studies", "Consulting", "Installations"];

const SolarServiceTabs = () => {
  const [selectedTab, setSelectedTab] = useState("All");

  const filteredServices =
    selectedTab === "All"
      ? [
          ...new Map(
            services.map((item) => [`${item.heading}-${item.title}`, item])
          ).values(),
        ]
      : services.filter((item) => item.heading === selectedTab);

  return (
    <section className="py-10 mt-20">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition duration-300 ${
              selectedTab === tab
                ? "bg-yellow-500 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-yellow-500 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8">
        {filteredServices.map((item, index) => (
          <div
            key={index}
            className="relative group w-full h-72 overflow-hidden shadow-lg"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-60"
            />
            <div className="absolute bottom-0 left-0 w-full p-5 text-white bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-3">
              <div className="w-8 h-1 bg-yellow-400"></div>
              <h4 className="text-base font-medium">{item.heading}</h4>
              <h3 className="text-2xl font-bold leading-snug">
                {item.title}
                {item.subtitle && (
                  <>
                    <br />
                    {item.subtitle}
                  </>
                )}
              </h3>
              <button className="mt-4 inline-flex items-center justify-center p-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition">
                <FiArrowRight className="text-xl" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolarServiceTabs;
