import { motion } from "framer-motion";

const MaskTextSplit = () => {
  const text = "Shivam Sharma, Developer";
  const words = text.split(" ");

  return (
    <div className="overflow-hidden flex gap-2 mt-20 ml-20 text-center text-5xl font-bold">
      {words.map((word, index) => (
        <span key={index} className="relative inline-block overflow-hidden">
          <motion.span
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: index * 0.2,
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  );
};

export default MaskTextSplit;
