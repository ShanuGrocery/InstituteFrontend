import React from "react";

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
    <section className="bg-gradient-to-r from-green-50 via-white to-green-100 py-16 shadow-inner overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-green-700 mb-10">
          Our Certifications & Accreditations
          <div className="w-28 h-1 bg-green-500 mx-auto mt-3 rounded-full"></div>
        </h2>

        {/* Mobile scroll | Desktop grid */}
        <div className="flex md:grid md:grid-cols-3 lg:grid-cols-5 gap-6 overflow-x-auto md:overflow-hidden pb-3 hide-scrollbar">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-60 md:w-auto flex flex-col items-center 
              bg-white p-6 rounded-2xl shadow-lg border border-green-200
              hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={cert.img}
                alt={cert.title}
                className="h-20 md:h-24 object-contain mb-4"
              />

              <span className="text-gray-800 font-semibold text-center text-sm md:text-base tracking-wide">
                {cert.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
