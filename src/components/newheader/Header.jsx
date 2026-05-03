import "./newHeader.css";
import BoarnergesLogo from "../boarnergesLogo/BoarnergesLogo";

export default function Header() {
  return (
    <header id="home" className="site-header bg-gray-900 container">
      <BoarnergesLogo />
      <main className="hero-content flex flex-col max-w-5xl mx-auto justify-center items-start">
        <div className="container__name flex flex-col gap-2">
          <div className="hero-intro flex gap-2">
            <p className="text-teal-400">Hi, my name is</p>
          </div>
          <h1 className="name md:my-4 md:py-4">Segun.</h1>
        </div>

        <h2 className="hero-title font-bold text-gray-400 py-4 animate-fade-in-up">
          I build things for the web.
        </h2>
        <p className="hero-copy text-gray-400 max-w-2xl md:max-w-xl pt-2 mt-2 fadeInUp-animation mb-8">
          I'm a Frontend engineer. I specialize in building exceptional digital
          experiences.
        </p>

        <a
          href="#cta"
          className="hero-button border border-teal-400 px-6 py-3 cursor-pointer fadeInUp-animation hover:bg-teal-400/10 transition-colors inline-block"
        >
          Get In Touch
        </a>
      </main>
    </header>
  );
}
