import React from "react";
import { motion } from "framer-motion";

import iso9001 from "../../assets/iso.jpeg";
import iso14001 from "../../assets/iso1.jpeg";
import iso45001 from "../../assets/iso4.jpeg";
import mca from "../../assets/iso3.jpeg";
import msme from "../../assets/iso2.jpeg";

const certifications = [
  { img: iso9001, title: "ISO 9001:2015" },
  { img: iso14001, title: "ISO 14001:2015" },
  { img: iso45001, title: "ISO 45001" },
  { img: mca, title: "Ministry of Corporate Affairs" },
  { img: msme, title: "MSME" },
];

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-green-50 via-white to-green-100 py-14 shadow-inner overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Animated Heading */}
        <motion.h2
          className="text-center text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent mb-10 relative"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Our Certifications & Accreditations
          <motion.span
            className="block w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto mt-2 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
        </motion.h2>

        {/* Mobile: Horizontal scroll | Desktop: Grid */}
        <motion.div
          className="flex md:grid md:grid-cols-3 lg:grid-cols-5 gap-6 overflow-x-auto md:overflow-hidden pb-4 md:pb-0 snap-x snap-mandatory hide-scrollbar"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-56 md:w-auto flex flex-col items-center bg-white p-6 rounded-3xl shadow-md border border-gray-100 cursor-pointer
                         hover:shadow-xl hover:shadow-green-200 transition-all duration-500 snap-center"
              variants={{
                hidden: { opacity: 0, scale: 0.85, y: 30 },
                visible: { opacity: 1, scale: 1, y: 0 },
              }}
              whileHover={{ scale: 1.08, rotate: 1 }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Floating logo animation */}
              <motion.img
                src={cert.img}
                alt={cert.title}
                className="h-16 md:h-20 object-contain mb-4"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              />
              <motion.span
                className="text-gray-800 font-semibold text-center text-sm md:text-base tracking-wide"
                whileHover={{ color: "#16a34a" }}
              >
                {cert.title}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
