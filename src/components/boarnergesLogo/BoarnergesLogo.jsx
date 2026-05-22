export default function BoarnergesLogo() {
  const text = "Boarnerges";
  const characters = text.split("");

  return (
    <div className="site-brand container">
      <div className="brand-mark">
        <motion.p 
          className="brand-wordmark" 
          aria-label="Boarnerges"
          whileHover="hover"
        >
          {characters.map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hover: { y: -2 }
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className={index === 0 ? "brand-letter--first" : ""}
              style={{ "--letter-index": index }}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>
        <span className="brand-code" aria-hidden="true">
          &lt;/&gt;
        </span>
        <div className="brand-anchor" aria-hidden="true" />
      </div>
    </div>
  );
}
