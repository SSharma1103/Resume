import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const cards = ["", "M", "E", "R", "N"];

const StackingCards = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Adjust scroll speed so cards take more time to transition
  const scrollRange = useTransform(scrollYProgress, [0, 1], [0, (cards.length - 1) * 2]);

  useEffect(() => {
    return scrollRange.on("change", (v) => {
      setCurrentIndex(Math.round(v));
    });
  }, [scrollRange]);

  return (
    <div ref={ref} class="h-[200vh] relative flex flex-col items-start justify-center mt-[-30vh]">
      {/* Title */}
      <div class="absolute pl-[10vh] pb-20 font-bold text-5xl">Stack</div>

      {/* Stacking Cards */}
      <div class="sticky top-0 h-screen flex justify-center items-center pl-[90vh] pb-[0vh] ">
        <div class="relative w-64 h-80">
          {cards.map((card, index) => (
            <motion.div
              key={card}
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={index === currentIndex ? { y: 0, opacity: 1, scale: 1 } : { y: 50, opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              class="absolute w-full h-full bg-white text-black text-7xl flex items-center justify-center shadow-lg rounded-2xl"
              style={{ top: 0, zIndex: index === currentIndex ? 10 : 0 }}
            >
              {card}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StackingCards;