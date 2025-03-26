import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './namee.css';

export default function Stack() {
  // Detect when the div is in the viewport
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* Title */}
      <div className="text-4xl font-bold mb-10 pb-8">Stack</div>

      {/* Animated Grid */}
      <motion.div
        ref={ref} // Attach ref for visibility detection
        className="grid grid-cols-4 gap-4 px-10 justify-items-center mt-10"
        initial={{ opacity: 0, y: 100 }} // Start off-screen
        animate={inView ? { opacity: 1, y: 0 } : {}} // Animate when in view
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* M */}
        <div className="h-40 w-40 bg-green-300 flex items-center justify-center text-6xl font-bold text-white">
          M
        </div>
        {/* E */}
        <div className="h-40 w-40 bg-blue-300 flex items-center justify-center text-6xl font-bold text-white">
          E
        </div>
        {/* R */}
        <div className="h-40 w-40 bg-red-300 flex items-center justify-center text-6xl font-bold text-white">
          R
        </div>
        {/* N */}
        <div className="h-40 w-40 bg-yellow-300 flex items-center justify-center text-6xl font-bold text-white">
          N
        </div>
      </motion.div>
    </div>
  );
}
