import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import rocket from "../assets/rocket.png";

export default function Home() {
  const text = `one chat away from building a dream! ...`;
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <>
    <div className="flex lg:flex-row flex-col flex-wrap xl:absolute xl:top-0 xl:h-screen w-full justify-between items-center xl:gap-[13%] gap-5 mt-15 px-20">
      <motion.div 
        className="xl:text-6xl lg:text-5xl sm:text-3xl text-2xl text-white font-main lg:w-180"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {displayedText.split(" ").map((word, i) => (
            <span key={i} className={word === "dream!" || word === "..." ? "text-second" : ""}>
            {word}{" "}
            </span>
        ))}
        <motion.span 
          className="text-second" 
          animate={{ opacity: [0, 1, 0] }} 
          transition={{ repeat: Infinity, duration: 1 }}
        >
          |
        </motion.span>
      </motion.div>

      <motion.img 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="float"
        src={rocket} 
        alt="rocket" 
        width={300} 
      />
    </div>
    </>
  );
}
