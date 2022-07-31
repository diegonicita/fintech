import React from "react";
import { motion } from "framer-motion";

const pageTransition = {
  in: { opacity: 1 },
  out: { opacity: 0 },
};

function MotionDiv({ children }) {
  return (
    <motion.div
      className="page"
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
    >
      {children}
    </motion.div>
  );
}

export default MotionDiv;