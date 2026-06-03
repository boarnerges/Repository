import { motion } from "motion/react";

export default function BoarnergesLogo() {
  return (
    <div className="site-brand container">
      <motion.div 
        className="brand-mark"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="brand-symbol">
          <div className="brand-dot" />
        </div>
        <h1 className="brand-wordmark">
          BOARNERGES
        </h1>
      </motion.div>
    </div>
  );
}
