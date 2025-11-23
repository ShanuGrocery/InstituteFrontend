import React from "react";
import { motion } from "framer-motion";

import img1 from "../../assets/cihs1.jpg";
import img2 from "../../assets/cihs2.jpg";
import img3 from "../../assets/cihs3.jpg";
import img4 from "../../assets/cihs4.jpg";
import img5 from "../../assets/cihs5.jpg";

const Collab = () => {
  const images = [img1, img2, img3, img4, img5];

  const FloatingShape = ({ delay, size, color, left }) => (
    <motion.div
      className={`absolute rounded-full opacity-30 ${color}`}
      style={{ width: size, height: size, left }}
      initial={{ y: "100vh" }}
      animate={{ y: "-20vh" }}
      transition={{
        duration: 12,
        repeat: Infinity,
        delay,
        ease: "linear",
      }}
    />
  );

  return (
    <section className="relative bg-gray-50 py-24 px-6 overflow-hidden">
      {/* Background Floating Shapes */}
      <FloatingShape delay={0} size={90} color="bg-pink-300" left="12%" />
      <FloatingShape delay={3} size={70} color="bg-blue-300" left="33%" />
      <FloatingShape delay={6} size={120} color="bg-green-300" left="55%" />
      <FloatingShape delay={2} size={85} color="bg-purple-300" left="72%" />
      <FloatingShape delay={5} size={60} color="bg-yellow-300" left="87%" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-800"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Collaboration <span className="text-green-500">& Placements</span>
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          More organizations are showing interest in collaborating with CIHS
          for job placements. Our industry-oriented curriculum and practical
          training make CIHS the No.1 Safety Institute in Bihar, Jharkhand, and Kolkata. 🎉
        </motion.p>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-16 px-2">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="rounded-3xl overflow-hidden bg-white/60 backdrop-blur-xl border border-gray-200 shadow-xl transform-gpu"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <img
                src={src}
                alt={`Collaboration ${index + 1}`}
                className="w-full h-80 sm:h-96 lg:h-[500px] object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collab;
