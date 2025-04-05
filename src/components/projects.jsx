import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Project() {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setScrollValue(scrolled.toFixed(2));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mb-40 p-6 text-left bg-white text-gray-900 min-h-screen">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.5 }
          }
        }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold mb-16"
        >
          Projects & Certifications
        </motion.div>
        
        {/* Project Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="p-6 bg-gray-100 shadow-xl rounded-2xl mb-10"
        >
          <div className="text-3xl font-bold">Cabin Management System</div>
          <p className="text-lg mt-2">(MERN Stack)</p>
          <a href="https://github.com/SSharma1103/Minor-project" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block px-4 py-2 bg-gray-900 rounded-lg text-white font-semibold hover:bg-gray-700 transition">
            GitHub Repo
          </a>
        </motion.div>
        
        {/* Certificates Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6"
        >
          Certificates
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 1.5 }}
          viewport={{ once: true }}
          className="p-6 bg-gray-100 shadow-xl rounded-2xl mb-6"
        >
          <div className="text-2xl font-semibold">Python</div>
          <a href="https://www.hackerrank.com/certificates/1e7b1010ae8b" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block px-4 py-2 bg-gray-900 rounded-lg text-white font-semibold hover:bg-gray-700 transition">
            HackerRank Certificate
          </a>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 2 }}
          viewport={{ once: true }}
          className="p-6 bg-gray-100 shadow-xl rounded-2xl"
        >
          <div className="text-2xl font-semibold">JavaScript</div>
          <a href="https://coursera.org/share/fa274274add224b0badf2ec690a799a7" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block px-4 py-2 bg-gray-900 rounded-lg text-white font-semibold hover:bg-gray-700 transition">
            Coursera Certificate
          </a>
        </motion.div>
      </motion.div>

      <p className="text-lg font-semibold mt-10">Scroll Progress: {scrollValue}</p>
    </div>
  );
}
