import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Cta = () => {
  return (
    <div
      id="cta"
      className="container flex flex-col max-w-2xl mx-auto justify-center h-screen items-center"
    >
      <p className="text-teal-400">02. What's Next?</p>
      <h2 className="text-5xl md:text-7xl font-bold text-gray-400 py-4 animate-fade-in-up">
        Get In Touch
      </h2>
      <p className="text-center mb-4 text-gray-300">
        My inbox is always open, whether you have a question or just want to say
        hi, I'll try my best to get back to you!
      </p>

      {/* Social Media Links */}
      <div className="flex space-x-4 mt-6">
        <a
          href="https://github.com/boarnerges"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-teal-400 transition-colors"
        >
          <FaGithub className="text-2xl" />
        </a>
        <a
          href="https://x.com/boarnerges_olu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-teal-400 transition-colors"
        >
          <FaTwitter className="text-2xl" />
        </a>
        <a
          href="https://www.instagram.com/boarnerges_olu/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-teal-400 transition-colors"
        >
          <FaInstagram className="text-2xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/owolabi-olusegun/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-teal-400 transition-colors"
        >
          <FaLinkedin className="text-2xl" />
        </a>
        <a
          href="mailto:olujawo1996@gmail.com"
          className="text-gray-400 hover:text-teal-400 transition-colors"
        >
          <MdEmail className="text-2xl" />
        </a>
      </div>

      <a
        href="mailto:your.email@example.com"
        className="border border-teal-400 text-teal-400 px-6 py-3 mt-10 w-fit cursor-pointer fadeInUp-animation hover:bg-teal-400/10 transition-colors"
      >
        Say Hello
      </a>
    </div>
  );
};

export default Cta;
