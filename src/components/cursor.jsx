import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TrailCursor = () => {
  const [positions, setPositions] = useState([]);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let timeout;

    const handleMouseMove = (e) => {
      setIsActive(true); // Activate trail
      const newPos = { x: e.clientX, y: e.clientY };
      setPositions((prev) => [...prev.slice(-10), newPos]); // Keep last 10 positions

      clearTimeout(timeout); // Reset timer
      timeout = setTimeout(() => setIsActive(false), 1500); // Remove trail after 1.5s
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {isActive &&
        positions.map((pos, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ x: pos.x, y: pos.y, opacity: 1 - index * 0.1 }}
            exit={{ opacity: 0 }} // Fade out smoothly
            transition={{ duration: 0.1, ease: "linear" }}
            className="absolute w-10 h-10 bg-white rounded-full blur-3xl"
            style={{
              filter: `blur(${(10 - index) * 2}px)`,
            }}
          />
        ))}
    </div>
  );
};

export default TrailCursor;
