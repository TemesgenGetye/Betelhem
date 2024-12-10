import React, { useState } from "react";
import { motion } from "framer-motion";
import comp1 from "../img/comp1.jpg";
import comp2 from "../img/comp2.jpg";
import comp3 from "../img/comp3.jpg";
import comp4 from "../img/comp4.png";

const companies = [
  {
    name: "Africa Documentarys",
    logo: comp1,
  },
  {
    name: "Energy Film Production",
    logo: comp2,
  },
  {
    name: "FGIC",
    logo: comp3,
  },
  {
    name: "Keza Africa Production",
    logo: comp4,
  },
];

export default function CompanyLogos() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Proud to Have Collaborated with Industry Leaders
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group"
            >
              <div className="relative bg-gray-800 rounded-xl p-6 h-32 flex items-center justify-center hover:bg-gray-700 transition-colors duration-300 overflow-hidden">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className={`h-16 w-auto object-contain transition-all duration-300 ease-in-out ${
                    hoveredIndex === index
                      ? "filter-none brightness-100"
                      : "grayscale-[50%] brightness-125"
                  }`}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  initial={false}
                  animate={
                    hoveredIndex === index ? { scale: 1.2 } : { scale: 1 }
                  }
                  transition={{ duration: 0.3 }}
                />
              </div>
              <motion.p
                className="mt-4 text-center text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                animate={
                  hoveredIndex === index
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.3 }}
              >
                {company.name}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
