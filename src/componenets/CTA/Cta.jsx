import React from "react";

const Cta = () => {
  return (
    <div
      id="cta"
      className="container flex flex-col max-w-2xl mx-auto justify-center h-screen items-center"
    >
      <p className="text-teal-400">02. What’s Next?</p>
      <h2 className="text-5xl md:text-7xl font-bold text-gray-400 py-4 animate-fade-in-up">
        Get In Touch
      </h2>
      <p className="text-center mb-4 text-gray-300">
        My inbox is always open, whether you have a question or just want to say
        hi, I'll try my best to get back to you!
      </p>
      <p className="border border-teal-400 text-teal-400 px-6 py-3 mt-10 w-fit cursor-pointer fadeInUp-animation hover:bg-teal-400/10 transition-colors">
        Say Hello
      </p>
    </div>
  );
};

export default Cta;
