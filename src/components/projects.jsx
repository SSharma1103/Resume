import { useScroll, useTransform, motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Project() {
  const { scrollYProgress } = useScroll();
  const scaleX1 = useTransform(scrollYProgress, [0.1, 0.5], [0.3, 0.8]); // First bar
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    // Subscribe to scrollYProgress changes and update state
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrollValue(latest.toFixed(2)); // Format to 2 decimal places
    });

    return () => unsubscribe(); // Cleanup subscription
  }, [scrollYProgress]);

  return (
    <div className="mb-40 p-4 text-center">
      {/* Title */}
      <div className="text-4xl font-bold mb-20 flex flex-col items-center justify-center">
        Projects
      </div>
      
      {/* Progress bar */}
      <motion.div 
        style={{ scaleX: scaleX1 }} 
        className="h-80 bg-blue-500 w-full mb-4"
      >
        {/* Cube Cabin Management System */}
        <div className="text-2xl font-semibold mt-10">Cabin Management (MERN Stack)</div>
        <div className="mt-2 mb-10">
          <a href="https://github.com/SSharma1103/Minor-project" className="text-white-600 underline">Github Link</a>
        </div>

        {/* Certificates Section */}
        <div className="text-2xl font-semibold mt-10">Certificates</div>

        {/* Python Certificate */}
        <div className="text-lg font-medium mt-6">Python</div>
        <div className="mt-2 mb-4">
          <a href="https://www.hackerrank.com/certificates/1e7b1010ae8b" target="_blank" rel="noopener noreferrer" className="text-white-600 underline">HackerRank Python Certificate</a>
        </div>

        {/* JavaScript Certificate */}
        <div className="text-lg font-medium mt-6">JavaScript</div>
        <div className="mt-2 mb-4">
          <a href="https://coursera.org/share/fa274274add224b0badf2ec690a799a7" className="text-white-600 underline">Coursera Link</a>
        </div>
      </motion.div>

      <p className="text-lg font-semibold mt-10">Scroll Progress: {scrollValue}</p>
    </div>
  );
}